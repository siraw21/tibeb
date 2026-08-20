import { Icon } from '../../lib/icons'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import { creatorPrograms } from '../../data/creatorDashboard'

const statusTone = { Active: 'forest', Draft: 'sky', Archived: 'rust' }

export default function CreatorProgramsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-display text-2xl text-ink mb-1">Programs</h1>
          <p className="text-ink-faint text-sm">{creatorPrograms.length} programs</p>
        </div>
        <Button to="/creator/programs/new" variant="primary">
          <Icon name="Plus" className="w-4 h-4" /> Create new program
        </Button>
      </div>

      <div className="bg-card border border-line rounded-[var(--radius-card)] overflow-hidden overflow-x-auto">
        <table className="w-full text-sm min-w-[640px]">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-ink-faint border-b border-line">
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Type</th>
              <th className="px-5 py-3 font-medium">Members</th>
              <th className="px-5 py-3 font-medium">Completion</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {creatorPrograms.map((p) => (
              <tr key={p.id} className="hover:bg-paper-2/60 transition-colors">
                <td className="px-5 py-4 font-medium text-ink">{p.name}</td>
                <td className="px-5 py-4 text-ink-soft">{p.type}</td>
                <td className="px-5 py-4 num-tabular text-ink-soft">{p.members.toLocaleString()}</td>
                <td className="px-5 py-4 num-tabular text-ink-soft">{p.completion}%</td>
                <td className="px-5 py-4">
                  <Badge tone={statusTone[p.status]}>{p.status}</Badge>
                </td>
                <td className="px-5 py-4 text-right">
                  <button className="text-ink-faint hover:text-ink">
                    <Icon name="ChevronRight" className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
