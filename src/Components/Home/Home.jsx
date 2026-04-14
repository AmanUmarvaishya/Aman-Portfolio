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
         I am a recent graduate from Dr. Abdul Kalam Technical University with a Bachelor of Technology in Computer Science and Engineering, holding a CGPA of 7.9. I have a strong foundation in programming and software development, with hands-on experience across multiple technologies including  Java, Object-Oriented Programming OOP, SQL, and the MERN stack.

I am currently seeking entry-level opportunities where I can apply my technical skills, continue learning, and contribute to building impactful software solutions in a collaborative environment.
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
