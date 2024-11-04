import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav font fixed-top w-100">
        <div className="brand"><strong><Link className="nav-item" to="/">Limbo</Link></strong></div>
        <strong>
        <ul className="nav-box d-flex flex-row">
            <li><Link className="nav-item" to="/">Home</Link></li>
            <li><Link className="nav-item" to="/Contact">Contact</Link></li>
            <li><Link className="nav-item" to="/Info">Info</Link></li>
        </ul>
        </strong>
    </nav>
  );
}
export default Navbar;