import { Icon } from '../../lib/icons'
import Avatar from '../../components/common/Avatar'
import Button from '../../components/common/Button'
import { currentUser } from '../../data/users'

export default function ProfilePage() {
  return (
    <div className="max-w-xl space-y-8">
      <div>
        <h1 className="font-display text-2xl text-ink mb-1">Profile</h1>
        <p className="text-ink-faint text-sm">Your account details.</p>
      </div>

      <div className="bg-card border border-line rounded-[var(--radius-card)] p-6 flex items-center gap-4">
        <Avatar initials={currentUser.initials} size="lg" className="w-16 h-16 text-lg" />
        <div>
          <p className="font-display text-lg text-ink">{currentUser.name}</p>
          <p className="text-sm text-ink-faint">{currentUser.email}</p>
        </div>
      </div>

      <div className="bg-card border border-line rounded-[var(--radius-card)] divide-y divide-line">
        <Row label="Member since" value={new Date(currentUser.joinedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} />
        <Row label="Longest streak" value={`${currentUser.longestStreak} days`} />
        <Row label="Consistency score" value={currentUser.consistencyScore} />
      </div>

      <div>
        <h2 className="font-display text-lg text-ink mb-4">Achievements</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {currentUser.achievements.map((a) => (
            <div key={a.id} className="bg-card border border-line rounded-[var(--radius-card)] p-4 text-center">
              <div className="w-10 h-10 rounded-full bg-gold-pale flex items-center justify-center mx-auto mb-2.5">
                <Icon name={a.icon} className="w-5 h-5 text-gold-deep" />
              </div>
              <p className="text-sm font-medium text-ink">{a.title}</p>
              <p className="text-xs text-ink-faint mt-0.5">{a.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Button variant="outline">Edit profile</Button>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between px-5 py-3.5 text-sm">
      <span className="text-ink-faint">{label}</span>
      <span className="text-ink font-medium">{value}</span>
    </div>
  )
}
