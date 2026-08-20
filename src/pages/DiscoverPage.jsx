import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Icon } from '../lib/icons'
import ProgramCard from '../components/program/ProgramCard'
import EmptyState from '../components/common/EmptyState'
import Button from '../components/common/Button'
import { programs } from '../data/programs'
import { categories } from '../data/categories'

const types = ['Challenge', 'Workshop', 'Bootcamp', 'Cohort']
const durations = [
  { label: '≤ 3 days', test: (d) => d <= 3 },
  { label: '7 days', test: (d) => d === 7 },
  { label: '≤ 30 days', test: (d) => d <= 30 },
  { label: '90 days', test: (d) => d >= 90 },
]
const sorts = [
  { id: 'popular', label: 'Popular' },
  { id: 'rating', label: 'Highest rated' },
  { id: 'newest', label: 'Newest' },
  { id: 'completed', label: 'Most completed' },
]

export default function DiscoverPage() {
  const [params] = useSearchParams()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(params.get('category') || 'all')
  const [type, setType] = useState('all')
  const [duration, setDuration] = useState('all')
  const [price, setPrice] = useState('all')
  const [sort, setSort] = useState('popular')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const results = useMemo(() => {
    let list = programs.filter((p) => {
      if (query && !p.title.toLowerCase().includes(query.toLowerCase())) return false
      if (category !== 'all' && p.category !== category) return false
      if (type !== 'all' && p.type !== type) return false
      if (price === 'free' && p.price !== 0) return false
      if (price === 'paid' && p.price === 0) return false
      if (duration !== 'all') {
        const d = durations.find((x) => x.label === duration)
        if (d && !d.test(p.duration)) return false
      }
      return true
    })

    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)
    else if (sort === 'completed') list = [...list].sort((a, b) => b.completionRate - a.completionRate)
    else if (sort === 'newest') list = [...list].sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    else list = [...list].sort((a, b) => b.members - a.members)

    return list
  }, [query, category, type, duration, price, sort])

  const resetFilters = () => {
    setCategory('all'); setType('all'); setDuration('all'); setPrice('all')
  }

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
      <div className="mb-8">
        <h1 className="font-display text-3xl text-ink mb-2">Discover a program</h1>
        <p className="text-ink-faint">{results.length} programs match what you're looking for</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Icon name="Search" className="w-4 h-4 text-ink-faint absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Python, Fitness, English..."
            className="w-full bg-card border border-line rounded-full pl-11 pr-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-gold-deep/40"
          />
        </div>
        <Button variant="outline" className="sm:hidden" onClick={() => setFiltersOpen((v) => !v)}>
          <Icon name="Filter" className="w-4 h-4" /> Filters
        </Button>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="bg-card border border-line rounded-full px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-gold-deep/40"
        >
          {sorts.map((s) => (
            <option key={s.id} value={s.id}>Sort: {s.label}</option>
          ))}
        </select>
      </div>

      <div className="grid lg:grid-cols-[240px_1fr] gap-8">
        <aside className={`${filtersOpen ? 'block' : 'hidden'} lg:block space-y-7`}>
          <FilterGroup title="Category">
            <FilterPill active={category === 'all'} onClick={() => setCategory('all')}>All</FilterPill>
            {categories.map((c) => (
              <FilterPill key={c.id} active={category === c.id} onClick={() => setCategory(c.id)}>{c.name}</FilterPill>
            ))}
          </FilterGroup>
          <FilterGroup title="Type">
            <FilterPill active={type === 'all'} onClick={() => setType('all')}>All</FilterPill>
            {types.map((t) => (
              <FilterPill key={t} active={type === t} onClick={() => setType(t)}>{t}</FilterPill>
            ))}
          </FilterGroup>
          <FilterGroup title="Duration">
            <FilterPill active={duration === 'all'} onClick={() => setDuration('all')}>All</FilterPill>
            {durations.map((d) => (
              <FilterPill key={d.label} active={duration === d.label} onClick={() => setDuration(d.label)}>{d.label}</FilterPill>
            ))}
          </FilterGroup>
          <FilterGroup title="Price">
            <FilterPill active={price === 'all'} onClick={() => setPrice('all')}>All</FilterPill>
            <FilterPill active={price === 'free'} onClick={() => setPrice('free')}>Free</FilterPill>
            <FilterPill active={price === 'paid'} onClick={() => setPrice('paid')}>Paid</FilterPill>
          </FilterGroup>
          <button onClick={resetFilters} className="text-sm text-sky hover:underline">Reset filters</button>
        </aside>

        <div>
          {results.length === 0 ? (
            <EmptyState
              icon="Search"
              title="No programs match yet"
              description="Try a different category, or reset your filters to see everything."
              action={<Button variant="outline" onClick={resetFilters}>Reset filters</Button>}
            />
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {results.map((p) => (
                <ProgramCard key={p.id} program={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-2.5">{title}</h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  )
}

function FilterPill({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
        active ? 'bg-ink text-on-ink border-ink' : 'bg-card text-ink-soft border-line hover:border-ink/30'
      }`}
    >
      {children}
    </button>
  )
}
