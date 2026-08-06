# Changelog — this build

Built from the eleven reference screenshots Julia supplied, converted into a
fully editable, interactive static site with the following changes applied
on top of the reference designs:

## Global
- Unified header/nav across every page: `Our Story`, `The Adventure`,
  `Explore the Ship`, `Travel Info`, `RSVP` — no separate "RSVP Now" button.
- No horizontal scrolling at any breakpoint; mobile nav collapses to a toggle
  menu under 820px.

## Landing (index.html)
- Footer date corrected to **January 23–28, 2027** (confirmed with Julia —
  the prior build prompt had a 2028 typo flagged for review).
- Footer no longer includes a location; location/date stay in the hero only.

## Our Story (our-story.html)
- Removed the inline English translation from the Russian text bubble. The
  meaning is still revealed in the prose explanation below, as in the
  original v28 design — it's just no longer shown directly inside the chat
  bubble itself.

## The Adventure (adventure.html)
- Corrected to a **six-day itinerary, Saturday Jan 23 through Thursday Jan
  28** (previous mockup incorrectly extended to a seventh day, Friday Jan 29).
- **Saturday:** 4:00 PM entry renamed "Ship Departure" and links to
  `bingo.html`. White Party moved from 8:00 PM to 7:00 PM. Pickleball Open
  Registration moved to 8:00 PM and links to `pickleball.html`.
- **Monday:** "View Details" links to `cococay.html`.
- **Tuesday:** "View Details" links to `wedding-day.html`.
- **Wednesday:** removed Shopping, Art Gallery, Pool & Hot Tubs, and Game
  Room from the activity list. Added a pink-highlighted, non-linked
  "8:00 PM — Pickleball Finals" line.
- **Thursday:** now the final day of the cruise. Content that previously
  lived on the deleted Friday row ("Enjoy breakfast," "Disembark," "Safe
  travels home," no View Details link) moved here. The previous Thursday
  content ("Bingo winners announced," "Farewell together") was removed
  entirely per Julia's direction, not relocated.

## Explore the Ship (explore.html)
- Neighborhood buttons on the ship map are now interactive — clicking one
  updates the guide panel (title, description, photo) and a new row of
  highlight tiles describing specific activities in that neighborhood.
- Category tiles (Dining, Entertainment, Drinks, Relaxation, Evenings,
  Explore) now open a modal with "What's Included" / "What's Not Included"
  tabs.

## Travel & Booking (travel.html)
- All links are wired up: email, phone, Royal Caribbean ship page, and a
  "Book your cabin" mailto action. Per-stateroom "View on Royal Caribbean"
  links included (final direct links from Aligned Journeys still pending).
- FAQ is now a real accordion: click a question to expand it, click anywhere
  else on the page to close it.
- Header rebuilt to match the rest of the site (previously a visually
  distinct dark navy header with different type).

## RSVP (rsvp.html)
- Each guest gets an individual name input field, not just a headcount.
- Opting in to Bingo reveals a "fun fact" text field per guest, feeding the
  Bingo future-population plan (see `BINGO-SETUP.md`).
- Added plain-language copy confirming the guest list is tracked (responses
  tied to named guests/households, not anonymous).

## Bingo & Pickleball
- No visual/content changes from reference beyond conversion to editable
  markup. Both now include a documented data-population plan — see
  `BINGO-SETUP.md` and `PICKLEBALL-SETUP.md` — since neither page had a real
  backend to pull from yet.

## Known placeholders (not yet real)
- RSVP, Bingo fact, and Pickleball registration submissions currently save to
  the submitting guest's own browser (`localStorage`) so the forms are fully
  testable. None of this is shared or persisted centrally yet — see the two
  setup guides for the recommended next step (a Google Sheet via Apps
  Script, consistent with this project's existing tooling).
- Stateroom photography and final pricing are placeholders pending Aligned
  Journeys.
- Several day-specific itinerary photos referenced in the original mockups
  weren't available as separate source files, so those cards currently run
  text-only rather than with bespoke photography — easy to add once real
  images are ready to drop into `assets/`.
