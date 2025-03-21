import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const sideNavStyles = `
.side-nav {
  width: 300px;
  height: calc(100vh - 48px) !important;
  background: #ffffff;
  padding: 12px 0;
  position: fixed;
  top: 48px;
  left: 0;
  overflow-y: auto;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.15);
  color: black;
  justify-content: center;
}

.side-nav-container {
  width: 280px ! important;
  display: flex;
  max-width: 226px ! important;
  flex-direction: column;
  padding: 6px 8px;
}

.side-nav-container ul {
  list-style: none;
  width: 226px;
  padding: 0;
  margin: 0;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: Adani;
  font-weight:500;
  padding: 6px 8px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0%;
  white-space: normal;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  color: #040404;
  width: calc(290px - 20px) !important;
  height: 36px;
  padding-left: 0px;
  margin-bottom: 0px;
}
.menu-item + .menu-item {
  margin-top: 12px;
}

.menu-item:hover {
  // background: rgba(13, 103, 202, 0.1);
}

.menu-item.active {
  // background: #0d67ca !important;
  color: white !important;
 width: 226px !important;
  font-weight: 500;
}


.menu-item.active img {
  filter: brightness(0) invert(1);
}

.sub-menu {
  padding-left: 36px;
  font-family: Adani;
  font-size: 1px;
  font-weight: 500;
  letter-spacing: 0%;
  line-height: 24px;
  display: flex;
  color: #040404;
  top: 8;
  flex-direction: column;
  gap: 4px;
}

.sub-menu li {
  display: flex;
  align-items: center;
  padding: 6px 8px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  width: calc(226px - 16px);
  height: 36px;
  border-radius: 4px;
}

.sub-menu li a {
  text-decoration: none !important;
  color: #7f8286;
  display: block;
  align-items: center;
  justify-content: flex-start;
  padding: 6px 8px;
  align-items: center;
  padding-top: 15px;
border-radius: 4px;
  height: 36px;
  padding-left: 35px;
  width: 100%;
}

.sub-menu li.active {
  background: #0d67ca !important;
  color: white !important;
  padding: 6px 8px;
  font-weight: bold;
}

.sub-menu li a.active {
  background: #0d67ca !important;
  color: white !important;
  font-weight: 400;
  align-items: center;
  padding-top: 12px;
  justify-content: flex-start;
  border-radius: 4px;
  height: 30px;
}

.sub-menu li.active a {
  color: white !important;
}

.menu-item.active span {
  color: white !important;
}

.sub-menu li:hover {
  background: rgba(13, 103, 202, 0.1);
}

.expand-icon {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease-in-out;
  margin-left: auto;
}

.rotate {
  transform: scaleY(-1);
}

.nav-icon {
  color: #212121;
}
`;

