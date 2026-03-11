import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Menu, X, Moon, Sun, Search } from 'lucide-react';
import { DarkModeContext } from '../context/DarkModeContext';

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gfg-green dark:bg-dark-surface border-b border-green-700 dark:border-dark-border shadow-md">
      <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between gap-4">

        {/* Left: hamburger + logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
            className="md:hidden p-2 rounded-lg hover:bg-green-700 dark:hover:bg-dark-card text-white transition"
          >
            {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <Link to="/" className="flex items-center gap-2 text-white hover:text-green-200 transition">
            <BookOpen size={26} />
            <span className="text-lg font-bold tracking-wide hidden sm:block">LearnPrompting</span>
          </Link>
        </div>

        {/* Center: nav links (desktop) */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {[
            { label: 'Home',       to: '/' },
            { label: 'Basics',     to: '/basics' },
            { label: 'Techniques', to: '/techniques' },
            { label: 'Examples',   to: '/examples' },
            { label: 'Resources',  to: '/resources' },
          ].map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="px-3 py-1.5 text-sm font-medium text-white hover:text-green-200 hover:bg-green-700 dark:hover:bg-dark-card rounded-md transition"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right: search + dark mode */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Search — mobile toggle */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-green-700 transition"
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          {/* Search — desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-green-300" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics…"
                className="
                  pl-9 pr-4 py-1.5 text-sm rounded-full
                  bg-green-700 dark:bg-dark-card text-white placeholder-green-300
                  border border-green-600 dark:border-dark-border
                  focus:outline-none focus:ring-2 focus:ring-white/30 w-48
                  transition
                "
              />
            </div>
          </form>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-white hover:bg-green-700 dark:hover:bg-dark-card transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile search bar (expandable) */}
      {searchOpen && (
        <form onSubmit={handleSearch} className="md:hidden px-4 pb-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-green-300" />
            <input
              autoFocus
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics…"
              className="w-full pl-9 pr-4 py-2 text-sm rounded-full bg-green-700 text-white placeholder-green-300 border border-green-600 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
        </form>
      )}
    </nav>
  );
};

export default Navbar;