import { getTone } from '../../lib/tone'

const toneStroke = {
  gold: '#e8a33d',
  forest: '#2f6b4f',
  rust: '#b4472a',
  sky: '#3d6e8f',
}

export default function DayRing({
  current,
  total,
  tone = 'gold',
  size = 64,
  strokeWidth = 6,
  label,
  onDark = false,
}) {
  const pct = total > 0 ? Math.min(current / total, 1) : 0
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - pct)
  const trackColor = onDark ? 'rgba(240,238,227,0.16)' : 'var(--color-line)'

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="day-ring">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={trackColor} strokeWidth={strokeWidth} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={toneStroke[tone] || toneStroke.gold}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`num-tabular font-semibold ${onDark ? 'text-on-ink' : 'text-ink'}`} style={{ fontSize: size * 0.24 }}>
          {current}
        </span>
        {label && (
          <span className={`text-[9px] uppercase tracking-wide ${onDark ? 'text-on-ink-soft' : 'text-ink-faint'}`}>
            {label}
          </span>
        )}
      </div>
    </div>
  )
}
