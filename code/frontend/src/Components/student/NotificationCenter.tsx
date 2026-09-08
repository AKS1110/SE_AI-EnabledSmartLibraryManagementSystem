import {
  Bell,
  Check,
  CheckCheck,
  AlertTriangle,
  Clock,
  PackageCheck,
} from "lucide-react";
import { useNotifications } from "../../hooks/useNotifications";

function NotificationCenter() {
  const {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
  } = useNotifications();

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "OVERDUE":
        return (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
        );

      case "REMINDER":
        return (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
            <Clock className="h-5 w-5 text-amber-600" />
          </div>
        );

      case "COLLECTION":
        return (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
            <PackageCheck className="h-5 w-5 text-green-600" />
          </div>
        );

      default:
        return (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
            <Bell className="h-5 w-5 text-slate-600" />
          </div>
        );
    }
  };

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100">
            <Bell className="h-6 w-6 text-purple-600" />

            {unreadCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
                {unreadCount}
              </span>
            )}
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Notification Center
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Stay updated about due dates, overdue assets, and
              collection notifications.
            </p>
          </div>
        </div>

        {unreadCount > 0 && (
          <button
            type="button"
            onClick={markAllAsRead}
            className="flex items-center gap-2 self-start rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:self-auto"
          >
            <CheckCheck className="h-4 w-4" />
            Mark all as read
          </button>
        )}
      </div>

      <div className="mt-6 space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`rounded-xl border p-4 transition ${
              notification.read
                ? "border-slate-200 bg-white"
                : "border-indigo-200 bg-indigo-50/40"
            }`}
          >
            <div className="flex gap-4">
              {getNotificationIcon(notification.type)}

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {notification.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {notification.message}
                    </p>
                  </div>

                  {!notification.read && (
                    <span className="inline-flex w-fit rounded-full bg-indigo-100 px-2 py-1 text-xs font-semibold text-indigo-700">
                      NEW
                    </span>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="text-xs text-slate-400">
                    {notification.date}
                  </span>

                  {!notification.read && (
                    <button
                      type="button"
                      onClick={() => markAsRead(notification.id)}
                      className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                    >
                      <Check className="h-3.5 w-3.5" />
                      Mark as read
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-8 text-center">
          <Bell className="mx-auto h-8 w-8 text-slate-400" />

          <p className="mt-2 font-medium text-slate-700">
            No notifications
          </p>

          <p className="mt-1 text-sm text-slate-500">
            You're all caught up.
          </p>
        </div>
      )}
    </section>
  );
}

export default NotificationCenter;