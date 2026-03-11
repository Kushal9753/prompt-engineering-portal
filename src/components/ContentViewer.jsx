import { useParams, Navigate, Link } from 'react-router-dom';
import { topicsData } from '../data/content';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';

const ContentViewer = () => {
  const { id } = useParams();

  const currentIndex = topicsData.findIndex((t) => t.id === id);
  const topic = topicsData[currentIndex];

  if (!topic) {
    return <Navigate to={`/topic/${topicsData[0].id}`} replace />;
  }

  const prevTopic = currentIndex > 0 ? topicsData[currentIndex - 1] : null;
  const nextTopic = currentIndex < topicsData.length - 1 ? topicsData[currentIndex + 1] : null;

  return (
    <main className="flex-1 bg-white dark:bg-[#0f1117] min-h-screen">
      <div className="max-w-3xl mx-auto px-5 md:px-10 py-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mb-6">
          <Link to="/" className="flex items-center gap-1 hover:text-gfg-green dark:hover:text-green-400 transition">
            <Home size={12} /> Home
          </Link>
          <span>/</span>
          <span className="text-gray-600 dark:text-gray-400">{topic.category}</span>
          <span>/</span>
          <span className="text-gray-800 dark:text-gray-200 font-medium truncate max-w-[200px]">{topic.title}</span>
        </nav>

        {/* Category badge */}
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-gfg-green dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full mb-4">
          {topic.category}
        </span>

        {/* Content */}
        <article
          dangerouslySetInnerHTML={{ __html: topic.content }}
          className="prose max-w-none w-full animate-fade-in"
        />

        {/* Progress indicator */}
        <div className="mt-10 mb-6">
          <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">
            Topic {currentIndex + 1} of {topicsData.length}
          </p>
          <div className="h-1.5 bg-gray-100 dark:bg-[#21253a] rounded-full overflow-hidden">
            <div
              className="h-full bg-gfg-green dark:bg-green-500 rounded-full transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / topicsData.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Prev / Next */}
        <div className="pt-6 border-t border-gray-200 dark:border-[#2d3251] flex flex-col sm:flex-row justify-between items-stretch gap-3">
          {prevTopic ? (
            <Link
              to={`/topic/${prevTopic.id}`}
              className="flex items-center gap-2 group px-4 py-3 rounded-lg border border-gray-200 dark:border-[#2d3251] hover:border-gfg-green dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition text-sm text-gray-700 dark:text-gray-400 max-w-xs"
            >
              <ArrowLeft size={18} className="flex-shrink-0 group-hover:text-gfg-green dark:group-hover:text-green-400 transition" />
              <span className="text-left">
                <span className="block text-xs text-gray-500 dark:text-gray-500">Previous</span>
                <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-gfg-green dark:group-hover:text-green-400 transition line-clamp-1">{prevTopic.title}</span>
              </span>
            </Link>
          ) : <div />}

          {nextTopic && (
            <Link
              to={`/topic/${nextTopic.id}`}
              className="flex items-center justify-end gap-2 group px-4 py-3 rounded-lg border border-gray-200 dark:border-[#2d3251] hover:border-gfg-green dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition text-sm text-gray-700 dark:text-gray-400 max-w-xs ml-auto"
            >
              <span className="text-right">
                <span className="block text-xs text-gray-500 dark:text-gray-500">Next</span>
                <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-gfg-green dark:group-hover:text-green-400 transition line-clamp-1">{nextTopic.title}</span>
              </span>
              <ArrowRight size={18} className="flex-shrink-0 group-hover:text-gfg-green dark:group-hover:text-green-400 transition" />
            </Link>
          )}
        </div>
      </div>
    </main>
  );
};

export default ContentViewer;