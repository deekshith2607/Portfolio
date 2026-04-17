import React from 'react'
import html from "../assets/html.jpg"
import css from "../assets/css.jpg"
import js from "../assets/js.jpg"
import git from "../assets/git.jpg"
import react from "../assets/react.jpg"
import firebase from "../assets/firebase.jpg"
const SkillCard = () => {
    const skills =[html ,css ,js ,git ,react ,firebase]
  return (
   skills.map((skill, index) => (
          <div
            key={index}
            className=" h-28 w-28 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center 
                       hover:scale-105  overflow-hidden hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] 
transition duration-300"
          >
            <img className=' w-full h-full object-cover' src={skill} alt="" />
          </div>
  )))
}

export default SkillCard
