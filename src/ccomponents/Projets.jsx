import React from "react";
import portfolio from "../assets/portfolio.png";
import wheather from "../assets/wheather.png";
import employee from "../assets/employee.png";
import expense from "../assets/expense.png";

const Projets = () => {
  const projects = [
    {
      title: "Expense Tracker",
      desc: "A full-stack web app to track income and expenses with real-time updates using Firebase.",
      tech: ["React", "Tailwind CSS", "Firebase"],
      image: expense,
      github: "https://github.com/deekshith2607/Expense-Tracker.git",
      live: "https://expencetrackerv1.netlify.app",
      isLive: true
    },
    {
      title: "Portfolio Website",
      desc: "A modern and responsive personal portfolio website built using React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS"],
      image: portfolio,
      github: "#",
      live: "#",
      isLive: true
    },
    {
      title: "Employee Management System",
      desc: "A web application for managing employee data efficiently using LocalStorage.",
      tech: ["React", "Tailwind CSS"],
      image: employee,
      github: "https://github.com/deekshith2607/Employee-management-system.git",
      live: "#",
      isLive: false
    },
    {
      title: "Weather App",
      desc: "A simple weather application that shows real-time weather data using API integration.",
      tech: ["React", "Tailwind CSS"],
      image: wheather,
      github: "https://github.com/deekshith2607/wheather.git",
      live: "#",
      isLive: false
    },
  ];

  return (
    <div className="w-full py-20 px-6 flex gap-5 flex-col items-center">
      {/* Heading */}
      <h2
        className="text-sm md:text-3xl px-4 py-2 mt-5 font-mono border-2 rounded-2xl  "
        style={{
          color: "var(--text-primary)",
          border: "2px solid var(--border) ",
        }}
      >
        My Works
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 
                       backdrop-blur-md hover:scale-105 transition-all duration-300"
          >
            {/* Image */}
            <div className="h-60 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3
                className="text-xl font-semibold font-mono mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-3">{project.desc}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 font-mono bg-white/10 rounded-md"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div
                className="flex gap-3 font-mono"
                style={{ color: "var(--text-secondary)" }}
              >
                <a
                  href={project.github}
                  className="px-4 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 transition"
                >
                  GitHub
                </a>
                {project.isLive ?<a
                  href={project.live}
                  className="px-4 py-2 text-sm rounded-lg bg-blue-500 hover:bg-blue-600 transition"
                >
                  Live
                </a>:null}
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projets;
