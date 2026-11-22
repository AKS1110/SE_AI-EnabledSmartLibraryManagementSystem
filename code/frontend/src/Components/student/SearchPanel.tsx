import { FormEvent } from "react";
import {
  Search,
  Sparkles,
  BookOpen,
  Loader2,
  ArrowRight,
  CheckCircle2,
  Library,
} from "lucide-react";

import { useIntelligentSearch } from "../../hooks/useIntelligentSearch";
import StatusBadge from "../common/StatusBadge";

interface SearchPanelProps {
  rollNo: string;
}

function SearchPanel({ rollNo }: SearchPanelProps) {
  const { query, setQuery, result, loading, error, search } =
    useIntelligentSearch(rollNo);

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
      {/* AI Search Header */}
      <div className="relative overflow-hidden bg-slate-950 px-6 py-7 sm:px-8 sm:py-8">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

        <div className="relative">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-300">
                <Sparkles size={14} />
                Campus Intelligence
              </div>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Find anything in your library
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Search naturally. Ask about books, subjects, authors, or
                availability and let the intelligent search find relevant
                resources.
              </p>
            </div>

            <div className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 lg:block">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20">
                  <Library size={16} className="text-indigo-300" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">
                    Search mode
                  </p>
                  <p className="text-xs font-semibold text-slate-200">
                    AI + Catalog
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Search box */}
          <form onSubmit={handleSubmit} className="mt-7">
            <div className="flex flex-col rounded-2xl bg-white p-2 shadow-2xl sm:flex-row">
              <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
                <Search
                  size={20}
                  className="shrink-0 text-slate-400"
                />

                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Try “Find available AI books”..."
                  className="min-w-0 flex-1 bg-transparent py-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
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

          {/* Quick prompts */}
          <div className="mt-5">
            <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Popular searches
            </p>

            <div className="flex flex-wrap gap-2">
              {prompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handlePrompt(prompt)}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="border-b border-red-100 bg-red-50 px-6 py-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Search results */}
      {result && (
        <div className="px-6 py-6 sm:px-8">
          {/* AI interpretation */}
          <div className="mb-6 flex items-start gap-3 rounded-xl border border-indigo-100 bg-indigo-50/70 p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Sparkles size={17} />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-semibold text-indigo-950">
                AI understood your request
              </p>

              <p className="mt-1 text-sm leading-5 text-indigo-700">
                {result.intent}
              </p>

              {result.category && (
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-indigo-700">
                  <CheckCircle2 size={12} />
                  Category: {result.category}
                </div>
              )}
            </div>
          </div>

          {/* Result heading */}
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Recommended Resources
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Showing {result.results.length} relevant resources from the
                catalog
              </p>
            </div>

            <div className="hidden items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 sm:flex">
              <BookOpen size={14} className="text-slate-500" />
              <span className="text-xs font-medium text-slate-600">
                Live catalog results
              </span>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-2.5">
            {result.results.map((book, index) => (
              <div
                key={book.asset_id}
                className="group rounded-xl border border-slate-200 bg-white p-4 transition hover:border-indigo-200 hover:bg-slate-50"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-500 transition group-hover:bg-indigo-50 group-hover:text-indigo-600">
                      {index + 1}
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-semibold text-slate-900">
                        {book.title}
                      </h4>

                      <p className="mt-1 text-xs text-slate-500">
                        {book.publisher ?? "Library Collection"}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        {book.category && (
                          <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600">
                            {book.category}
                          </span>
                        )}

                        <span className="text-[11px] text-slate-400">
                          {book.available_copies} of {book.total_copies} copies
                          available
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center justify-between gap-3 sm:flex-col sm:items-end">
                    <StatusBadge
                      status={
                        book.available_copies > 0
                          ? "AVAILABLE"
                          : "UNAVAILABLE"
                      }
                    />

                    {book.available_copies > 0 && (
                      <span className="text-[11px] font-medium text-green-600">
                        Ready to borrow
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {!result && !loading && (
        <div className="border-t border-slate-100 px-6 py-7 sm:px-8">
          <div className="flex flex-col items-center justify-center text-center sm:flex-row sm:text-left">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-50">
              <BookOpen size={20} className="text-indigo-500" />
            </div>

            <div className="mt-3 sm:ml-4 sm:mt-0">
              <p className="text-sm font-semibold text-slate-800">
                Your intelligent library search is ready
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Type a question above or start with one of the suggested
                searches.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SearchPanel;