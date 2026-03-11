import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { topicsData } from '../data/content';

const basicsTopics = topicsData.filter((t) => t.category === 'Basics');

const whatYouLearn = [
  'What Prompt Engineering is and why it matters',
  'The anatomy of a well-structured prompt',
  'How LLMs tokenize and process your input',
  'Simple prompt patterns every beginner needs',
  'Common mistakes to avoid from day one',
];

const Basics = () => (
  <div className="bg-gray-50 dark:bg-[#0f1117] min-h-screen">
    {/* Page header */}
    <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-6 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-green-200 mb-3 block">Getting Started</span>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Prompt Engineering Basics</h1>
        <p className="text-green-100 text-lg max-w-2xl leading-relaxed">
          Everything you need to go from "What is a prompt?" to writing effective prompts that consistently get great AI responses.
        </p>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
      {/* Main content */}
      <div className="md:col-span-2 space-y-8">

        {/* What you'll learn */}
        <div className="bg-white dark:bg-[#21253a] border border-gray-200 dark:border-[#2d3251] rounded-2xl p-6 animate-fade-in shadow-sm dark:shadow-none">
          <h2 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-4">📋 What you'll learn</h2>
          <ul className="space-y-2">
            {whatYouLearn.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-400">
                <CheckCircle size={16} className="text-gfg-green dark:text-green-400 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Topic cards */}
        {basicsTopics.map((topic, i) => (
          <div
            key={topic.id}
            className="bg-white dark:bg-[#21253a] border border-gray-200 dark:border-[#2d3251] rounded-2xl overflow-hidden animate-slide-up shadow-sm dark:shadow-none"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="border-b border-gray-100 dark:border-[#2d3251] px-6 py-4 flex items-center justify-between bg-gray-50 dark:bg-[#1a1d27]">
              <span className="text-xs font-bold uppercase tracking-widest text-gfg-green dark:text-green-400">
                {topic.category} · Topic {i + 1}
              </span>
              <Link
                to={`/topic/${topic.id}`}
                className="text-xs font-semibold text-gfg-green dark:text-green-400 hover:underline flex items-center gap-1"
              >
                Full article <ArrowRight size={12} />
              </Link>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: topic.content }}
              className="prose max-w-none px-6 py-5"
            />
          </div>
        ))}

        {/* CTA */}
        <div className="bg-gradient-to-r from-gfg-green to-emerald-600 rounded-2xl p-6 text-white text-center">
          <h3 className="font-bold text-xl mb-2">Ready to dive deeper?</h3>
          <p className="text-green-100 text-sm mb-4">Explore advanced prompting techniques next.</p>
          <Link
            to="/techniques"
            className="inline-flex items-center gap-2 bg-white text-gfg-green font-semibold px-5 py-2.5 rounded-xl hover:bg-green-50 transition"
          >
            Go to Techniques <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="space-y-5">
        <div className="bg-white dark:bg-[#21253a] border border-gray-200 dark:border-[#2d3251] rounded-2xl p-5 sticky top-20 shadow-sm dark:shadow-none">
          <h3 className="font-bold text-sm text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">In This Section</h3>
          <ul className="space-y-2">
            {basicsTopics.map((t) => (
              <li key={t.id}>
                <Link
                  to={`/topic/${t.id}`}
                  className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400 hover:text-gfg-green dark:hover:text-green-400 transition"
                >
                  <ArrowRight size={13} className="flex-shrink-0 text-gray-300 dark:text-gray-600" />
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-5 pt-4 border-t border-gray-200 dark:border-[#2d3251]">
            <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">Continue learning</p>
            <Link
              to="/techniques"
              className="block w-full text-center text-sm bg-gfg-green text-white font-semibold px-4 py-2.5 rounded-xl hover:bg-green-700 transition"
            >
              Techniques →
            </Link>
          </div>
        </div>
      </aside>
    </div>
  </div>
);

export default Basics;
