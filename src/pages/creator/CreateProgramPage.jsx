import { useState } from 'react'
import { Icon } from '../../lib/icons'
import Button from '../../components/common/Button'
import { categories } from '../../data/categories'

const types = ['Challenge', 'Workshop', 'Bootcamp', 'Cohort']

function Section({ title, description, children }) {
  return (
    <section className="bg-card border border-line rounded-[var(--radius-card)] p-6">
      <h2 className="font-display text-lg text-ink mb-1">{title}</h2>
      {description && <p className="text-sm text-ink-faint mb-5">{description}</p>}
      <div className="space-y-4">{children}</div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink mb-1.5 block">{label}</span>
      {children}
    </label>
  )
}

const inputClass =
  'w-full bg-paper border border-line rounded-lg px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-gold-deep/40'

export default function CreateProgramPage() {
  const [outcomes, setOutcomes] = useState([''])
  const [dailyMissions, setDailyMissions] = useState([{ day: 1, title: '' }])
  const [lessons, setLessons] = useState([{ title: '', youtubeUrl: '' }])
  const [sessions, setSessions] = useState([{ title: '', date: '' }])
  const [published, setPublished] = useState(false)
  const [bannerName, setBannerName] = useState('')

  const updateList = (setter, list, i, key, value) =>
    setter(list.map((item, idx) => (idx === i ? (key ? { ...item, [key]: value } : value) : item)))

  if (published) {
    return (
      <div className="max-w-lg mx-auto text-center py-20">
        <div className="w-16 h-16 rounded-full bg-forest-pale flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle2" className="w-8 h-8 text-forest-deep" />
        </div>
        <h1 className="font-display text-2xl text-ink mb-2">Program published</h1>
        <p className="text-ink-faint mb-8">Your program is live and ready for members to join.</p>
        <Button to="/creator/programs" variant="primary">Go to programs</Button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12">
      <div>
        <h1 className="font-display text-2xl text-ink mb-1">Create a program</h1>
        <p className="text-ink-faint text-sm">Structure a challenge, workshop, bootcamp, or cohort.</p>
      </div>

      <Section title="Program details">
        <Field label="Program title">
          <input className={inputClass} placeholder="e.g. 30 Days Full Stack Web Development" />
        </Field>
        <Field label="Description">
          <textarea className={inputClass} rows={4} placeholder="What will participants achieve?" />
        </Field>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Category">
            <select className={inputClass}>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </Field>
          <Field label="Type">
            <select className={inputClass}>
              {types.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </Field>
          <Field label="Duration (days)">
            <input type="number" min="1" className={inputClass} placeholder="30" />
          </Field>
          <Field label="Price (ETB, 0 = free)">
            <input type="number" min="0" className={inputClass} placeholder="500" />
          </Field>
          <Field label="Maximum participants">
            <input type="number" min="1" className={inputClass} placeholder="300" />
          </Field>
          <Field label="Start date">
            <input type="date" className={inputClass} />
          </Field>
        </div>
        <Field label="Banner image">
          <label className="flex items-center gap-3 border border-dashed border-line rounded-lg px-4 py-4 cursor-pointer hover:border-ink/30 transition-colors">
            <Icon name="Upload" className="w-5 h-5 text-ink-faint shrink-0" />
            <span className="text-sm text-ink-faint truncate">{bannerName || 'Upload a banner image'}</span>
            <input type="file" className="hidden" onChange={(e) => setBannerName(e.target.files?.[0]?.name || '')} />
          </label>
        </Field>
      </Section>

      <Section title="Learning outcomes" description="What will members be able to do after completion?">
        {outcomes.map((o, i) => (
          <div key={i} className="flex gap-2">
            <input
              className={inputClass}
              placeholder="e.g. Build and deploy a full-stack app"
              value={o}
              onChange={(e) => updateList(setOutcomes, outcomes, i, null, e.target.value)}
            />
            <button onClick={() => setOutcomes(outcomes.filter((_, idx) => idx !== i))} className="text-ink-faint hover:text-rust-deep px-2">
              <Icon name="X" className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button onClick={() => setOutcomes([...outcomes, ''])} className="text-sm text-sky hover:underline flex items-center gap-1">
          <Icon name="Plus" className="w-3.5 h-3.5" /> Add outcome
        </button>
      </Section>

      <Section title="Daily missions" description="One task per day keeps members moving.">
        {dailyMissions.map((m, i) => (
          <div key={i} className="flex gap-2 items-center">
            <span className="text-xs text-ink-faint w-14 shrink-0">Day {m.day}</span>
            <input
              className={inputClass}
              placeholder="Mission title"
              value={m.title}
              onChange={(e) => updateList(setDailyMissions, dailyMissions, i, 'title', e.target.value)}
            />
            <button onClick={() => setDailyMissions(dailyMissions.filter((_, idx) => idx !== i))} className="text-ink-faint hover:text-rust-deep px-2">
              <Icon name="X" className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button
          onClick={() => setDailyMissions([...dailyMissions, { day: dailyMissions.length + 1, title: '' }])}
          className="text-sm text-sky hover:underline flex items-center gap-1"
        >
          <Icon name="Plus" className="w-3.5 h-3.5" /> Add mission
        </button>
      </Section>

      <Section title="YouTube lessons">
        {lessons.map((l, i) => (
          <div key={i} className="grid sm:grid-cols-[1fr_1fr_auto] gap-2">
            <input
              className={inputClass}
              placeholder="Lesson title"
              value={l.title}
              onChange={(e) => updateList(setLessons, lessons, i, 'title', e.target.value)}
            />
            <input
              className={inputClass}
              placeholder="YouTube URL"
              value={l.youtubeUrl}
              onChange={(e) => updateList(setLessons, lessons, i, 'youtubeUrl', e.target.value)}
            />
            <button onClick={() => setLessons(lessons.filter((_, idx) => idx !== i))} className="text-ink-faint hover:text-rust-deep px-2 justify-self-end sm:justify-self-auto">
              <Icon name="X" className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button onClick={() => setLessons([...lessons, { title: '', youtubeUrl: '' }])} className="text-sm text-sky hover:underline flex items-center gap-1">
          <Icon name="Plus" className="w-3.5 h-3.5" /> Add lesson
        </button>
      </Section>

      <Section title="Google Meet sessions">
        {sessions.map((s, i) => (
          <div key={i} className="grid sm:grid-cols-[1fr_1fr_auto] gap-2">
            <input
              className={inputClass}
              placeholder="Session title"
              value={s.title}
              onChange={(e) => updateList(setSessions, sessions, i, 'title', e.target.value)}
            />
            <input
              type="datetime-local"
              className={inputClass}
              value={s.date}
              onChange={(e) => updateList(setSessions, sessions, i, 'date', e.target.value)}
            />
            <button onClick={() => setSessions(sessions.filter((_, idx) => idx !== i))} className="text-ink-faint hover:text-rust-deep px-2 justify-self-end sm:justify-self-auto">
              <Icon name="X" className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button onClick={() => setSessions([...sessions, { title: '', date: '' }])} className="text-sm text-sky hover:underline flex items-center gap-1">
          <Icon name="Plus" className="w-3.5 h-3.5" /> Add session
        </button>
      </Section>

      <div className="flex gap-3">
        <Button variant="outline" className="flex-1">Save as draft</Button>
        <Button variant="primary" className="flex-1" onClick={() => setPublished(true)}>Publish</Button>
      </div>
    </div>
  )
}
