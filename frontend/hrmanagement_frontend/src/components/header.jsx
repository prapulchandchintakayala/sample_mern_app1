
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const currentuser = JSON.parse(
    localStorage.getItem("currentuser") || "null"
  );

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("currentuser");
    setMenuOpen(false);
    navigate("/login");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand brand-logo"
          onClick={closeMenu}
        >
          <span className="brand-icon">
            <i className="bi bi-people-fill"></i>
          </span>
          <span>Work<span className="brand-highlight">Flow</span></span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>

        {/* Navigation links */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <div className="navbar-nav mx-auto nav-links">
            <Link
              to="/"
              onClick={closeMenu}
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            >
              <i className="bi bi-house-door me-2"></i>Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
            >
              <i className="bi bi-info-circle me-2"></i>About
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
            >
              <i className="bi bi-envelope me-2"></i>Contact
            </Link>

            {/* HR menu */}
            {currentuser?.role === "HR" && (
              <>
                <Link to="/viewemployees" className="nav-link" onClick={closeMenu}>
                  <i className="bi bi-people me-2"></i>Employees
                </Link>
                <Link to="/view_tasks" className="nav-link" onClick={closeMenu}>
                  <i className="bi bi-list-task me-2"></i>View Tasks
                </Link>
              </>
            )}

            {/* Employee menu */}
            {currentuser?.role === "EMPLOYEE" && (
              <>
                <Link to="/viewtask" className="nav-link" onClick={closeMenu}>
                  <i className="bi bi-clipboard-check me-2"></i>My Tasks
                </Link>
                <Link to="/todo" className="nav-link" onClick={closeMenu}>
                  <i className="bi bi-check2-square me-2"></i>Add Todo
                </Link>
              </>
            )}

            {/* Admin menu */}
            {currentuser?.role === "admin" && (
              <>
                <Link to="/viewemployees" className="nav-link" onClick={closeMenu}>
                  <i className="bi bi-people me-2"></i>Employees
                </Link>
                <Link to="/view_tasks" className="nav-link" onClick={closeMenu}>
                  <i className="bi bi-list-task me-2"></i>View Tasks
                </Link>
              </>
            )}
          </div>

          {/* Right-side buttons */}
          <div className="navbar-actions">
            {!currentuser ? (
              <>
                <Link
                  to="/login"
                  className="btn login-btn"
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn register-btn"
                  onClick={closeMenu}
                >
                  <i className="bi bi-person-plus me-2"></i>Register
                </Link>
              </>
            ) : (
              <div className="user-section">
                <span className="user-badge">
                  <i className="bi bi-person-circle me-2"></i>
                  {currentuser.name || currentuser.username || currentuser.role}
                </span>
                <button
                  className="btn logout-btn"
                  onClick={handleLogout}
                >
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

