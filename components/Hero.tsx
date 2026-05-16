import { content } from "@/lib/content";

export function Hero() {
  const photos = content.heroPhotos;
  return (
    <header id="top" className="relative min-h-screen bg-blush-wash overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 sm:pt-40 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <p className="uppercase tracking-[0.4em] text-xs text-coral mb-6">
            We&apos;re getting married
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl text-ink leading-none">
            {content.couple.first}
            <span className="block text-coral italic font-light my-2 text-5xl sm:text-6xl">
              &amp;
            </span>
            {content.couple.second}
          </h1>
          <div className="accent-rule mx-auto lg:mx-0" />
          <p className="text-lg text-ink/80 mb-2">{content.dateLong}</p>
          <p className="text-base text-ink/70">
            {content.venue.name} &middot; {content.venue.city}, {content.venue.region}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#rsvp" className="btn-primary no-underline">
              RSVP
            </a>
            <a href="#travel" className="btn-secondary no-underline">
              Travel &amp; Hotel
            </a>
          </div>
        </div>

        <div className="relative h-[480px] sm:h-[560px]">
          <PhotoTile
            src={photos[0]?.src}
            alt={photos[0]?.alt}
            className="absolute top-0 left-0 w-2/3 h-3/5 rotate-[-3deg] z-10"
          />
          <PhotoTile
            src={photos[1]?.src}
            alt={photos[1]?.alt}
            className="absolute bottom-0 right-0 w-3/5 h-3/5 rotate-[4deg] z-20"
          />
          <PhotoTile
            src={photos[2]?.src}
            alt={photos[2]?.alt}
            className="absolute top-1/3 right-8 w-2/5 h-2/5 rotate-[-1deg] z-0 hidden sm:block"
          />
        </div>
      </div>
    </header>
  );
}

function PhotoTile({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-white p-3 shadow-xl rounded-sm ${className}`}
      aria-label={alt}
    >
      <div
        className="w-full h-full bg-sand rounded-sm flex items-center justify-center text-ink/40 text-sm"
        style={
          src
            ? {
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        {!src && "Photo coming soon"}
      </div>
    </div>
  );
}
