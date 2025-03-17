import React from "react";

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  background: "linear-gradient(to right, #387ea3, #006db6, #8e278f, #b24460)",
  width: "100%",
  height: "48px",
  color: "#ffffff",
  fontFamily: "Arial, sans-serif",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
};

const headerLogoStyle: React.CSSProperties = {
  width: "137.28px",
  height: "24px",
  paddingLeft: "24px",
  objectFit: "contain",
};

const profileStyle: React.CSSProperties = {
  paddingTop: "12px",
  paddingLeft: "22.72px",
};

const Header: React.FC = () => {
  return (
    <div style={headerStyle}>
      <img src="/assets/adanilogo.png" style={headerLogoStyle} />
      <img src="/assets/ThirdEye Analytics.png" style={profileStyle} />
    </div>
  );
};

export default Header;
