# Connecting the forms to a backend

## Recommended: Google Sheets + Apps Script
1. Create a Google Sheet with tabs named `RSVP` and `Pickleball`.
2. Open **Extensions → Apps Script**.
3. Add a `doPost(e)` function that parses `JSON.parse(e.postData.contents)` and writes the object to the correct sheet based on `data.kind`.
4. Deploy as **Web app**, execute as yourself, and allow access to anyone with the link.
5. Copy the deployment URL.
6. Open `js/config.js` and paste the URL into `rsvpEndpoint` and `pickleballEndpoint`. They may use the same Apps Script endpoint.

The forms currently save a local browser copy when no endpoint is configured and clearly tell the guest that online collection is not yet active. No private credentials should ever be placed in the GitHub repository.

## Payloads
RSVP sends `kind`, `guestCount`, `guests`, `additionalMessage`, and `submittedAt`. Pickleball sends `kind`, `playerOne`, `playerTwo`, `teamName`, `email`, and `submittedAt`.
