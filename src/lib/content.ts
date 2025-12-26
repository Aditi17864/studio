
export type TimelineEntry = {
  year: number;
  title: string;
  content: string;
};

export type ApologySection = {
  id: string;
  title: string;
  content: string;
};

export type Memory = {
  id: string;
  title: string;
  date: string;
  location: string;
  note: string;
  image: string;
};

export const appContent: {
  home: {
    header: string;
    body: string;
  };
  navigation: { id: string; title: string; href: string }[];
  timeline: TimelineEntry[];
  apology_sections: ApologySection[];
  memories: Memory[];
  no_pressure: {
    title: string;
    content: string;
  };
  final_promise: {
    title: string;
    text: string;
  };
} = {
  home: {
    header: 'For Tush',
    body: 'I know I haven’t been the best this week. But my feelings for you never went missing.',
  },
  navigation: [
    { id: 'five-years', title: 'Our 5 Years Together', href: '/our-five-years' },
    { id: 'sorry-for', title: 'I’m Sorry, Tush', href: '/what-im-sorry-for' },
    { id: 'you-matter', title: 'Why You Matter To Me', href: '/what-i-feel-about-you' },
    {
      id: 'where-my-heart-belongs',
      title: 'Where My Heart Belongs',
      href: '/where-my-heart-belongs',
    },
    { id: 'our-memories', title: 'Our Memories', href: '/our-memories' },
    { id: 'fun-games', title: 'Fun & Love Games', href: '/games' },
    { id: 'photo-booth', title: 'Photo Booth', href: '/photo-booth' },
    { id: 'last-thing', title: 'One Last Thing', href: '/one-soft-promise' },
  ],
  timeline: [
    {
      year: 2020,
      title: 'When We Became Us',
      content:
        'Five years is not small, Tush. It’s habits, comfort, fights, care, and attachment. It started simply, as most things do, but it became a thread that ran through the years that followed.',
    },
    {
      year: 2021,
      title: 'The Years That Followed',
      content:
        'We shared moments, conversations, and silences. Even when we were distant, the connection was a quiet hum in the background of my life, a constant presence I took for granted.',
    },
    {
      year: 2023,
      title: 'What Stayed Constant',
      content:
        "Through changes and challenges, the thought of you remained a point of stability. A reminder of a bond that wasn't defined by daily contact, but by a shared history and a mutual, unspoken respect.",
    },
    {
      year: 2025,
      title: 'What You’ve Meant To Me',
      content:
        "You've been a quiet source of warmth and a reminder of a connection that endured. Your presence in my life, even from afar, has been more significant than my words have shown.",
    },
  ],
  apology_sections: [
    {
      id: 'what-im-sorry-for',
      title: "I'm Sorry, Tush",
      content:
        'This week, I was caught up with college and projects. Not because you weren’t important — but because life demanded too much at once. You gave your time, your energy, your presence… and I couldn’t match it. I’m genuinely sorry. Agli baar, I will try my best ki aisa na ho. Thank you for always understanding me.',
    },
    {
      id: 'what-i-feel-about-you',
      title: 'Why You Matter To Me',
      content:
        'Even after all this time, I still care. I still think of you with softness. And I still respect the place you’ve had in my life. These feelings are quiet, but they are steady and true.',
    },
    {
      id: 'where-i-went-wrong',
      title: 'Where I Went Wrong',
      content: 'I got lost in my own world, and in doing so, I made you feel like you were on the outside. My focus narrowed and I failed to look up and see you right there. That was my mistake, and I own it completely.',
    },
  ],
  memories: [
    {
      id: 'bandra-date',
      title: 'Bandra Date',
      date: 'A beautiful evening',
      location: 'Bandra Dayout',
      note: 'This day mattered to me more than I said out loud. Just being with you, with the sound of the waves, felt like peace.',
      image: 'bandra-date',
    },
    {
      id: 'amul-park-meet',
      title: 'Amul Park Meet',
      date: 'That sunny afternoon',
      location: 'Our favorite bench',
      note: 'So simple, but so perfect. Those quiet moments just talking about everything and nothing are the ones I cherish.',
      image: 'amul-park',
    },
    {
      id: 'mool-parlor-date',
      title: 'Mool Parlor Date',
      date: 'When we craved ice cream',
      location: 'That cozy corner',
      note: 'Sharing that scoop of ice cream, laughing about silly things... it’s a sweet memory for a reason.',
      image: 'mool-parlor',
    },
    {
      id: 'cafe-cream-date',
      title: 'Cafe Cream Date',
      date: 'Our coffee ritual',
      location: 'Cafe Cream',
      note: 'More than the coffee, I loved the conversation. You always make me feel heard and seen.',
      image: 'cafe-cream',
    },
    {
      id: 'random-walks',
      title: 'Random Walks & Talks',
      date: 'Countless evenings',
      location: 'Everywhere and nowhere',
      note: 'These are my favorite. No destination, just walking side-by-side. It’s when I feel closest to you.',
      image: 'random-walks',
    },
  ],
  no_pressure: {
    title: 'No Pressure, Just Truth',
    content:
      "This app isn’t asking for anything. Not forgiveness. Not a reply. Just understanding. It's a message I needed to send for my own heart, to honor what we shared.",
  },
  final_promise: {
    title: 'One Last Thing',
    text: 'I know I failed to show up properly this week. But please know — you matter to me more than you think. Thank you for choosing me, even when I was busy.',
  },
};
