import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/github-portfolio/" element={<Home />} />
          <Route path="/github-portfolio/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
