import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// You can adjust this value if your header's height changes
export const HEADER_HEIGHT = 64; // px

function ThemeToggle({ darkMode, toggleDarkMode, headerBg = "#7091E6" }) {
  const moonShadowColor = darkMode ? headerBg : "#7091E6";
  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        outline: "none",
        padding: 0,
        marginLeft: "1rem",
        display: "flex",
        alignItems: "center"
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        style={{
          display: "block",
          transition: "transform 0.5s cubic-bezier(.17,.67,.83,.67)",
          transform: darkMode ? "rotate(40deg) scale(0.95)" : "rotate(0deg) scale(1)"
        }}
      >
        <circle
          cx="20"
          cy="20"
          r={darkMode ? 12 : 10}
          fill="#FFC700"
          style={{
            transition: "r 0.4s cubic-bezier(.17,.67,.83,.67)"
          }}
        />
        <circle
          cx={darkMode ? 25 : 20}
          cy="15"
          r={darkMode ? 8 : 0}
          fill={moonShadowColor}
          style={{
            transition: "r 0.4s cubic-bezier(.17,.67,.83,.67), cx 0.4s cubic-bezier(.17,.67,.83,.67)"
          }}
        />
        {!darkMode &&
          Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45) * (Math.PI / 180);
            const x1 = 20 + Math.cos(angle) * 17;
            const y1 = 20 + Math.sin(angle) * 17;
            const x2 = 20 + Math.cos(angle) * 23;
            const y2 = 20 + Math.sin(angle) * 23;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#FFC700"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  opacity: darkMode ? 0 : 1,
                  transition: "opacity 0.3s"
                }}
              />
            );
          })}
      </svg>
    </button>
  );
}

export default function Header(props) {
  const headerBg = props.darkMode ? "#3D52A0" : "#7091E6";

  return (
    <nav
      className="navbar navbar-expand-lg custom-navbar"
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: 1020,
        backgroundColor: headerBg,
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
      }}
    >
      <div className="container py-2">
        <Link className="navbar-brand" to="/" style={{ color: "#fff", fontWeight: 600 }}>
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {props.searchBar ? (
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          ) : null}
          <ThemeToggle
            darkMode={props.darkMode}
            toggleDarkMode={props.toggleDarkMode}
            headerBg={headerBg}
          />
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: "No Title",
  searchBar: true,
  darkMode: false,
  toggleDarkMode: () => {},
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool,
  toggleDarkMode: PropTypes.func,
};