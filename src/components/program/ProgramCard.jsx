import { Link } from 'react-router-dom'
import { Icon } from '../../lib/icons'
import { getTone } from '../../lib/tone'
import { getCreator } from '../../data/creators'
import Badge from '../common/Badge'
import Avatar from '../common/Avatar'

export default function ProgramCard({ program }) {
  const creator = getCreator(program.creatorId)
  const t = getTone(program.tone)
  const isFree = program.price === 0

  return (
    <Link
      to={`/program/${program.slug}`}
      className="group flex flex-col bg-card border border-line rounded-[var(--radius-card)] overflow-hidden hover:border-ink/25 hover:shadow-md transition-all duration-200"
    >
      <div className={`relative h-36 flex items-center justify-center ${t.badgeBg}`}>
        <Icon name={program.icon} className={`w-10 h-10 ${t.badgeText} opacity-70 group-hover:scale-110 transition-transform duration-200`} />
        <span className="absolute top-3 left-3">
          <Badge tone={program.tone}>{program.type}</Badge>
        </span>
        <span className="absolute top-3 right-3 bg-ink/85 text-on-ink text-xs font-medium px-2.5 py-1 rounded-full num-tabular">
          {program.duration}d
        </span>
      </div>

      <div className="flex-1 flex flex-col p-5">
        <h3 className="font-display text-base text-ink leading-snug mb-2 line-clamp-2">{program.title}</h3>

        <div className="flex items-center gap-2 mb-3">
          <Avatar initials={creator?.initials} size="sm" />
          <span className="text-sm text-ink-soft truncate">{creator?.name}</span>
        </div>

        <div className="flex items-center gap-3 text-xs text-ink-faint mb-4">
          <span className="flex items-center gap-1">
            <Icon name="Users" className="w-3.5 h-3.5" /> {program.members.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="Star" className="w-3.5 h-3.5 text-gold-deep" /> {program.rating}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="TrendingUp" className="w-3.5 h-3.5" /> {program.completionRate}%
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-3 border-t border-line">
          <div>
            <div className="font-display num-tabular text-ink font-semibold">
              {isFree ? 'Free' : `${program.price} ${program.currency}`}
            </div>
            <div className="text-[11px] text-ink-faint">
              Starts {new Date(program.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
          </div>
          <span className="text-xs font-medium text-ink flex items-center gap-1 group-hover:gap-1.5 transition-all">
            View <Icon name="ArrowRight" className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
