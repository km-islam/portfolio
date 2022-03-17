/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        KAMRUL.
      </a>
      <ul className="permalink">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_social">
        <a href="https://www.linkedin.com/in/kamrulislam2021/">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/kamrulislam2021/">
          <FaLinkedin />
        </a>
        <a href="https://www.linkedin.com/in/kamrulislam2021/">
          <BsTwitter />
        </a>
        <a href="https://www.linkedin.com/in/kamrulislam2021/">
          <FaFacebookSquare />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy;KAMRUL. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
