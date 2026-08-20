export const creatorStats = {
  totalPrograms: 12,
  totalParticipants: 2540,
  avgCompletion: 76,
  revenue: 45000,
  currency: 'ETB',
}

export const creatorPrograms = [
  { id: 'p1', name: '30 Days Full Stack Web Development', type: 'Challenge', members: 245, completion: 78, status: 'Active' },
  { id: 'p6', name: 'AI Tools for Everyday Work', type: 'Workshop', members: 890, completion: 91, status: 'Active' },
  { id: 'p7', name: '90-Day Career Pivot', type: 'Cohort', members: 156, completion: 44, status: 'Active' },
  { id: 'p9', name: 'Intro to Python (archived)', type: 'Bootcamp', members: 410, completion: 68, status: 'Archived' },
  { id: 'p10', name: 'Next Cohort — Full Stack v2', type: 'Challenge', members: 0, completion: 0, status: 'Draft' },
]

export const creatorMembers = [
  { id: 'mem1', name: 'Hana Tesfaye', initials: 'HT', progress: 65, lastActive: 'Today', completion: 67 },
  { id: 'mem2', name: 'Abenezer Kifle', initials: 'AK', progress: 97, lastActive: 'Today', completion: 97 },
  { id: 'mem3', name: 'Ruth Mengistu', initials: 'RM', progress: 93, lastActive: 'Yesterday', completion: 93 },
  { id: 'mem4', name: 'Dawit Solomon', initials: 'DS', progress: 90, lastActive: 'Today', completion: 90 },
  { id: 'mem5', name: 'Betelhem Fikru', initials: 'BF', progress: 63, lastActive: '2 days ago', completion: 63 },
  { id: 'mem6', name: 'Yonas Tadesse', initials: 'YT', progress: 60, lastActive: '3 days ago', completion: 60 },
  { id: 'mem7', name: 'Meron Assefa', initials: 'MA', progress: 57, lastActive: 'Today', completion: 57 },
  { id: 'mem8', name: 'Kaleab Girma', initials: 'KG', progress: 50, lastActive: '5 days ago', completion: 50 },
]

export const enrollmentGrowth = [
  { month: 'Mar', members: 1420 },
  { month: 'Apr', members: 1680 },
  { month: 'May', members: 1890 },
  { month: 'Jun', members: 2120 },
  { month: 'Jul', members: 2340 },
  { month: 'Aug', members: 2540 },
]

export const dailyActivity = [
  { day: 'Mon', active: 210 },
  { day: 'Tue', active: 245 },
  { day: 'Wed', active: 198 },
  { day: 'Thu', active: 260 },
  { day: 'Fri', active: 175 },
  { day: 'Sat', active: 140 },
  { day: 'Sun', active: 160 },
]

export const completionByProgram = [
  { name: 'Full Stack', rate: 78 },
  { name: 'AI Tools', rate: 91 },
  { name: 'Career Pivot', rate: 44 },
  { name: 'Python', rate: 68 },
]

export const mostCompletedMissions = [
  { title: 'Day 1: Setup & Git basics', completions: 244 },
  { title: 'Day 7: Build landing page', completions: 231 },
  { title: 'Day 12: React fundamentals', completions: 219 },
  { title: 'Day 15: Build Your First API', completions: 198 },
]

export const retention = [
  { cohort: 'Week 1', retained: 100 },
  { cohort: 'Week 2', retained: 88 },
  { cohort: 'Week 3', retained: 79 },
  { cohort: 'Week 4', retained: 71 },
]

export const earningsHistory = [
  { month: 'Mar', amount: 5200 },
  { month: 'Apr', amount: 6100 },
  { month: 'May', amount: 7400 },
  { month: 'Jun', amount: 8300 },
  { month: 'Jul', amount: 8900 },
  { month: 'Aug', amount: 9100 },
]

export const payoutHistory = [
  { id: 'po1', date: '2026-07-30', amount: 8900, method: 'Telebirr', status: 'Paid' },
  { id: 'po2', date: '2026-06-30', amount: 8300, method: 'CBE Birr', status: 'Paid' },
  { id: 'po3', date: '2026-05-30', amount: 7400, method: 'Bank Transfer', status: 'Paid' },
]
