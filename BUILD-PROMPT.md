Build a local Astro app for Anderson Group Inc, a real estate company whose marketing site is in Webflow. First create a standalone app and a separate Airtable import kit. Do not deploy, push to GitHub, or connect Webflow yet.

Create 15 fictional California homes for sale, priced in USD. Provide an importable CSV and Airtable field types for a Listings table with Listing ID, Title, Address, Location, State, Price, Bedrooms, Bathrooms, Square Feet, and Image URL. Use the same records as local sample data so the app works before Airtable is set up. Clearly identify sample data and illustrative photos.

Build a responsive browse-only listing page with property photos, title, address, price, bedrooms, bathrooms, and square footage. No property detail pages or clickable cards. Include a search bar matching title/address/city, a location dropdown derived from current data, minimum and maximum prices, a result count, and Clear filters. Search and filters update immediately and work together. Validate price ranges. Include loading, empty results, photo fallback, and initial/refresh failure states with retry. Match the supplied reference's clean typography, rounded controls, neutral colors, and generous spacing. Do not include agent-specific filters.

Keep listings in a separate component. Later, navigation and footer will come from Webflow DevLink. Use /listings as the app base path and make API URLs base-path aware.

Provide explicit mock and Airtable modes. Connect to Airtable only through a server endpoint using private environment variables, never a client-side token. Return only public card fields; handle Airtable pagination and request timeouts. Never fall back silently to mock records when a live connection fails.

Poll the server every 30 seconds while the page is visible, refresh when returning to the tab, avoid overlapping requests, and retain the visitor's filters. Preserve existing results if a refresh fails and show an honest connection message. Explain that this is periodic refresh, not instantaneous push. Before public launch, plan shared caching or webhook-driven updates to control Airtable request volume.

Include installation instructions, .env.example, secret-safe .gitignore, data/filter tests, and separate Airtable setup instructions. Verify local functionality, mobile layout, empty states, API errors, and update behavior. Report any checks that could not run. Keep GitHub deployment, the Webflow Cloud adapter/runtime configuration, and DevLink integration as explicit subsequent steps.
