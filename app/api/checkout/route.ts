import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe is not configured. Set STRIPE_SECRET_KEY in .env.local." },
      { status: 500 }
    );
  }

  const body = await req.json().catch(() => null);
  if (!body || typeof body.amount !== "number" || body.amount < 1) {
    return NextResponse.json({ error: "Invalid amount." }, { status: 400 });
  }

  const title = typeof body.title === "string" ? body.title : "Honeymoon Fund";
  const id = typeof body.id === "string" ? body.id : "custom";
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || req.nextUrl.origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: `Honeymoon Fund: ${title}` },
            unit_amount: Math.round(body.amount * 100),
          },
          quantity: 1,
        },
      ],
      metadata: { tile_id: id, tile_title: title },
      success_url: `${baseUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/#registry`,
    });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error", err);
    return NextResponse.json(
      { error: "Could not create checkout session." },
      { status: 500 }
    );
  }
}
