import { ExternalLink } from 'lucide-react';
import { resources } from '../data/resources';

const badgeColors = {
  blue:   'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  green:  'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
};

const Resources = () => (
  <div className="bg-gray-50 dark:bg-[#0f1117] min-h-screen">
    {/* Hero */}
    <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-orange-200 mb-3 block">Curated for You</span>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Prompt Engineering Resources</h1>
        <p className="text-orange-100 text-lg max-w-2xl leading-relaxed">
          Hand-picked documentation, courses, tools, and research papers to take your AI prompting skills to the next level.
        </p>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {resources.map((section) => (
        <div key={section.category}>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">{section.icon}</span>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{section.category}</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {section.items.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover bg-white dark:bg-[#21253a] rounded-xl border border-gray-200 dark:border-[#2d3251] p-5 flex flex-col gap-3 transition group shadow-sm dark:shadow-none"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 group-hover:text-gfg-green dark:group-hover:text-green-400 transition leading-snug">
                    {item.title}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="flex-shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-gfg-green dark:group-hover:text-green-400 transition mt-0.5"
                  />
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex-1">{item.description}</p>

                <span className={`self-start text-xs font-semibold px-2.5 py-0.5 rounded-full ${badgeColors[item.badgeColor] || badgeColors.blue}`}>
                  {item.badge}
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}

      {/* Contribute CTA */}
      <div className="bg-gray-900 dark:bg-[#1a1d27] rounded-2xl p-8 text-center border border-gray-800 dark:border-[#2d3251]">
        <p className="text-2xl mb-3">🤝</p>
        <h3 className="text-white font-bold text-xl mb-2">Know a great resource?</h3>
        <p className="text-gray-400 dark:text-gray-500 text-sm mb-5 max-w-md mx-auto">
          This portal is open source. If you've found a course, tool, or paper that should be on this list, feel free to contribute!
        </p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gfg-green text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-green-600 transition"
        >
          Contribute on GitHub <ExternalLink size={15} />
        </a>
      </div>
    </div>
  </div>
);

export default Resources;
