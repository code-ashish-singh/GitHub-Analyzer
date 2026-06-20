import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Star, CheckCircle, XCircle, AlertCircle, Sparkles, TrendingUp, Map, Award } from 'lucide-react';
import { analyzeGithub } from '../services/githubService';
import LoadingState from '../components/feedback/LoadingState';
import ErrorState from '../components/feedback/ErrorState';
import EmptyState from '../components/feedback/EmptyState';

const LANG_COLORS = {
  JavaScript: 'bg-yellow-400', TypeScript: 'bg-blue-500', Python: 'bg-yellow-500',
  Rust: 'bg-orange-500', Go: 'bg-cyan-500', Java: 'bg-red-500',
  'C++': 'bg-pink-500', Ruby: 'bg-red-400', PHP: 'bg-purple-500',
};

const DashboardPage = () => {
  const { username } = useParams();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['analysis', username],
    queryFn: () => analyzeGithub(username),
    enabled: Boolean(username),
    retry: false,
  });

  if (isLoading) return <LoadingState message={`Analyzing @${username}…`} />;
  if (isError) return <ErrorState message={error?.message} onRetry={refetch} />;
  if (!data) return <EmptyState title="No report found" description="Try analyzing a username from the home page." />;

  const { profile, summary, analysis } = data;
  const { technicalSkills, improvements, roadmap, hiringScore } = analysis || {};
  const topLangs = summary?.topLanguages ? Object.keys(summary.topLanguages).slice(0, 5) : [];

  return (
    <div className="min-h-screen bg-[#080810] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* Browser chrome wrapper */}
        <div className="relative">
          <div className="absolute -inset-px bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-2xl blur-sm opacity-30" />
          <div className="relative bg-[#0d0d15] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07] bg-white/[0.03]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white/5 rounded-md px-3 py-1 text-xs text-gray-600 text-center font-mono">
                  gitinsight.ai/dashboard/{username}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 grid md:grid-cols-3 gap-6">

              {/* Left — Profile */}
              <div className="md:col-span-1 space-y-5">
                <div className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-0.5 mb-4">
                      <div className="w-full h-full rounded-full bg-[#111] overflow-hidden">
                        {profile?.avatar_url
                          ? <img src={profile.avatar_url} alt={username} className="w-full h-full object-cover" />
                          : <div className="w-full h-full bg-violet-700 flex items-center justify-center text-2xl font-bold">{username?.[0]?.toUpperCase()}</div>
                        }
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white">{profile?.name || username}</h3>
                    <p className="text-xs text-gray-500 mb-1">{profile?.bio || 'GitHub Developer'}</p>
                    {profile?.company && <p className="text-xs text-gray-600 mb-2">{profile.company}</p>}

                    {/* Career Level */}
                    {technicalSkills?.careerLevel && (
                      <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-medium border border-violet-500/30 mb-4">
                        {technicalSkills.careerLevel}
                      </span>
                    )}

                    <div className="flex flex-wrap justify-center gap-1.5">
                      {topLangs.map((lang) => (
                        <span key={lang} className="px-2 py-0.5 rounded-md bg-white/[0.08] text-xs text-gray-400 border border-white/10">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hiring Score */}
                {hiringScore?.score && (
                  <div className="p-5 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-violet-400" />
                      <h4 className="text-xs font-medium text-violet-300 uppercase tracking-wider">Hiring Score</h4>
                    </div>
                    <div className="text-4xl font-bold text-white mb-1">{hiringScore.score}<span className="text-lg text-gray-500">/10</span></div>
                    <p className="text-xs text-gray-400 mb-3">{hiringScore.verdict}</p>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-violet-500 to-purple-400 rounded-full transition-all"
                        style={{ width: `${hiringScore.score * 10}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Right — Stats + Analysis */}
              <div className="md:col-span-2 space-y-5">

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { l: 'Total Repos', v: summary?.totalRepos ?? '—' },
                    { l: 'Stars', v: summary?.totalStars >= 1000 ? `${(summary.totalStars / 1000).toFixed(1)}k` : (summary?.totalStars ?? '—') },
                    { l: 'Followers', v: profile?.followers ?? '—' },
                    { l: 'Forks', v: summary?.totalForks ?? '—' },
                  ].map(({ l, v }) => (
                    <div key={l} className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.07] text-center">
                      <div className="text-xl font-bold text-white mb-0.5">{v}</div>
                      <div className="text-xs text-gray-500">{l}</div>
                    </div>
                  ))}
                </div>

                {/* Top Repos */}
                {summary?.topRepositories?.length > 0 && (
                  <div className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                    <h4 className="text-xs font-medium text-gray-500 mb-4 uppercase tracking-wider">Top Repositories</h4>
                    <div className="space-y-3">
                      {summary.topRepositories.slice(0, 3).map((repo) => {
                        const lang = repo.language || Object.keys(repo.languages || {})[0];
                        const dotColor = LANG_COLORS[lang] || 'bg-gray-500';
                        return (
                          <div key={repo.name} className="flex items-center justify-between p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-white/20 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className={`w-2.5 h-2.5 rounded-full ${dotColor} shrink-0`} />
                              <div>
                                <div className="text-white font-medium text-sm">{repo.name}</div>
                                {repo.description && <div className="text-xs text-gray-500 truncate max-w-[200px]">{repo.description}</div>}
                              </div>
                            </div>
                            <div className="flex items-center gap-3 shrink-0 ml-4">
                              <span className="flex items-center gap-1 text-xs text-gray-500">
                                <Star className="w-3 h-3" /> {repo.stars ?? repo.stargazers_count ?? 0}
                              </span>
                              {lang && <span className="px-2 py-0.5 rounded bg-white/5 text-xs text-gray-400">{lang}</span>}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Technical Skills */}
                {technicalSkills?.languages?.length > 0 && (
                  <div className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-4 h-4 text-blue-400" />
                      <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Technical Skills</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {technicalSkills.languages.map((l) => (
                        <span key={l} className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-300 text-xs border border-blue-500/20">{l}</span>
                      ))}
                    </div>
                    {technicalSkills.frameworks?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {technicalSkills.frameworks.map((f) => (
                          <span key={f} className="px-2 py-1 rounded-md bg-white/[0.05] text-gray-400 text-xs border border-white/10">{f}</span>
                        ))}
                      </div>
                    )}
                    {technicalSkills.careerReason && (
                      <p className="text-xs text-gray-500 mt-3 italic">{technicalSkills.careerReason}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3 cards — full width */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Strengths & Improvements */}
          {improvements && (
            <div className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.07] space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider">Strengths</h4>
              </div>
              <div className="space-y-2">
                {improvements.strengths?.map((s) => (
                  <div key={s} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-300">{s}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-2">
                <AlertCircle className="w-4 h-4 text-yellow-400" />
                <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider">Missing Skills</h4>
              </div>
              <div className="space-y-2">
                {improvements.missing?.map((m) => (
                  <div key={m} className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-yellow-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-300">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Roadmap */}
          {roadmap && (
            <div className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.07] space-y-4">
              <div className="flex items-center gap-2">
                <Map className="w-4 h-4 text-violet-400" />
                <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider">Learning Roadmap</h4>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Short Term</p>
                <div className="space-y-1.5">
                  {roadmap.shortTerm?.map((s, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-violet-400 text-xs shrink-0">{i + 1}.</span>
                      <span className="text-xs text-gray-300">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Long Term</p>
                <div className="space-y-1.5">
                  {roadmap.longTerm?.map((s, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-violet-400 text-xs shrink-0">{i + 1}.</span>
                      <span className="text-xs text-gray-300">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {roadmap.topSkillToLearn && (
                <div className="p-3 rounded-lg bg-violet-500/10 border border-violet-500/20">
                  <p className="text-xs text-gray-500 mb-1">Top Skill to Learn</p>
                  <p className="text-sm font-medium text-violet-300">{roadmap.topSkillToLearn}</p>
                </div>
              )}
            </div>
          )}

          {/* Hiring Concerns + Positives */}
          {hiringScore && (
            <div className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.07] space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider">Hiring Insights</h4>
              </div>

              <div className="space-y-2">
                {hiringScore.positives?.map((p) => (
                  <div key={p} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-300">{p}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 space-y-2">
                {hiringScore.concerns?.map((c) => (
                  <div key={c} className="flex items-start gap-2">
                    <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-300">{c}</span>
                  </div>
                ))}
              </div>

              {roadmap?.recommendedProjects?.length > 0 && (
                <div className="pt-2">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Project Ideas</p>
                  {roadmap.recommendedProjects.map((p, i) => (
                    <div key={i} className="flex items-start gap-2 mb-1.5">
                      <span className="text-violet-400 text-xs shrink-0">→</span>
                      <span className="text-xs text-gray-300">{p}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;
