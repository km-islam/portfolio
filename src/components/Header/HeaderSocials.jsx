import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
