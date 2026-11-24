import {
  AlertTriangle,
  Bell,
  Check,
  CheckCheck,
  Clock3,
  PackageCheck,
} from "lucide-react";

import type { MockNotification } from "../../mockData/mockData";

interface NotificationCenterProps {
  notifications: MockNotification[];
  unreadCount: number;
  markAsRead: (id: number) => void;
  markAllAsRead: () => void;
}

function NotificationCenter({
  notifications,
  unreadCount,
  markAsRead,
  markAllAsRead,
}: NotificationCenterProps) {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "OVERDUE":
        return (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-100">
            <AlertTriangle size={17} className="text-red-600" />
          </div>
        );

      case "REMINDER":
        return (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100">
            <Clock3 size={17} className="text-amber-600" />
          </div>
        );

      case "COLLECTION":
        return (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100">
            <PackageCheck size={17} className="text-green-600" />
          </div>
        );

      default:
        return (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
            <Bell size={17} className="text-slate-500" />
          </div>
        );
    }
  };

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
            <Bell size={19} className="text-indigo-600" />

            {unreadCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                {unreadCount}
              </span>
            )}
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900">
              Notifications
            </h2>

            <p className="mt-0.5 text-xs text-slate-500">
              Recent library updates
            </p>
          </div>
        </div>

        {unreadCount > 0 && (
          <button
            type="button"
            onClick={markAllAsRead}
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-50"
          >
            <CheckCheck size={14} />
            Mark all read
          </button>
        )}
      </div>

      {/* Notifications */}
      <div className="p-4">
        {notifications.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-200 px-4 py-10 text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-slate-100">
              <Bell size={20} className="text-slate-400" />
            </div>

            <p className="mt-3 text-sm font-semibold text-slate-700">
              You're all caught up
            </p>

            <p className="mt-1 text-xs text-slate-500">
              New library notifications will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`rounded-xl border p-3.5 transition ${
                  notification.read
                    ? "border-slate-100 bg-white"
                    : "border-indigo-100 bg-indigo-50/40"
                }`}
              >
                <div className="flex items-start gap-3">
                  {getNotificationIcon(notification.type)}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm font-semibold text-slate-900">
                            {notification.title}
                          </h3>

                          {!notification.read && (
                            <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                              New
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {notification.message}
                        </p>
                      </div>

                      {!notification.read && (
                        <button
                          type="button"
                          onClick={() => markAsRead(notification.id)}
                          className="shrink-0 rounded-lg p-1.5 text-slate-400 transition hover:bg-white hover:text-indigo-600"
                          title="Mark as read"
                        >
                          <Check size={15} />
                        </button>
                      )}
                    </div>

                    <p className="mt-2 text-[11px] font-medium text-slate-400">
                      {notification.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-3">
        <p className="text-center text-xs text-slate-400">
          Stay updated on your library activity
        </p>
      </div>
    </section>
  );
}

export default NotificationCenter;