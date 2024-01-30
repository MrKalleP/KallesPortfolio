import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import FirstPage from "./FirstPage";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/Home" element={<FirstPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/* I Importing the CSS at the beginning of the file (import "./App.css";), and I use  BrowserRouter with Routes and Route components thats makes it easy to go to  (FirstPage, About, Contact, and Projects) pages. */
