import { Icon } from '../../lib/icons'
import Avatar from '../common/Avatar'
import NotificationDropdown from '../notifications/NotificationDropdown'

export default function DashboardTopbar({ onMenuClick, title, name, initials }) {
  return (
    <header className="sticky top-0 z-20 h-16 bg-paper/90 backdrop-blur border-b border-line flex items-center justify-between px-4 sm:px-6">
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onMenuClick}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-paper-2 shrink-0"
          aria-label="Open menu"
        >
          <Icon name="Menu" className="w-5 h-5 text-ink" />
        </button>
        <h1 className="font-display text-lg text-ink truncate">{title}</h1>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <NotificationDropdown />
        <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-line">
          <Avatar initials={initials} size="sm" />
          <span className="text-sm font-medium text-ink">{name}</span>
        </div>
      </div>
    </header>
  )
}
