import { Link } from 'react-router-dom'
import { Icon } from '../../lib/icons'
import { getTone } from '../../lib/tone'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import DayRing from '../../components/common/DayRing'
import ProgressBar from '../../components/common/ProgressBar'
import { currentUser } from '../../data/users'
import { getProgram } from '../../data/programs'

const greeting = () => {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

export default function DashboardPage() {
  const activeProgram = getProgram(currentUser.activeProgramId)
  const t = getTone(activeProgram.tone)
  const firstName = currentUser.name.split(' ')[0]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl text-ink">{greeting()}, {firstName}</h1>
        <p className="text-ink-faint text-sm mt-1">Day {currentUser.currentDay} of your {activeProgram.title} journey.</p>
      </div>

      {/* Current challenge progress card */}
      <div className={`rounded-[var(--radius-card)] p-6 sm:p-8 ${t.badgeBg} flex flex-col sm:flex-row items-start sm:items-center gap-8`}>
        <DayRing current={currentUser.currentDay} total={activeProgram.duration} tone={activeProgram.tone} size={96} label="days" />
        <div className="flex-1 min-w-0">
          <Badge tone={activeProgram.tone} className="mb-2">Current challenge</Badge>
          <h2 className="font-display text-xl text-ink mb-3">{activeProgram.title}</h2>
          <ProgressBar value={(currentUser.completedTasks / currentUser.totalTasks) * 100} tone={activeProgram.tone} height="h-2.5" />
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink-soft mt-3">
            <span className="num-tabular">{Math.round((currentUser.completedTasks / currentUser.totalTasks) * 100)}% complete</span>
            <span className="num-tabular flex items-center gap-1"><Icon name="Flame" className="w-4 h-4 text-rust" /> {currentUser.streak}-day streak</span>
            <span className="num-tabular">{currentUser.completedTasks}/{currentUser.totalTasks} tasks done</span>
          </div>
        </div>
        <Button to="/missions" variant="dark" className="shrink-0">Continue <Icon name="ArrowRight" className="w-4 h-4" /></Button>
      </div>

      {/* Achievement */}
      <div className="bg-card border border-line rounded-[var(--radius-card)] p-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gold-pale flex items-center justify-center shrink-0">
          <Icon name={currentUser.achievements[0].icon} className="w-6 h-6 text-gold-deep" />
        </div>
        <div>
          <p className="font-display text-ink font-semibold">{currentUser.achievements[0].title}</p>
          <p className="text-sm text-ink-faint">{currentUser.achievements[0].description}</p>
        </div>
      </div>

      {/* My programs strip */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg text-ink">My programs</h2>
          <Link to="/dashboard/programs" className="text-sm text-sky hover:underline">View all</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentUser.enrolledPrograms.map((ep) => {
            const prog = getProgram(ep.programId)
            const pt = getTone(prog.tone)
            return (
              <Link key={ep.programId} to={ep.status === 'completed' ? '/dashboard/certificates' : '/missions'} className="bg-card border border-line rounded-[var(--radius-card)] p-5 hover:border-ink/25 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${pt.badgeBg}`}>
                    <Icon name={prog.icon} className={`w-4 h-4 ${pt.badgeText}`} />
                  </div>
                  <p className="text-sm font-medium text-ink truncate flex-1">{prog.title}</p>
                </div>
                <ProgressBar value={ep.progress} tone={prog.tone} className="mb-2" />
                <div className="flex items-center justify-between text-xs text-ink-faint">
                  <span className="num-tabular">Day {ep.currentDay}/{prog.duration}</span>
                  <span className={ep.status === 'completed' ? 'text-forest-deep font-medium' : ''}>
                    {ep.status === 'completed' ? 'Completed' : `${ep.progress}%`}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
