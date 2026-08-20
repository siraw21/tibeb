import { Link } from 'react-router-dom'
import { Icon } from '../../lib/icons'
import { getTone } from '../../lib/tone'
import Button from '../../components/common/Button'
import ProgressBar from '../../components/common/ProgressBar'
import Badge from '../../components/common/Badge'
import EmptyState from '../../components/common/EmptyState'
import { currentUser } from '../../data/users'
import { getProgram } from '../../data/programs'

export default function MyProgramsPage() {
  const active = currentUser.enrolledPrograms.filter((e) => e.status === 'active')
  const completed = currentUser.enrolledPrograms.filter((e) => e.status === 'completed')

  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-display text-2xl text-ink mb-1">My programs</h1>
        <p className="text-ink-faint text-sm">Everything you've joined, in one place.</p>
      </div>

      <section>
        <h2 className="font-display text-lg text-ink mb-4">Active ({active.length})</h2>
        {active.length === 0 ? (
          <EmptyState
            icon="BookOpen"
            title="No active programs yet"
            description="Discover a challenge and start building a streak."
            action={<Button to="/discover" variant="primary">Explore challenges</Button>}
          />
        ) : (
          <div className="grid sm:grid-cols-2 gap-5">
            {active.map((ep) => {
              const p = getProgram(ep.programId)
              const t = getTone(p.tone)
              return (
                <div key={ep.programId} className="bg-card border border-line rounded-[var(--radius-card)] p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${t.badgeBg}`}>
                      <Icon name={p.icon} className={`w-5 h-5 ${t.badgeText}`} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink truncate">{p.title}</p>
                      <Badge tone={p.tone} className="mt-1">{p.type}</Badge>
                    </div>
                  </div>
                  <ProgressBar value={ep.progress} tone={p.tone} className="mb-2" />
                  <div className="flex items-center justify-between text-xs text-ink-faint mb-4">
                    <span className="num-tabular">Day {ep.currentDay} of {p.duration}</span>
                    <span className="num-tabular">{ep.progress}%</span>
                  </div>
                  <Button to="/missions" variant="dark" size="sm" className="w-full">Continue</Button>
                </div>
              )
            })}
          </div>
        )}
      </section>

      <section>
        <h2 className="font-display text-lg text-ink mb-4">Completed ({completed.length})</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {completed.map((ep) => {
            const p = getProgram(ep.programId)
            return (
              <div key={ep.programId} className="bg-card border border-line rounded-[var(--radius-card)] p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-forest-pale flex items-center justify-center shrink-0">
                  <Icon name="Award" className="w-5 h-5 text-forest-deep" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-ink truncate">{p.title}</p>
                  <p className="text-xs text-ink-faint">Completed · {p.duration} days</p>
                </div>
                <Link to="/dashboard/certificates" className="text-xs text-sky hover:underline shrink-0">Certificate</Link>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
