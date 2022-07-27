import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Inc/Navbar";
import Home from "./components/Pages/Home.js"
import About from "./components/Pages/About.js"
import Contact from "./components/Pages/Contacts.js"
import Footer from "./components/Inc/Footer";

function App(){
  return (
    <div>
      <Navbar/>
      <Routes>      
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}


export default App;
