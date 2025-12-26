
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
      title: 'March: Farewell & A Beginning',
      content:
        "Everything felt like it was ending with the farewell, but for us, it was just the start. A new chapter was waiting, even if we didn't know it yet.",
    },
    {
      year: 2020,
      title: 'April: Officially Us',
      content:
        'And then it was official. That step from friends to something more. It was the moment our story truly began, the start of our five years.',
    },
    {
      year: 2021,
      title: 'Apart, But Still Together',
      content:
        "Distance came into our story, but it never broke us. It tested us, for sure, but our bond held strong. We were still 'us,' even from afar.",
    },
    {
      year: 2025,
      title: 'Five Years Later: Still Standing',
      content:
        "And now, here we are. After everything, after all the time and changes, we're still standing together. Five years is not a small thing, and it means the world to me.",
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
      id: 'cafe-cream-date',
      title: 'Cafe Cream Date',
      date: 'Our coffee ritual',
      location: 'Cafe Cream',
      note: 'More than the coffee, I loved the conversation. You always make me feel heard and seen.',
      image: 'cafe-cream',
    },
    {
      id: 'amul-parlor',
      title: 'Amul Parlor Date',
      date: 'Sweet afternoons',
      location: 'Amul Parlor',
      note: 'Our little tradition. Grabbing a cone and just talking for hours. Simple, but always perfect.',
      image: 'amul-parlor',
    },
    {
      id: 'multiple-times',
      title: 'Countless Moments',
      date: 'Always & Forever',
      location: 'Everywhere',
      note: "All the little moments that weren't captured on camera but are held in my heart. The random walks, the silly jokes, the comfortable silences.",
      image: 'multiple-times',
    }
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
