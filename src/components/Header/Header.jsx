/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CTA from "./CTA";
import "./Header.css";
import model from "../assets/model_2.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div>
          <h5>Hello I'm</h5>
          <h1>Kamrul Islam</h1>
          <h5 className="text-light">Front-end Developer</h5>
        </div>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={model} alt={model} />
        </div>
        <a href="" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
