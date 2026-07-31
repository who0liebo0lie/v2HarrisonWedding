# Julia & Wesley Wedding Website — Implementation Guide

## What is included

- Complete static website for GitHub Pages
- Responsive navigation and styling
- Home, Our Story, The Adventure, Explore the Ship, Travel & Booking, and RSVP pages
- Private RSVP and guest-question workflow through Google Apps Script and Google Sheets
- RSVP email notifications to Julia and Wesley
- Automatic confirmation emails to guests
- Bingo clue collection tied to RSVP records
- Personalized invitation links using private invitation tokens
- Optional personalized SMS sending through Twilio
- Central room-pricing file for future negotiated-rate updates

## 1. Preview the website locally

Open `index.html` directly, or run a local server from the project folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## 2. Update the public configuration

Open `js/config.js` and replace:

- `alignedJourneysBookingUrl`
- `advisorEmail`
- `advisorPhone`
- later, `appsScriptUrl`

Do not put passwords, Twilio credentials, guest lists, or private spreadsheet IDs in this file.

## 3. Add negotiated stateroom prices later

Open `data/room-types.json`. Replace each `"price": "TBD"` with the maximum negotiated price per person. The pricing explanation already tells guests that Royal Caribbean promotions may produce a lower actual fare.

All room cards link to Royal Caribbean’s official Harmony of the Seas room-description page.

## 4. Create the private RSVP spreadsheet and backend

1. Go to Google Apps Script and create a **New project**.
2. Replace the default code with the contents of `backend/apps-script/Code.gs`.
3. In **Project Settings**, enable **Show appsscript.json manifest file in editor** and replace it with `backend/apps-script/appsscript.json`.
4. In **Project Settings → Script Properties**, add:
   - `NOTIFICATION_EMAILS` = Julia’s email and Wesley’s email separated by commas.
   - Leave `SPREADSHEET_ID` blank initially.
5. Select `setupWeddingBackend` and click **Run**.
6. Approve the requested permissions.
7. Open **Execution log**. The newly created private Google Sheet URL will appear there.
8. Confirm the Sheet contains tabs named `RSVP`, `Questions`, and `Guests`.

## 5. Deploy the backend as a web app

1. In Apps Script, click **Deploy → New deployment**.
2. Select **Web app**.
3. Set **Execute as** to yourself/the deploying user.
4. Set access to the broadest anonymous option available for your account, usually **Anyone**.
5. Deploy and copy the `/exec` web-app URL.
6. Paste it into `js/config.js` as `appsScriptUrl`.
7. Test both forms on `rsvp.html`.

The web app saves every RSVP and question to the private Sheet, emails Julia and Wesley, and sends the guest a confirmation email. Apps Script web apps may execute as the deploying user, which is what allows anonymous guests to submit without receiving access to the spreadsheet.

## 6. Add personalized invitation names

In the private Sheet’s `Guests` tab, add one row per household:

| Invite Token | Greeting | Phone | Email | Sent At | Delivery Status |
|---|---|---|---|---|---|
| `M4R7K2Q9` | `Maria and Daniel` | `+12015550123` | `guest@example.com` | | |

Use random invitation tokens that do not reveal names. A guest link will look like:

```text
https://YOUR-DOMAIN.com/?invite=M4R7K2Q9
```

The site calls the backend using JSONP and displays:

> Maria and Daniel, you’re invited!

The token also follows the guest into the RSVP and question records.

## 7. Optional: send personalized invitation texts through Twilio

Before sending automated U.S. application-to-person texts, complete the sender registration and consent requirements applicable to your Twilio number. Use a dedicated wedding number and include opt-out language.

Add these Apps Script properties:

- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_FROM_NUMBER` in E.164 format
- `SITE_URL`, for example `https://juliaandwesley.com/`

Populate the `Guests` tab, then run `sendInvitationTexts()` manually. It sends only rows that have a phone number and an empty `Sent At` cell. Test with Julia’s and Wesley’s own numbers first.

Never add Twilio credentials to GitHub.

## 8. Publish to GitHub Pages

1. Create a new GitHub repository, for example `julia-wesley-wedding`.
2. Upload the contents of this project so `index.html` is at the repository root.
3. Commit and push to the `main` branch.
4. Open **Repository Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose `main` and `/ (root)`, then save.
7. Wait for GitHub to provide the public Pages URL.

Example Git commands:

```bash
git init
git add .
git commit -m "Launch wedding website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/julia-wesley-wedding.git
git push -u origin main
```

## 9. Add a custom domain

1. Buy or use a domain you own.
2. In **GitHub → Repository Settings → Pages**, enter the custom domain.
3. Follow GitHub’s displayed DNS instructions at your domain registrar.
4. Verify the domain in GitHub account settings to reduce takeover risk.
5. After DNS resolves, enable **Enforce HTTPS**.
6. Rename `CNAME.example` to `CNAME` and replace its contents with the exact domain, or allow GitHub to create the CNAME file from the Pages settings.

## 10. Test before launch

- Test on iPhone, Android, desktop Chrome, Safari, and Firefox.
- Submit a test RSVP as attending and not attending.
- Submit a test question.
- Confirm Julia and Wesley both receive notifications.
- Confirm the guest receives confirmation emails.
- Confirm RSVP rows include the invitation token and Bingo clue.
- Confirm no guest data or credentials exist in the GitHub repository.
- Confirm all Aligned Journeys links, phone numbers, prices, dates, and venue details.
- Test personalized invitation links in a private/incognito window.
- Test Twilio with only your own numbers before messaging guests.

## Important limitations

GitHub Pages is a static host, so all private writes are handled by Apps Script. The repository must remain free of private guest information. The ship map included here is a lightweight interactive illustration, not an official deck plan. Replace or expand content as final cruise details are confirmed.
