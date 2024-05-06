import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, BrowserRouter, Routes, NavLink } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
