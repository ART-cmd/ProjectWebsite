import { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact"

import "./App.css";

function App() {
  return (
    <div className="snap-y snap-mandatory transition-all duration-500 dark:bg-gray-900">
      <Navbar />
      <Hero className="snap-center" />
      <About className="snap-center" />
      <Work className="snap-center" />
      <Contact className="snap-center" />
    </div>
  );
}

export default App;
