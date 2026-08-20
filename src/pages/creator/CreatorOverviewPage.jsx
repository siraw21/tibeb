import { Link } from 'react-router-dom'
import { Icon } from '../../lib/icons'
import StatCard from '../../components/common/StatCard'
import Button from '../../components/common/Button'
import Avatar from '../../components/common/Avatar'
import ProgressBar from '../../components/common/ProgressBar'
import { creatorStats, creatorPrograms, creatorMembers } from '../../data/creatorDashboard'

export default function CreatorOverviewPage() {
  const recentMembers = creatorMembers.slice(0, 4)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-display text-2xl text-ink mb-1">Welcome back</h1>
          <p className="text-ink-faint text-sm">Here's how your programs are performing.</p>
        </div>
        <Button to="/creator/programs/new" variant="primary">
          <Icon name="Plus" className="w-4 h-4" /> New program
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon="BookOpen" label="Total programs" value={creatorStats.totalPrograms} tone="gold" />
        <StatCard icon="Users" label="Total participants" value={creatorStats.totalParticipants.toLocaleString()} tone="forest" />
        <StatCard icon="TrendingUp" label="Average completion" value={`${creatorStats.avgCompletion}%`} tone="sky" />
        <StatCard icon="Wallet" label="Revenue" value={`${creatorStats.revenue.toLocaleString()} ETB`} tone="rust" />
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        <div className="bg-card border border-line rounded-[var(--radius-card)] p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg text-ink">Your programs</h2>
            <Link to="/creator/programs" className="text-sm text-sky hover:underline">Manage all</Link>
          </div>
          <div className="space-y-3">
            {creatorPrograms.slice(0, 4).map((p) => (
              <div key={p.id} className="flex items-center gap-4 py-2">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-ink truncate">{p.name}</p>
                  <p className="text-xs text-ink-faint">{p.type} · {p.members} members</p>
                </div>
                <div className="w-28 hidden sm:block">
                  <ProgressBar value={p.completion} tone="forest" />
                </div>
                <span className="text-xs num-tabular text-ink-faint w-10 text-right">{p.completion}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-line rounded-[var(--radius-card)] p-5 h-fit">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg text-ink">Recently active</h2>
            <Link to="/creator/members" className="text-sm text-sky hover:underline">All</Link>
          </div>
          <div className="space-y-3.5">
            {recentMembers.map((m) => (
              <div key={m.id} className="flex items-center gap-3">
                <Avatar initials={m.initials} size="sm" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-ink truncate">{m.name}</p>
                  <p className="text-xs text-ink-faint">{m.lastActive}</p>
                </div>
                <span className="text-xs num-tabular text-ink-faint">{m.progress}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
