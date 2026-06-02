import { useState } from "react";
import "./home.css";
import logo from "../assets/Images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home">

      {/* LOGO */}
      <div className="logo-section">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="heading">DUST AUTOMOTIVE</h1>
      </div>

      {/* DESKTOP NAVBAR */}
      <nav className="navbar">
        <div className="nav-links desktop-nav">
          <a href="/">Home</a>
          <a href="#about">About us</a>
          <a href="#service">Services</a>
          <a href="#contact">Contact us</a>
        </div>
      </nav>

      {/* HAMBURGER */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`mobile-sidebar ${menuOpen ? "active" : ""}`}>

        {/* CLOSE BUTTON */}
        <div
          className="close-btn"
          onClick={() => setMenuOpen(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>

        <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About us</a>
        <a href="#service" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact us</a>

      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

    </div>
  );
}

export default Home;