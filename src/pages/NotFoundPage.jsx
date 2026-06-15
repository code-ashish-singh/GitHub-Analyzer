import { Link } from 'react-router-dom';
import GradientButton from '../components/ui/GradientButton';

const NotFoundPage = () => (
  <div className="min-h-screen bg-[#080810] flex flex-col items-center justify-center text-center px-4">
    <p className="text-7xl font-bold text-white mb-4">404</p>
    <p className="text-gray-400 mb-8 max-w-sm">
      This page doesn't exist. Head back home to analyze a GitHub profile.
    </p>
    <Link to="/">
      <GradientButton>Back to Home</GradientButton>
    </Link>
  </div>
);

export default NotFoundPage;
