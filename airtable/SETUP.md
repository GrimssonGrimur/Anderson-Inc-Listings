# Airtable schema

Base: Anderson Group Listings. Table: Listings. Import Listings.csv, then verify:

| Field | Airtable type | Notes |
|---|---|---|
| Listing ID | Single line text, primary field | Unique identifier, AG-001 through AG-015 |
| Title | Single line text | Card title |
| Address | Single line text | Street address |
| Location | Single select | City; the app derives its location dropdown from these values |
| State | Single line text | CA in the sample data |
| Price | Currency | USD, zero decimal places |
| Bedrooms | Number | Integer |
| Bathrooms | Number | Allow one decimal place |
| Square Feet | Number | Integer |
| Image URL | URL | Public HTTPS image URL; not an attachment field |

All fields other than Image URL are required by the app. Missing/invalid numeric values cause an error instead of showing misleading information. An absent/broken photo shows a fallback. No calculated fields, linked tables, CMS syncing, or Airtable automations are needed.

These are fictional sample properties, not real offers for sale. Replace the illustrative image URLs with your own property photography when moving beyond the demo.
