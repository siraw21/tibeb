import { useState } from 'react'
import { Icon } from '../../lib/icons'
import Button from '../../components/common/Button'
import Avatar from '../../components/common/Avatar'
import Badge from '../../components/common/Badge'
import { currentUser } from '../../data/users'
import { communityPosts as initialPosts } from '../../data/community'

export default function CommunityPage() {
  const [posts, setPosts] = useState(initialPosts)
  const [draft, setDraft] = useState('')
  const [openComments, setOpenComments] = useState({})

  const submitPost = () => {
    if (!draft.trim()) return
    setPosts([
      {
        id: `post-${Date.now()}`,
        programId: 'p1',
        author: currentUser.name,
        initials: currentUser.initials,
        time: 'Just now',
        isAnnouncement: false,
        content: draft.trim(),
        likes: 0,
        comments: [],
      },
      ...posts,
    ])
    setDraft('')
  }

  const like = (id) => setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p)))

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="font-display text-2xl text-ink mb-1">Community</h1>
        <p className="text-ink-faint text-sm">Share your progress with the cohort — day 10 photos welcome.</p>
      </div>

      <div className="bg-card border border-line rounded-[var(--radius-card)] p-4">
        <div className="flex gap-3">
          <Avatar initials={currentUser.initials} size="sm" />
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Share your Day 20 progress..."
            rows={2}
            className="flex-1 resize-none bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none"
          />
        </div>
        <div className="flex justify-end mt-2">
          <Button onClick={submitPost} size="sm" variant="primary" disabled={!draft.trim()}>
            <Icon name="Plus" className="w-4 h-4" /> Post
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {posts.map((p) => (
          <div key={p.id} className={`bg-card border rounded-[var(--radius-card)] p-5 ${p.isAnnouncement ? 'border-gold-deep/40' : 'border-line'}`}>
            <div className="flex items-center gap-3 mb-3">
              <Avatar initials={p.initials} size="sm" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ink">{p.author}</p>
                <p className="text-xs text-ink-faint">{p.time}</p>
              </div>
              {p.isAnnouncement && <Badge tone="gold"><Icon name="Sparkles" className="w-3 h-3" /> Announcement</Badge>}
            </div>
            <p className="text-sm text-ink-soft leading-relaxed mb-3">{p.content}</p>
            <div className="flex items-center gap-4 text-xs text-ink-faint">
              <button onClick={() => like(p.id)} className="flex items-center gap-1.5 hover:text-rust-deep transition-colors">
                <Icon name="Heart" className="w-4 h-4" /> {p.likes}
              </button>
              <button
                onClick={() => setOpenComments((s) => ({ ...s, [p.id]: !s[p.id] }))}
                className="flex items-center gap-1.5 hover:text-ink transition-colors"
              >
                <Icon name="MessageCircle" className="w-4 h-4" /> {p.comments.length}
              </button>
            </div>

            {openComments[p.id] && p.comments.length > 0 && (
              <div className="mt-4 pt-4 border-t border-line space-y-3">
                {p.comments.map((c) => (
                  <div key={c.id} className="flex gap-2.5">
                    <Avatar initials={c.initials} size="sm" />
                    <div>
                      <p className="text-xs font-medium text-ink">{c.author}</p>
                      <p className="text-sm text-ink-soft">{c.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
