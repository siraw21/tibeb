import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../../lib/icons'
import { getTone } from '../../lib/tone'
import Button from '../../components/common/Button'
import CheckIn from '../../components/dashboard/CheckIn'
import { currentUser } from '../../data/users'
import { getProgram } from '../../data/programs'
import { missions } from '../../data/missions'

export default function MissionsPage() {
  const program = getProgram(currentUser.activeProgramId)
  const t = getTone(program.tone)
  const today = missions.find((m) => m.programId === program.id && m.day === currentUser.currentDay)
  const [completed, setCompleted] = useState(today?.completed || false)
  const [fileName, setFileName] = useState('')

  const lesson = [...program.lessons].reverse().find((l) => l.day <= today.day)

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-ink-faint mb-1">Day {today.day} of {program.duration}</p>
          <h1 className="font-display text-2xl text-ink">{today.title}</h1>
        </div>
        <span className={`${t.badgeBg} ${t.badgeText} text-xs font-medium px-3 py-1.5 rounded-full shrink-0`}>{program.title}</span>
      </div>

      <div className="bg-card border border-line rounded-[var(--radius-card)] p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-faint mb-2">Task</h2>
        <p className="text-ink-soft leading-relaxed mb-6">{today.description}</p>

        {lesson && (
          <div className="mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-faint mb-2">Resource</h2>
            <div className="bg-ink rounded-xl aspect-video flex flex-col items-center justify-center gap-2">
              <Icon name="Play" className="w-8 h-8 text-on-ink" />
              <p className="text-on-ink-soft text-sm">{lesson.title}</p>
            </div>
          </div>
        )}

        <div className="mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-faint mb-2">Submission</h2>
          <label className="flex items-center gap-3 border border-dashed border-line rounded-xl px-4 py-4 cursor-pointer hover:border-ink/30 transition-colors">
            <Icon name="Upload" className="w-5 h-5 text-ink-faint shrink-0" />
            <span className="text-sm text-ink-faint truncate">{fileName || 'Upload proof of your work (screenshot, link, or file)'}</span>
            <input
              type="file"
              className="hidden"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
            />
          </label>
        </div>

        <Button
          onClick={() => setCompleted(true)}
          variant={completed ? 'outline' : 'primary'}
          size="lg"
          className="w-full"
          disabled={completed}
        >
          <Icon name="CheckCircle2" className="w-4 h-4" />
          {completed ? 'Mission completed' : 'Complete Mission'}
        </Button>
      </div>

      <CheckIn
        streak={currentUser.streak}
        completionPct={Math.round((currentUser.completedTasks / currentUser.totalTasks) * 100)}
        consistencyScore={currentUser.consistencyScore}
      />

      <div className="text-center">
        <Link to="/dashboard" className="text-sm text-sky hover:underline">Back to dashboard</Link>
      </div>
    </div>
  )
}
