import { useMutation } from '@tanstack/react-query';
import { analyzeGithub } from '../services/githubService';

/**
 * Hook to trigger GitHub profile analysis.
 *
 * Usage:
 *   const { mutate, data, isPending, error } = useGithubAnalysis();
 *   mutate('torvalds');
 *
 * `mutate` is called with a username string.
 * `data` holds the full analysis report once resolved.
 */
const useGithubAnalysis = () => {
  return useMutation({
    mutationFn: (username) => analyzeGithub(username),
  });
};

export default useGithubAnalysis;
