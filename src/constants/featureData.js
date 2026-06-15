import {
  BrainCircuit,
  Search,
  Code2,
  Award,
  MapPin,
  FileText,
} from 'lucide-react';

export const FEATURES = [
  {
    icon: BrainCircuit,
    title: 'AI Profile Review',
    description:
      'Get comprehensive AI-driven feedback on your GitHub profile completeness and presentation.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Search,
    title: 'Repository Analysis',
    description:
      'Deep dive into your repositories with code quality metrics, documentation scores, and activity patterns.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code2,
    title: 'Skill Detection',
    description:
      'Automatically identify and map your technical skills based on your codebase and contributions.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Award,
    title: 'Hiring Readiness Score',
    description:
      'Receive a recruiter-grade score (0–100) indicating how prepared your profile is for job opportunities.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: MapPin,
    title: 'Career Roadmap',
    description:
      'Get personalized career progression suggestions based on your current skills and industry trends.',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: FileText,
    title: 'Resume Improvement',
    description:
      'AI suggestions to align your resume with your GitHub activity and highlight key achievements.',
    color: 'from-yellow-500 to-amber-500',
  },
];
