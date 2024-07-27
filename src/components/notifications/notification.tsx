import React, { useEffect, useState, useRef } from "react";
import NotificationButtons from "./notification-button";
import NotificationList from "./notification-list";
import NotificationIcon from "./notification-icon";
import {
  markAsRead,
  listenForUnreadNotifications,
} from "../../services/notification";

import { Notification as NotificationType } from "../../types/notifications";

const Notification: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [unReadCount, setUnReadCount] = useState<number>(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = listenForUnreadNotifications((notifications) => {
      setNotifications(notifications);
      setUnReadCount(notifications.filter((n) => !n.read).length);
    });

    return () => unsubscribe();
  }, []);

  const handleToggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const handleMarkAsRead = async (id: string) => {
    const updatedNotification = await markAsRead(id);
    if (updatedNotification) {
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === id
            ? { ...notification, read: true }
            : notification
        )
      );
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target as Node)
    ) {
      setShowNotifications(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container">
      <NotificationButtons />
      {notifications.length ? (
        <div ref={notificationRef}>
          <NotificationIcon
            unReadCount={unReadCount}
            onClick={handleToggleNotifications}
          />
          {showNotifications && (
            <NotificationList
              notifications={notifications}
              onMarkAsRead={handleMarkAsRead}
            />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Notification;
