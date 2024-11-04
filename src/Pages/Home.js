import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home-bg">
        <div className="limbo font">
            Limbo
        </div>
        <Link className="button-game" to="/Game"><button className="See-game font">Go To See<br></br> The Game</button></Link>
    </div>
  );
}
export default Home;