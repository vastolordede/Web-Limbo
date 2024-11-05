import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import img from "../img/Limbo-logo.png"
import img1 from "../img/LIMBO_Game1.jpg"
import img2 from "../img/LIMBO_Game2.jpg"
import img3 from "../img/LIMBO_Game3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown} from "@fortawesome/free-solid-svg-icons"



function Game() {

  useEffect(() => {
    // Cuộn xuống phần có id="1" khi trang được tải
    const element = document.getElementById("1");
    if (element) {
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop - 195,  // Cuộn đến vị trí của phần có id="1" với khoảng cách 50px từ trên cùng
          behavior: "smooth",           // Cuộn một cách mượt mà
        });
      }, 750);
    }
  }, []);

  return (
    <div className="Home-bg view font">
      <div className="text-next"><img className="Game-logo" src={img}></img>
      </div>
      {/* 1 */}
      <div className="content scroll-0" id="1"><img className="img-test" src={img1}></img>
        <div className="text-next">
          <p className="Game-text">he boy and his sister went to the forest to play. When the boy took a nap he "woke up" in limbo. Fearing for his sister's safety he goes to the tree house and fears the worst</p>
          <a className="next-1" href="#2"><button className="Buy-to-check-out-1">V</button></a>
        </div>
      </div >
      {/* 2 */}
      <div className="content-1 scroll-1" id="2">
        <div className="text-next">
          <p className="Game-text">The boy is stuck in Limbo after dying from ether drowning or a trap of some sort. this is proved by the abundance of bear traps and that water kills the boy. also, the abrupt end is due to him having to repeat the nightmare over again... never to truly reach the end.</p>
          <a className="next-2" href="#3"><button className="Buy-to-check-out-1">V</button></a>
        </div>
        <img className="img-test-1" src={img2}></img></div>
        {/* 3 */}
      <div className="content scroll-2" id="3"><img className="img-test" src={img3}></img>
        <div className="text-next">
          <p className="Game-text">Once he finishes all of the obstacles, he is ready to say his final goodbye to his sister, who is grieving him by the treehouse that they used to play on.</p>
          <a className="next-3" href="#4"><button className="Buy-to-check-out-1">V</button></a>
        </div>
      </div>
      <div className="content-2 scroll-3" id="4"><p className="Last-game-text">To fully experience the game, please purchase it here</p><Link to="/Buy"><button className="Buy-button">Buy Now</button></Link></div>
    </div>
  );
}
export default Game;