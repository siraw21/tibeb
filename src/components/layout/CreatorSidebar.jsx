import { NavLink, Link } from 'react-router-dom'
import { Icon } from '../../lib/icons'

const items = [
  { to: '/creator/dashboard', label: 'Overview', icon: 'LayoutDashboard', end: true },
  { to: '/creator/programs', label: 'Programs', icon: 'BookOpen' },
  { to: '/creator/members', label: 'Members', icon: 'Users' },
  { to: '/creator/sessions', label: 'Sessions', icon: 'CalendarDays' },
  { to: '/creator/analytics', label: 'Analytics', icon: 'BarChart3' },
  { to: '/creator/earnings', label: 'Earnings', icon: 'Wallet' },
  { to: '/creator/settings', label: 'Settings', icon: 'Settings' },
]

export default function CreatorSidebar({ mobileOpen, onClose }) {
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
          <span className="font-display font-semibold text-on-ink">Tibeb <span className="text-on-ink-soft font-normal">Creator</span></span>
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
