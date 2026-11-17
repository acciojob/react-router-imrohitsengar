import React from "react";
import "./../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
