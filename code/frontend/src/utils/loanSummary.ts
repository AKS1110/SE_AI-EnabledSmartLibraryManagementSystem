import type { MockLoan } from "../mockData/mockData";

// Single place that decides how loan numbers are counted,
// so the dashboard cards and the loan tracker always agree.
export function getLoanSummary(loans: MockLoan[]) {
  const activeLoanCount = loans.filter(
    (loan) => loan.Status !== "RETURNED"
  ).length;

  const overdueLoanCount = loans.filter(
    (loan) => loan.Status === "OVERDUE"
  ).length;

  // Unpaid fines on overdue books AND on returned books not yet paid.
  const outstandingFine = loans
    .filter((loan) => loan.Fine_Amount > 0 && loan.Paid_Status === "UNPAID")
    .reduce((total, loan) => total + loan.Fine_Amount, 0);

  return { activeLoanCount, overdueLoanCount, outstandingFine };
}