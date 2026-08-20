import { Icon } from '../../lib/icons'

export default function EmptyState({ icon = 'Sparkles', title, description, action }) {
  return (
    <div className="flex flex-col items-center text-center py-16 px-6 border border-dashed border-line rounded-[var(--radius-card)]">
      <div className="w-12 h-12 rounded-full bg-paper-2 flex items-center justify-center mb-4">
        <Icon name={icon} className="w-5 h-5 text-ink-faint" />
      </div>
      <h3 className="font-display text-lg text-ink mb-1">{title}</h3>
      {description && <p className="text-sm text-ink-faint max-w-sm mb-5">{description}</p>}
      {action}
    </div>
  )
}
