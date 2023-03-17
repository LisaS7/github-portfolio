import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  useEffect(() => {
    document.title = "Lisa Steven";
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/github-portfolio/" element={<Home />} />
          <Route path="/github-portfolio/projects" element={<Projects />} />
          <Route path="/github-portfolio/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
