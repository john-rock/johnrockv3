import React from "react"

import { FaLinkedinIn, FaGithub, FaCodepen, FaRegEnvelope } from "react-icons/fa";
import MainNav from "./mainNav"

const Footer = () => (
    <footer className="site-foot">
    <MainNav />
    <div className="bottom-social">
      <a href="https://www.linkedin.com/in/john-rock/" target="_blank"><FaLinkedinIn /></a>
      <a href="https://github.com/john-rock" target="_blank"><FaGithub /></a>
      <a href="https://codepen.io/Jrock2394" target="_blank"><FaCodepen /></a>
      <a href="mailto:johnmrock.jr@gmail.com" target="_blank"><FaRegEnvelope /></a>
    </div>
      <p>Crafted in Northeast Pennsylvania</p>
      <p>© {new Date().getFullYear()} John Rock</p>
    </footer>
)

export default Footer
