import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Tutorial1 from "./pages/Tutorial1";
import Tutorial2 from "./pages/Tutorial2";
import Tutorial3 from "./pages/Tutorial3";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial1" element={<Tutorial1 />} />
        <Route path="/tutorial2" element={<Tutorial2 />} />
        <Route path="/tutorial3" element={<Tutorial3 />} />
      </Routes>
    </Router>
  );
}

export default App;
