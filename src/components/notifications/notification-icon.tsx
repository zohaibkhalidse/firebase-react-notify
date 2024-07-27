import React from "react";
import BellIcon from '../../icons/bell-icon.svg';

interface NotificationIconProps {
  onClick: () => void;
  unReadCount: number;
}

const NotificationIcon: React.FC<NotificationIconProps> = ({
  unReadCount,
  onClick,
}) => {
  return (
    <div className="notification-icon" onClick={onClick}>
      <img src={BellIcon} alt="Bell Icon" />
      <span className="icon__style">{unReadCount}</span>
    </div>
  );
};

export default NotificationIcon;
