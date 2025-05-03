import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SecurityMiddleware from "./components/SecurityMiddleware";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import Warehouse from "./pages/Warehouse";

function App() {
  return (
    <SecurityMiddleware>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/warehouse" element={<Warehouse />} />
        </Routes>
        <Footer />
      </Router>
    </SecurityMiddleware>
  );
}

export default App;
