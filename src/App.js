import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Navbar from "./Inc/Navbar"
import Footer from "./Inc/Footer"
import Game from "./Pages/Game"
import Buy from "./Pages/Buy"
import Slider from "./Inc/Slider"
import Checkout from "./Pages/Checkout";
import Information from "./Pages/Information";
import Contact from "./Pages/Contact"
import Info from "./Pages/Info"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/Game" element={< Game />} />
        <Route path="/Buy" element={< Buy />} />
        <Route path="/Information" element={< Information />} />
        <Route path="/Checkout" element={< Checkout />} />
        <Route path="/Contact" element={< Contact />} />
        <Route path="/Info" element={< Info />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;