# Rhodes Wedding Website

Aaron & Hannah — March 6, 2027 — El Conquistador Resort, Fajardo, Puerto Rico.

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS (white/cream base, coral/fuchsia/pink/orange accents)
- Honeymoon fund via external service link-out (Zola / Honeyfund / The Knot) + Venmo / PayPal / Zelle buttons
- Deployable to Vercel

## Local setup

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open http://localhost:3000.

## Editing content
All copy, itinerary, registry links, honeymoon-fund URL, and P2P handles live in **[lib/content.ts](lib/content.ts)**. Edit that one file to update the live site.

### Hooking up the honeymoon fund
1. Sign up for one of:
   - [Zola Cash Funds](https://www.zola.com) — recommended, accepts cards (~2.4% + 30¢)
   - [Honeyfund.com](https://www.honeyfund.com) — free for bank transfer, ~2.9% cards
   - [The Knot Cash Funds](https://www.theknot.com)
2. Create the fund, grab its public share URL.
3. In `lib/content.ts`, set `honeyfund.primaryUrl` to that URL.

### P2P handles
In `lib/content.ts → p2p`, fill in any of:
- `venmo` — your @ handle (no @)
- `paypal` — your PayPal.me handle
- `zelle` — the email or phone number on your Zelle account (displayed as text — Zelle has no public deep-link format)

Leave any field blank to hide its button.

### Swapping in real photos
Drop engagement photos into `public/photos/` named `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`. They will appear automatically. Update filenames/alt text in `lib/content.ts → heroPhotos`.

## Deploy to Vercel
1. Push to GitHub.
2. Import at https://vercel.com/new — it auto-detects Next.js.
3. Production branch: `nextjs`.
4. No environment variables required for v1.

## RSVPs
For v1, RSVPs are logged to the Vercel server log (Vercel dashboard → Logs). When you want to persist them, add a Vercel Postgres database, set `POSTGRES_URL`, and update [app/api/rsvp/route.ts](app/api/rsvp/route.ts) to insert into a `rsvps` table.

## Itinerary
A print-friendly version lives at `/itinerary`. Use the "Print / Save as PDF" button to generate a PDF you can attach to paper invitations.

## TODOs before launch
- [ ] Replace placeholder hero photos
- [ ] Fill in El Conquistador room-block link + booking code (in `lib/content.ts`)
- [ ] Finalize itinerary times with planner
- [ ] Set up honeymoon-fund account and add URL
- [ ] Add Venmo / PayPal / Zelle handles
- [ ] Add real registry URLs
- [ ] (Optional) Connect Postgres for RSVP persistence
- [ ] (Optional) Custom domain
