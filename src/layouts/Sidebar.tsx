import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTheme } from "./ThemeContext";
import { useNavigate } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const closeSidebar = (e: any) => {
    if (!e.target.closest(".sidebar") && !e.target.closest(".menu-btn")) {
      setIsOpen(false);
    }
  };

  return (
    <div className="position-relative" onClick={closeSidebar}>
      {/* Top Bar (Ensuring hamburger stays visible) */}
      <div className="btn-grad-blue-ash bg-primary text-white d-flex align-items-center p-3 shadow position-fixed top-element w-100">
        {/* Hamburger Menu */}
        <i
          className="fa fa-bars menu-btn cursor-pointer fs-4 me-3 position-relative"
          onClick={toggleSidebar}
          style={{ zIndex: 1100 }} // Ensuring it's above sidebar
        >
          <svg width="30" height="30" viewBox="0 0 100 80" fill="#ccc">
            <rect width="90" height="8"></rect>
            <rect y="30" width="90" height="8"></rect>
            <rect y="60" width="90" height="8"></rect>
          </svg>

        </i>
        <img className="h-7 img-fluid custom-logo cursor-pointer" src="../src/assets/vite2.svg" alt="Logo" />
        <h5
          className="all-h-text ms-1 fs-6 cursor-pointer"
          onClick={() => navigate("/")}
        >
          MOVIE<span className="text-warning">ZONE</span>
        </h5>

        {/* Theme Toggle Button */}
        <button
          className="all-p-text btn-grad-blue btn btn-sm btn-outline-light ms-auto fs-10"
          onClick={toggleTheme}
          style={{ zIndex: 1100 }}
        >
          <b>{isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}</b>
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <nav
        className={`sidebar position-fixed top-0 start-0 h-100 bg-white shadow p-3 transition`}
        style={{
          width: "250px",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
          zIndex: 1050, // Keep sidebar below the menu button
        }}
      >
        <div className="d-flex align-items-center border-bottom pb-2">
        <img className="h-7 img-fluid custom-logo cursor-pointer" src="../src/assets/vite2.svg" alt="Logo" />
        <strong
            className="ms-2 fs-4 text-warning cursor-pointer"
            onClick={() => navigate("/")}
          >
            MOVIE<span className="text-secondary">ZONE</span>
          </strong>
          <p
            className="cursor-pointer fa fa-times ms-auto fs-4 "
            onClick={() => setIsOpen(false)}
          >
            ✖️
          </p>
        </div>
        <ul className="list-unstyled mt-3">
          <li
            className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer"
            onClick={() => navigate("/movie")}
          >
            <i className="fa fa-home me-2"></i> Home
          </li>
          <li className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer">
            <i className="fa fa-film me-2"></i> Movies
          </li>
          <li className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer">
            <i className="fa fa-tv me-2"></i> Series
          </li>
          <li className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer">
            <i className="fa fa-heart me-2"></i> Favourites
          </li>
          <li className="p-2 text-uppercase small text-muted">
            Popular Genres
          </li>
          <li className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer">
            <i className="fa fa-bolt me-2"></i> Action
          </li>
          <li className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer">
            <i className="fa fa-cogs me-2"></i> Adventure
          </li>
          <li className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer">
            <i className="fa fa-theater-masks me-2"></i> Drama
          </li>
          <li className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer">
            <i className="fa fa-shield-alt me-2"></i> Thriller
          </li>
          <li className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer">
            <i className="fa fa-laugh me-2"></i> Comedy
          </li>
          <li className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer">
            <i className="fa fa-heart me-2"></i> War
          </li>
          <li className="p-2 text-uppercase small text-muted">Extra</li>
          <li className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer">
            <i className="fa fa-star me-2"></i> Featured Movies
          </li>
          <li className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer">
            <i className="fa fa-eye me-2"></i> My Watchlist
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
