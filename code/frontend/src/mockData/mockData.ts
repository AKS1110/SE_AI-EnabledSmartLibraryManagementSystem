export interface MockStudent {
  Roll_No: string;
  Name: string;
  Department: string;
  Year: number;
  Status: string;
}

export interface MockAsset {
  Asset_Id: number;
  Title: string;
  Author_Publisher: string;
  Category: string;
  Status: string;
  Total_Copies: number;
}

export interface MockLoan {
  Issue_Id: number;
  Roll_No: string;
  Asset_Name: string;
  Issue_Date: string;
  Due_Date: string;
  Return_Date: string | null;
  Status: "ISSUED" | "RETURNED" | "OVERDUE";
  Overdue_Days: number;
  Fine_Amount: number;
  Paid_Status: "PAID" | "UNPAID" | null;
}

export interface MockNotification {
  id: number;
  type: "OVERDUE" | "REMINDER" | "COLLECTION";
  title: string;
  message: string;
  date: string;
  read: boolean;
}

export interface MockDemandLog {
  category: string;
  search_count: number;
}

export interface MockOverdueIssue {
  issue_id: number;
  student_name: string;
  roll_no: string;
  asset_name: string;
  due_date: string;
  days_late: number;
  fine_amount: number;
}

export interface MockSearchResult {
  asset_id: number;
  title: string;
  isbn: string | null;
  publisher: string | null;
  category: string | null;
  total_copies: number;
  currently_issued: number;
  available_copies: number;
  relevance_score: number;
}

export interface MockSearchResponse {
  intent: string;
  category: string | null;
  is_available_request: boolean;
  used_ai: boolean;
  fallback_used: boolean;
  results: MockSearchResult[];
}

export const mockStudents: MockStudent[] = [
  {
    Roll_No: "1024160010",
    Name: "Arnav Agarwal",
    Department: "Computer Science",
    Year: 2,
    Status: "ACTIVE",
  },
  {
    Roll_No: "1024160011",
    Name: "Aman Sharma",
    Department: "Computer Science",
    Year: 3,
    Status: "ACTIVE",
  },
  {
    Roll_No: "1024160012",
    Name: "Simran Kaur",
    Department: "Information Technology",
    Year: 2,
    Status: "ACTIVE",
  },
];

export const mockAssets: MockAsset[] = [
  {
    Asset_Id: 101,
    Title: "Artificial Intelligence: A Modern Approach",
    Author_Publisher: "Stuart Russell & Peter Norvig",
    Category: "Artificial Intelligence",
    Status: "AVAILABLE",
    Total_Copies: 5,
  },
  {
    Asset_Id: 102,
    Title: "Clean Code",
    Author_Publisher: "Robert C. Martin",
    Category: "Programming",
    Status: "AVAILABLE",
    Total_Copies: 4,
  },
  {
    Asset_Id: 103,
    Title: "Database System Concepts",
    Author_Publisher: "Silberschatz, Korth & Sudarshan",
    Category: "Database",
    Status: "AVAILABLE",
    Total_Copies: 3,
  },
  {
    Asset_Id: 104,
    Title: "Computer Networks",
    Author_Publisher: "Andrew S. Tanenbaum",
    Category: "Networking",
    Status: "AVAILABLE",
    Total_Copies: 4,
  },
  {
    Asset_Id: 105,
    Title: "Machine Learning with Python",
    Author_Publisher: "Sebastian Raschka",
    Category: "Machine Learning",
    Status: "AVAILABLE",
    Total_Copies: 3,
  },
  {
    Asset_Id: 106,
    Title: "Operating System Concepts",
    Author_Publisher: "Silberschatz, Galvin & Gagne",
    Category: "Operating Systems",
    Status: "AVAILABLE",
    Total_Copies: 4,
  },
  {
    Asset_Id: 107,
    Title: "Introduction to Algorithms",
    Author_Publisher: "Cormen, Leiserson, Rivest & Stein",
    Category: "Algorithms",
    Status: "AVAILABLE",
    Total_Copies: 5,
  },
  {
    Asset_Id: 108,
    Title: "Robotics Engineering Handbook",
    Author_Publisher: "Academic Press",
    Category: "Robotics",
    Status: "AVAILABLE",
    Total_Copies: 2,
  },
];

export const mockLoans: MockLoan[] = [
  {
    Issue_Id: 501,
    Roll_No: "1024160010",
    Asset_Name: "Artificial Intelligence: A Modern Approach",
    Issue_Date: "2026-08-20",
    Due_Date: "2026-09-10",
    Return_Date: null,
    Status: "ISSUED",
    Overdue_Days: 0,
    Fine_Amount: 0,
    Paid_Status: null,
  },
  {
    Issue_Id: 502,
    Roll_No: "1024160010",
    Asset_Name: "Clean Code",
    Issue_Date: "2026-08-01",
    Due_Date: "2026-08-20",
    Return_Date: null,
    Status: "OVERDUE",
    Overdue_Days: 20,
    Fine_Amount: 100,
    Paid_Status: "UNPAID",
  },
  {
    Issue_Id: 503,
    Roll_No: "1024160010",
    Asset_Name: "Database System Concepts",
    Issue_Date: "2026-07-10",
    Due_Date: "2026-07-30",
    Return_Date: "2026-07-28",
    Status: "RETURNED",
    Overdue_Days: 0,
    Fine_Amount: 0,
    Paid_Status: "PAID",
  },
];

