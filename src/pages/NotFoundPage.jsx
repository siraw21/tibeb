import { Icon } from '../lib/icons'
import Button from '../components/common/Button'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-5 bg-paper">
      <div className="w-14 h-14 rounded-full bg-paper-2 flex items-center justify-center mb-5">
        <Icon name="Search" className="w-6 h-6 text-ink-faint" />
      </div>
      <h1 className="font-display text-2xl text-ink mb-2">Page not found</h1>
      <p className="text-ink-faint mb-7">The page you're looking for doesn't exist or has moved.</p>
      <Button to="/" variant="primary">Back to home</Button>
    </div>
  )
}
