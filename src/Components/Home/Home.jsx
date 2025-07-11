import React from "react";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className=" md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          I have recently completed my graduation from dr.Abdul kalam technical university's Bachelor of technology CSE with an impresive CGPA (7.9).I have extensive hand-on-experience full stack development with mern stack technology.I have create many project with using front-end and back-end technology.
        </p>
        <a href="#Contact" >
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
        </a>
      </div>
     
    </div>
  );
};

export default Home;
