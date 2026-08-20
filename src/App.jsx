import { Routes, Route } from 'react-router-dom'

import PublicLayout from './components/layout/PublicLayout'
import MemberLayout from './components/layout/MemberLayout'
import CreatorLayout from './components/layout/CreatorLayout'

import LandingPage from './pages/LandingPage'
import DiscoverPage from './pages/DiscoverPage'
import ProgramDetailsPage from './pages/ProgramDetailsPage'
import CreatorPublicProfilePage from './pages/CreatorPublicProfilePage'
import CheckoutPage from './pages/CheckoutPage'
import NotFoundPage from './pages/NotFoundPage'

import DashboardPage from './pages/member/DashboardPage'
import MyProgramsPage from './pages/member/MyProgramsPage'
import MissionsPage from './pages/member/MissionsPage'
import CommunityPage from './pages/member/CommunityPage'
import LeaderboardPage from './pages/member/LeaderboardPage'
import CertificatesPage from './pages/member/CertificatesPage'
import ProfilePage from './pages/member/ProfilePage'

import CreatorOverviewPage from './pages/creator/CreatorOverviewPage'
import CreatorProgramsPage from './pages/creator/CreatorProgramsPage'
import CreateProgramPage from './pages/creator/CreateProgramPage'
import CreatorMembersPage from './pages/creator/CreatorMembersPage'
import CreatorSessionsPage from './pages/creator/CreatorSessionsPage'
import CreatorAnalyticsPage from './pages/creator/CreatorAnalyticsPage'
import CreatorEarningsPage from './pages/creator/CreatorEarningsPage'
import CreatorSettingsPage from './pages/creator/CreatorSettingsPage'

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/program/:slug" element={<ProgramDetailsPage />} />
        <Route path="/creator/:id" element={<CreatorPublicProfilePage />} />
        <Route path="/checkout/:slug" element={<CheckoutPage />} />
      </Route>

      <Route element={<MemberLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/programs" element={<MyProgramsPage />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/dashboard/certificates" element={<CertificatesPage />} />
        <Route path="/dashboard/profile" element={<ProfilePage />} />
      </Route>

      <Route element={<CreatorLayout />}>
        <Route path="/creator/dashboard" element={<CreatorOverviewPage />} />
        <Route path="/creator/programs" element={<CreatorProgramsPage />} />
        <Route path="/creator/programs/new" element={<CreateProgramPage />} />
        <Route path="/creator/members" element={<CreatorMembersPage />} />
        <Route path="/creator/sessions" element={<CreatorSessionsPage />} />
        <Route path="/creator/analytics" element={<CreatorAnalyticsPage />} />
        <Route path="/creator/earnings" element={<CreatorEarningsPage />} />
        <Route path="/creator/settings" element={<CreatorSettingsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
