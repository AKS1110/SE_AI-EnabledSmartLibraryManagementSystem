import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import { mockLoans } from "../mockData/mockData";
import type { MockLoan } from "../mockData/mockData";
import {
  LOAN_PERIOD_DAYS,
  calculateLoanDetails,
  formatDate,
} from "../utils/loanRules";

interface StudentLoansContextType {
  loans: MockLoan[];
  issueAsset: (rollNo: string, assetName: string) => void;
  returnAsset: (issueId: number) => void;
  payFine: (issueId: number) => void;
}

const StudentLoansContext =
  createContext<StudentLoansContextType | null>(null);

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
        loan.Issue_Id === issueId && loan.Status !== "RETURNED"
          ? {
              ...loan,
              Status: "RETURNED",
              Return_Date: formatDate(new Date()),
            }
          : loan
      )
    );
  };

  // Marks the fine of a returned loan as paid.
  const payFine = (issueId: number) => {
    setLoans((currentLoans) =>
      currentLoans.map((loan) =>
        loan.Issue_Id === issueId && loan.Status === "RETURNED"
          ? { ...loan, Paid_Status: "PAID" }
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
        payFine,
      }}
    >
      {children}
    </StudentLoansContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
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

    payFine: context.payFine,
  };
}