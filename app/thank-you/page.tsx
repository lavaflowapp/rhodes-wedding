import Link from "next/link";
import { content } from "@/lib/content";

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-blush-wash flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-xl p-12 text-center max-w-lg">
        <p className="text-5xl mb-4">💖</p>
        <h1 className="font-serif text-4xl text-ink mb-3">Thank you!</h1>
        <p className="text-ink/80 mb-8">
          Your contribution toward our honeymoon means the world. We can&apos;t
          wait to celebrate with you in {content.venue.city}.
        </p>
        <Link href="/" className="btn-primary no-underline">
          Back to the site
        </Link>
      </div>
    </main>
  );
}
