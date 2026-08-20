import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import CreatorSidebar from './CreatorSidebar'
import DashboardTopbar from './DashboardTopbar'
import { creators } from '../../data/creators'

const titles = {
  '/creator/dashboard': 'Overview',
  '/creator/programs': 'Programs',
  '/creator/programs/new': 'Create Program',
  '/creator/members': 'Members',
  '/creator/sessions': 'Sessions',
  '/creator/analytics': 'Analytics',
  '/creator/earnings': 'Earnings',
  '/creator/settings': 'Settings',
}

const me = creators[0]

export default function CreatorLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-paper flex">
      <CreatorSidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="flex-1 min-w-0 flex flex-col">
        <DashboardTopbar
          onMenuClick={() => setMobileOpen(true)}
          title={titles[pathname] || 'Creator Studio'}
          name={me.name}
          initials={me.initials}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-6xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
