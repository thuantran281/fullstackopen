import React from "react";

const Notification = ({ message, type }) => {
  if (message === null) {
    return null;
  }

  return (
    <div className={`notifcation ${type}`}>
      {message}
    </div>
  );
};

export default Notification;