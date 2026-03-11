import { Github, Linkedin, BookOpen, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-900 dark:bg-dark-surface text-gray-300 border-t border-gray-800 dark:border-dark-border">
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={22} className="text-gfg-green" />
            <span className="font-bold text-white text-lg">LearnPrompting</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            A free, open learning portal to master Prompt Engineering — from zero-shot basics to advanced chaining techniques.
          </p>
          <div className="flex gap-4 mt-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Learn */}
        <div>
          <p className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Learn</p>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Prompt Engineering Basics', to: '/basics' },
              { label: 'Techniques', to: '/techniques' },
              { label: 'Prompt Examples', to: '/examples' },
              { label: 'Topic Index', to: '/topic/what-is-prompt-engineering' },
            ].map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="text-gray-400 hover:text-white transition">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <p className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Resources</p>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'OpenAI Docs', url: 'https://platform.openai.com/docs' },
              { label: 'Anthropic Claude', url: 'https://docs.anthropic.com' },
              { label: 'Google AI Studio', url: 'https://aistudio.google.com' },
              { label: 'Prompting Guide', url: 'https://www.promptingguide.ai' },
            ].map(({ label, url }) => (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-white transition"
                >
                  {label} <ExternalLink size={12} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-800 dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} LearnPrompting. Built with React & TailwindCSS.</p>
        <p>All content is free & open source.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
