import { useState } from 'react'
import { useParams, useNavigate, Navigate, Link } from 'react-router-dom'
import { Icon } from '../lib/icons'
import Button from '../components/common/Button'
import { getProgram } from '../data/programs'
import { getCreator } from '../data/creators'

const methods = [
  { id: 'telebirr', label: 'Telebirr', desc: 'Pay from your Telebirr wallet', icon: 'Wallet' },
  { id: 'cbe', label: 'CBE Birr', desc: 'Pay with your CBE Birr mobile account', icon: 'Wallet' },
  { id: 'bank', label: 'Bank Transfer', desc: 'Transfer from any Ethiopian bank', icon: 'Briefcase' },
]

export default function CheckoutPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const program = getProgram(slug)
  const [method, setMethod] = useState('telebirr')
  const [step, setStep] = useState('select') // select | confirming | done

  if (!program) return <Navigate to="/discover" replace />
  const creator = getCreator(program.creatorId)
  const isFree = program.price === 0

  const handlePay = () => {
    setStep('confirming')
    setTimeout(() => setStep('done'), 1200)
  }

  if (step === 'done') {
    return (
      <div className="max-w-lg mx-auto px-5 py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-forest-pale flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle2" className="w-8 h-8 text-forest-deep" />
        </div>
        <h1 className="font-display text-2xl text-ink mb-2">You're in!</h1>
        <p className="text-ink-faint mb-8">
          You've joined <span className="text-ink font-medium">{program.title}</span>. Your first mission is waiting.
        </p>
        <div className="flex justify-center gap-3">
          <Button to="/dashboard" variant="primary">Go to dashboard</Button>
          <Button to="/missions" variant="outline">See today's mission</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 grid lg:grid-cols-[1fr_340px] gap-12">
      <div>
        <Link to={`/program/${program.slug}`} className="text-sm text-ink-faint hover:text-ink flex items-center gap-1 mb-6">
          <Icon name="ArrowLeft" className="w-4 h-4" /> Back to program
        </Link>
        <h1 className="font-display text-2xl text-ink mb-8">
          {isFree ? 'Confirm your seat' : 'Choose a payment method'}
        </h1>

        {isFree ? (
          <div className="bg-card border border-line rounded-[var(--radius-card)] p-6 flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-forest-pale flex items-center justify-center shrink-0">
              <Icon name="Sparkles" className="w-5 h-5 text-forest-deep" />
            </div>
            <p className="text-sm text-ink-soft">This program is free. Confirm your seat to get instant access.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {methods.map((m) => (
              <button
                key={m.id}
                onClick={() => setMethod(m.id)}
                className={`w-full flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition-colors ${
                  method === m.id ? 'border-ink bg-card' : 'border-line bg-card hover:border-ink/25'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${method === m.id ? 'bg-gold-pale text-gold-deep' : 'bg-paper-2 text-ink-faint'}`}>
                  <Icon name={m.icon} className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-ink">{m.label}</p>
                  <p className="text-xs text-ink-faint">{m.desc}</p>
                </div>
                <div className={`w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center ${method === m.id ? 'border-gold-deep' : 'border-line'}`}>
                  {method === m.id && <div className="w-2 h-2 rounded-full bg-gold-deep" />}
                </div>
              </button>
            ))}
          </div>
        )}

        <Button onClick={handlePay} variant="primary" size="lg" className="w-full mt-8" disabled={step === 'confirming'}>
          {step === 'confirming' ? 'Confirming payment...' : isFree ? 'Confirm & join' : `Pay ${program.price} ${program.currency}`}
        </Button>
        <p className="text-xs text-ink-faint text-center mt-3">This is a demo checkout — no real payment is processed.</p>
      </div>

      <aside className="h-fit bg-card border border-line rounded-[var(--radius-card)] p-6">
        <h2 className="font-display text-sm text-ink-faint uppercase tracking-wide mb-4">Order summary</h2>
        <div className="flex gap-3 mb-5">
          <div className="w-14 h-14 rounded-lg bg-gold-pale flex items-center justify-center shrink-0">
            <Icon name={program.icon} className="w-6 h-6 text-gold-deep" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-ink leading-snug">{program.title}</p>
            <p className="text-xs text-ink-faint mt-0.5">by {creator.name}</p>
          </div>
        </div>
        <dl className="space-y-2.5 text-sm border-t border-line pt-4">
          <div className="flex justify-between">
            <dt className="text-ink-faint">Program fee</dt>
            <dd className="text-ink">{isFree ? 'Free' : `${program.price} ${program.currency}`}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-ink-faint">Platform fee</dt>
            <dd className="text-ink">0 ETB</dd>
          </div>
        </dl>
        <div className="flex justify-between border-t border-line mt-4 pt-4">
          <span className="font-medium text-ink">Total</span>
          <span className="font-display num-tabular font-semibold text-ink">
            {isFree ? 'Free' : `${program.price} ${program.currency}`}
          </span>
        </div>
      </aside>
    </div>
  )
}
