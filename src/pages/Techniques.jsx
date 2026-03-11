import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Copy, Check } from 'lucide-react';
import { topicsData } from '../data/content';

const techniqueTopics = topicsData.filter(
  (t) => t.category === 'Techniques' || t.category === 'Advanced'
);

const quickPrompts = [
  {
    technique: 'Chain of Thought',
    prompt: `A store sells apples for $0.50 each and bananas for $0.30 each.
If I buy 6 apples and 4 bananas, what is my total cost?
Let's think step by step.`,
    response: `Step 1: Cost of apples = 6 × $0.50 = $3.00
Step 2: Cost of bananas = 4 × $0.30 = $1.20
Step 3: Total = $3.00 + $1.20 = $4.20
Answer: Your total cost is $4.20.`,
  },
  {
    technique: 'Role Prompting',
    prompt: `You are a senior UX designer with 10 years experience at top tech companies.
Review the following landing page description and provide 5 concrete improvements:
"Our landing page has a headline, some text, a contact form, and a footer."`,
    response: `1. Add social proof — Include testimonials above the fold.
2. Clarify the value proposition — Make the headline specific.
3. Add visual hierarchy — Use whitespace and contrast to guide the eye.
4. Optimize the CTA — Replace "Submit" with "Get My Free Quote".
5. Add trust signals — Include logos of known clients or security badges.`,
  },
  {
    technique: 'Few-Shot',
    prompt: `Convert temperature units:
32°F  → 0°C
212°F → 100°C
98.6°F → 37°C
77°F  → ?`,
    response: `25°C`,
  },
];

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all ${
        copied
          ? 'bg-green-50 border-green-300 text-green-700 dark:bg-green-900/30 dark:border-green-700 dark:text-green-400'
          : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 dark:bg-[#1a1d27] dark:border-[#2d3251] dark:text-gray-400 dark:hover:bg-[#2d3251]'
      }`}
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

const Techniques = () => (
  <div className="bg-gray-50 dark:bg-[#0f1117] min-h-screen">
    {/* Hero */}
    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3 block">Intermediate → Advanced</span>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Prompting Techniques</h1>
        <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
          Move beyond basic questions. Learn the techniques that power production AI applications and unlock the full potential of LLMs.
        </p>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Quick reference cards */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Live Examples</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        Try copying these prompts directly into ChatGPT or Claude.
      </p>

      <div className="space-y-6 mb-12">
        {quickPrompts.map((item) => (
          <div
            key={item.technique}
            className="bg-white dark:bg-[#21253a] border border-gray-200 dark:border-[#2d3251] rounded-2xl overflow-hidden animate-slide-up shadow-sm dark:shadow-none"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 dark:border-[#2d3251] bg-gray-50 dark:bg-[#1a1d27]">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Technique: {item.technique}
              </span>
              <CopyButton text={item.prompt} />
            </div>
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-[#2d3251]">
              <div className="p-5">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">Prompt</p>
                <pre className="code-block text-xs whitespace-pre-wrap">{item.prompt}</pre>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">AI Response</p>
                <div className="code-block text-xs whitespace-pre-wrap">{item.response}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Topic deep dives */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Deep Dive Topics</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        Explore each technique in detail with explanations and more examples.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {techniqueTopics.map((topic, i) => (
          <Link
            key={topic.id}
            to={`/topic/${topic.id}`}
            className="card-hover bg-white dark:bg-[#21253a] border border-gray-200 dark:border-[#2d3251] rounded-xl p-5 flex flex-col gap-2 shadow-sm dark:shadow-none"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span
              className={`text-xs font-bold uppercase tracking-widest ${
                topic.category === 'Techniques'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-purple-600 dark:text-purple-400'
              }`}
            >
              {topic.category}
            </span>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-sm">{topic.title}</h3>
            <div className="flex items-center gap-1 text-xs font-semibold text-gfg-green dark:text-green-400 mt-auto">
              Read more <ArrowRight size={13} />
            </div>
          </Link>
        ))}
      </div>

      {/* Next CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-700 rounded-2xl p-6 text-white text-center">
        <h3 className="font-bold text-xl mb-2">Ready to put it into practice?</h3>
        <p className="text-purple-100 text-sm mb-4">Copy real-world prompt templates for any use case.</p>
        <Link
          to="/examples"
          className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-purple-50 transition"
        >
          Browse Prompt Examples <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </div>
);

export default Techniques;
