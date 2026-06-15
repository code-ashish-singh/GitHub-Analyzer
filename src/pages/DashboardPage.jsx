import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getAnalysisReport } from '../services/githubService';
import LoadingState from '../components/feedback/LoadingState';
import ErrorState from '../components/feedback/ErrorState';
import EmptyState from '../components/feedback/EmptyState';

/**
 * Dashboard page — shows the AI analysis report for a given GitHub username.
 * Route: /dashboard/:username
 *
 * To extend: replace the placeholder below with your report components:
 *   - AnalysisSummary
 *   - HiringScoreCard
 *   - RepositoryInsights
 *   - SkillsBreakdown
 *   - CareerRecommendations
 */
const DashboardPage = () => {
  const { username } = useParams();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['analysis', username],
    queryFn: () => getAnalysisReport(username),
    enabled: Boolean(username),
  });

  if (isLoading) return <LoadingState message={`Analyzing @${username}…`} />;
  if (isError) return <ErrorState message={error?.message} onRetry={refetch} />;
  if (!data) return <EmptyState title="No report found" description="Try analyzing a username from the home page." />;

  return (
    <div className="min-h-screen bg-[#080810] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">
          Analysis for <span className="text-violet-400">@{username}</span>
        </h1>

        {/* TODO: Replace with actual dashboard components once backend is ready */}
        <pre className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-xl p-6 overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default DashboardPage;
