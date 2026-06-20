import { GitBranch } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '../ui/BrandIcons';
import { NAV_LINKS } from '../../constants/navigationLinks';

const SOCIAL_LINKS = [
  { Icon: GitHubIcon, href: 'https://github.com/code-ashish-singh', label: 'GitHub' },
  { Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ashishsingh2707', label: 'LinkedIn' },
  { Icon: TwitterIcon, href: '#', label: 'Twitter' },
];

const Footer = () => (
  <footer className="border-t border-white/[0.07] bg-[#050508]/70 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">
              <GitBranch className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">
              GitInsight <span className="text-violet-400">AI</span>
            </span>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed text-sm">
            AI-powered GitHub profile analysis for developers who want to stand out.
            Get hired faster with data-driven insights.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Product
          </h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Connect
          </h4>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
                  text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">© 2025 GitInsight AI. All rights reserved.</p>
        <p className="text-gray-600 text-sm">Designed & Developed by <a href="https://www.linkedin.com/in/ashishsingh2707" target="_blank" rel="noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors">Ashish Singh</a></p>
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
