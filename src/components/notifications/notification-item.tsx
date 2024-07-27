import React from "react";
import { markAsRead } from "../../services/notification";
import TickIcon from "../../icons/tick.svg";

interface NotificationItemProps {
  id: string;
  message: string;
  read: boolean,
  onMarkAsRead: (id: string) => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  id,
  message,
  onMarkAsRead,
  read,
}) => {
  const handleMarkAsRead = async () => {
    await markAsRead(id);
    onMarkAsRead(id);
  };

  return (
    <div className="notification-item">
      <span>{message}</span>
      {read ? (
        <img style={{ width: 20, height: 20 }} src={TickIcon} alt="Tick Icon" />
      ) : (
        <button className="mark-as-read" onClick={handleMarkAsRead}>
          Mark as Read
        </button>
      )}
    </div>
  );
};

export default NotificationItem;
