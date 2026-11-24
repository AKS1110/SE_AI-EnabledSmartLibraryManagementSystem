import type { MockLoan } from "../mockData/mockData";

// The library's loan rules. Change them here and the whole app follows.
export const LOAN_PERIOD_DAYS = 14;
export const FINE_PER_DAY = 2;

const MS_PER_DAY = 1000 * 60 * 60 * 24;

// Local calendar date as YYYY-MM-DD (not UTC, so it is correct in India).
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// Today's date plus/minus a number of days, e.g. daysFromToday(-5) = 5 days ago.
export function daysFromToday(offset: number): string {
  const date = new Date();
  date.setDate(date.getDate() + offset);

  return formatDate(date);
}

// "2026-12-08" -> "8 December 2026"
export function formatLongDate(dateString: string): string {
  const [year, month, day] = dateString.split("-").map(Number);

  return new Date(year, month - 1, day).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Converts YYYY-MM-DD into a UTC timestamp to compare calendar dates.
function getDateTimestamp(dateString: string): number {
  const [year, month, day] = dateString.split("-").map(Number);

  return Date.UTC(year, month - 1, day);
}

// Works out overdue days, fine, status and paid status for one loan.
export function calculateLoanDetails(loan: MockLoan): MockLoan {
  const today = formatDate(new Date());

  // For returned books, calculate the fine up to the return date.
  const referenceDate = loan.Return_Date ?? today;

  const overdueDays = Math.max(
    0,
    Math.floor(
      (getDateTimestamp(referenceDate) - getDateTimestamp(loan.Due_Date)) /
        MS_PER_DAY
    )
  );

  const fineAmount = overdueDays * FINE_PER_DAY;

  return {
    ...loan,
    Overdue_Days: overdueDays,
    Fine_Amount: fineAmount,
    Status:
      loan.Status === "RETURNED"
        ? "RETURNED"
        : overdueDays > 0
          ? "OVERDUE"
          : "ISSUED",
    // If there is a fine, it is UNPAID unless it was marked PAID.
    Paid_Status:
      fineAmount > 0
        ? loan.Paid_Status === "PAID"
          ? "PAID"
          : "UNPAID"
        : loan.Paid_Status,
  };
}