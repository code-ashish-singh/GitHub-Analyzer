import apiClient from '../lib/axios';

/**
 * Send a GitHub username to the backend for AI-powered analysis.
 * The backend fetches the public profile, repositories, languages,
 * activity, and passes it to an LLM to generate insights.
 *
 * @param {string} username - GitHub username
 * @returns {Promise<object>} Full analysis report from the backend
 */
export const analyzeGithub = async (username) => {
  const { data } = await apiClient.post('/analyze', { username });
  return data;
};

/**
 * Fetch a previously cached analysis by username.
 * Useful for revisiting reports without re-running the LLM.
 *
 * @param {string} username - GitHub username
 * @returns {Promise<object>} Cached analysis report
 */
export const getAnalysisReport = async (username) => {
  const { data } = await apiClient.get(`/analyze/${username}`);
  return data;
};
