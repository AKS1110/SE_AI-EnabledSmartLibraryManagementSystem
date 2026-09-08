import { BookOpen, Calendar, RotateCcw } from "lucide-react";
import { useStudentLoans } from "../../hooks/useStudentLoans";
import StatusBadge from "../common/StatusBadge";

interface LoanTrackerProps {
  rollNo: string;
}

function LoanTracker({ rollNo }: LoanTrackerProps) {
  const { loans, returnAsset } = useStudentLoans(rollNo);

  const activeLoans = loans.filter(
    (loan) => loan.Status !== "RETURNED"
  );

  const outstandingFine = loans
    .filter((loan) => loan.Paid_Status === "UNPAID")
    .reduce((total, loan) => total + loan.Fine_Amount, 0);

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
            <BookOpen className="h-6 w-6 text-blue-600" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Borrowed Assets & Fines
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Track your borrowed books, due dates, and outstanding fines.
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-red-50 px-4 py-3">
          <p className="text-xs font-medium text-red-600">
            Outstanding Fine
          </p>

          <p className="text-xl font-bold text-red-700">
            ₹{outstandingFine}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {activeLoans.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center">
            <BookOpen className="mx-auto h-8 w-8 text-slate-400" />

            <p className="mt-2 font-medium text-slate-700">
              No active loans
            </p>

            <p className="mt-1 text-sm text-slate-500">
              You currently have no borrowed assets.
            </p>
          </div>
        ) : (
          activeLoans.map((loan) => (
            <div
              key={loan.Issue_Id}
              className="rounded-xl border border-slate-200 p-5"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                    <BookOpen className="h-6 w-6 text-slate-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {loan.Asset_Name}
                    </h3>

                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Issued: {loan.Issue_Date}
                      </span>

                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Due: {loan.Due_Date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <StatusBadge status={loan.Status} />

                  {loan.Fine_Amount > 0 && (
                    <span className="text-sm font-semibold text-red-600">
                      Fine: ₹{loan.Fine_Amount}
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => returnAsset(loan.Issue_Id)}
                    className="flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Return
                  </button>
                </div>
              </div>

              {loan.Overdue_Days > 0 && (
                <div className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                  This asset is overdue by{" "}
                  <strong>{loan.Overdue_Days} days</strong>.
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default LoanTracker;