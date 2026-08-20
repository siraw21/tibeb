import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ink text-on-ink-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center">
              <span className="font-display text-ink font-bold text-sm">ጥ</span>
            </span>
            <span className="font-display font-semibold text-lg text-on-ink">Tibeb</span>
          </div>
          <p className="text-sm max-w-xs">
            The Ethiopian platform where creators build transformation challenges and people achieve goals together.
          </p>
        </div>
        <div>
          <h4 className="text-on-ink text-sm font-semibold mb-3">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/discover" className="hover:text-on-ink">Discover programs</Link></li>
            <li><Link to="/dashboard" className="hover:text-on-ink">Member dashboard</Link></li>
            <li><Link to="/leaderboard" className="hover:text-on-ink">Leaderboards</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-on-ink text-sm font-semibold mb-3">Creators</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/creator/dashboard" className="hover:text-on-ink">Creator dashboard</Link></li>
            <li><Link to="/creator/programs/new" className="hover:text-on-ink">Create a program</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-on-ink text-sm font-semibold mb-3">Categories</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/discover?category=programming" className="hover:text-on-ink">Programming</Link></li>
            <li><Link to="/discover?category=fitness" className="hover:text-on-ink">Fitness</Link></li>
            <li><Link to="/discover?category=business" className="hover:text-on-ink">Business</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-3 px-5 sm:px-8 py-5 text-xs flex flex-col sm:flex-row gap-2 justify-between max-w-7xl mx-auto">
        <span>© 2026 Tibeb. Built for Ethiopian creators and doers.</span>
        <span>Made with ጥበብ in Addis Ababa</span>
      </div>
    </footer>
  )
}
