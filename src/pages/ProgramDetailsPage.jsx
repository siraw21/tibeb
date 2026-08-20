import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Icon } from '../lib/icons'
import { getTone } from '../lib/tone'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import Avatar from '../components/common/Avatar'
import { getProgram } from '../data/programs'
import { getCreator } from '../data/creators'
import { communityPosts, leaderboard } from '../data/community'

export default function ProgramDetailsPage() {
  const { slug } = useParams()
  const program = getProgram(slug)
  const [expandedDay, setExpandedDay] = useState(null)

  if (!program) return <Navigate to="/discover" replace />

  const creator = getCreator(program.creatorId)
  const t = getTone(program.tone)
  const isFree = program.price === 0
  const posts = communityPosts.filter((p) => p.programId === program.id).slice(0, 2)

  return (
    <div>
      {/* Header */}
      <div className={`${t.badgeBg}`}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
          <Badge tone={program.tone} className="mb-4">{program.type} · {program.category}</Badge>
          <h1 className="font-display text-3xl sm:text-4xl text-ink mb-4 max-w-2xl">{program.title}</h1>
          <p className="text-ink-soft max-w-2xl mb-6">{program.short}</p>
          <div className="flex flex-wrap items-center gap-5 text-sm">
            <Link to={`/creator/${creator.id}`} className="flex items-center gap-2 hover:opacity-80">
              <Avatar initials={creator.initials} size="sm" />
              <span className="font-medium text-ink">{creator.name}</span>
            </Link>
            <span className="flex items-center gap-1 text-ink-soft">
              <Icon name="Star" className="w-4 h-4 text-gold-deep" /> {program.rating} rating
            </span>
            <span className="flex items-center gap-1 text-ink-soft">
              <Icon name="Users" className="w-4 h-4" /> {program.members.toLocaleString()} members
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 grid lg:grid-cols-[1fr_320px] gap-12">
        <div className="space-y-12 min-w-0">
          {/* Description */}
          <section>
            <h2 className="font-display text-xl text-ink mb-3">About this program</h2>
            <p className="text-ink-soft leading-relaxed">{program.description}</p>
          </section>

          {/* Learning outcomes */}
          <section>
            <h2 className="font-display text-xl text-ink mb-4">After completion, you'll be able to</h2>
            <ul className="space-y-2.5">
              {program.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-ink-soft">
                  <Icon name="CheckCircle2" className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                  {o}
                </li>
              ))}
            </ul>
          </section>

          {/* Program structure / timeline */}
          <section>
            <h2 className="font-display text-xl text-ink mb-4">Program structure</h2>
            <div className="space-y-2">
              {program.curriculum.map((c) => (
                <button
                  key={c.day}
                  onClick={() => setExpandedDay(expandedDay === c.day ? null : c.day)}
                  className="w-full text-left flex items-center gap-4 bg-card border border-line rounded-xl px-4 py-3.5 hover:border-ink/25 transition-colors"
                >
                  <span className="w-9 h-9 rounded-full bg-paper-2 num-tabular text-sm font-semibold text-ink flex items-center justify-center shrink-0">
                    {c.day}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-ink">{c.title}</p>
                    {expandedDay === c.day && <p className="text-xs text-ink-faint mt-1">{c.description}</p>}
                  </div>
                  <Icon name={expandedDay === c.day ? 'ChevronDown' : 'ChevronRight'} className="w-4 h-4 text-ink-faint shrink-0" />
                </button>
              ))}
            </div>
          </section>

          {/* Live sessions */}
          {program.sessions.length > 0 && (
            <section>
              <h2 className="font-display text-xl text-ink mb-4">Live sessions</h2>
              <div className="space-y-3">
                {program.sessions.map((s) => (
                  <div key={s.title} className="flex items-center gap-4 bg-card border border-line rounded-xl px-4 py-3.5">
                    <div className="w-10 h-10 rounded-full bg-sky-pale flex items-center justify-center shrink-0">
                      <Icon name="Video" className="w-4 h-4 text-sky-deep" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-ink">{s.title}</p>
                      <p className="text-xs text-ink-faint">
                        {new Date(s.date).toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })} · {s.platform}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="shrink-0">Join</Button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Lessons */}
          {program.lessons.length > 0 && (
            <section>
              <h2 className="font-display text-xl text-ink mb-4">Lessons</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {program.lessons.map((l) => (
                  <div key={l.title} className="bg-card border border-line rounded-xl overflow-hidden">
                    <div className="aspect-video bg-ink flex items-center justify-center">
                      <Icon name="Play" className="w-8 h-8 text-on-ink" />
                    </div>
                    <div className="p-3.5">
                      <p className="text-xs text-ink-faint mb-1">Day {l.day}</p>
                      <p className="text-sm font-medium text-ink">{l.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Community preview */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xl text-ink">Community discussions</h2>
              <Link to="/community" className="text-sm text-sky hover:underline">See all</Link>
            </div>
            <div className="space-y-3">
              {posts.map((p) => (
                <div key={p.id} className="bg-card border border-line rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar initials={p.initials} size="sm" />
                    <span className="text-sm font-medium text-ink">{p.author}</span>
                    <span className="text-xs text-ink-faint">· {p.time}</span>
                  </div>
                  <p className="text-sm text-ink-soft">{p.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Leaderboard preview */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xl text-ink">Leaderboard</h2>
              <Link to="/leaderboard" className="text-sm text-sky hover:underline">Full leaderboard</Link>
            </div>
            <div className="bg-card border border-line rounded-xl divide-y divide-line">
              {leaderboard.slice(0, 3).map((l) => (
                <div key={l.rank} className="flex items-center gap-3 px-4 py-3">
                  <span className="w-5 num-tabular text-sm text-ink-faint">{l.rank}</span>
                  <Avatar initials={l.initials} size="sm" />
                  <span className="text-sm text-ink flex-1">{l.name}</span>
                  <span className="text-xs num-tabular text-ink-faint">{l.completed}/{l.total} missions</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sticky CTA sidebar */}
        <aside className="lg:sticky lg:top-24 h-fit">
          <div className="bg-card border border-line rounded-[var(--radius-card)] p-6">
            <div className="font-display num-tabular text-2xl text-ink mb-1">
              {isFree ? 'Free' : `${program.price} ${program.currency}`}
            </div>
            <p className="text-xs text-ink-faint mb-5">
              {program.maxParticipants - program.members} spots left of {program.maxParticipants}
            </p>
            <Button to={`/checkout/${program.slug}`} variant="primary" size="lg" className="w-full mb-3">
              Join Challenge
            </Button>
            <dl className="space-y-2.5 text-sm mt-5 pt-5 border-t border-line">
              <Row label="Starts" value={new Date(program.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} />
              <Row label="Duration" value={`${program.duration} days`} />
              <Row label="Type" value={program.type} />
              <Row label="Completion rate" value={`${program.completionRate}%`} />
            </dl>
          </div>
        </aside>
      </div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-ink-faint">{label}</dt>
      <dd className="text-ink font-medium">{value}</dd>
    </div>
  )
}
