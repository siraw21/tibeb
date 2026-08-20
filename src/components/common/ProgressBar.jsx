import { getTone } from '../../lib/tone'

export default function ProgressBar({ value, tone = 'gold', className = '', trackClassName = '', height = 'h-2' }) {
  const t = getTone(tone)
  const pct = Math.max(0, Math.min(100, value))
  return (
    <div className={`w-full rounded-full bg-paper-2 overflow-hidden ${height} ${trackClassName}`}>
      <div
        className={`${height} rounded-full ${t.bar} transition-all duration-500 ${className}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
