import { useState } from 'react'
import { Icon } from '../../lib/icons'
import Avatar from '../../components/common/Avatar'
import ProgressBar from '../../components/common/ProgressBar'
import { creatorMembers } from '../../data/creatorDashboard'

export default function CreatorMembersPage() {
  const [openMenu, setOpenMenu] = useState(null)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl text-ink mb-1">Members</h1>
        <p className="text-ink-faint text-sm">{creatorMembers.length} participants across your programs</p>
      </div>

      <div className="bg-card border border-line rounded-[var(--radius-card)] overflow-hidden overflow-x-auto">
        <table className="w-full text-sm min-w-[640px]">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-ink-faint border-b border-line">
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Progress</th>
              <th className="px-5 py-3 font-medium">Last active</th>
              <th className="px-5 py-3 font-medium">Completion</th>
              <th className="px-5 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {creatorMembers.map((m) => (
              <tr key={m.id} className="hover:bg-paper-2/60 transition-colors relative">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar initials={m.initials} size="sm" />
                    <span className="font-medium text-ink">{m.name}</span>
                  </div>
                </td>
                <td className="px-5 py-4 w-40"><ProgressBar value={m.progress} tone="forest" /></td>
                <td className="px-5 py-4 text-ink-soft">{m.lastActive}</td>
                <td className="px-5 py-4 num-tabular text-ink-soft">{m.completion}%</td>
                <td className="px-5 py-4 text-right relative">
                  <button onClick={() => setOpenMenu(openMenu === m.id ? null : m.id)} className="text-ink-faint hover:text-ink p-1">
                    <Icon name="ChevronDown" className="w-4 h-4" />
                  </button>
                  {openMenu === m.id && (
                    <div className="absolute right-5 top-11 z-10 w-44 bg-card border border-line rounded-xl shadow-lg py-1.5 text-left">
                      <MenuItem icon="User" label="View profile" />
                      <MenuItem icon="MessageSquare" label="Send message" />
                      <MenuItem icon="Star" label="Give feedback" />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function MenuItem({ icon, label }) {
  return (
    <button className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-ink-soft hover:bg-paper-2">
      <Icon name={icon} className="w-4 h-4" /> {label}
    </button>
  )
}
