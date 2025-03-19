import React from "react";


const Dpng: React.FC = () => {
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
        
        src="https://app.powerbi.com/reportEmbed?reportId=20862e60-c932-4249-9d8c-abcdd9bd4c22&autoAuth=true&ctid=04c72f56-1848-46a2-8167-8e5d36510cbc&filterPaneEnabled=false&navigationContentPanelEnabled=false&chrome=false&navContentPaneEnabled=false&hideNavBar=true"
        allowFullScreen={true}
       
      ></iframe>
    </div>
  );
};

export default Dpng;
