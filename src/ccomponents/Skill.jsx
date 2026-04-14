import React from "react";
import SkillCard from "./SkillCard";
import { motion } from "motion/react";
const Skill = () => {
  return (
    <motion.div
      className="h-screen w-full p-5 flex flex-col items-center gap-5 justify-center"
      initial={{ opacity: 0, y: 50 }} // before visible
      whileInView={{ opacity: 1, y: 0 }} // when in view
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <h2
        className="text-sm md:text-3xl px-4 py-2 mt-5 font-mono border-2 rounded-2xl  "
        style={{
          color: "var(--text-primary)",
          border: "2px solid var(--border) ",
        }}
      >
        My Skills
      </h2>
     
      <p
        class="text-gray-400 max-w-xl font-mono leading-relaxed text-center"
        style={{ color: "var(--text-secondary)" }}
      >
        Frontend developer specializing in
        <span class="font-semibold drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] text-blue-500">
          {" "}
          React
        </span>{" "}
        and
        <span class=" font-semibold text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
          {" "}
          modern UI design
        </span>
        .
        <br />
        <br />
        I build fast, scalable, and visually engaging web experiences.
        <br />
        <br />
        <span className=" p-2 border-b-2 border-b-blue-500">
          {" "}
          Technologies Known
        </span>
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:p-10 place-items-center py-4 gap-6 w-full max-w-5xl">
        {/* Skill Card */}
        <SkillCard />
      </div>
    </motion.div>
  );
};

export default Skill;
