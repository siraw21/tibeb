import { useEffect, useRef, useState } from 'react'
import { Icon } from '../../lib/icons'
import { notifications as initialNotifications } from '../../data/community'

const typeIcon = {
  mission: 'CheckCircle2',
  session: 'Video',
  feedback: 'MessageSquare',
  community: 'MessageCircle',
}

export default function NotificationDropdown() {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState(initialNotifications)
  const ref = useRef(null)
  const unread = items.filter((n) => !n.read).length

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const markAllRead = () => setItems((prev) => prev.map((n) => ({ ...n, read: true })))

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-paper-2"
        aria-label="Notifications"
      >
        <Icon name="Bell" className="w-[18px] h-[18px] text-ink-soft" />
        {unread > 0 && (
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rust" />
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 max-w-[85vw] bg-card border border-line rounded-[var(--radius-card)] shadow-xl overflow-hidden z-50">
          <div className="flex items-center justify-between px-4 py-3 border-b border-line">
            <span className="font-display text-sm text-ink font-semibold">Notifications</span>
            {unread > 0 && (
              <button onClick={markAllRead} className="text-xs text-sky hover:underline">
                Mark all read
              </button>
            )}
          </div>
          <div className="max-h-80 overflow-y-auto divide-y divide-line">
            {items.map((n) => (
              <div key={n.id} className={`flex gap-3 px-4 py-3 ${!n.read ? 'bg-gold-pale/30' : ''}`}>
                <div className="w-8 h-8 rounded-full bg-paper-2 flex items-center justify-center shrink-0">
                  <Icon name={typeIcon[n.type] || 'Bell'} className="w-4 h-4 text-ink-soft" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-ink leading-snug">{n.text}</p>
                  <span className="text-xs text-ink-faint">{n.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
