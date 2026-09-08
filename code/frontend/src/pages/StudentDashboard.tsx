import { useState } from "react";
import {
  Bot,
  Search,
  BookOpen,
  Bell,
  LayoutDashboard,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

import SearchPanel from "../components/student/SearchPanel";
import LoanTracker from "../components/student/LoanTracker";
import NotificationCenter from "../components/student/NotificationCenter";
import CampusAgent from "../components/student/CampusAgent";
import StatCard from "../components/common/StatCard";

interface StudentDashboardProps {
  rollNo: string;
}

function StudentDashboard({ rollNo }: StudentDashboardProps) {
  const [isAgentOpen, setIsAgentOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-slate-950 text-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center gap-3 border-b border-white/10 px-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-600/20">
              <BookOpen size={21} />
            </div>

            <div>
              <p className="text-sm font-bold">Smart Library</p>
              <p className="text-[11px] text-slate-400">AI-Powered System</p>
            </div>

            <button
              onClick={() => setSidebarOpen(false)}
              className="ml-auto rounded-lg p-1 text-slate-400 hover:bg-white/10 hover:text-white lg:hidden"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
              Workspace
            </p>

            <div className="space-y-1">
              <button className="flex w-full items-center gap-3 rounded-xl bg-indigo-600 px-3 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-600/10">
                <LayoutDashboard size={18} />
                Dashboard
              </button>

              <button
                onClick={() => {
                  document
                    .getElementById("smart-search")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setSidebarOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                <Search size={18} />
                Smart Search
              </button>

              <button
                onClick={() => {
                  document
                    .getElementById("my-loans")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setSidebarOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                <BookOpen size={18} />
                My Loans
              </button>

              <button
                onClick={() => {
                  document
                    .getElementById("notifications")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setSidebarOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                <Bell size={18} />
                Notifications
              </button>
            </div>

            {/* AI Agent card */}
            <div className="mt-8 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-4">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
                <Sparkles size={18} />
              </div>

              <p className="text-sm font-semibold">Campus AI Agent</p>

              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                Ask questions about books, loans, fines and library resources.
              </p>

              <button
                onClick={() => setIsAgentOpen(true)}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold transition hover:bg-indigo-500"
              >
                <Bot size={15} />
                Ask Agent
              </button>
            </div>
          </nav>

          {/* Student profile */}
          <div className="border-t border-white/10 p-4">
            <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold">
                A
              </div>

              <div className="min-w-0">
                <p className="text-xs font-medium text-white">Student</p>
                <p className="truncate text-[11px] text-slate-400">
                  {rollNo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* ================= MAIN AREA ================= */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 lg:hidden"
              >
                <Menu size={20} />
              </button>

              <div>
                <p className="text-xs font-medium text-slate-400">
                  Student Portal
                </p>
                <p className="text-sm font-semibold text-slate-800">
                  AI-Enabled Smart Library
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAgentOpen(true)}
                className="hidden items-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100 sm:flex"
              >
                <Bot size={17} />
                Campus Agent
              </button>

              <button className="relative rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-50">
                <Bell size={18} />

                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-indigo-600 ring-2 ring-white" />
              </button>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                A
              </div>
            </div>
          </div>
        </header>

        {/* ================= CONTENT ================= */}
        <main className="mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-10">
          {/* Welcome */}
          <section className="mb-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  Library Dashboard
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Welcome back 👋
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                  Search resources, manage your borrowed assets and stay on
                  top of your library activity.
                </p>
              </div>

              <div className="hidden text-right md:block">
                <p className="text-xs text-slate-400">Student ID</p>
                <p className="mt-1 font-semibold text-slate-800">{rollNo}</p>
              </div>
            </div>
          </section>

          {/* ================= STATS ================= */}
          <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard
              title="Smart Search"
              value="AI Powered"
              description="Natural language resource discovery"
              icon="🔎"
            />

            <StatCard
              title="Borrowed Assets"
              value="2 Active"
              description="Keep track of your current loans"
              icon="📚"
            />

            <StatCard
              title="Outstanding Fine"
              value="₹100"
              description="Pending library fine"
              icon="₹"
            />
          </section>

          {/* ================= AI SEARCH ================= */}
          <section
            id="smart-search"
            className="mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="border-b border-slate-100 bg-gradient-to-r from-indigo-50/80 via-white to-white px-6 py-5 sm:px-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
                    <Search size={21} />
                  </div>

                  <div>
                    <h2 className="font-bold text-slate-900">
                      Intelligent Library Search
                    </h2>
                    <p className="text-xs text-slate-500">
                      Search naturally with the Campus Intelligence Agent
                    </p>
                  </div>
                </div>

                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  AI Online
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <SearchPanel rollNo={rollNo} />
            </div>
          </section>

          {/* ================= LOANS + NOTIFICATIONS ================= */}
          <section className="grid gap-6 xl:grid-cols-5">
            <div
              id="my-loans"
              className="xl:col-span-3 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <BookOpen size={19} />
                  </div>

                  <div>
                    <h2 className="font-bold text-slate-900">My Loans</h2>
                    <p className="text-xs text-slate-500">
                      Current borrowed resources
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  Active
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <LoanTracker rollNo={rollNo} />
              </div>
            </div>

            <div
              id="notifications"
              className="xl:col-span-2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <Bell size={19} />
                  </div>

                  <div>
                    <h2 className="font-bold text-slate-900">
                      Notifications
                    </h2>
                    <p className="text-xs text-slate-500">
                      Important library updates
                    </p>
                  </div>
                </div>

                <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-600" />
              </div>

              <div className="p-5 sm:p-6">
                <NotificationCenter />
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* ================= CAMPUS AI AGENT ================= */}
      <CampusAgent
        isOpen={isAgentOpen}
        onClose={() => setIsAgentOpen(false)}
      />
    </div>
  );
}

export default StudentDashboard;