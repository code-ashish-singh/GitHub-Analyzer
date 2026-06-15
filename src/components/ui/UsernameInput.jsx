import { useState } from 'react';
import { GitBranch, ArrowRight } from 'lucide-react';
import GradientButton from './GradientButton';

/**
 * GitHub username input + submit button.
 * Calls onSubmit(username) when the button is clicked or Enter is pressed.
 */
const UsernameInput = ({ onSubmit, loading = false }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    if (username.trim()) onSubmit(username.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <div className="relative flex-1">
        <GitBranch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white
            placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1
            focus:ring-violet-500 transition-all disabled:opacity-50"
        />
      </div>
      <GradientButton onClick={handleSubmit} className="py-4" disabled={loading}>
        {loading ? 'Analyzing…' : 'Analyze'}
        <ArrowRight className="w-5 h-5" />
      </GradientButton>
    </div>
  );
};

export default UsernameInput;
