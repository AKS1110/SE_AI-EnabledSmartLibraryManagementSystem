interface StatusBadgeProps {
  status: string;
}

function StatusBadge({ status }: StatusBadgeProps) {
  const normalizedStatus = status.toUpperCase();

  const styles: Record<string, string> = {
    ISSUED: "bg-blue-100 text-blue-700",
    RETURNED: "bg-green-100 text-green-700",
    OVERDUE: "bg-red-100 text-red-700",
    PAID: "bg-green-100 text-green-700",
    UNPAID: "bg-red-100 text-red-700",
    AVAILABLE: "bg-green-100 text-green-700",
    UNAVAILABLE: "bg-gray-100 text-gray-700",
    ACTIVE: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        styles[normalizedStatus] ?? "bg-gray-100 text-gray-700"
      }`}
    >
      {normalizedStatus}
    </span>
  );
}

export default StatusBadge;