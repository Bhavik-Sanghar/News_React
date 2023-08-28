import React from "react";
import AllNews from "./component/AllNews";
import SportsNews from "./component/SportsNews";
import SciNews from "./component/SciNews";
import EntrNews from "./component/EntrNews";
import TrandNews from "./component/TrandNews";
import Navbar from "./Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Parallax pages={5} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={2.5}>
      <div id="AllNews" data-scroll>
        <AllNews />
      </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
      <div id="Trend" data-scroll>
        <TrandNews />
      </div>
      </ParallaxLayer>
    </Parallax>
    
     
      
      <div id="SportsNews" data-scroll>
        <SportsNews />
      </div>
      <div id="SciNews" data-scroll>
        <SciNews />
      </div>
      <div id="Entertainment" data-scroll>
        <EntrNews />
      </div>
    </div>
  );
}
