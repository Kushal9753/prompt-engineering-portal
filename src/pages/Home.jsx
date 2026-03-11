import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, Zap, BookOpen, Code2, Library, Search, Star } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import { topicsData } from '../data/content';

const featureCards = [
  {
    icon: <BookOpen size={28} />,
    title: 'Prompt Engineering Basics',
    desc: 'Start from scratch — understand what prompts are and why they matter for AI models.',
    to: '/basics',
    color: 'from-green-500 to-emerald-600',
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-800',
    text: 'text-green-700 dark:text-green-300',
  },
  {
    icon: <Zap size={28} />,
    title: 'Techniques & Strategies',
    desc: 'Master zero-shot, few-shot, chain-of-thought, role prompting, and more.',
    to: '/techniques',
    color: 'from-blue-500 to-cyan-600',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    text: 'text-blue-700 dark:text-blue-300',
  },
  {
    icon: <Code2 size={28} />,
    title: 'Real-World Prompt Examples',
    desc: 'Copy-ready prompts for writing, coding, business, studying, and productivity.',
    to: '/examples',
    color: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-200 dark:border-purple-800',
    text: 'text-purple-700 dark:text-purple-300',
  },
  {
    icon: <Library size={28} />,
    title: 'Curated Resources',
    desc: 'The best books, courses, docs, and tools for learning prompt engineering.',
    to: '/resources',
    color: 'from-orange-500 to-amber-600',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    border: 'border-orange-200 dark:border-orange-800',
    text: 'text-orange-700 dark:text-orange-300',
  },
];

const featuredTopics = topicsData.slice(0, 3);

const Home = () => {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (query) => {
    if (!query.trim()) { setSearchResults(null); return; }
    const q = query.toLowerCase();
    setSearchResults(
      topicsData.filter(
        (t) => t.title.toLowerCase().includes(q) || t.content.toLowerCase().includes(q)
      )
    );
  };

  return (
    <div className="bg-gray-50 dark:bg-[#0f1117] min-h-screen">

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gfg-green via-green-600 to-emerald-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-in">
            <Star size={12} /> Free &amp; Open Source Learning Portal
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 animate-slide-up">
            Prompt Engineering
            <br />
            <span className="text-green-200">Learning Portal</span>
          </h1>

          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in">
            Learn how to write powerful AI prompts that get <strong>accurate, structured</strong>, and
            <strong> creative</strong> results from ChatGPT, Gemini, Claude, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 animate-fade-in">
            <Link
              to="/basics"
              className="inline-flex items-center gap-2 bg-white text-gfg-green font-semibold px-6 py-3 rounded-xl hover:bg-green-50 transition shadow-lg"
            >
              Start Learning <ArrowRight size={18} />
            </Link>
            <Link
              to="/examples"
              className="inline-flex items-center gap-2 bg-white/20 border border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/30 transition"
            >
              Browse Prompts
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-green-100">
            {[
              { n: '10+',  label: 'Topics Covered' },
              { n: '20+',  label: 'Prompt Examples' },
              { n: '4',    label: 'Resource Categories' },
              { n: '100%', label: 'Free' },
            ].map(({ n, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-extrabold text-white">{n}</p>
                <p className="text-green-200">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Search ──────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex items-center gap-3 mb-4">
          <Search size={18} className="text-gray-500 dark:text-gray-500" />
          <h2 className="font-semibold text-gray-800 dark:text-gray-300 text-sm">Search Topics</h2>
        </div>
        <SearchBar onSearch={handleSearch} placeholder="Search for zero-shot, chain-of-thought, role prompting…" />

        {searchResults !== null && (
          <div className="mt-4 space-y-2 animate-fade-in">
            {searchResults.length === 0 ? (
              <p className="text-sm text-gray-600 dark:text-gray-400">No topics found. Try a different keyword.</p>
            ) : (
              searchResults.map((t) => (
                <Link
                  key={t.id}
                  to={`/topic/${t.id}`}
                  className="flex items-center justify-between px-4 py-3 bg-white dark:bg-[#21253a] border border-gray-200 dark:border-[#2d3251] rounded-lg hover:border-gfg-green dark:hover:border-green-500 transition group shadow-sm dark:shadow-none"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-200 group-hover:text-gfg-green dark:group-hover:text-green-400 transition">{t.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{t.category}</p>
                  </div>
                  <ArrowRight size={16} className="text-gray-300 dark:text-gray-600 group-hover:text-gfg-green dark:group-hover:text-green-400 transition" />
                </Link>
              ))
            )}
          </div>
        )}
      </section>

      {/* ── Feature Cards ───────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pb-14">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">What you'll learn</h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-8">Structured content organized by skill level — from total beginner to advanced prompting engineer.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featureCards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className={`card-hover p-6 rounded-2xl border ${card.border} ${card.bg} flex flex-col gap-3`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white shadow-md`}>
                {card.icon}
              </div>
              <div>
                <h3 className={`font-bold text-base ${card.text} mb-1`}>{card.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
              <div className={`flex items-center gap-1 text-sm font-semibold ${card.text} mt-auto`}>
                Explore <ArrowRight size={15} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Topics ─────────────────────────────────── */}
      <section className="bg-white dark:bg-[#1a1d27] border-t border-gray-200 dark:border-[#2d3251]">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Start with the fundamentals</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-8">These three topics give you the fastest path from beginner to effective prompter.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredTopics.map((topic) => (
              <Link
                key={topic.id}
                to={`/topic/${topic.id}`}
                className="card-hover bg-gray-50 dark:bg-[#21253a] border border-gray-200 dark:border-[#2d3251] rounded-xl p-5 flex flex-col gap-3"
              >
                <span className="text-xs font-bold text-gfg-green dark:text-green-400 uppercase tracking-widest">{topic.category}</span>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm leading-snug">{topic.title}</h3>
                <div className="flex items-center gap-1 text-xs font-semibold text-gfg-green dark:text-green-400 mt-auto">
                  Read more <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/topic/what-is-prompt-engineering"
              className="inline-flex items-center gap-2 bg-gfg-green text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 transition shadow-md"
            >
              View All Topics <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
