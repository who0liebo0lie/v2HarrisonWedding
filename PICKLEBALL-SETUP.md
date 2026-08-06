# Pickleball setup

`pickleball.html` collects registrations (team or solo, name, teammate, team
name) but — like Bingo — currently saves them to the submitting guest's own
browser via `localStorage` as a placeholder.

## Before the tournament, do this
1. Swap the `localStorage` call in the inline `<script>` block at the bottom
   of `pickleball.html` for a
   real submission target — same recommendation as Bingo: a Google Sheet via
   Apps Script keeps this consistent with the rest of the project's tooling.
2. Once registration closes (Saturday, Jan 23, 8:00 PM per the current
   schedule on `adventure.html`), pull the full registration list from that
   sheet.
3. Pair any solo registrants with each other, then build the bracket by hand
   (or with a simple seeding script) and update the "Current Teams" /
   "Tournament Bracket" sections of `pickleball.html` before finals
   (Wednesday, Jan 27, 8:00 PM).
