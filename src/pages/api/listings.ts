import type { APIRoute } from 'astro';
import samples from '../../data/listings.json';
import { normalize, fetchAirtable } from '../../lib/listings.mjs';

export const prerender = false;

async function getCloudEnv(): Promise<Record<string, unknown>> {
  try {
    const mod = await import('cloudflare:workers');
    return (mod.env as Record<string, unknown>) ?? {};
  } catch {
    return {};
  }
}

export const GET: APIRoute = async () => {
  try {
    const env: any = { ...import.meta.env, ...(await getCloudEnv()) };
    const source = env.DATA_SOURCE || 'mock';
    if (!['mock', 'airtable'].includes(source)) throw new Error('Invalid data source');
    const listings = source === 'airtable' ? await fetchAirtable(env) : samples.map(normalize);
    return Response.json({ listings, source }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (err) {
    console.error('[api/listings]', err instanceof Error ? err.message : err);
    return Response.json({ error: 'We couldn’t load the latest listings. Please try again.' }, { status: 503, headers: { 'Cache-Control': 'no-store' } });
  }
};