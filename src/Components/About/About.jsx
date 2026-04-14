import React from "react";
import amanPic from "../../assets/amanPic.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={amanPic} alt="About img" style={{borderRadius:'40px'}} />

          <ul>

             <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h2 className="text-xl md:text-2xl font-semibold leading-normal">
                  Opps,Java Programming
                </h2>
                <p className="text-sm md:text-md leading-tight">
                  I have a strong understanding of Java Programming and Object-Oriented Programming (OOP) concepts such as inheritance, polymorphism, encapsulation, and abstraction. I can effectively apply these principles to build structured, scalable, and maintainable applications.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h2 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend
                </h2>
                <p className="text-sm md:text-md leading-tight">
                  I have hands-on experience in front-end development using technologies like HTML, CSS, and JavaScript. I can build responsive and user-friendly interfaces using modern frameworks such as React.js.
                </p>
              </span>
            </div>
             <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h2 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend
                </h2>
                <p className="text-sm md:text-md leading-tight">
                 I have hands-on experience in backend development using technologies like Node.js and Express.js. I can design and build RESTful APIs, handle server-side logic, and manage databases efficiently using MongoDB and SQL.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h2 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database
                </h2>
                <p className="text-sm md:text-md leading-tight">
                 I have a strong understanding of databases, including MongoDB and SQL. I can efficiently design, manage, and handle data operations for scalable and reliable applications.
                </p>
              </span>
            </div>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