export const mockNotifications: MockNotification[] = [
  {
    id: 1,
    type: "OVERDUE",
    title: "Book Overdue",
    message:
      "Clean Code is overdue by 20 days. Please return it and clear the pending fine.",
    date: "2026-09-09",
    read: false,
  },
  {
    id: 2,
    type: "REMINDER",
    title: "Return Reminder",
    message:
      "Artificial Intelligence: A Modern Approach is due on September 10, 2026.",
    date: "2026-09-09",
    read: false,
  },
  {
    id: 3,
    type: "COLLECTION",
    title: "Collection Notification",
    message: "Your requested library collection is ready for pickup.",
    date: "2026-09-08",
    read: true,
  },
];

export const mockDemandLogs: MockDemandLog[] = [
  {
    category: "Artificial Intelligence",
    search_count: 142,
  },
  {
    category: "Machine Learning",
    search_count: 118,
  },
  {
    category: "Programming",
    search_count: 96,
  },
  {
    category: "Database",
    search_count: 74,
  },
  {
    category: "Cyber Security",
    search_count: 61,
  },
];

export const mockOverdueIssues: MockOverdueIssue[] = [
  {
    issue_id: 502,
    student_name: "Arnav Agarwal",
    roll_no: "1024160010",
    asset_name: "Clean Code",
    due_date: "2026-08-20",
    days_late: 20,
    fine_amount: 100,
  },
  {
    issue_id: 504,
    student_name: "Aman Sharma",
    roll_no: "1024160011",
    asset_name: "Computer Networks",
    due_date: "2026-08-28",
    days_late: 12,
    fine_amount: 60,
  },
];

const delay = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

export async function mockIntelligentSearch(
  _rollNo: string,
  queryText: string
): Promise<MockSearchResponse> {
  await delay(500);

  const query = queryText.trim().toLowerCase();

  const isAvailableRequest =
    query.includes("available") ||
    query.includes("borrow") ||
    query.includes("issue") ||
    query.includes("can i get");

  let detectedCategory: string | null = null;

  const categories = [
    "artificial intelligence",
    "machine learning",
    "programming",
    "database",
    "networking",
    "operating systems",
    "algorithms",
    "robotics",
  ];

  for (const category of categories) {
    if (query.includes(category)) {
      detectedCategory = category;
      break;
    }
  }

  const results = mockAssets
    .map((asset) => {
      const searchableText =
        `${asset.Title} ${asset.Author_Publisher} ${asset.Category}`.toLowerCase();

      let score = 0;

      if (query && searchableText.includes(query)) {
        score += 1;
      }

      const words = query.split(/\s+/).filter(Boolean);

      for (const word of words) {
        if (word.length > 2 && searchableText.includes(word)) {
          score += 0.2;
        }
      }

      if (
        detectedCategory &&
        asset.Category.toLowerCase() === detectedCategory
      ) {
        score += 1;
      }

      const currentlyIssued =
        asset.Asset_Id === 101 ? 1 : asset.Asset_Id === 102 ? 2 : 0;

      return {
        asset_id: asset.Asset_Id,
        title: asset.Title,
        isbn: null,
        publisher: asset.Author_Publisher,
        category: asset.Category,
        total_copies: asset.Total_Copies,
        currently_issued: currentlyIssued,
        available_copies: Math.max(
          asset.Total_Copies - currentlyIssued,
          0
        ),
        relevance_score: Number(score.toFixed(2)),
      };
    })
    .filter((result) => result.relevance_score > 0)
    .sort((a, b) => b.relevance_score - a.relevance_score);

  return {
    intent: query
      ? `Searching the library catalog for "${queryText}"`
      : "Showing recommended library resources",
    category: detectedCategory,
    is_available_request: isAvailableRequest,
    used_ai: true,
    fallback_used: false,
    results:
      results.length > 0
        ? results
        : mockAssets.slice(0, 5).map((asset, index) => ({
            asset_id: asset.Asset_Id,
            title: asset.Title,
            isbn: null,
            publisher: asset.Author_Publisher,
            category: asset.Category,
            total_copies: asset.Total_Copies,
            currently_issued: 0,
            available_copies: asset.Total_Copies,
            relevance_score: Number((0.5 - index * 0.05).toFixed(2)),
          })),
  };
}

export async function mockStudentFines(rollNo: string) {
  await delay(350);

  const loans = mockLoans.filter((loan) => loan.Roll_No === rollNo);

  return {
    roll_no: rollNo,

    active_loans: loans.map((loan) => ({
      issue_id: loan.Issue_Id,
      title: loan.Asset_Name,
      issue_date: loan.Issue_Date,
      due_date: loan.Due_Date,
      return_date: loan.Return_Date,
      status: loan.Status,
      overdue_days: loan.Overdue_Days,
      fine_amount: loan.Fine_Amount,
      paid_status: loan.Paid_Status,
    })),

    total_outstanding_balance: loans
      .filter((loan) => loan.Paid_Status === "UNPAID")
      .reduce((total, loan) => total + loan.Fine_Amount, 0),
  };
}

export async function mockMonitorOverdues() {
  await delay(600);

  return {
    overdue_loans_processed: mockOverdueIssues.length,
    notifications_created: mockOverdueIssues.length,
    coverage_percent: 100,
    demand_recommendations: [
      "Increase Artificial Intelligence collection capacity.",
      "Consider adding more Machine Learning resources.",
      "Programming resources show consistently high demand.",
    ],
  };
}