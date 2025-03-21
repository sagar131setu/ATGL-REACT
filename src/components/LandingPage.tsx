import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNaturalGasClick = () => {
    navigate("/dpng");
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <img
        src="/assets/mainpage.png"
        alt="Main"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <button
        style={{
          position: "absolute",
          height: "500px",
          width: "310px",
          top: "50%",
          left: "24%",
          transform: "translate(-50%, -50%)",
          padding: "16px 24px",
          fontSize: "16px",
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={handleNaturalGasClick}
      ></button>
    </div>
  );
};

export default LandingPage;
