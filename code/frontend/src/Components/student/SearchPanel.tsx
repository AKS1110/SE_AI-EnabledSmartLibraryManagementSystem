import type { FormEvent } from "react";

import {
  Search,
  Sparkles,
  BookOpen,
  Loader2,
  ArrowRight,
} from "lucide-react";

import { useIntelligentSearch } from "../../hooks/useIntelligentSearch";
import StatusBadge from "../common/StatusBadge";

interface SearchPanelProps {
  rollNo: string;
}

function SearchPanel({ rollNo }: SearchPanelProps) {
  const {
    query,
    setQuery,
    result,
    loading,
    error,
    search,
  } = useIntelligentSearch(rollNo);

  const prompts = [
    "Find available AI books",
    "Show machine learning resources",
    "Find programming books",
    "What books can I borrow?",
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search();
  };

  const handlePrompt = (prompt: string) => {
    setQuery(prompt);
    search(prompt);
  };

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Search Hero */}
      <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900 px-6 py-8 sm:px-8">
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-indigo-100">
            <Sparkles size={14} />
            AI-Powered Library Search
          </div>

          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            What are you looking for?
          </h2>

          <p className="mt-2 text-sm leading-6 text-indigo-100">
            Search naturally by topic, subject, author, or availability.
            The Campus Intelligence Agent will find relevant resources for you.
          </p>
        </div>

        {/* Search Box */}
        <form onSubmit={handleSubmit} className="mt-7">
          <div className="flex flex-col gap-3 rounded-2xl bg-white p-2 shadow-xl sm:flex-row">
            <div className="flex flex-1 items-center gap-3 px-3">
              <Search className="shrink-0 text-slate-400" size={21} />

              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try “Find available AI books”..."
                className="w-full bg-transparent py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={17} />
                  Searching
                </>
              ) : (
                <>
                  Search
                  <ArrowRight size={17} />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Quick Prompts */}
        <div className="mt-5">
          <p className="mb-2 text-xs font-medium text-indigo-200">
            Try a quick search
          </p>

          <div className="flex flex-wrap gap-2">
            {prompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handlePrompt(prompt)}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/20"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="border-b border-red-100 bg-red-50 px-6 py-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Search Results */}
      {result && (
        <div className="px-6 py-6 sm:px-8">
          {/* AI Summary */}
          <div className="mb-6 rounded-xl border border-indigo-100 bg-indigo-50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Sparkles size={17} />
              </div>

              <div>
                <p className="text-sm font-semibold text-indigo-900">
                  Campus Intelligence Agent
                </p>

                <p className="mt-1 text-sm leading-5 text-indigo-700">
                  {result.intent}
                </p>

                {result.category && (
                  <p className="mt-2 text-xs font-medium text-indigo-600">
                    Category detected: {result.category}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Results Header */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">
                Recommended Resources
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                {result.results.length} resources found
              </p>
            </div>

            <BookOpen className="text-slate-400" size={20} />
          </div>

          {/* Results */}
          <div className="space-y-3">
            {result.results.map((book) => (
              <div
                key={book.asset_id}
                className="rounded-xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:bg-slate-50"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="min-w-0">
                    <h4 className="font-semibold text-slate-900">
                      {book.title}
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
                      {book.publisher ?? "Library Collection"}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      {book.category && (
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                          {book.category}
                        </span>
                      )}

                      <span className="text-xs text-slate-500">
                        {book.available_copies} of {book.total_copies} available
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <StatusBadge
                      status={
                        book.available_copies > 0
                          ? "AVAILABLE"
                          : "UNAVAILABLE"
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!result && !loading && (
        <div className="px-6 py-8 text-center sm:px-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
            <BookOpen className="text-slate-400" size={22} />
          </div>

          <p className="mt-3 text-sm font-medium text-slate-700">
            Your library is ready to help
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Start with a search above or choose one of the quick prompts.
          </p>
        </div>
      )}
    </section>
  );
}

export default SearchPanel;