# Anderson Group Inc listings

Local Astro starter with a separate Airtable import kit. All 15 homes are fictional California demo listings. Remote Unsplash photos are illustrative and repeat across some cards; they do not depict actual listed properties. Failed images have a text fallback.

## Run locally

Install Node.js 22.12 or newer (Node 24 recommended), then open this folder in a terminal:

```sh
npm install
cp .env.example .env
npm run dev
```

Open http://localhost:4321/listings. It works with sample data before Airtable exists. No GitHub, Webflow, or Airtable account is needed for this mode. Run `npm test` for the data tests. Run `npm run build` and `npm run preview` to check the Astro production build locally. Commit the generated package-lock.json when preparing GitHub.

## Create the separate Airtable base

1. In Airtable, create a base named **Anderson Group Listings**.
2. Import `airtable/Listings.csv` into a table named **Listings**. The first CSV row contains field names.
3. Review the types in `airtable/SETUP.md`. Keep field names exactly as supplied. Airtable's automatic inference may need correction.
4. You now have a separate database with 15 fictional properties. It is not yet connected to the app.

## Connect locally when ready

Create an Airtable personal access token with `data.records:read` scope and access to this base only. Put it into your local `.env` file, along with your base ID (starts with `app`). Never paste tokens into chat or commit them.

```dotenv
DATA_SOURCE=airtable
AIRTABLE_TOKEN=your_token_here
AIRTABLE_BASE_ID=app_your_base_id
AIRTABLE_TABLE_NAME=Listings
```

Restart the dev server. Update a price or location in Airtable and leave the app open: it checks again every 30 seconds while visible. Search and filters are applied immediately in the browser and retained during refreshes. Returning to the tab triggers a refresh. It uses polling, not push or WebSockets. Under normal conditions updates appear on the next successful poll; network failures can delay them.

The browser calls the app's `/listings/api/listings` endpoint. Only that server endpoint contacts Airtable. Airtable credentials never enter the browser response. In Airtable mode, a failure never silently switches to sample properties. Existing results remain visible with a connection message; initial failures have a retry button. This table is intended to contain public homes for sale only: every row is exposed as a listing, with only the selected card fields returned.

## Later: GitHub, Webflow Cloud, and DevLink

This package is the local stage. Nothing has been pushed or deployed. It currently uses the Astro Node adapter for local production testing. Before deploying, use Webflow Cloud's Astro setup and its matching Cloudflare adapter, confirm the `/listings` base path, and configure runtime environment variables in Webflow Cloud. The endpoint already accepts Webflow's `locals.runtime.env` in addition to local `.env` values. Recheck current framework requirements at deployment time.

Add DevLink navigation/footer to `src/pages/index.astro`, around `<Listings />`. The listings UI lives in its own component; React integration and DevLink setup are deferred to that step.

Polling is suitable for a small local demo. Every visible visitor currently makes approximately 120 Airtable requests/hour (more if pagination is needed). Before public launch, add shared server caching/request coalescing or an Airtable webhook with a shared cache, then verify your plan's API budget. Per-visitor polling alone should not be scaled to a public audience.

## Verification status

The Node tests cover normalization, filtering, inclusive price bounds, empty results, pagination, missing credentials, and failed Airtable requests. Package-registry access is blocked in the authoring environment, so `npm install`, the Astro build, and a real Airtable connection could not be verified there. Browser verification was also blocked because no browser executable is installed. UI layout and timed refresh behavior still need a local browser check. No live Airtable base was created.

## Reference documentation

- Astro Node adapter: https://docs.astro.build/en/guides/integrations-guide/node/
- Webflow Cloud framework setup: https://developers.webflow.com/webflow-cloud/environment/framework-customization
- Airtable limits: https://support.airtable.com/articles/7735693959-managing-api-call-limits-in-airtable
