/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BiBookBookmark } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : " "}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : " "}
        onClick={() => setActiveNav("#about")}
      >
        <BiUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : " "}
        onClick={() => setActiveNav("#experience")}
      >
        <BiBookBookmark />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? "active" : " "}
        onClick={() => setActiveNav("#services")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : " "}
        onClick={() => setActiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
