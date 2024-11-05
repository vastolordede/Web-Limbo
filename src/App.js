import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Navbar from "./Inc/Navbar"
import Footer from "./Inc/Footer"
import Game from "./Pages/Game"
import Buy from "./Pages/Buy"
import Checkout from "./Pages/Checkout";
import Information from "./Pages/Information";
import Contact from "./Pages/Contact"
import Info from "./Pages/Info"
import Privacy from "./Pages/Privacy"
import ScrollToTop from "./Inc/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/Game" element={< Game />} />
        <Route path="/Buy" element={< Buy />} />
        <Route path="/Information" element={< Information />} />
        <Route path="/Checkout" element={< Checkout />} />
        <Route path="/Contact" element={< Contact />} />
        <Route path="/Info" element={< Info />} />
        <Route path="/Privacy" element={< Privacy />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;