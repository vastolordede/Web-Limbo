import React from "react";
import { Link } from "react-router-dom";
import Slider from "../Inc/Slider";
import img from "../img/Limbo-logo.png"

function Buy() {
    return (
      <div className="Home-bg font">
        <div className="Buy-box">
        <Slider />
        <div className="buy-content">
            <img className="buy-logo" src={img}></img>
            <p className="price">9.99$</p>
            <p>LIMBO is a 2010 indie puzzle platformer video game developed and published by Playdead, who also made INSIDE. It was released on July 21, 2010, for Android, Microsoft Windows, PlayStation 4, and more. It was later released on Steam on August 2, 2011, and also on Nintendo Switch, on June 28, 2018</p>
            <Link className="Buy-to-check-out-link" to="/Information"><button className="Buy-to-check-out">purchase</button></Link>
        </div>
        </div>
        </div>
  );
}
export default Buy;