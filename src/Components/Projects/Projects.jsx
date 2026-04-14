import React from "react";
import ProjectCard from "./ProjectCard";
import SkillCircle from "../../assets/SkillCircle.webp";
import WonderLust from "../../assets/WonderLust.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5"> 

        <ProjectCard
        image={WonderLust}
        link={'https://github.com/AmanUmarvaishya/Backend_project_1'}
          title="WonderLust Post"
          main="Online home booking platform with secure password authentication, feedback system and CRUD functionality.
Tested all API endpoints using Postman.
• Enhanced the back-end using Node.js, Express.js, MongoDB and Embedded JavaScript."
        />
       
        <ProjectCard
        image={SkillCircle}
        link={'https://github.com/AmanUmarvaishya/SkillCircles'}
          title="SkillCircle"
          main="Built a MERN-based online coaching platform featuring secure authentication (Google login, OTP, forgot password), email notifications, admin management, and student course purchases with video content. Integrated
Razorpay for payment processing and implemented dynamic role-based functionalities."
        />
        
       
       
          
       
      </div>
    </div>
  );
};

export default Projects;
