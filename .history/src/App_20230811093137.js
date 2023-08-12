import React from "react";
import AllNews from "./component/AllNews";
import  SportsNews  from "./component/SportsNews";
import Nav from "./component/nav";

export default function App(){
  return(<div>
    <Nav/>
    <AllNews/>
    <SportsNews/>
  </div>);
}