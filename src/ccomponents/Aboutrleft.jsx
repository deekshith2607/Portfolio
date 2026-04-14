import React from "react";
import img from "../assets/developer.png";
import { motion } from "motion/react";
const Aboutrleft = () => {
  return (
    <motion.div className= "flex items-center flex-col justify-center w-1/2 h-full"
    
      initial={{ opacity: 0, y: 50 }}   // before visible
      whileInView={{ opacity: 1, y: 0 }} // when in view
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }} >
        <h2 className="text-sm md:text-3xl px-4 py-2 mt-5 font-mono border-2 rounded-2xl "style={{color:"var(--text-primary)",border:"2px solid var(--border) "}}>About me</h2>
      <div className="  md:h-2/3 md:w-2/3 mt-4 rounded-2xl "style={{backgroundColor:"var(--card)"}}>
        <img className="h-full p-5 w-full object-scale-down" src={img} alt="" />
      </div>
    </motion.div>
  );
};

export default Aboutrleft;
