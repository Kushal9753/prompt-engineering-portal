import { useState, useMemo } from 'react';
import PromptCard from '../components/PromptCard';
import SearchBar from '../components/SearchBar';
import { promptCategories } from '../data/prompts';

const Examples = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tabColors = {
    all:      'bg-gray-800 text-white',
    writing:  'bg-purple-600 text-white',
    coding:   'bg-blue-600 text-white',
    business: 'bg-orange-500 text-white',
    study:    'bg-green-600 text-white',
    chatgpt:  'bg-teal-600 text-white',
  };

  const filteredCategories = useMemo(() => {
    const cats =
      activeCategory === 'all'
        ? promptCategories
        : promptCategories.filter((c) => c.id === activeCategory);

    if (!searchQuery.trim()) return cats;
    const q = searchQuery.toLowerCase();
    return cats
      .map((cat) => ({
        ...cat,
        prompts: cat.prompts.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.prompt.toLowerCase().includes(q) ||
            p.explanation.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.prompts.length > 0);
  }, [activeCategory, searchQuery]);

  const totalPrompts = promptCategories.reduce((acc, c) => acc + c.prompts.length, 0);

  return (
    <div className="bg-gray-50 dark:bg-dark-bg min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-700 text-white px-6 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-200 mb-3 block">Ready-to-Use Templates</span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Prompt Examples</h1>
          <p className="text-purple-100 text-lg max-w-2xl leading-relaxed">
            {totalPrompts} copy-ready prompts across {promptCategories.length} categories. Click Copy and paste directly into any AI model.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Search */}
        <div className="mb-6">
          <SearchBar onSearch={setSearchQuery} placeholder="Search prompts by title or content…" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              activeCategory === 'all' ? tabColors.all : 'bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-border'
            }`}
          >
            All ({totalPrompts})
          </button>
          {promptCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                activeCategory === cat.id ? tabColors[cat.id] || tabColors.all : 'bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-border'
              }`}
            >
              {cat.label} ({cat.prompts.length})
            </button>
          ))}
        </div>

        {/* Results */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 text-gray-400 dark:text-gray-500">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-lg font-semibold">No prompts found</p>
            <p className="text-sm">Try a different search term or category.</p>
          </div>
        ) : (
          filteredCategories.map((cat) => (
            <div key={cat.id} className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.label.split(' ')[0]}</span>
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  {cat.label.split(' ').slice(1).join(' ')}
                </h2>
                <span className="text-xs bg-gray-200 dark:bg-dark-border text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full">
                  {cat.prompts.length} prompts
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {cat.prompts.map((p) => (
                  <PromptCard
                    key={p.id}
                    prompt={p}
                    categoryLabel={cat.label}
                    categoryId={cat.id}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Examples;
