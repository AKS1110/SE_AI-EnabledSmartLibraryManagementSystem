import { useState } from "react";
import { mockLoans } from "../mockData/mockData";
import type { MockLoan } from "../mockData/mockData";

export function useStudentLoans(rollNo: string) {
  const [loans, setLoans] = useState<MockLoan[]>(
    mockLoans.filter((loan) => loan.Roll_No === rollNo)
  );

  const issueAsset = (assetName: string) => {
    const newLoan: MockLoan = {
      Issue_Id: Date.now(),
      Roll_No: rollNo,
      Asset_Name: assetName,
      Issue_Date: new Date().toISOString().split("T")[0],
      Due_Date: "2026-09-30",
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
              Return_Date: new Date().toISOString().split("T")[0],
            }
          : loan
      )
    );
  };

  return {
    loans,
    issueAsset,
    returnAsset,
  };
}