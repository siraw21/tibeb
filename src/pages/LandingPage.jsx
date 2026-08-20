import { Link } from 'react-router-dom'
import { Icon } from '../lib/icons'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import Avatar from '../components/common/Avatar'
import DayRing from '../components/common/DayRing'
import ProgramCard from '../components/program/ProgramCard'
import { programs } from '../data/programs'
import { categories } from '../data/categories'
import { testimonials, leaderboard } from '../data/community'

const memberSteps = [
  { title: 'Discover a program', desc: 'Search by category, duration, or the outcome you want.' },
  { title: 'Join a cohort', desc: 'Enroll and start on the next cohort start date.' },
  { title: 'Complete daily missions', desc: 'One clear task a day — no guessing what to do next.' },
  { title: 'Track your progress', desc: 'Streaks, completion rate, and a live leaderboard.' },
  { title: 'Achieve your goal', desc: 'Finish with a certificate and proof of the work.' },
]

const creatorSteps = [
  { title: 'Create your program', desc: 'Structure missions, lessons, and live sessions.' },
  { title: 'Build your community', desc: 'Members discuss, share progress, ask questions.' },
  { title: 'Guide participants', desc: 'Host live sessions and give direct feedback.' },
  { title: 'Measure transformation', desc: 'Completion rates and engagement, not just views.' },
]

