import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Header() {
  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "./script.js";
    // script.async = true;
    // script.onload = () => this.scriptLoaded();
    // document.body.appendChild(script);
  }, []);
  return (
    <>
      <header id="topHeader">
        <ul id="topInfo" className="m-0">
          <li>+974 98765432</li>
          <li>info@itecnology.com</li>
        </ul>

        <nav className="site-navigation d-none" style={{ backgroundColor: "" }}>
          <div className="">
            <div className="mainMenu d-flex justify-content-end">
              <a href="">
                <span>Technology</span>
              </a>
              <Link to="#">Career</Link>
              <Link to="/student">Student</Link>
              <a href="">Work With Us</a>
            </div>
          </div>
        </nav>
      </header>

      <header className="site-header">
        <div className="site-identity">
          <h1>
            <Link to="/">LOGO</Link>
          </h1>
        </div>
        <nav className="site-navigation">
          <ul className="nav">
            <Link to="/">Home</Link>
            <Link to="/student">About</Link>
            <Link to="/student">Student</Link>
            <Link to="/login">Login</Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
