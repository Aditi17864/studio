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
    header: 'Hi Tushar.',
    body: 'I’ve known you for five years now. And that matters to me more than I ever said.',
  },
  navigation: [
    { id: 'five-years', title: 'Our Five Years', href: '/our-five-years' },
    { id: 'went-wrong', title: 'Where I Went Wrong', href: '/where-i-went-wrong' },
    { id: 'feel-about-you', title: 'What I Feel About You', href: '/what-i-feel-about-you' },
    { id: 'sorry-for', title: 'What I’m Sorry For', href: '/what-im-sorry-for' },
    { id: 'no-pressure', title: 'No Pressure, Just Truth', href: '/no-pressure' },
    { id: 'soft-promise', title: 'One Soft Promise', href: '/one-soft-promise' },
  ],
  timeline: [
    {
      year: 2020,
      title: 'When You Entered My Life',
      content: 'Five years is a long time to know someone. Long enough for habits, comfort, and quiet attachment to grow. It started simply, as most things do, but it became a thread that ran through the years that followed.',
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
      id: 'where-i-went-wrong',
      title: 'Where I Went Wrong',
      content: 'I wasn’t replying with the warmth you deserved. I let things feel distant instead of explaining myself. And I understand how that created a gap between us. It was a failure of care on my part, a failure to nurture something I valued.',
    },
    {
      id: 'what-i-feel-about-you',
      title: 'What I Feel About You',
      content: 'Even after all this time, I still care. I still think of you with softness. And I still respect the place you’ve had in my life. These feelings are quiet, but they are steady and true.',
    },
    {
      id: 'what-im-sorry-for',
      title: 'What I’m Sorry For',
      content: 'I’m sorry for the silence where there should have been reassurance. I’m sorry for replies that didn’t reflect how much you mattered. I am sorry for not protecting the connection we had.',
    },
  ],
  no_pressure: {
    title: 'No Pressure, Just Truth',
    content: 'This app isn’t asking for anything. Not forgiveness. Not a reply. Just understanding. It\'s a message I needed to send for my own heart, to honor what we shared.',
  },
  final_promise: {
    title: 'One Soft Promise',
    text: 'If we ever talk again, I’ll do it with more care. If we don’t, I’ll still be grateful for the five years.',
  },
};
