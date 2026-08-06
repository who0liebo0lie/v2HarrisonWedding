# Bingo setup

The Bingo page (`bingo.html`) ships with a placeholder card and no live data
source, since guest facts don't exist until people RSVP.

## Where facts come from
On `rsvp.html`, any guest who selects "Yes" for Bingo gets a text field asking
for one fun fact. Right now, submitted RSVPs (including those facts) are saved
to the browser's `localStorage` on the device the guest submitted from — this
is a placeholder so the form is fully testable before a live backend exists.

## Before the wedding, do this
1. **Pick a real submission target.** The cleanest option given the rest of
   this project already uses Google Apps Script (see `MAIL-MERGE.gs` and
   `PICKLEBALL-FOLLOWUP.gs` from earlier site versions) is a Google Sheet: add
   a `google.script.run` call (or a simple `fetch()` to a deployed Apps Script
   web app) inside `js/rsvp.js`, in place of the `localStorage` line, so every
   submission lands in one shared Sheet instead of each guest's own browser.
2. **Export the Bingo facts.** Once RSVPs are in, filter the sheet to guests
   who opted into Bingo and copy `name` + `bingoFact` pairs into
   `data/bingo-facts.json` in this format:
   ```json
   [
     { "name": "Jane Doe", "fact": "Has been to Antarctica" }
   ]
   ```
3. **Populate the board.** Replace the placeholder `<table>` rows in
   `bingo.html` with facts pulled from that file (manually, or with a small
   script if there are many guests) before the game goes live at ship
   departure.
4. **Leaderboard**: still manual for now — there's no scoring backend. If you
   want a live leaderboard, that's a separate build (a small web app or
   another Apps Script + Sheet combo) — flag it if you want help scoping that.
