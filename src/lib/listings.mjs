export function normalize(record) {
 const f = record.fields ?? record;
 const number = key => { const n = f[key]; if (typeof n !== 'number' || !Number.isFinite(n) || n < 0) throw new Error(`Invalid ${key}`); return n; };
 const text = key => { if (typeof f[key] !== 'string' || !f[key].trim()) throw new Error(`Missing ${key}`); return f[key].trim(); };
 let image = '';
 try { const u = new URL(f['Image URL']); if(u.protocol === 'https:') image = u.href; } catch {}
 return { id: record.id ?? text('Listing ID'), title: text('Title'), address: text('Address'), location: text('Location'), state: text('State'), price: number('Price'), bedrooms: number('Bedrooms'), bathrooms: number('Bathrooms'), sqft: number('Square Feet'), image };
}
export function filterListings(listings, {query = '', location = '', min = '', max = ''} = {}) {
 const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
 return listings.filter(p => terms.every(t => `${p.title} ${p.address} ${p.location} ${p.state}`.toLowerCase().includes(t)) && (!location || p.location === location) && (min === '' || p.price >= Number(min)) && (max === '' || p.price <= Number(max)));
}
export async function fetchAirtable(env, fetcher = fetch) {
 if (!env.AIRTABLE_TOKEN || !env.AIRTABLE_BASE_ID || !env.AIRTABLE_TABLE_NAME) throw new Error('Airtable configuration is incomplete');
 const all = []; let offset;
 do {
  const url = new URL(`https://api.airtable.com/v0/${encodeURIComponent(env.AIRTABLE_BASE_ID)}/${encodeURIComponent(env.AIRTABLE_TABLE_NAME)}`);
  url.searchParams.set('pageSize','100');
  if (offset) url.searchParams.set('offset',offset);
  const response = await fetcher(url, { headers: { Authorization: `Bearer ${env.AIRTABLE_TOKEN}` }, signal: AbortSignal.timeout(10000) });
  if (!response.ok) throw new Error(`Airtable request failed (${response.status})`);
  const data = await response.json();
  if(!Array.isArray(data.records)) throw new Error('Invalid Airtable response');
  all.push(...data.records.map(normalize)); offset = data.offset;
 } while (offset);
 return all.sort((a,b)=>a.id.localeCompare(b.id));
}
