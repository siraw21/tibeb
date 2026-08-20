import { Icon } from '../../lib/icons'

export default function StatCard({ icon, label, value, sub, tone = 'gold' }) {
  const toneBg = { gold: 'bg-gold-pale text-gold-deep', forest: 'bg-forest-pale text-forest-deep', rust: 'bg-rust-pale text-rust-deep', sky: 'bg-sky-pale text-sky-deep' }
  return (
    <div className="bg-card border border-line rounded-[var(--radius-card)] p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs uppercase tracking-wide text-ink-faint">{label}</span>
        {icon && (
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${toneBg[tone]}`}>
            <Icon name={icon} className="w-4 h-4" />
          </div>
        )}
      </div>
      <div className="font-display num-tabular text-3xl text-ink">{value}</div>
      {sub && <div className="text-xs text-ink-faint mt-1">{sub}</div>}
    </div>
  )
}
