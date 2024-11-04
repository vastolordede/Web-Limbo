import React from "react";
import { Link } from "react-router-dom";
import img from "../img/Limbo-logo.png"
import img1 from "../img/LIMBO_Game1.jpg"
import img2 from "../img/LIMBO_Game2.jpg"
import img3 from "../img/LIMBO_Game3.jpg"

function Game() {
  return (
    <div className="Home-bg view font">
        <div><img className="Game-logo" src={img}></img></div>
        <div className="content"><img className="img-test" src={img1}></img><p className="Game-text">he boy and his sister went to the forest to play. When the boy took a nap he "woke up" in limbo. Fearing for his sister's safety he goes to the tree house and fears the worst</p></div>
        <div className="content-1"><p className="Game-text">The boy is stuck in Limbo after dying from ether drowning or a trap of some sort. this is proved by the abundance of bear traps and that water kills the boy. also, the abrupt end is due to him having to repeat the nightmare over again... never to truly reach the end.</p><img className="img-test-1" src={img2}></img></div>
        <div className="content"><img className="img-test" src={img3}></img><p className="Game-text">Once he finishes all of the obstacles, he is ready to say his final goodbye to his sister, who is grieving him by the treehouse that they used to play on.</p></div>
        <div className="content-2"><p className="Last-game-text">To fully experience the game, please purchase it here</p><Link to="/Buy"><button className="Buy-button">Buy Now</button></Link></div>
    </div>
  );
}
export default Game;