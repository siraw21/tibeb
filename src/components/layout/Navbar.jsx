import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Icon } from '../../lib/icons'
import Button from '../common/Button'

const links = [
  { to: '/discover', label: 'Discover' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/creator/dashboard', label: 'For Creators' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-line">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="w-8 h-8 rounded-lg bg-ink flex items-center justify-center">
            <span className="font-display text-gold font-bold text-sm">ጥ</span>
          </span>
          <span className="font-display font-semibold text-lg text-ink">Tibeb</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  isActive ? 'bg-paper-2 text-ink' : 'text-ink-soft hover:text-ink hover:bg-paper-2'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button to="/discover" variant="ghost" size="sm">Explore Challenges</Button>
          <Button to="/creator/dashboard" variant="primary" size="sm">Start Creating</Button>
        </div>

        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-paper-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Icon name={open ? 'X' : 'Menu'} className="w-5 h-5 text-ink" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-paper px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-ink-soft hover:bg-paper-2"
            >
              {l.label}
            </NavLink>
          ))}
          <div className="flex flex-col gap-2 mt-2">
            <Button to="/discover" variant="outline" size="sm" onClick={() => setOpen(false)}>Explore Challenges</Button>
            <Button to="/creator/dashboard" variant="primary" size="sm" onClick={() => setOpen(false)}>Start Creating</Button>
          </div>
        </div>
      )}
    </header>
  )
}
