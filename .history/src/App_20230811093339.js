import React from "react";
import AllNews from "./component/AllNews";
import  SportsNews  from "./component/SportsNews";
import Nav from "./component/nav";
import { BrowserRouter } from "react-router-dom";

export default function App(){
  return(<div>
    <BrowserRouter>
    <Nav/>
    <AllNews/>
    <SportsNews/>
    <BrowserRouter/>
  </div>);
}