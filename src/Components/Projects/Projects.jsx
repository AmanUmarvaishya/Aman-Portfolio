import React from "react";
import note from "../../assets/My_Notes.png";
import ProjectCard from "./ProjectCard";
import online from "../../assets/online.png";
import commerce from "../../assets/commerce.png";
import Pattern from "../../assets/Pattern.png";
import Quara from "../../assets/Quara.png";
import DisColor from "../../assets/DisColor.png";
import Cal from "../../assets/Cal.png";
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
         <ProjectCard
        image={ note}
        link={'https://github.com/AmanUmarvaishya/My_Notes'}
          title="My_Notes: Notes Taking App"
          main="• Build an on-line Notes-Taking Platform with user authentication with JWT and Google oauth2.0, note organization, and crud functionality"
        />
        <ProjectCard
        image={online}
        link={'https://github.com/AmanUmarvaishya/Backend_project_1'}
          title="Online home-booking Platform"
          main="This is a Online home-booking Platform created in MERN stack technology and used node express and mongodb."
        />
           <ProjectCard
        image={Quara}
        link={'https://github.com/AmanUmarvaishya/BACKEND_PROJECT_2'}
          title="Quara post"
          main="This is a Quara post Platform created in MERN stack technology and used node express"
        />
        <ProjectCard
        image={commerce}
        link={'https://github.com/AmanUmarvaishya/React-E-commerce'}
          title="E-commerce Website"
          main="Developed a responsive single-page e-commerce web application using React.js. Implemented key features including product listing and shopping cart functionality, Used React Router for page navigation .."
        />
        <ProjectCard
        image={Pattern}
        link={'https://github.com/AmanUmarvaishya/Simon_Says_game.'}
          title="Pattern games"
          main="This is a Pattern games created in html css and javasript and Here use can start the the game by clicking any keys"
        />
        <ProjectCard
        image={DisColor}
        link={'https://github.com/AmanUmarvaishya/Background_Color_Change'}
            title="Bg_Color_Change"
          main="This is a Pattern games created in html css and javasript and Here use can start the the game by clicking any keys"
        />
          <ProjectCard
        image={Cal}
        link={'https://github.com/AmanUmarvaishya/Responsive-calculator'}
          title="Pattern games"
          main="This is a Pattern games created in html css and javasript and Here use can start the the game by clicking any keys"
        />
       
      </div>
    </div>
  );
};

export default Projects;
