import "./Navbar.css";
import NotionalLogo from "../media/logo/notional.png";
import SideDrawer from "./SideDrawer";
import React, { useState } from "react";
import NavBtn from '../media/button/nav-btn.png'
import { Image } from "antd";
const Navbar = () => {
  const [drawerHandler, setDrawerHandler] = useState(false);
  const openDrawerHandler = () => {
    setDrawerHandler(true);
  };
  const closeDrawerHandler = () => {
    setDrawerHandler(false);
  };
  return (
    <div className="nav-container">
      <SideDrawer show={drawerHandler} onCancel={closeDrawerHandler}>
        <nav className="main-nav-drawer">
          <ul className="main-nav-list-drawer">
            <li>
              <a href="#Contribution">Contribution</a>
            </li>
            <li>
              <a href="#Delegate">Delegate</a>
            </li>
            <li>
              <a href="#Project">Projects</a>
            </li>
            <li>
              <a href="#Team">Team</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </SideDrawer>
      <div className="nav">
        <button className="main-navigation-btn" onClick={openDrawerHandler}>
          <Image className="btn-img" style={{width: "2.5rem", height: "2.5rem", margin: "1rem", "margin-left": "0"}} src = {NavBtn} preview = {false}/>
        </button>

        <div href="#" className="logo" style={{ cursor: "pointer" }}>
          <Image style = {{width: "200px"}} className="logo-img" src={NotionalLogo} alt="Logo" preview = {false} />
        </div>

        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a href="#Contribution">Contribution</a>
            </li>
            <li>
              <a href="#Delegate">Delegate</a>
            </li>
            <li>
              <a href="#Project">Projects</a>
            </li>
            <li>
              <a href="#Team">Team</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
