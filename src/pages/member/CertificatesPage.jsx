import { Icon } from '../../lib/icons'
import Button from '../../components/common/Button'
import EmptyState from '../../components/common/EmptyState'
import { currentUser } from '../../data/users'

export default function CertificatesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl text-ink mb-1">Certificates</h1>
        <p className="text-ink-faint text-sm">Proof of the programs you've finished.</p>
      </div>

      {currentUser.certificates.length === 0 ? (
        <EmptyState icon="Award" title="No certificates yet" description="Finish a program to earn your first certificate." />
      ) : (
        <div className="grid sm:grid-cols-2 gap-5">
          {currentUser.certificates.map((c) => (
            <div key={c.id} className="bg-ink grain-ink rounded-[var(--radius-card)] p-6 flex flex-col">
              <Icon name="Award" className="w-8 h-8 text-gold mb-4" />
              <p className="font-display text-lg text-on-ink mb-1">{c.title}</p>
              <p className="text-xs text-on-ink-soft mb-6">
                Issued {new Date(c.issuedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              <Button variant="outlineOnDark" size="sm" className="mt-auto self-start">
                <Icon name="ExternalLink" className="w-3.5 h-3.5" /> View certificate
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
