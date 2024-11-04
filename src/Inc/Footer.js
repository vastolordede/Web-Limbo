import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="Footer fixed-bottom">
        <div className="Footer-text">
        © 2024 Like Playdead. All rights reserved.<br></br>
        Ho Chi Minh City, VietNam - Privacy Policy
        </div>
        <div className="Footer-icon">
            <FontAwesomeIcon className="Icon" icon={faSquareFacebook} />
            <FontAwesomeIcon className="Icon" icon={faSquareInstagram} />
            <FontAwesomeIcon className="Icon" icon={faTiktok} />
        </div>
    </div>
  );
}
export default Footer;