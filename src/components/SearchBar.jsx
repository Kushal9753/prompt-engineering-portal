import { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ onSearch, placeholder = 'Search topics…' }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) onSearch('');
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none"
      />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="
          w-full pl-11 pr-10 py-3 text-sm rounded-xl
          bg-white dark:bg-dark-card
          text-gray-800 dark:text-gray-200
          border border-gray-200 dark:border-dark-border
          shadow-sm focus:outline-none focus:ring-2 focus:ring-gfg-green dark:focus:ring-green-500
          placeholder-gray-400 dark:placeholder-gray-500
          transition
        "
      />
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
