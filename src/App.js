import "./assets/navbar.css";
import "./assets/App.css";
import { NavLink, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Experience from "./pages/section1";
import Work from "./pages/section2";
import Contact from "../src/pages/section3";

function App() {
  return (
    <div className="container-xl">
      <nav className="navbar">
        <div className="container-nav">
          <div className="nav-link">
            <span className="nav-item">
              <NavLink to="/" className="list">
                About
              </NavLink>
            </span>
            <span className="nav-item">
              <NavLink to="/experience" className="list">
                Experience
              </NavLink>
            </span>
            <span className="nav-item">
              <NavLink to="/work" className="list">
                Work
              </NavLink>
            </span>
            <span className="nav-item">
              <NavLink to="/contact" className="list">
                Contact
              </NavLink>
            </span>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
