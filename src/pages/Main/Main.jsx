import React from "react";
import SideBar from "./../shared-components/SideBar";
import { Outlet } from "react-router-dom";
import MainNavBar from "./MainNavBar";
import Footer from "./Footer";

export default function Main() {
  function closeSideBar() {
    if (document.getElementById("side-bar").classList == "side-bar open") {
      document.getElementById("overlay").style.display = "none";
      document.getElementById("side-bar").classList.remove("open");
    } else {
      document.getElementById("side-bar").classList.add("open");
    }
  }
  return (
    <div>
      <div className="main-comp">
        <div className="all">
          <SideBar />
          <MainNavBar></MainNavBar>
          <Outlet></Outlet>
        </div>
        <div className="overlay" id="overlay" onClick={closeSideBar}></div>
      </div>
      <Footer></Footer>
    </div>
  );
}
