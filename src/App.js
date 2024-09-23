import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import './App.css';
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import About from "./pages/About";
import CartContainer from "./components/CartContainer";
import { useGlobalContext } from "./pages/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
      </div>
  );
}

export default App;
