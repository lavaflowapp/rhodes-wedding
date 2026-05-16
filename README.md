# Rhodes Wedding Website

Aaron & Hannah — March 6, 2027 — El Conquistador Resort, Fajardo, Puerto Rico.

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS (white/cream base, coral/fuchsia/pink/orange accents)
- Stripe Checkout for honeymoon fund contributions
- Deployable to Vercel

## Local setup

```bash
npm install
cp .env.local.example .env.local   # then fill in keys
npm run dev
```

Open http://localhost:3000.

### Stripe test mode
1. Create a free Stripe account → https://dashboard.stripe.com
2. Switch to **Test mode** (toggle top-right).
3. Copy the **secret key** (`sk_test_...`) into `STRIPE_SECRET_KEY` in `.env.local`.
4. For webhooks locally:
   ```bash
   npm i -g stripe
   stripe login
   stripe listen --forward-to localhost:3000/api/stripe-webhook
   ```
   Copy the `whsec_...` it prints into `STRIPE_WEBHOOK_SECRET`.
5. Test with card `4242 4242 4242 4242`, any future expiry, any CVC.

## Editing content
All copy, itinerary, registry links, and honeymoon-fund tiles live in **[lib/content.ts](lib/content.ts)**. Edit that one file to update the live site.

### Swapping in real photos
Drop engagement photos into `public/photos/` named `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`. They will appear automatically. Update filenames/alt text in `lib/content.ts` → `heroPhotos`.

## Deploy to Vercel
1. Push this repo to GitHub.
2. Import at https://vercel.com/new — it auto-detects Next.js.
3. Add the same env vars (`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_SITE_URL=https://your-subdomain.vercel.app`).
4. After deploy, point a Stripe webhook endpoint at `https://your-subdomain.vercel.app/api/stripe-webhook` (event: `checkout.session.completed`) and copy the new signing secret into Vercel.

## Going live with real money
- Flip Stripe out of Test mode and use **live** keys.
- Consider attaching a custom domain in the Vercel dashboard.

## RSVPs
For v1, RSVPs are logged to the Vercel server log (visible in the Vercel dashboard → Logs). When you're ready to persist them, add a Vercel Postgres database, set `POSTGRES_URL`, and update [app/api/rsvp/route.ts](app/api/rsvp/route.ts) to insert into a `rsvps` table.

## Itinerary
A print-friendly version lives at `/itinerary`. Use the "Print / Save as PDF" button to generate a PDF you can attach to paper invitations.

## TODOs before launch
- [ ] Replace placeholder hero photos
- [ ] Fill in El Conquistador room-block link + booking code (in `lib/content.ts`)
- [ ] Finalize itinerary times with planner
- [ ] Add real registry URLs
- [ ] Add real Stripe live keys
- [ ] (Optional) Connect Postgres for RSVP persistence
- [ ] (Optional) Custom domain
