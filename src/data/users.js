export const currentUser = {
  id: 'u1',
  name: 'Hana Tesfaye',
  initials: 'HT',
  role: 'member',
  email: 'hana.tesfaye@example.com',
  joinedAt: '2026-07-08',
  activeProgramId: 'p1',
  currentDay: 20,
  streak: 12,
  longestStreak: 18,
  completedTasks: 20,
  totalTasks: 30,
  consistencyScore: 87,
  achievements: [
    { id: 'a1', title: 'Consistency Champion', description: '7-day streak reached', icon: 'Flame' },
    { id: 'a2', title: 'First Deploy', description: 'Shipped your first live project', icon: 'Rocket' },
    { id: 'a3', title: 'Early Bird', description: 'Completed 5 missions before 8am', icon: 'Sunrise' },
  ],
  enrolledPrograms: [
    { programId: 'p1', progress: 65, currentDay: 20, status: 'active' },
    { programId: 'p8', progress: 100, currentDay: 14, status: 'completed' },
    { programId: 'p6', progress: 33, currentDay: 1, status: 'active' },
  ],
  certificates: [
    { id: 'cert1', programId: 'p8', issuedAt: '2026-06-02', title: 'Consistency & Mindset Reset' },
  ],
}
