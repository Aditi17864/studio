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

export const appContent: {
  home: {
    header: string;
    body: string;
  };
  navigation: { id: string; title: string; href: string }[];
  timeline: TimelineEntry[];
  apology_sections: ApologySection[];
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
    { id: 'sorry-for', title: 'I’m Sorry, Tush', href: '/im-sorry' },
    { id: 'you-matter', title: 'Why You Matter To Me', href: '/you-matter' },
    { id: 'our-memories', title: 'Our Memories', href: '/our-memories' },
    { id: 'fun-games', title: 'Fun & Love Games', href: '/games' },
    { id: 'photo-booth', title: 'Photo Booth', href: '/photo-booth' },
    { id: 'last-thing', title: 'One Last Thing', href: '/one-last-thing' },
  ],
  timeline: [
    {
      year: 2020,
      title: 'When We Became Us',
      content: 'Five years is not small, Tush. It’s habits, comfort, fights, care, and attachment. It started simply, as most things do, but it became a thread that ran through the years that followed.',
    },
    {
      year: 2021,
      title: 'The Years That Followed',
      content: 'We shared moments, conversations, and silences. Even when we were distant, the connection was a quiet hum in the background of my life, a constant presence I took for granted.',
    },
    {
      year: 2023,
      title: 'What Stayed Constant',
      content: 'Through changes and challenges, the thought of you remained a point of stability. A reminder of a bond that wasn\'t defined by daily contact, but by a shared history and a mutual, unspoken respect.',
    },
    {
      year: 2025,
      title: 'What You’ve Meant To Me',
      content: 'You\'ve been a quiet source of warmth and a reminder of a connection that endured. Your presence in my life, even from afar, has been more significant than my words have shown.',
    },
  ],
  apology_sections: [
     {
      id: 'im-sorry',
      title: 'I\'m Sorry, Tush',
      content: 'This week, I was caught up with college and projects. Not because you weren’t important — but because life demanded too much at once. You gave your time, your energy, your presence… and I couldn’t match it. I’m genuinely sorry.',
    },
    {
      id: 'you-matter',
      title: 'Why You Matter To Me',
      content: 'Even after all this time, I still care. I still think of you with softness. And I still respect the place you’ve had in my life. These feelings are quiet, but they are steady and true.',
    },
  ],
  no_pressure: {
    title: 'No Pressure, Just Truth',
    content: 'This app isn’t asking for anything. Not forgiveness. Not a reply. Just understanding. It\'s a message I needed to send for my own heart, to honor what we shared.',
  },
  final_promise: {
    title: 'One Last Thing',
    text: 'I know I failed to show up properly this week. But please know — you matter to me more than you think. Thank you for choosing me, even when I was busy.',
  },
};