const SideNav: React.FC = () => {
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);
  const [isOperationsExpanded, setIsOperationsExpanded] = useState(false);
  const [isBusinessExpanded, setIsBusinessExpanded] = useState(true);
  const [isPermissionsExpanded, setIsPermissionsExpanded] = useState(false);

  const toggleProjectsMenu = () => {
    setIsProjectsExpanded(!isProjectsExpanded);
  };

  const toggleOverviewMenu = () => {
    setIsOverviewExpanded(!isOverviewExpanded);
  };

  const toggleOperationsMenu = () => {
    setIsOperationsExpanded(!isOperationsExpanded);
  };

  const toggleBusinessMenu = () => {
    setIsBusinessExpanded(!isBusinessExpanded);
  };

  const togglePermissionsMenu = () => {
    setIsPermissionsExpanded(!isPermissionsExpanded);
  };

  return (
    <>
      <style>{sideNavStyles}</style>
      <div className="side-nav">
        <div className="side-nav-container">
          <ul className="sub-menu">
            <li className="menu-item clickable" onClick={toggleOverviewMenu}>
              <img
                src="/assets/overview.png"
                className="nav-icon"
                alt="Overview"
              />
              <span>Overview</span>
              <img
                src="/assets/Vector.png"
                className={`expand-icon ${isOverviewExpanded ? "rotate" : ""}`}
                alt="Expand"
              />
            </li>
            {isOverviewExpanded && (
              <ul className="sub-menu">
                <li>
                  <NavLink
                    to="/asset-portfolio"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Asset Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/customer-portfolio"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Customer Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/volumetrics"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Volumetrics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/digitalization-index"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Digitalization Index
                  </NavLink>
                </li>
              </ul>
            )}
            <li className="menu-item clickable" onClick={toggleBusinessMenu}>
              <img
                src="/assets/business-development.png"
                className="nav-icon"
                alt="Business Development"
              />
              <span>Business Development</span>
              <img
                src="/assets/Vector.png"
                className={`expand-icon ${isBusinessExpanded ? "rotate" : ""}`}
                alt="Expand"
              />
            </li>
            {isBusinessExpanded && (
              <ul className="sub-menu">
                <li>
                  <NavLink
                    to="/dpng"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    D-PNG
                  </NavLink>
                </li>
              </ul>
            )}

            <li className="menu-item clickable" onClick={toggleProjectsMenu}>
              <img
                src="/assets/projects.png"
                className="nav-icon"
                alt="Projects"
              />
              <span>Projects</span>
              <img
                src="/assets/Vector.png"
                className={`expand-icon ${isProjectsExpanded ? "rotate" : ""}`}
                alt="Expand"
              />
            </li>
            {isProjectsExpanded && (
              <ul className="sub-menu">
                <li>
                  <NavLink
                    to="/project-progress"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Project Progress
                  </NavLink>
                </li>
                <li
                  className="menu-item clickable"
                  onClick={togglePermissionsMenu}
                  style={{ color: "#7f8286" }}
                >
                  <span style={{ paddingLeft: "35px" }}>Permissions</span>
                  <img
                    src="/assets/Vector.png"
                    className={`expand-icon ${
                      isPermissionsExpanded ? "rotate" : ""
                    }`}
                    alt="Expand"
                  />
                </li>
                {isPermissionsExpanded && (
                  <ul className="sub-menu">
                    <li>
                      <NavLink
                        to="/permissions/peso"
                        className={({ isActive }) => (isActive ? "active" : "")}
                        style={{ paddingLeft: "50px", marginTop: "0px" }}
                      >
                        PESO
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/permissions/pipeline"
                        className={({ isActive }) => (isActive ? "active" : "")}
                        style={{ paddingLeft: "50px" }}
                      >
                        Pipeline
                      </NavLink>
                    </li>
                  </ul>
                )}
              </ul>
            )}
            <li className="menu-item clickable" onClick={toggleOperationsMenu}>
              <img
                src="/assets/operation.png"
                className="nav-icon"
                alt="Operations & Maintenance"
              />
              <span>Operations & Maintenance</span>
              <img
                src="/assets/Vector.png"
                className={`expand-icon ${
                  isOperationsExpanded ? "rotate" : ""
                }`}
                alt="Expand"
              />
            </li>
            {isOperationsExpanded && (
              <ul className="sub-menu">
                <li>
                  <NavLink
                    to="/luag"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    LUAG
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/command-center"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Command Center
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/maintenance"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Maintenance
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/vendor-performance"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Vendor Performance
                  </NavLink>
                </li>
              </ul>
            )}
            <NavLink
              to="/customer-service"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <li className="menu-item">
                <img
                  src="/assets/customer-service.png"
                  className="nav-icon"
                  alt="Customer Service"
                />
                <span>Customer Service</span>
              </li>
            </NavLink>
            <NavLink
              to="/ehs"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <li className="menu-item">
                <img src="/assets/ehs.png" className="nav-icon" alt="EHS" />
                <span>EHS</span>
              </li>
            </NavLink>
            <NavLink
              to="/finance"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <li className="menu-item">
                <img
                  src="/assets/finance.png"
                  className="nav-icon"
                  alt="Finance"
                />
                <span>Finance</span>
              </li>
            </NavLink>
            <NavLink
              to="/techno-commercials"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <li className="menu-item">
                <img
                  src="/assets/techno.png"
                  className="nav-icon"
                  alt="Techno Commercials"
                />
                <span>Techno Commercials</span>
              </li>
            </NavLink>
            <NavLink
              to="/hr-admin"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <li className="menu-item">
                <img
                  src="/assets/hr-admin.png"
                  className="nav-icon"
                  alt="HR & Admin"
                />
                <span>HR & Admin</span>
              </li>
            </NavLink>
            <NavLink
              to="/it"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <li className="menu-item">
                <img src="/assets/IT.png" className="nav-icon" alt="IT" />
                <span>IT</span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNav;
