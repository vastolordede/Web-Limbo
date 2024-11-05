import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="Footer fixed-bottom">
        <div className="Footer-text">
        © 2024 Like Playdead. All rights reserved.<br></br>
        Ho Chi Minh City, VietNam - 
        <Link className="privacy no-underline" to="/Privacy">Privacy Policy</Link>
        </div>
        <div className="Footer-icon">
            <a className="Footer-icon-Link" href="https://web.facebook.com/playdeadstudios/?_rdc=1&_rdr#"><FontAwesomeIcon className="Icon" icon={faSquareFacebook} /></a>
            <a className="Footer-icon-Link" href="https://www.instagram.com/playdeadgames/"><FontAwesomeIcon className="Icon" icon={faSquareInstagram} /></a>
            <a className="Footer-icon-Link" href="https://www.youtube.com/watch?v=xvFZjo5PgG0"><FontAwesomeIcon className="Icon" icon={faTiktok} /></a>
        </div>
    </div>
  );
}
export default Footer;