import { useState } from 'react'
import { Icon } from '../../lib/icons'
import Button from '../../components/common/Button'
import Avatar from '../../components/common/Avatar'
import { creators } from '../../data/creators'

const inputClass =
  'w-full bg-paper border border-line rounded-lg px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-gold-deep/40'

const me = creators[0]

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

function Toggle({ label, description, defaultChecked = true }) {
  const [on, setOn] = useState(defaultChecked)
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-medium text-ink">{label}</p>
        {description && <p className="text-xs text-ink-faint">{description}</p>}
      </div>
      <button
        onClick={() => setOn((v) => !v)}
        className={`w-11 h-6 rounded-full transition-colors shrink-0 relative ${on ? 'bg-forest' : 'bg-paper-2'}`}
        aria-pressed={on}
      >
        <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-card shadow transition-all ${on ? 'left-[1.375rem]' : 'left-0.5'}`} />
      </button>
    </div>
  )
}

export default function CreatorSettingsPage() {
  const [payout, setPayout] = useState('telebirr')

  return (
    <div className="max-w-2xl space-y-6 pb-12">
      <div>
        <h1 className="font-display text-2xl text-ink mb-1">Settings</h1>
        <p className="text-ink-faint text-sm">Manage your creator profile and preferences.</p>
      </div>

      <Section title="Public profile">
        <div className="flex items-center gap-4 mb-2">
          <Avatar initials={me.initials} size="lg" className="w-16 h-16 text-lg" />
          <Button variant="outline" size="sm">Change photo</Button>
        </div>
        <Field label="Display name">
          <input className={inputClass} defaultValue={me.name} />
        </Field>
        <Field label="Handle">
          <input className={inputClass} defaultValue={`@${me.handle}`} />
        </Field>
        <Field label="Bio">
          <textarea className={inputClass} rows={3} defaultValue={me.bio} />
        </Field>
      </Section>

      <Section title="Payout method" description="Where your program revenue is sent each month.">
        {[
          { id: 'telebirr', label: 'Telebirr' },
          { id: 'cbe', label: 'CBE Birr' },
          { id: 'bank', label: 'Bank Transfer' },
        ].map((m) => (
          <button
            key={m.id}
            onClick={() => setPayout(m.id)}
            className={`w-full flex items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors ${
              payout === m.id ? 'border-ink bg-paper' : 'border-line bg-paper hover:border-ink/25'
            }`}
          >
            <Icon name="Wallet" className="w-4 h-4 text-ink-faint" />
            <span className="text-sm text-ink flex-1">{m.label}</span>
            <div className={`w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center ${payout === m.id ? 'border-gold-deep' : 'border-line'}`}>
              {payout === m.id && <div className="w-2 h-2 rounded-full bg-gold-deep" />}
            </div>
          </button>
        ))}
      </Section>

      <Section title="Notifications">
        <Toggle label="New member joins" description="Get notified when someone joins a program." />
        <Toggle label="Community activity" description="Replies and reactions on your posts." />
        <Toggle label="Weekly performance summary" description="A digest of completion and engagement." defaultChecked={false} />
      </Section>

      <div className="flex gap-3">
        <Button variant="primary">Save changes</Button>
        <Button variant="outline">Cancel</Button>
      </div>
    </div>
  )
}
