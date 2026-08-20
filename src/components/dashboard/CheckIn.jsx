import { useState } from 'react'
import { Icon } from '../../lib/icons'

export default function CheckIn({ streak, completionPct, consistencyScore, onAnswer }) {
  const [answered, setAnswered] = useState(false)

  const handle = (val) => {
    setAnswered(true)
    onAnswer?.(val)
  }

  return (
    <div className="bg-ink grain-ink rounded-[var(--radius-card)] p-6">
      {!answered ? (
        <>
          <p className="font-display text-lg text-on-ink mb-4">Did you complete today's mission?</p>
          <div className="flex gap-3">
            <button
              onClick={() => handle(true)}
              className="flex-1 bg-gold text-ink font-medium rounded-full py-3 hover:bg-gold-deep hover:text-on-ink transition-colors"
            >
              Yes
            </button>
            <button
              onClick={() => handle(false)}
              className="flex-1 bg-transparent border border-on-ink/25 text-on-ink font-medium rounded-full py-3 hover:border-on-ink/50 transition-colors"
            >
              Not yet
            </button>
          </div>
        </>
      ) : (
        <p className="text-on-ink text-sm mb-2 flex items-center gap-2">
          <Icon name="CheckCircle2" className="w-4 h-4 text-gold" /> Check-in recorded for today.
        </p>
      )}

      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-ink-3">
        <div>
          <p className="font-display num-tabular text-2xl text-on-ink flex items-center gap-1">
            {streak} <Icon name="Flame" className="w-4 h-4 text-rust" />
          </p>
          <p className="text-xs text-on-ink-soft mt-1">Current streak</p>
        </div>
        <div>
          <p className="font-display num-tabular text-2xl text-on-ink">{completionPct}%</p>
          <p className="text-xs text-on-ink-soft mt-1">Completion</p>
        </div>
        <div>
          <p className="font-display num-tabular text-2xl text-on-ink">{consistencyScore}</p>
          <p className="text-xs text-on-ink-soft mt-1">Consistency score</p>
        </div>
      </div>
    </div>
  )
}
