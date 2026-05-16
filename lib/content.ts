// Single source of truth for all site copy and data.
// Edit values here to update the live site — no other file changes needed
// for typical copy/itinerary/registry updates.

export const content = {
  couple: {
    first: "Aaron",
    second: "Hannah",
  },
  dateShort: "March 6, 2027",
  dateLong: "Saturday, March 6, 2027",
  venue: {
    name: "El Conquistador Resort",
    city: "Fajardo",
    region: "Puerto Rico",
    url: "https://www.elconresort.com/",
  },

  // PLACEHOLDER — drop real engagement photos into public/photos/
  // and update filenames here after the shoot.
  heroPhotos: [
    { src: "/photos/hero-1.jpg", alt: "Aaron and Hannah — placeholder 1" },
    { src: "/photos/hero-2.jpg", alt: "Aaron and Hannah — placeholder 2" },
    { src: "/photos/hero-3.jpg", alt: "Aaron and Hannah — placeholder 3" },
  ],

  travel: {
    intro:
      "We're celebrating with you at El Conquistador Resort in Fajardo, on the northeast coast of Puerto Rico. Here's everything you need to plan your trip.",
    airport: {
      code: "SJU",
      name: "Luis Muñoz Marín International Airport (San Juan)",
      driveTime: "About 45 minutes by car to the resort.",
    },
    roomBlock: {
      // TODO: replace with link + code from wedding planner
      url: "#",
      code: "TBD — coming soon from our wedding planner",
      note: "We have a room block reserved at El Conquistador. Booking link and code will be added here shortly.",
    },
    transportation:
      "We recommend renting a car or arranging a shuttle from SJU. Uber/Lyft are available in San Juan but less reliable in Fajardo.",
  },

  // PLACEHOLDER itinerary — adjust times with planner.
  schedule: [
    {
      day: "Friday, March 5, 2027",
      events: [
        { time: "5:00 PM", title: "Welcome Reception", location: "Resort lawn", description: "Cocktails and light bites to kick off the weekend." },
      ],
    },
    {
      day: "Saturday, March 6, 2027",
      events: [
        { time: "4:00 PM", title: "Ceremony", location: "Oceanfront lawn", description: "Please be seated by 3:45 PM." },
        { time: "5:00 PM", title: "Cocktail Hour", location: "Sunset Terrace", description: "" },
        { time: "6:30 PM", title: "Reception & Dinner", location: "Las Brisas Ballroom", description: "Dinner, dancing, and celebration." },
      ],
    },
    {
      day: "Sunday, March 7, 2027",
      events: [
        { time: "10:00 AM", title: "Farewell Brunch", location: "Pool deck", description: "Casual send-off before everyone heads home." },
      ],
    },
  ],

  honeyfund: {
    intro:
      "Your presence means the world to us. If you'd like to contribute toward our honeymoon, we'd be so grateful — every bit helps make our trip unforgettable.",
    // Items below become Stripe Checkout tiles. Add/remove freely.
    tiles: [
      { id: "catamaran", title: "Sunset Catamaran", amount: 75, emoji: "⛵", description: "An evening on the water during our honeymoon." },
      { id: "dinner", title: "Romantic Dinner", amount: 100, emoji: "🍽️", description: "A special dinner for two." },
      { id: "spa", title: "Couples Spa Day", amount: 150, emoji: "💆", description: "Help us unwind after the wedding." },
      { id: "excursion", title: "Island Excursion", amount: 200, emoji: "🏝️", description: "A day of adventure exploring." },
      { id: "upgrade", title: "Flight Upgrade", amount: 250, emoji: "✈️", description: "Make the journey extra comfortable." },
      { id: "stay", title: "One Night's Stay", amount: 350, emoji: "🌅", description: "Help us extend our trip by a night." },
    ],
  },

  registry: {
    intro: "We've also registered at a few traditional registries.",
    // TODO: replace # with real registry URLs when set up
    links: [
      { name: "Amazon", url: "#" },
      { name: "Target", url: "#" },
      { name: "Crate & Barrel", url: "#" },
    ],
  },

  rsvp: {
    deadline: "January 15, 2027",
    intro:
      "Please let us know if you can join us by January 15, 2027. We can't wait to celebrate with you.",
  },
};

export type Content = typeof content;
