import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import { Icon } from '../../lib/icons'
import StatCard from '../../components/common/StatCard'
import Badge from '../../components/common/Badge'
import { earningsHistory, payoutHistory, creatorStats } from '../../data/creatorDashboard'

const tooltipStyle = { background: 'var(--color-card)', border: '1px solid var(--color-line)', borderRadius: 10, fontSize: 12 }
const axisStyle = { fontSize: 12, fill: 'var(--color-ink-faint)' }

export default function CreatorEarningsPage() {
  const ytd = earningsHistory.reduce((sum, m) => sum + m.amount, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl text-ink mb-1">Earnings</h1>
        <p className="text-ink-faint text-sm">Revenue across all your programs.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard icon="Wallet" label="This month" value={`${creatorStats.revenue.toLocaleString()} ETB`} tone="gold" />
        <StatCard icon="TrendingUp" label="Last 6 months" value={`${ytd.toLocaleString()} ETB`} tone="forest" />
        <StatCard icon="Users" label="Paying members" value="1,240" tone="sky" />
      </div>

      <div className="bg-card border border-line rounded-[var(--radius-card)] p-5">
        <h2 className="font-display text-base text-ink mb-4">Monthly revenue</h2>
        <div style={{ width: '100%', height: 240 }}>
          <ResponsiveContainer>
            <BarChart data={earningsHistory}>
              <CartesianGrid vertical={false} stroke="var(--color-line)" />
              <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false} />
              <YAxis tick={axisStyle} axisLine={false} tickLine={false} width={50} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v) => `${v.toLocaleString()} ETB`} />
              <Bar dataKey="amount" fill="var(--color-gold-deep)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-card border border-line rounded-[var(--radius-card)] overflow-hidden overflow-x-auto">
        <table className="w-full text-sm min-w-[520px]">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-ink-faint border-b border-line">
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Method</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {payoutHistory.map((p) => (
              <tr key={p.id}>
                <td className="px-5 py-4 text-ink-soft">{new Date(p.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</td>
                <td className="px-5 py-4 num-tabular text-ink font-medium">{p.amount.toLocaleString()} ETB</td>
                <td className="px-5 py-4 text-ink-soft flex items-center gap-2"><Icon name="Wallet" className="w-3.5 h-3.5" /> {p.method}</td>
                <td className="px-5 py-4"><Badge tone="forest">{p.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
