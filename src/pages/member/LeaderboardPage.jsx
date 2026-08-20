import { Icon } from '../../lib/icons'
import Avatar from '../../components/common/Avatar'
import ProgressBar from '../../components/common/ProgressBar'
import { leaderboard } from '../../data/community'
import { currentUser } from '../../data/users'
import { getProgram } from '../../data/programs'

const rankTone = { 1: 'text-gold-deep', 2: 'text-ink-faint', 3: 'text-rust-deep' }

export default function LeaderboardPage() {
  const program = getProgram(currentUser.activeProgramId)

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="font-display text-2xl text-ink mb-1">Leaderboard</h1>
        <p className="text-ink-faint text-sm">{program.title} · ranked by missions completed</p>
      </div>

      <div className="bg-card border border-line rounded-[var(--radius-card)] overflow-hidden">
        <div className="hidden sm:grid grid-cols-[3rem_1fr_8rem_5rem_5rem] gap-4 px-5 py-3 text-xs uppercase tracking-wide text-ink-faint border-b border-line">
          <span>Rank</span>
          <span>Member</span>
          <span>Progress</span>
          <span>Points</span>
          <span>Streak</span>
        </div>
        <div className="divide-y divide-line">
          {leaderboard.map((l) => (
            <div
              key={l.rank}
              className={`grid grid-cols-[3rem_1fr_5rem] sm:grid-cols-[3rem_1fr_8rem_5rem_5rem] gap-4 items-center px-5 py-4 ${
                l.isCurrentUser ? 'bg-gold-pale/40' : ''
              }`}
            >
              <span className={`font-display num-tabular font-semibold ${rankTone[l.rank] || 'text-ink-faint'}`}>
                {l.rank <= 3 ? <Icon name="Trophy" className="w-4 h-4" /> : l.rank}
              </span>
              <div className="flex items-center gap-3 min-w-0">
                <Avatar initials={l.initials} size="sm" />
                <span className="text-sm font-medium text-ink truncate">{l.name}{l.isCurrentUser && ' (you)'}</span>
              </div>
              <div className="hidden sm:block">
                <ProgressBar value={(l.completed / l.total) * 100} tone={l.isCurrentUser ? 'gold' : 'forest'} />
                <span className="text-xs text-ink-faint num-tabular">{l.completed}/{l.total}</span>
              </div>
              <span className="num-tabular text-sm text-ink">{l.points.toLocaleString()}</span>
              <span className="num-tabular text-sm text-ink flex items-center gap-1">
                {l.streak} <Icon name="Flame" className="w-3.5 h-3.5 text-rust" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
