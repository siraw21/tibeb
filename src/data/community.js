export const leaderboard = [
  { rank: 1, name: 'Abenezer Kifle', initials: 'AK', completed: 29, total: 30, points: 2940, streak: 21 },
  { rank: 2, name: 'Ruth Mengistu', initials: 'RM', completed: 28, total: 30, points: 2860, streak: 18 },
  { rank: 3, name: 'Dawit Solomon', initials: 'DS', completed: 27, total: 30, points: 2790, streak: 15 },
  { rank: 4, name: 'Hana Tesfaye', initials: 'HT', completed: 20, total: 30, points: 2010, streak: 12, isCurrentUser: true },
  { rank: 5, name: 'Betelhem Fikru', initials: 'BF', completed: 19, total: 30, points: 1955, streak: 9 },
  { rank: 6, name: 'Yonas Tadesse', initials: 'YT', completed: 18, total: 30, points: 1870, streak: 6 },
  { rank: 7, name: 'Meron Assefa', initials: 'MA', completed: 17, total: 30, points: 1740, streak: 4 },
  { rank: 8, name: 'Kaleab Girma', initials: 'KG', completed: 15, total: 30, points: 1520, streak: 2 },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Nardos Haile',
    role: 'Now a junior developer at a fintech startup',
    quote:
      'I had tried to learn to code three separate times before this. Having a mission every single day — not a vague course — is what finally made it stick.',
    programTitle: '30 Days Full Stack Web Development',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Samuel Girma',
    role: 'Lost 6kg in the 21-day reset',
    quote:
      'The daily check-in is brutal in the best way. You can\'t hide from your own streak. My coach actually noticed when I skipped a day.',
    programTitle: '21-Day Strength Reset',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Liya Tesfaye',
    role: 'Scored Band 7.5 on IELTS',
    quote:
      'The weekly speaking rooms made the difference. I stopped being afraid of the exam because I had already practiced the real format ten times over.',
    programTitle: 'IELTS Band 7 Sprint',
    rating: 5,
  },
]

export const communityPosts = [
  {
    id: 'post1',
    programId: 'p1',
    author: 'Abenezer Kifle',
    initials: 'AK',
    time: '2 hours ago',
    isAnnouncement: false,
    content: 'Day 20 done ✅ Finally got my login form validating properly. That was harder than I expected!',
    likes: 14,
    comments: [
      { id: 'c1', author: 'Ruth Mengistu', initials: 'RM', content: 'Congrats! The auth day trips up everyone.' },
      { id: 'c2', author: 'Hana Tesfaye', initials: 'HT', content: 'Saving this thread for tomorrow, I\'m on day 20 too 🙌' },
    ],
  },
  {
    id: 'post2',
    programId: 'p1',
    author: 'Abebe Worku',
    initials: 'AW',
    time: '5 hours ago',
    isAnnouncement: true,
    content: 'Reminder: Weekly Q&A is tomorrow at 4pm. Bring your Django questions — we\'ll debug live.',
    likes: 32,
    comments: [],
  },
  {
    id: 'post3',
    programId: 'p1',
    author: 'Meron Assefa',
    initials: 'MA',
    time: '1 day ago',
    isAnnouncement: false,
    content: 'Share your Day 10 progress! Here\'s my form validation build — feedback welcome.',
    likes: 9,
    comments: [{ id: 'c3', author: 'Dawit Solomon', initials: 'DS', content: 'Clean layout, nice work!' }],
  },
  {
    id: 'post4',
    programId: 'p1',
    author: 'Betelhem Fikru',
    initials: 'BF',
    time: '2 days ago',
    isAnnouncement: false,
    content: 'Anyone else stuck on the fetch API day? My requests keep hanging in the console.',
    likes: 5,
    comments: [
      { id: 'c4', author: 'Yonas Tadesse', initials: 'YT', content: 'Check if you\'re awaiting the fetch — got me too.' },
    ],
  },
]

export const notifications = [
  { id: 'n1', type: 'mission', text: 'You completed Day 19: Styling systems', time: '1 hour ago', read: false },
  { id: 'n2', type: 'mission', text: 'Day 20 mission is now available: Auth basics', time: '3 hours ago', read: false },
  { id: 'n3', type: 'session', text: 'Live session starts tomorrow: Weekly Q&A Session', time: '6 hours ago', read: false },
  { id: 'n4', type: 'feedback', text: 'Abebe Worku left feedback on your Day 18 submission', time: '1 day ago', read: true },
  { id: 'n5', type: 'community', text: 'Ruth Mengistu replied to your post', time: '2 days ago', read: true },
]
