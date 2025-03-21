import React from "react";


const Luag: React.FC = () => {
  const projectProgressStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflow: "auto",
  };

  return (
    <div style={projectProgressStyle}>
      <iframe
        src="https://app.powerbi.com/reportEmbed?reportId=418f46a0-9c1d-463b-ba44-e1af8f91e342&autoAuth=true&ctid=04c72f56-1848-46a2-8167-8e5d36510cbc&filterPaneEnabled=false&navigationContentPanelEnabled=false&chrome=false&navContentPaneEnabled=false&hideNavBar=true"
        allowFullScreen={true}
       
      ></iframe>
    </div>
  );
};

export default Luag;