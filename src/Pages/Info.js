import React from "react";
import img from "../img/pd_dark_v2_0.png"
import { Link } from "react-router-dom";

function Info() {
    return (
        <div className="Home-bg-auto font">
            <div className="Contact-box">
                <img src={img}></img>
                <p>Playdead is an independent game
                    developer and publisher based in
                    Copenhagen, Denmark. The company
                    was founded in 2006 by game designer
                    Arnt Jensen. Since then, we have made
                    LIMBO and INSIDE. Today, we are a team
                    of more than 70 creative professionals,
                    coming from a broad range of experience
                    and education. We are hard at work on bringing
                    LIMBO and INSIDE to more players - and on making
                    new games.</p>
                <h2><Link className="Info-Link" to="/Contact">CONTACT</Link></h2>
                <p>You are welcome to contact us, but before you write,
                    please have a look at the following page for answers
                    to the most common questions that we receive. Due to
                    the amount of inquiries, we cannot guarantee that we
                    will reply.</p>
            </div>
        </div>
    );
}
export default Info;