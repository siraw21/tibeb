# Tibeb — Ethiopian Transformation Platform (Frontend MVP)

Frontend-only MVP built with React + Vite + Tailwind CSS v4 + React Router.
All data is mocked in `src/data/` — there is no backend. Everything (joining a
program, posting in community, completing missions, publishing a program) is
local UI state that resets on refresh.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  data/         mock data: programs, creators, users, missions, community, creator dashboard
  lib/          icon resolver + tone (color) lookup helpers
  components/
    common/     Button, Badge, Card, Avatar, ProgressBar, DayRing, StatCard, EmptyState
    layout/     Navbar, Footer, sidebars, dashboard shells (PublicLayout, MemberLayout, CreatorLayout)
    program/    ProgramCard
    dashboard/  CheckIn (accountability check-in)
    notifications/ NotificationDropdown
  pages/
    LandingPage, DiscoverPage, ProgramDetailsPage, CreatorPublicProfilePage, CheckoutPage
    member/     DashboardPage, MyProgramsPage, MissionsPage, CommunityPage,
                LeaderboardPage, CertificatesPage, ProfilePage
    creator/    CreatorOverviewPage, CreatorProgramsPage, CreateProgramPage,
                CreatorMembersPage, CreatorSessionsPage, CreatorAnalyticsPage,
                CreatorEarningsPage, CreatorSettingsPage
```

## Design system

Brand: **Tibeb** (ጥበብ — "wisdom / craft" in Amharic). Deep forest-ink +
warm parchment palette with a meskel-gold signature accent and clay-rust
secondary accent. Type: Space Grotesk (display), Inter (body), IBM Plex Mono
(numbers — day counts, streaks, percentages). Tokens live in `src/index.css`
under `@theme`, and tone-to-class lookups live in `src/lib/tone.js`.

The recurring "day-ring" circular progress motif (`components/common/DayRing.jsx`)
is the platform's signature element — it appears on the landing hero, the member
dashboard, and anywhere a "day X of Y" count is shown.

## Known limits (intentional, for an MVP)

- No real auth — `currentUser` in `src/data/users.js` is the always-logged-in member.
- No real payments — checkout is a 1.2s simulated confirmation.
- Some data (e.g. the "Draft" program row on the creator Programs table) isn't
  a real program record — it's illustrative data for that table only.
- `CreateProgramPage`'s "Publish" button doesn't persist the new program into
  `src/data/programs.js` — wiring that up is the natural next step once a real
  backend exists.
