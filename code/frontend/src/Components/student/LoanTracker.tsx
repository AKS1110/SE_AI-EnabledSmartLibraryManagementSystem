import {
  BookOpen,
  CalendarDays,
  CircleAlert,
  IndianRupee,
  RotateCcw,
} from "lucide-react";

import { useStudentLoans } from "../../hooks/useStudentLoans";
import { getLoanSummary } from "../../utils/loanSummary";
import StatusBadge from "../common/StatusBadge";

interface LoanTrackerProps {
  rollNo: string;
}

function LoanTracker({ rollNo }: LoanTrackerProps) {
const { loans, returnAsset, payFine } = useStudentLoans(rollNo);
  const activeLoans = loans.filter((loan) => loan.Status !== "RETURNED");

    // Returned books whose fine has not been paid yet
  const unpaidReturnedLoans = loans.filter(
    (loan) =>
      loan.Status === "RETURNED" &&
      loan.Fine_Amount > 0 &&
      loan.Paid_Status === "UNPAID"
  );

  // Fines still owed: overdue active loans + returned loans not yet paid
  // Fines still owed: overdue active loans + returned loans not yet paid
  const { outstandingFine } = getLoanSummary(loans);

  const overdueLoans = activeLoans.filter(
    (loan) => loan.Status === "OVERDUE"
  );

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
            <BookOpen size={19} className="text-indigo-600" />
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900">
              My Borrowed Assets
            </h2>
            <p className="mt-0.5 text-xs text-slate-500">
              Your current library loans
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
              Active
            </p>
            <p className="mt-0.5 text-lg font-bold text-slate-900">
              {activeLoans.length}
            </p>
          </div>

          <div className="h-8 w-px bg-slate-200" />

          <div>
            <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
              Fine
            </p>
            <p className="mt-0.5 flex items-center text-lg font-bold text-slate-900">
              <IndianRupee size={15} />
              {outstandingFine}
            </p>
          </div>
        </div>
      </div>

      {/* Overdue warning */}
      {overdueLoans.length > 0 && (
        <div className="mx-5 mt-5 flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100">
            <CircleAlert size={16} className="text-red-600" />
          </div>

          <div>
            <p className="text-sm font-semibold text-red-800">
              {overdueLoans.length} overdue{" "}
              {overdueLoans.length === 1 ? "asset" : "assets"}
            </p>
            <p className="mt-0.5 text-xs leading-5 text-red-600">
              Please return the overdue resources and clear any pending fines.
            </p>
          </div>
        </div>
      )}

      {/* Loan list */}
      <div className="p-5">
        {activeLoans.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-200 px-5 py-10 text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-slate-100">
              <BookOpen size={20} className="text-slate-400" />
            </div>

            <p className="mt-3 text-sm font-semibold text-slate-700">
              No active loans
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Resources you borrow will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {activeLoans.map((loan) => (
              <div
                key={loan.Issue_Id}
                className={`rounded-xl border p-4 transition ${
                  loan.Status === "OVERDUE"
                    ? "border-red-100 bg-red-50/40"
                    : "border-slate-200 bg-slate-50/40 hover:border-indigo-100"
                }`}
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  {/* Book information */}
                  <div className="flex min-w-0 items-start gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                        loan.Status === "OVERDUE"
                          ? "bg-red-100"
                          : "bg-indigo-50"
                      }`}
                    >
                      <BookOpen
                        size={18}
                        className={
                          loan.Status === "OVERDUE"
                            ? "text-red-600"
                            : "text-indigo-600"
                        }
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold text-slate-900">
                        {loan.Asset_Name}
                      </h3>

                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <CalendarDays size={13} />
                          Issued {loan.Issue_Date}
                        </span>

                        <span
                          className={`flex items-center gap-1.5 font-medium ${
                            loan.Status === "OVERDUE"
                              ? "text-red-600"
                              : "text-slate-600"
                          }`}
                        >
                          <CalendarDays size={13} />
                          Due {loan.Due_Date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status and action */}
                  <div className="flex items-center justify-between gap-4 lg:justify-end">
                    <div className="text-right">
                      <StatusBadge status={loan.Status} />

                      {loan.Fine_Amount > 0 && (
                        <p className="mt-1.5 flex items-center justify-end text-xs font-semibold text-red-600">
                          <IndianRupee size={12} />
                          {loan.Fine_Amount} unpaid
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => returnAsset(loan.Issue_Id)}
                      className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                    >
                      <RotateCcw size={14} />
                      Return
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
                )}

        {/* Fines of returned books that still need to be paid */}
        {unpaidReturnedLoans.length > 0 && (
          <div className="mt-6">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Fines to pay
            </h3>

            <div className="space-y-3">
              {unpaidReturnedLoans.map((loan) => (
                <div
                  key={loan.Issue_Id}
                  className="flex flex-col gap-3 rounded-xl border border-amber-100 bg-amber-50/50 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900">
                      {loan.Asset_Name}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Returned {loan.Return_Date} · {loan.Overdue_Days} days late
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => payFine(loan.Issue_Id)}
                    className="inline-flex shrink-0 items-center justify-center gap-1 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-indigo-700"
                  >
                    Pay <IndianRupee size={12} />
                    {loan.Fine_Amount}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-3">
        <div className="flex flex-col gap-1 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            Keep your borrowed assets within their due dates.
          </span>

          {outstandingFine > 0 && (
            <span className="font-semibold text-red-600">
              Outstanding: ₹{outstandingFine}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default LoanTracker;