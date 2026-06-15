import { AlertCircle } from 'lucide-react';
import GradientButton from '../ui/GradientButton';

const ErrorState = ({ message = 'Something went wrong.', onRetry }) => (
  <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
    <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
      <AlertCircle className="w-7 h-7 text-red-400" />
    </div>
    <div>
      <p className="text-white font-semibold text-lg mb-1">Analysis Failed</p>
      <p className="text-gray-400 text-sm max-w-xs">{message}</p>
    </div>
    {onRetry && (
      <GradientButton variant="secondary" onClick={onRetry} className="py-2 px-6 text-sm">
        Try Again
      </GradientButton>
    )}
  </div>
);

export default ErrorState;
