import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LoadingState from '../components/feedback/LoadingState';

// Lazy-loaded pages — keeps the initial bundle light
const LandingPage = lazy(() => import('../pages/LandingPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const PageFallback = () => (
  <div className="min-h-screen bg-[#080810] flex items-center justify-center">
    <LoadingState />
  </div>
);

/**
 * All application routes live here.
 * Add new routes below — no need to touch App.jsx.
 *
 * Pattern:
 *   / ................. Landing page
 *   /dashboard/:username ... AI analysis report
 *   * ................. 404
 */
const AppRoutes = () => (
  <div className="min-h-screen bg-[#080810] text-white selection:bg-violet-500/30 selection:text-violet-100">
    <Navbar />
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/:username" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
    <Footer />
  </div>
);

export default AppRoutes;
