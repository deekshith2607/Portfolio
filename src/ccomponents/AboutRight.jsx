import React from "react";
import { motion } from "motion/react";
const AboutRight = () => {
  return (
   <motion.div className="flex flex-col mt-6 items-center justify-center p-5 w-full sm:w-1/2 h-full " 
  
      initial={{ opacity: 0, y: 50 }}   // before visible
      whileInView={{ opacity: 1, y: 0 }} // when in view
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }} // animate only once
    >
      <div>
        <h3 className=" text-sm md:text-xl font-mono " style={{color: "var(--text-secondary)"}}>I am a passionate web developer with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy working with technologies like React and Tailwind CSS to create clean and efficient designs. I focus on writing maintainable code and continuously improving my skills by learning new tools and best practices. I am always eager to take on new challenges and grow as a developer.</h3>
      </div>
      <div className="p-5 w-full mt-3 flex items-center justify-center md:justify-start gap-4">
        <motion.a whileHover={{
    scale: 1.1,
    // Will be used when gesture starts
    transition: { duration: 0.1 }
  }}

  transition={{ duration: 0.5 }} href="" className="py-2 px-3 md:px-5 md:py-2 text-sm bg-blue-500 rounded md:rounded-2xl font-mono font-bold  " style={{color:"var(--text-primary)"}}>
        My Work
      </motion.a>
      <motion.a whileHover={{
    scale: 1.1,
    // Will be used when gesture starts
    transition: { duration: 0.1 }
  }}
  // Will be used when gesture ends
  transition={{ duration: 0.5 }} className="py-2 px-3 md:px-5 md:py-2 text-sm bg-blue-500 rounded md:rounded-2xl font-bold font-mono " style={{color:"var(--text-primary)"}}>
        Get In Touch
      </motion.a>
      </div>
    </motion.div>
  );
};

export default AboutRight;
