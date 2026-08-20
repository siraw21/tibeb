import { getTone } from '../../lib/tone'

export default function Badge({ tone = 'gold', children, className = '' }) {
  const t = getTone(tone)
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${t.badgeBg} ${t.badgeText} ${className}`}
    >
      {children}
    </span>
  )
}
