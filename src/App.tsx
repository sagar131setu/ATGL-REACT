import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import ProjectProgress from "./components/ProjectProgress";
import Permissions from "./components/Permissions";
import SideNav from "./components/SideNav";
import Dpng from "./components/Dpng";
import Luag from "./components/Luag";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {/* Show LandingPage first with no side nav */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      {/* Then show the rest of the app */}
      {location.pathname !== "/" && (
        <>
          <Header />
          <div className="container">
            <SideNav />
            <main className="content">
              <Routes>
                <Route path="/permissions/peso" element={<ProjectProgress />} />
                <Route path="/permissions/pipeline" element={<Permissions />} />
                <Route path="/dpng" element={<Dpng />} />
                <Route
                  path="/asset-portfolio"
                  element={<div>Asset Portfolio</div>}
                />
                <Route
                  path="/customer-portfolio"
                  element={<div>Customer Portfolio</div>}
                />
                <Route path="/volumetrics" element={<div>Volumetrics</div>} />
                <Route
                  path="/digitalization-index"
                  element={<div>Digitalization Index</div>}
                />
                <Route path="/luag" element={<Luag />} />
                <Route
                  path="/command-center"
                  element={<div>Command Center</div>}
                />
                <Route path="/maintenance" element={<div>Maintenance</div>} />
                <Route
                  path="/vendor-performance"
                  element={<div>Vendor Performance</div>}
                />
              </Routes>
            </main>
          </div>
        </>
      )}
    </>
  );
};

export default App;
