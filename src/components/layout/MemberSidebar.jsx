import { NavLink, Link } from 'react-router-dom'
import { Icon } from '../../lib/icons'

const items = [
  { to: '/dashboard', label: 'Dashboard', icon: 'LayoutDashboard', end: true },
  { to: '/dashboard/programs', label: 'My Programs', icon: 'BookOpen' },
  { to: '/missions', label: 'Missions', icon: 'CheckCircle2' },
  { to: '/community', label: 'Community', icon: 'MessageSquare' },
  { to: '/leaderboard', label: 'Leaderboard', icon: 'Trophy' },
  { to: '/dashboard/certificates', label: 'Certificates', icon: 'Award' },
  { to: '/dashboard/profile', label: 'Profile', icon: 'User' },
]

export default function MemberSidebar({ mobileOpen, onClose }) {
  return (
    <>
      {mobileOpen && (
        <button className="fixed inset-0 bg-ink/40 z-30 md:hidden" onClick={onClose} aria-label="Close menu" />
      )}
      <aside
        className={`fixed md:sticky top-0 md:top-16 left-0 h-screen md:h-[calc(100vh-4rem)] w-64 shrink-0 bg-ink text-on-ink flex flex-col z-40 transition-transform duration-200 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="h-16 flex items-center gap-2 px-6 md:hidden border-b border-ink-3">
          <span className="w-7 h-7 rounded-lg bg-gold flex items-center justify-center">
            <span className="font-display text-ink font-bold text-xs">ጥ</span>
          </span>
          <span className="font-display font-semibold text-on-ink">Tibeb</span>
        </div>
        <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.end}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-ink-2 text-gold' : 'text-on-ink-soft hover:bg-ink-2 hover:text-on-ink'
                }`
              }
            >
              <Icon name={it.icon} className="w-[18px] h-[18px]" />
              {it.label}
            </NavLink>
          ))}
        </nav>
        <div className="px-3 py-4 border-t border-ink-3">
          <Link to="/" className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm text-on-ink-soft hover:bg-ink-2 hover:text-on-ink">
            <Icon name="LogOut" className="w-[18px] h-[18px]" />
            Back to site
          </Link>
        </div>
      </aside>
    </>
  )
}
