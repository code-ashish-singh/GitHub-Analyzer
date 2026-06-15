import { GitBranch } from 'lucide-react';

const EmptyState = ({
  title = 'No analysis yet',
  description = 'Enter a GitHub username above to get started.',
}) => (
  <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
      <GitBranch className="w-7 h-7 text-gray-500" />
    </div>
    <div>
      <p className="text-white font-semibold text-lg mb-1">{title}</p>
      <p className="text-gray-500 text-sm max-w-xs">{description}</p>
    </div>
  </div>
);

export default EmptyState;
