import React from "react";


const Permissions: React.FC = () => {
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
        src="https://app.powerbi.com/reportEmbed?reportId=8369fdd5-4633-4ca1-9526-9a9072ef766b&autoAuth=true&ctid=04c72f56-1848-46a2-8167-8e5d36510cbc&filterPaneEnabled=false&navigationContentPanelEnabled=false&chrome=false&navContentPaneEnabled=false&hideNavBar=true"
        allowFullScreen={true}
       
      ></iframe>
    </div>
  );
};

export default Permissions;