export default function LandingPage() {
  const featured = programs.slice(0, 6)

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative bg-ink grain-ink overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-gold bg-ink-2 border border-ink-3 rounded-full px-3 py-1.5 mb-6">
              <Icon name="Sparkles" className="w-3.5 h-3.5" /> Built for Ethiopian creators & doers
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.08] text-on-ink mb-6">
              The Ethiopian platform where creators build transformation challenges and people achieve goals together.
            </h1>
            <p className="text-on-ink-soft text-lg leading-relaxed mb-8 max-w-xl">
              Learn skills, build discipline, transform your body, and achieve goals through structured communities, challenges, and accountability.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button to="/discover" variant="primary" size="lg">
                Explore Challenges <Icon name="ArrowRight" className="w-4 h-4" />
              </Button>
              <Button to="/creator/dashboard" variant="outlineOnDark" size="lg">
                Start Creating
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-10 text-on-ink-soft text-sm">
              <div>
                <div className="font-display num-tabular text-2xl text-on-ink">12,400+</div>
                members transforming
              </div>
              <div className="w-px h-8 bg-ink-3" />
              <div>
                <div className="font-display num-tabular text-2xl text-on-ink">340+</div>
                active programs
              </div>
            </div>
          </div>

          {/* Hero visual collage: challenge card, progress ring, leaderboard, community */}
          <div className="relative h-[420px] hidden sm:block">
            <div className="absolute top-0 left-4 w-64 bg-card rounded-[var(--radius-card)] shadow-2xl p-4 -rotate-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 rounded-lg bg-gold-pale flex items-center justify-center">
                  <Icon name="Code2" className="w-4 h-4 text-gold-deep" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-ink truncate">30 Days Full Stack</p>
                  <p className="text-xs text-ink-faint">245 participants</p>
                </div>
              </div>
              <div className="w-full h-1.5 bg-paper-2 rounded-full overflow-hidden">
                <div className="h-full bg-gold rounded-full" style={{ width: '65%' }} />
              </div>
              <p className="text-[11px] text-ink-faint mt-1.5">Day 20 of 30 · 65% complete</p>
            </div>

            <div className="absolute top-24 right-0 w-48 bg-card rounded-[var(--radius-card)] shadow-2xl p-4 rotate-2 flex items-center gap-3">
              <DayRing current={12} total={30} tone="forest" size={56} />
              <div>
                <p className="text-xs text-ink-faint">Current streak</p>
                <p className="font-display text-lg text-ink flex items-center gap-1">
                  12 days <Icon name="Flame" className="w-4 h-4 text-rust" />
                </p>
              </div>
            </div>

            <div className="absolute bottom-16 left-0 w-60 bg-card rounded-[var(--radius-card)] shadow-2xl p-4 -rotate-2">
              <p className="text-xs font-semibold text-ink-faint uppercase tracking-wide mb-2.5 flex items-center gap-1.5">
                <Icon name="Trophy" className="w-3.5 h-3.5 text-gold-deep" /> Leaderboard
              </p>
              <div className="space-y-2">
                {leaderboard.slice(0, 3).map((l) => (
                  <div key={l.rank} className="flex items-center gap-2">
                    <span className="w-4 text-xs num-tabular text-ink-faint">{l.rank}</span>
                    <Avatar initials={l.initials} size="sm" />
                    <span className="text-xs text-ink truncate flex-1">{l.name}</span>
                    <span className="text-xs num-tabular text-ink-faint">{l.completed}/{l.total}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 right-4 w-56 bg-card rounded-[var(--radius-card)] shadow-2xl p-4 rotate-3">
              <div className="flex items-center gap-2 mb-1.5">
                <Avatar initials="AK" size="sm" />
                <span className="text-xs font-medium text-ink">Abenezer Kifle</span>
              </div>
              <p className="text-xs text-ink-soft leading-snug">"Day 20 done ✅ Finally got my login form validating."</p>
              <p className="text-[11px] text-ink-faint mt-1.5 flex items-center gap-1">
                <Icon name="Heart" className="w-3 h-3" /> 14
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl text-ink mb-3">How it works</h2>
          <p className="text-ink-faint">Structure turns intention into a finished thing.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-faint mb-5">For members</h3>
            <ol className="space-y-5">
              {memberSteps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-gold-pale text-gold-deep font-display num-tabular text-sm font-semibold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-ink">{s.title}</p>
                    <p className="text-sm text-ink-faint">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-faint mb-5">For creators</h3>
            <ol className="space-y-5">
              {creatorSteps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-forest-pale text-forest-deep font-display num-tabular text-sm font-semibold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-ink">{s.title}</p>
                    <p className="text-sm text-ink-faint">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="bg-paper-2 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="font-display text-3xl text-ink mb-8">Explore by category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((c) => (
              <Link
                key={c.id}
                to={`/discover?category=${c.id}`}
                className="group bg-card border border-line rounded-[var(--radius-card)] p-5 flex flex-col gap-3 hover:border-ink/25 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-paper-2 flex items-center justify-center group-hover:bg-gold-pale transition-colors">
                  <Icon name={c.icon} className="w-5 h-5 text-ink-soft group-hover:text-gold-deep" />
                </div>
                <div>
                  <p className="font-medium text-ink text-sm">{c.name}</p>
                  <p className="text-xs text-ink-faint">{c.programCount} programs</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROGRAMS ============ */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-display text-3xl text-ink mb-2">Featured programs</h2>
            <p className="text-ink-faint">Structured challenges people are finishing right now.</p>
          </div>
          <Button to="/discover" variant="ghost" size="sm" className="hidden sm:inline-flex shrink-0">
            View all <Icon name="ArrowRight" className="w-4 h-4" />
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>
      </section>

      {/* ============ CREATOR SUCCESS ============ */}
      <section className="bg-ink grain-ink">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-gold bg-ink-2 border border-ink-3 rounded-full px-3 py-1.5 mb-5">
              <Icon name="GraduationCap" className="w-3.5 h-3.5" /> For creators
            </span>
            <h2 className="font-display text-3xl text-on-ink mb-4 leading-snug">
              Turn your knowledge into structured transformation experiences.
            </h2>
            <p className="text-on-ink-soft mb-8 leading-relaxed">
              Stop shipping one-off videos nobody finishes. Build a program with daily missions, live sessions, and
              a community that keeps people accountable — and see exactly how many actually transform.
            </p>
            <Button to="/creator/dashboard" variant="primary" size="lg">
              Start Creating <Icon name="ArrowRight" className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Total participants', value: '2,540', icon: 'Users' },
              { label: 'Avg. completion', value: '76%', icon: 'TrendingUp' },
              { label: 'Programs live', value: '12', icon: 'BookOpen' },
              { label: 'Revenue this month', value: '45,000 ETB', icon: 'Wallet' },
            ].map((s) => (
              <div key={s.label} className="bg-ink-2 border border-ink-3 rounded-[var(--radius-card)] p-5">
                <Icon name={s.icon} className="w-4 h-4 text-gold mb-3" />
                <div className="font-display num-tabular text-xl text-on-ink">{s.value}</div>
                <div className="text-xs text-on-ink-soft mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <h2 className="font-display text-3xl text-ink mb-10 text-center">People who finished</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-card border border-line rounded-[var(--radius-card)] p-6 flex flex-col">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Icon key={i} name="Star" className="w-4 h-4 text-gold-deep" />
                ))}
              </div>
              <p className="text-ink-soft text-sm leading-relaxed mb-5 flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-line">
                <Avatar initials={t.name.split(' ').map((n) => n[0]).join('')} size="sm" />
                <div>
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-xs text-ink-faint">{t.role}</p>
                </div>
              </div>
              <Badge tone="gold" className="mt-4 self-start">{t.programTitle}</Badge>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-24">
        <div className="bg-paper-2 border border-line rounded-[var(--radius-card)] px-8 py-14 text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-ink mb-3">Pick a challenge. Start tomorrow.</h2>
          <p className="text-ink-faint mb-8 max-w-md mx-auto">
            The next cohort of most programs starts within two weeks. Find yours.
          </p>
          <Button to="/discover" variant="primary" size="lg">
            Explore Challenges <Icon name="ArrowRight" className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </>
  )
}
