import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const categoryColorMap = {
  writing:  { badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-800' },
  coding:   { badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',     border: 'border-blue-200 dark:border-blue-800' },
  business: { badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300', border: 'border-orange-200 dark:border-orange-800' },
  study:    { badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',  border: 'border-green-200 dark:border-green-800' },
  chatgpt:  { badge: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',     border: 'border-teal-200 dark:border-teal-800' },
};

const PromptCard = ({ prompt, categoryLabel, categoryId }) => {
  const [copied, setCopied] = useState(false);

  const colors = categoryColorMap[categoryId] || categoryColorMap.writing;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = prompt.prompt;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`bg-white dark:bg-[#21253a] rounded-xl border ${colors.border} shadow-sm dark:shadow-none card-hover flex flex-col animate-slide-up`}>
      {/* Card header */}
      <div className="p-4 border-b border-gray-100 dark:border-[#2d3251] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{prompt.title}</h3>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors.badge}`}>
            {categoryLabel}
          </span>
        </div>
        <button
          onClick={handleCopy}
          title="Copy prompt"
          className={`
            flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg
            border transition-all duration-200 flex-shrink-0
            ${copied
              ? 'bg-green-50 border-green-300 text-green-700 dark:bg-green-900/30 dark:border-green-700 dark:text-green-400'
              : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 dark:bg-[#1a1d27] dark:border-[#2d3251] dark:text-gray-400 dark:hover:bg-[#2d3251]'
            }
          `}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Prompt text */}
      <div className="p-4 flex-1">
        <pre className="code-block text-xs leading-relaxed whitespace-pre-wrap font-mono">
          {prompt.prompt}
        </pre>
      </div>

      {/* Explanation */}
      {prompt.explanation && (
        <div className="px-4 pb-4">
          <p className="text-xs text-gray-600 dark:text-gray-400 italic border-t border-gray-100 dark:border-[#2d3251] pt-3">
            💡 {prompt.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
