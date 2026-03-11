import { NavLink } from 'react-router-dom';
import { topicsData } from '../data/content';
import { X } from 'lucide-react';

// Group topics by category
const groupTopics = (topics) => {
  return topics.reduce((groups, topic) => {
    const cat = topic.category || 'General';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(topic);
    return groups;
  }, {});
};

const categoryColors = {
  Basics:     'text-green-600 dark:text-green-400',
  Techniques: 'text-blue-600 dark:text-blue-400',
  Advanced:   'text-purple-600 dark:text-purple-400',
  General:    'text-gray-600 dark:text-gray-400',
};

const Sidebar = ({ isOpen, setIsOpen }) => {
  const grouped = groupTopics(topicsData);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed md:sticky top-16 left-0 z-40
          w-72 bg-white dark:bg-dark-surface
          border-r border-gray-200 dark:border-dark-border
          h-[calc(100vh-64px)] overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          flex-shrink-0
        `}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-card">
          <span className="font-bold text-sm text-gray-700 dark:text-gray-200 uppercase tracking-wider">
            Topics
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden p-1 rounded hover:bg-gray-200 dark:hover:bg-dark-border transition text-gray-500 dark:text-gray-400"
          >
            <X size={18} />
          </button>
        </div>

        {/* Grouped navigation */}
        <nav className="py-2">
          {Object.entries(grouped).map(([category, topics]) => (
            <div key={category} className="mb-2">
              {/* Category heading */}
              <div className={`px-4 py-2 text-xs font-bold uppercase tracking-widest ${categoryColors[category] || categoryColors.General}`}>
                {category}
              </div>

              {topics.map((topic) => (
                <NavLink
                  key={topic.id}
                  to={`/topic/${topic.id}`}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-5 py-2.5 text-sm border-l-4 transition-all duration-150 ${
                      isActive
                        ? 'bg-green-50 dark:bg-green-900/20 text-gfg-green dark:text-green-400 font-semibold border-gfg-green dark:border-green-500'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-card hover:text-gray-900 dark:hover:text-gray-200 border-transparent'
                    }`
                  }
                >
                  {topic.title}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        {/* Bottom quick links */}
        <div className="border-t border-gray-200 dark:border-dark-border p-4 mt-2">
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">Quick Links</p>
          {[
            { label: '🏠 Home',       to: '/' },
            { label: '📝 Examples',   to: '/examples' },
            { label: '📚 Resources',  to: '/resources' },
          ].map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-2 py-1.5 text-sm rounded transition ${
                  isActive
                    ? 'text-gfg-green dark:text-green-400 font-semibold'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;