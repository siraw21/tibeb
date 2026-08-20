# Tibeb

> The Ethiopian platform where creators build transformation challenges and people achieve goals together.

**Status: early work in progress , not a finished product.** What exists so far is a design system, mock-data prototypes. Most of the plan below isn't built yet.

## What it is

Creators (coaches, developers, trainers, teachers) publish structured programs, 3-day workshops, 30-day challenges, cohort-based bootcamps. Members join, complete daily missions, track streaks and progress, and stay accountable together.

## Planned tech stack

- **Web** — Next.js (React), migrating from an earlier Vite + React prototype
- **Mobile** — React Native (Expo)
- **Desktop** — Electron
- **Backend** — NestJS + TypeORM + PostgreSQL
- One shared TypeScript type layer across all four, eventually

## What actually exists right now

- **Frontend prototype** — a full Vite + React app: every page designed, mock data only, no live backend connection. Being rebuilt in Next.js.

## What's not built yet

- Nestjs Backend
- Auth (login, JWT, protected routes)
- Missions, Enrollments, Community, Payments — designed in the database, no API yet
- The Next.js frontend itself
- Mobile app, desktop app
- Any real deployment — everything currently runs locally only

## Design notes

Brand name: **Tibeb** (ጥበብ: Amharic for wisdom/skill/craft). Color system, typography, and the recurring "day-ring" progress are defined and used consistently across whatever UI exists.

---

This is a learn-by-building project. Expect this README to go stale fast — update it as pieces actually land, not as they're planned.
