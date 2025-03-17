import React from "react";

const Dashboard: React.FC = () => {
  const dashboardIconStyle: React.CSSProperties = {
    display: "flex",
    flexGrow: 1,
    width: "100%",
    height: "100%",
  };
  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
  };
  return (
    <div style={dashboardIconStyle}>
      <img src="/assets/Landing Page.png" style={imageStyle} alt="Landing" />
    </div>
  );
};

export default Dashboard;
