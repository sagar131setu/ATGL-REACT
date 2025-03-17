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
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
