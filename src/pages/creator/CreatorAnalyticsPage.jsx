import {
  ResponsiveContainer, AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, Tooltip, CartesianGrid,
} from 'recharts'
import { Icon } from '../../lib/icons'
import {
  enrollmentGrowth, dailyActivity, completionByProgram, mostCompletedMissions, retention,
} from '../../data/creatorDashboard'

const tooltipStyle = {
  background: 'var(--color-card)',
  border: '1px solid var(--color-line)',
  borderRadius: 10,
  fontSize: 12,
}
const axisStyle = { fontSize: 12, fill: 'var(--color-ink-faint)' }

function ChartCard({ title, children }) {
  return (
    <div className="bg-card border border-line rounded-[var(--radius-card)] p-5">
      <h2 className="font-display text-base text-ink mb-4">{title}</h2>
      <div style={{ width: '100%', height: 220 }}>{children}</div>
    </div>
  )
}

export default function CreatorAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl text-ink mb-1">Analytics</h1>
        <p className="text-ink-faint text-sm">How your programs are performing over time.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <ChartCard title="Enrollment growth">
          <ResponsiveContainer>
            <AreaChart data={enrollmentGrowth}>
              <defs>
                <linearGradient id="goldFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-gold)" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="var(--color-gold)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="var(--color-line)" />
              <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false} />
              <YAxis tick={axisStyle} axisLine={false} tickLine={false} width={40} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="members" stroke="var(--color-gold-deep)" strokeWidth={2} fill="url(#goldFade)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Daily activity (this week)">
          <ResponsiveContainer>
            <BarChart data={dailyActivity}>
              <CartesianGrid vertical={false} stroke="var(--color-line)" />
              <XAxis dataKey="day" tick={axisStyle} axisLine={false} tickLine={false} />
              <YAxis tick={axisStyle} axisLine={false} tickLine={false} width={40} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="active" fill="var(--color-forest)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Completion rate by program">
          <ResponsiveContainer>
            <BarChart data={completionByProgram} layout="vertical" margin={{ left: 10 }}>
              <CartesianGrid horizontal={false} stroke="var(--color-line)" />
              <XAxis type="number" tick={axisStyle} axisLine={false} tickLine={false} domain={[0, 100]} />
              <YAxis type="category" dataKey="name" tick={axisStyle} axisLine={false} tickLine={false} width={90} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="rate" fill="var(--color-rust)" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Participant retention by week">
          <ResponsiveContainer>
            <LineChart data={retention}>
              <CartesianGrid vertical={false} stroke="var(--color-line)" />
              <XAxis dataKey="cohort" tick={axisStyle} axisLine={false} tickLine={false} />
              <YAxis tick={axisStyle} axisLine={false} tickLine={false} width={40} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line type="monotone" dataKey="retained" stroke="var(--color-sky-deep)" strokeWidth={2.5} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="bg-card border border-line rounded-[var(--radius-card)] p-5">
        <h2 className="font-display text-base text-ink mb-4">Most completed missions</h2>
        <div className="space-y-3">
          {mostCompletedMissions.map((m) => (
            <div key={m.title} className="flex items-center gap-4">
              <Icon name="CheckCircle2" className="w-4 h-4 text-forest shrink-0" />
              <span className="text-sm text-ink flex-1">{m.title}</span>
              <span className="text-xs num-tabular text-ink-faint">{m.completions} completions</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
