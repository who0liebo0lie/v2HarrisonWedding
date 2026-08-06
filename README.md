# Julia & Wesley Wedding Website

Fully editable GitHub Pages site built with semantic HTML, CSS, and vanilla JavaScript. No page is implemented as a single screenshot.

## Preview locally
Run `python -m http.server 8000` from this folder, then open `http://localhost:8000`.

## Publish
Copy all files to the root of the GitHub Pages repository, commit, and push to `main`.

## Editing map
- Landing and name gate: `index.html`, `js/access.js`
- Our Story: `our-story.html`
- Adventure itinerary: `adventure.html`
- Bingo data: `data/bingo-facts.json`, `js/bingo.js`
- Pickleball teams: `data/pickleball-teams.json`, `js/pickleball.js`
- Explore interactions: `js/explore.js`
- Travel links: `js/travel.js`
- RSVP fields and endpoint: `js/rsvp.js`
- Shared styling: `css/site.css`, `css/responsive.css`

## Backend notes
GitHub Pages is static. RSVP submissions and permanent Pickleball registrations require a real backend. Set `ENDPOINT` in `js/rsvp.js`. The current fallback stores a draft in localStorage and labels it demonstration mode. Replace local JSON loading on Bingo and Pickleball pages with API calls after the backend is available.

Suggested flow: RSVP submission -> approved database -> sanitized Bingo facts API and Pickleball teams API -> public pages. Do not publish private guest information in `data/guests.json`.

## Travel placeholders
Final Aligned Journeys booking URL, email, and phone were not supplied. Replace values in `travelLinks` inside `js/travel.js`. Until then, those controls display Coming Soon and do not invent contact information.

## Date confirmation needed
The requested landing footer uses January 23–28, 2028 exactly. Other supplied itinerary and wedding designs reference January 2027. Those dates are preserved where specifically directed and should be reconciled before launch.
