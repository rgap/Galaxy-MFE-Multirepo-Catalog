import React from "react";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="loading">
      <div className="loading-spinner"></div>
      {message}
    </div>
  );
};

export default Loading;
