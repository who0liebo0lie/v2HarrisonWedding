# Julia & Wesley Wedding Website — v22

This package implements the approved v22 visual direction. Upload the contents of this folder to the root of the GitHub Pages repository.

## Backend connection
Set `window.WEDDING_BACKEND_URL` before the page scripts load, or edit the endpoint constant in `js/v22.js` and `js/rsvp-v22.js`. The payloads support personalized invite codes, visit timestamps, household names, RSVP status by event, and Bingo clues per attending guest.

The current package safely stores responses locally when no endpoint is configured.
