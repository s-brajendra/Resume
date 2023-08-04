import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate
} from "react-router-dom";

import Home from './pages/Home'
import Navbar from "./components/Navbar/Navbar";

import Skill from './pages/SkillPage'
import Project from './pages/Projects'
// import Resume from './pages/Resume'
import Contacts from './pages/Contact'

import Preloader from "./components/PreLoader"
import ScrollToTop from "./components/ScrollToTop"

// import logo from './logo.svg';
import './App.css';

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {


  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);


  return (

    <Router>
    <Preloader load={load} />
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/skills" element={<Skill />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/resume" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blogs" element={<Home />} />


        {/* <Route path="*" element={<Navigate to="/"/>} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  </Router>

  );
}

export default App;
