import React from "react";
import TypeEffect from "./TypeEffect";
import { motion } from "motion/react"
import SocialMedia from "./SocialMedia";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}   // before visible
      whileInView={{ opacity: 1, y: 0 }} // when in view
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }} // animate only once
      className="w-full h-screen flex flex-col  gap-5 md:pl-10 items-start justify-center p-5 
    "
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="w-full  flex flex-col gap-5">
        <h1
          className="text-4xl md:text-6xl lg:text-8xl play-fair font-bold "
          style={{ color: "var(--text-primary)" }}
        >
          Hii , I'm <span className="text-blue-500">Deekshith</span> <br /> 
          

        </h1>
  
                  <span className="text-xl md:text-4xl lg:text-7xl text-white font-serif ">          I <TypeEffect  />
 </span>

      
        <p className="text-sm md:text-sm lg:text-lg font-mono "  style={{ color: "var(--text-secondary)" }}>
          {" "}
          I'm a passionate frontend developer who enjoys building clean and
          interactive web applications. <br></br>I focus on writing efficient code and
          creating smooth user experiences. <br />I build 
          web applications using modern technologies like React, Firebase, and
          Tailwind CSS.
        </p>
        <div className="w-full mt-5 flex items-center justify-start">
          <motion.button whileHover={{ scale: 1.1 }}   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-sm px-2 rounded">
            Download Resume
          </motion.button>
         
          <motion.button whileHover={{ scale: 1.1 }}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 text-sm rounded ml-4">
            <Link to="contact" smooth={true} duration={500}>Contact me</Link>
          </motion.button>
        </div>{" "}
      </div>
      
      <SocialMedia  />
    </motion.div>
  );
};

export default HeroSection;
