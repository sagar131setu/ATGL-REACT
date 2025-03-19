import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import ProjectProgress from "./components/ProjectProgress";
import Permissions from "./components/Permissions";
import Dashboard from "./components/Dashboard";
import SideNav from "./components/SideNav";
import Dpng from "./components/Dpng";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <SideNav />
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/project-progress" element={<ProjectProgress />} />
            <Route path="/permissions" element={<Permissions />} />
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
            <Route path="/luag" element={<div>LUAG</div>} />
            <Route path="/command-center" element={<div>Command Center</div>} />
            <Route path="/maintenance" element={<div>Maintenance</div>} />
            <Route
              path="/vendor-performance"
              element={<div>Vendor Performance</div>}
            />
            <Route
              path="/it"
              element={<div>IT</div>}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
