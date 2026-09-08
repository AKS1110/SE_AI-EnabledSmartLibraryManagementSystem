import { useState } from "react";
import { mockNotifications } from "../mockData/mockData";
import type { MockNotification } from "../mockData/mockData";

export function useNotifications() {
  const [notifications, setNotifications] =
    useState<MockNotification[]>(mockNotifications);

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const markAsRead = (id: number) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  return {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
  };
}