import React from "react";
import { addNotification } from "../../services/notification";

const NotificationButtons: React.FC = () => {
  return (
    <div className="input-container">
      <div>
        <br />
        <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
          <button
            className="button"
            onClick={() => addNotification("Notification 1")}
          >
            Send Notification 1
          </button>
          <button
            className="button"
            onClick={() => addNotification("Notification 2")}
          >
            Send Notification 2
          </button>
          <button
            className="button"
            onClick={() => addNotification("Notification 3")}
          >
            Send Notification 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationButtons;
