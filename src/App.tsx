import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ErrPage from "./ErrPage";
import Navbar from "./navbar";
import Vers from "./Vers";
import Meme from "./Meme";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <div className="pt-16">
            <Routes>
                <Route path={"/"} element={<Home></Home>}></Route>
                <Route path="/versek" element={<Vers></Vers>}></Route>
                <Route path="/meme" element={<Meme></Meme>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="*" element={<ErrPage />} />
            </Routes>
        </div>
        <Footer></Footer>
    </div>
  );
}


export default App;
