import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Darkmode from "../../components/Main/Darkmode";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="nav-container">
        <img
          className="logo"
          src="./src/assets/Kp2.webp"
          alt="Personal Logo for Kalle Pettersson's Portfolio"
        />
        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {!menuOpen && (
          <ul className={`list-container-Header`}>
            <li className="list-style-header">
              <Link className="Btn Btn-one-header" to="/Home">
                <i className="fa-solid fa-house"></i>Home
              </Link>
            </li>
            <li className="list-style-header">
              <Link className="Btn Btn-one-header" to="/About">
                <i className="fa-solid fa-user"></i> About
              </Link>
            </li>
            <li className="list-style-header">
              <Link className="Btn Btn-one-header" to="/Projects">
                <i className="fa-solid fa-folder"></i> Projects
              </Link>
            </li>
            <li className="list-style-header">
              <Link className="Btn Btn-one-header" to="/Contact">
                <i className="fa-brands fa-linkedin"></i> Contact
              </Link>
            </li>
          </ul>
        )}
        <Darkmode />
      </nav>
    </header>
  );
}

/*My Header handles the navigation menu and i incoporating the React Router for navigation and including a Darkmode component for changing theme */
