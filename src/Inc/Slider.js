import React, { useState } from "react";
import Slide1 from "../img/LIMBO_01.jpg"
import Slide2 from "../img/LIMBO_03.jpg"
import Slide3 from "../img/LIMBO_06.jpg"
import Slide4 from "../img/LIMBO_07.jpg"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const images = [
    {
        src: Slide1,
        alt: "img1"
    },
    {
        src: Slide2,
        alt: "img2"
    },
    {
        src: Slide3,
        alt: "img3"
    },
    {
        src: Slide4,
        alt: "img4"
    },
]

function Slider() {
    const [slideInDex, setSlideInDex] = useState(0);

    //Slile Tiếp Theo
    const nextSlide = () => {
        setSlideInDex((prevIndex) => (prevIndex + 1) % images.length);
    };

    //Slide trước
    const backSlide = () => {
        setSlideInDex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    return (
        <div className="slider-box">
            <div className="top-border-slider"></div>
            <div className="list">
                <img className="slider-img" src={images[slideInDex].src} alt={images[slideInDex].alt}></img>
                <button className="slider-left" onClick={nextSlide}><FontAwesomeIcon icon={faChevronLeft} /></button>
                <button className="slider-right" onClick={backSlide}><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            <div className="bottom-border-slider"></div>
        </div>

    );
}
export default Slider;