import { useParams, Navigate } from 'react-router-dom'
import { Icon } from '../lib/icons'
import { getTone } from '../lib/tone'
import Avatar from '../components/common/Avatar'
import Badge from '../components/common/Badge'
import ProgramCard from '../components/program/ProgramCard'
import { getCreator } from '../data/creators'
import { programs } from '../data/programs'

export default function CreatorPublicProfilePage() {
  const { id } = useParams()
  const creator = getCreator(id)
  if (!creator) return <Navigate to="/discover" replace />

  const t = getTone(creator.tone)
  const creatorPrograms = programs.filter((p) => p.creatorId === creator.id)

  return (
    <div>
      <div className={`${t.badgeBg}`}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Avatar initials={creator.initials} size="lg" className="w-20 h-20 text-2xl" />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="font-display text-2xl sm:text-3xl text-ink">{creator.name}</h1>
              {creator.verified && <Icon name="ShieldCheck" className="w-5 h-5 text-forest" />}
            </div>
            <p className="text-ink-soft text-sm mb-3">@{creator.handle}</p>
            <div className="flex flex-wrap gap-2">
              {creator.skills.map((s) => (
                <Badge key={s} tone={creator.tone}>{s}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 grid lg:grid-cols-[1fr_260px] gap-12">
        <div className="space-y-10 min-w-0">
          <section>
            <h2 className="font-display text-xl text-ink mb-3">About</h2>
            <p className="text-ink-soft leading-relaxed">{creator.bio}</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">Success stories</h2>
            <ul className="space-y-2.5">
              {creator.successStories.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-ink-soft">
                  <Icon name="Sparkles" className="w-4 h-4 text-gold-deep shrink-0 mt-1" />
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-4">Programs by {creator.name.split(' ')[0]}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {creatorPrograms.map((p) => (
                <ProgramCard key={p.id} program={p} />
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-4 h-fit">
          <div className="bg-card border border-line rounded-[var(--radius-card)] p-5 space-y-4">
            <Stat icon="BookOpen" label="Programs created" value={creator.programsCount} />
            <Stat icon="Users" label="Students taught" value={creator.studentsCount.toLocaleString()} />
            <Stat icon="Star" label="Average rating" value={creator.rating} />
            <Stat icon="Heart" label="Followers" value={creator.followers.toLocaleString()} />
          </div>
        </aside>
      </div>
    </div>
  )
}

function Stat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-paper-2 flex items-center justify-center shrink-0">
        <Icon name={icon} className="w-4 h-4 text-ink-soft" />
      </div>
      <div>
        <p className="font-display num-tabular text-ink font-semibold leading-none">{value}</p>
        <p className="text-xs text-ink-faint mt-1">{label}</p>
      </div>
    </div>
  )
}
