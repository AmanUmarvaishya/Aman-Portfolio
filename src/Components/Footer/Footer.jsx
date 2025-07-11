import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a href="https://www.linkedin.com/in/aman-umarvaishya-255551271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a href="https://github.com/AmanUmarvaishya">Github</a>
        </li>
        <li className="flex gap-1 items-center">
          <FaPhone />
          9455024681
        </li>
      </ul>
      <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="https://mail.google.com/mail/amanumarvaishya9653021436@gmail.com/0/#inbox">
          amanumarvaishya9653021436@gmail.com
          </a>
        </li>
    </div>
  );
};

export default Footer;
