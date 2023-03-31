import React from "react";
import "./styles/main.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";
import Support from "./components/Support";
import Info from "./components/Info";
import Lounge from "./components/Lounge";
import Travelers from "./components/Travelers";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Search/>
        <Support/>
        <Info/>
        <Lounge/>
        <Travelers/>
        <Subscribe/>
        <Footer/>
    </div>
  );
}

export default App;
