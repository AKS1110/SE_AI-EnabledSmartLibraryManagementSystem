
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import { mockLoans } from "../mockData/mockData";
import type { MockLoan } from "../mockData/mockData";

const LOAN_PERIOD_DAYS = 14;
const FINE_PER_DAY = 2;

interface StudentLoansContextType {
  loans: MockLoan[];
  issueAsset: (rollNo: string, assetName: string) => void;
  returnAsset: (issueId: number) => void;
}

const StudentLoansContext =
  createContext<StudentLoansContextType | null>(null);

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// Converts YYYY-MM-DD into a UTC timestamp to compare calendar dates.
function getDateTimestamp(dateString: string): number {
  const [year, month, day] = dateString.split("-").map(Number);

  return Date.UTC(year, month - 1, day);
}

function calculateLoanDetails(loan: MockLoan): MockLoan {
  const today = formatDate(new Date());

  // For returned books, calculate the fine up to the return date.
  const referenceDate = loan.Return_Date ?? today;

  const dueTimestamp = getDateTimestamp(loan.Due_Date);
  const referenceTimestamp = getDateTimestamp(referenceDate);

  const overdueDays = Math.max(
    0,
    Math.floor(
      (referenceTimestamp - dueTimestamp) / (1000 * 60 * 60 * 24)
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
  };
}

export function StudentLoansProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [loans, setLoans] = useState<MockLoan[]>(mockLoans);

  const issueAsset = (rollNo: string, assetName: string) => {
    const issueDate = new Date();

    const dueDate = new Date(issueDate);
    dueDate.setDate(dueDate.getDate() + LOAN_PERIOD_DAYS);

    const newLoan: MockLoan = {
      Issue_Id: Date.now(),
      Roll_No: rollNo,
      Asset_Name: assetName,
      Issue_Date: formatDate(issueDate),
      Due_Date: formatDate(dueDate),
      Return_Date: null,
      Status: "ISSUED",
      Overdue_Days: 0,
      Fine_Amount: 0,
      Paid_Status: null,
    };

    setLoans((currentLoans) => [...currentLoans, newLoan]);
  };

  const returnAsset = (issueId: number) => {
    setLoans((currentLoans) =>
      currentLoans.map((loan) =>
        loan.Issue_Id === issueId
          ? {
              ...loan,
              Status: "RETURNED",
              Return_Date: formatDate(new Date()),
            }
          : loan
      )
    );
  };

  return (
    <StudentLoansContext.Provider
      value={{
        loans,
        issueAsset,
        returnAsset,
      }}
    >
      {children}
    </StudentLoansContext.Provider>
  );
}

export function useStudentLoans(rollNo: string) {
  const context = useContext(StudentLoansContext);

  if (!context) {
    throw new Error(
      "useStudentLoans must be used inside StudentLoansProvider"
    );
  }

  return {
    loans: context.loans
      .filter((loan) => loan.Roll_No === rollNo)
      .map(calculateLoanDetails),

    issueAsset: (assetName: string) =>
      context.issueAsset(rollNo, assetName),

    returnAsset: context.returnAsset,
  };
}
