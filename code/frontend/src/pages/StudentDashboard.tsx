import { useState } from "react";
import {
  LayoutDashboard,
  Search,
  BookOpen,
  Bell,
  Bot,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  User,
} from "lucide-react";

import SearchPanel from "../Components/student/SearchPanel";
import LoanTracker from "../Components/student/LoanTracker";
import NotificationCenter from "../Components/student/NotificationCenter";
import CampusAgent from "../Components/student/CampusAgent";
import StatCard from "../Components/common/StatCard";
import { useStudentLoans } from "../hooks/useStudentLoans";
import { useNotifications } from "../hooks/useNotifications";
import { getLoanSummary } from "../utils/loanSummary";

interface StudentDashboardProps {
  rollNo: string;
}

function StudentDashboard({ rollNo }: StudentDashboardProps) {
  const [isAgentOpen, setIsAgentOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { loans } = useStudentLoans(rollNo);
  const { notifications, unreadCount, markAsRead, markAllAsRead } =
    useNotifications();

  const { activeLoanCount, overdueLoanCount, outstandingFine } =
    getLoanSummary(loans);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-slate-950 text-white transition-transform duration-200 lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center justify-between border-b border-slate-800 px-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600">
                <BookOpen size={21} />
              </div>

              <div>
                <p className="text-sm font-bold">Smart Library</p>
                <p className="text-xs text-slate-500">
                  Campus Intelligence
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsSidebarOpen(false)}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-6">
            <p className="px-3 pb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Student Portal
            </p>

            <div className="space-y-1">
              <button
                type="button"
                onClick={() => scrollToSection("dashboard")}
                className="flex w-full items-center gap-3 rounded-xl bg-indigo-600 px-3 py-3 text-left text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("intelligent-search")}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-400 transition hover:bg-slate-900 hover:text-white"
              >
                <Search size={18} />
                Intelligent Search
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("borrowed-assets")}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-400 transition hover:bg-slate-900 hover:text-white"
              >
                <BookOpen size={18} />
                My Borrowed Assets
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("notifications")}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-400 transition hover:bg-slate-900 hover:text-white"
              >
                <Bell size={18} />
                Notifications
              </button>
            </div>

            {/* AI Agent card */}
            <div className="mt-8 rounded-2xl border border-indigo-500/20 bg-indigo-600/10 p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600">
                <Sparkles size={17} />
              </div>

              <p className="mt-3 text-sm font-semibold text-white">
                Campus Intelligence
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Need help finding a resource or checking your library
                activity?
              </p>

              <button
                type="button"
                onClick={() => setIsAgentOpen(true)}
                className="mt-4 flex w-full items-center justify-between rounded-lg bg-slate-900 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800"
              >
                Ask AI Agent
                <ChevronRight size={15} />
              </button>
            </div>
          </nav>

          {/* Sidebar profile */}
          <div className="border-t border-slate-800 p-4">
            <div className="flex items-center gap-3 rounded-xl bg-slate-900 p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold">
                A
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">
                  Student
                </p>

                <p className="truncate text-xs text-slate-500">
                  {rollNo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main area */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsSidebarOpen(true)}
                className="rounded-xl p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
              >
                <Menu size={22} />
              </button>

              <div className="lg:hidden">
                <p className="text-sm font-bold text-slate-900">
                  Smart Library
                </p>
              </div>

              <div className="hidden lg:block">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Student Portal
                </p>

                <p className="text-sm font-semibold text-slate-800">
                  Library Dashboard
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsAgentOpen(true)}
                className="hidden items-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100 sm:flex"
              >
                <Bot size={17} />
                Ask Campus Agent
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("notifications")}
                className="relative rounded-xl border border-slate-200 p-2.5 text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
              >
                <Bell size={19} />

                {unreadCount > 0 && (
                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
                )}
              </button>

              <div className="hidden h-9 w-px bg-slate-200 sm:block" />

              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                  A
                </div>

                <div className="hidden text-left md:block">
                  <p className="text-xs text-slate-400">Logged in as</p>

                  <p className="text-sm font-semibold text-slate-800">
                    {rollNo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main
          id="dashboard"
          className="mx-auto max-w-7xl px-5 py-7 sm:px-8"
        >
          {/* Welcome */}
          <section className="mb-7 scroll-mt-24">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-indigo-600">
                  <Sparkles size={16} />
                  AI-powered library
                </div>

                <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Welcome back 👋
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Discover resources, manage your borrowed assets, and stay
                  updated with your library activity.
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                  <User size={17} className="text-slate-500" />
                </div>

                <div>
                  <p className="text-xs text-slate-400">Student ID</p>

                  <p className="text-sm font-semibold text-slate-800">
                    {rollNo}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Overview statistics */}
          <section className="mb-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard
              title="Active Loans"
              value={activeLoanCount}
              description={
                overdueLoanCount > 0
                  ? `${overdueLoanCount} overdue`
                  : "Currently borrowed resources"
              }
              icon="📚"
            />

            <StatCard
              title="Outstanding Fine"
              value={`₹${outstandingFine}`}
              description={
                outstandingFine > 0
                  ? "Pending library payment"
                  : "No pending fines"
              }
              icon="₹"
            />

            <StatCard
              title="Notifications"
              value={unreadCount}
              description="Unread library updates"
              icon="🔔"
            />
          </section>

          {/* Intelligent Search */}
          <section
            id="intelligent-search"
            className="mb-7 scroll-mt-24"
          >
            <div className="mb-3 flex items-center gap-2">
              <Search size={17} className="text-indigo-600" />

              <h2 className="text-sm font-bold text-slate-800">
                Intelligent Search
              </h2>
            </div>

            <SearchPanel rollNo={rollNo} />
          </section>

          {/* Bottom dashboard widgets */}
          <section className="grid gap-6 xl:grid-cols-5">
            <div
              id="borrowed-assets"
              className="scroll-mt-24 xl:col-span-3"
            >
              <LoanTracker rollNo={rollNo} />
            </div>

            <div
              id="notifications"
              className="scroll-mt-24 xl:col-span-2"
            >
              <NotificationCenter
                notifications={notifications}
                unreadCount={unreadCount}
                markAsRead={markAsRead}
                markAllAsRead={markAllAsRead}
              />
            </div>
          </section>

          {/* Mobile AI button */}
          <button
            type="button"
            onClick={() => setIsAgentOpen(true)}
            className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-xl transition hover:bg-indigo-700 sm:hidden"
            aria-label="Open Campus Agent"
          >
            <Bot size={23} />
          </button>
        </main>
      </div>

      {/* AI Assistant */}
      <CampusAgent
        isOpen={isAgentOpen}
        onClose={() => setIsAgentOpen(false)}
      />
    </div>
  );
}

export default StudentDashboard;