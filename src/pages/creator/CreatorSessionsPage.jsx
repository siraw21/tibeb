import { Icon } from '../../lib/icons'
import Button from '../../components/common/Button'
import { programs } from '../../data/programs'

const upcoming = programs
  .flatMap((p) => p.sessions.map((s) => ({ ...s, programTitle: p.title })))
  .sort((a, b) => new Date(a.date) - new Date(b.date))

export default function CreatorSessionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-display text-2xl text-ink mb-1">Sessions</h1>
          <p className="text-ink-faint text-sm">Live Google Meet sessions across your programs</p>
        </div>
        <Button variant="primary"><Icon name="Plus" className="w-4 h-4" /> Schedule session</Button>
      </div>

      <div className="space-y-3">
        {upcoming.map((s, i) => (
          <div key={i} className="bg-card border border-line rounded-[var(--radius-card)] p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-sky-pale flex items-center justify-center shrink-0">
              <Icon name="Video" className="w-5 h-5 text-sky-deep" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-ink">{s.title}</p>
              <p className="text-xs text-ink-faint">{s.programTitle}</p>
            </div>
            <div className="text-right shrink-0 hidden sm:block">
              <p className="text-sm text-ink num-tabular">
                {new Date(s.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </p>
              <p className="text-xs text-ink-faint">
                {new Date(s.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
              </p>
            </div>
            <Button variant="outline" size="sm" className="shrink-0">Start</Button>
          </div>
        ))}
      </div>
    </div>
  )
}
