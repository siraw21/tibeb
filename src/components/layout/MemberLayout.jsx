import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import MemberSidebar from './MemberSidebar'
import DashboardTopbar from './DashboardTopbar'
import { currentUser } from '../../data/users'

const titles = {
  '/dashboard': 'Dashboard',
  '/dashboard/programs': 'My Programs',
  '/missions': "Today's Mission",
  '/community': 'Community',
  '/leaderboard': 'Leaderboard',
  '/dashboard/certificates': 'Certificates',
  '/dashboard/profile': 'Profile',
}

export default function MemberLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-paper flex">
      <MemberSidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="flex-1 min-w-0 flex flex-col">
        <DashboardTopbar
          onMenuClick={() => setMobileOpen(true)}
          title={titles[pathname] || 'Dashboard'}
          name={currentUser.name}
          initials={currentUser.initials}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-6xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
