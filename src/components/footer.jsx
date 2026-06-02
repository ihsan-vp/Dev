import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer-area">
      <div className="footer-content">
        <p>© 2026 Car Spare. All rights reserved.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-links">
          <a href="https://www.instagram.com/ihsan_sanuz/"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href=""><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
          <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
      </div>


    </footer>
  );
}

export default Footer;

        