import React, { useState } from "react";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className="w-full fixed top-0 left-0 z-50 h-20 px-4 flex justify-between items-center font-mono
        backdrop-blur-xl bg-black/20"
      >
        {/* Logo */}
        <h2
          className="text-2xl  font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          Portfolio
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul
            className="flex space-x-6"
            style={{ color: "var(--text-secondary)" }}
          >
            <li className="cursor-pointer hover:text-white">
              <Link to="heroSecton" smooth={true} duration={500}>
                Home
              </Link>{" "}
            </li>
            <li className="cursor-pointer hover:text-white">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="cursor-pointer hover:text-white">
              <Link to="skill" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
          </ul>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="contact" smooth={true}>
              Contact
            </Link>{" "}
          </button>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <RiCloseLine
              size={28}
              onClick={() => setMenuOpen(false)}
              style={{ color: "var(--text-primary)", cursor: "pointer" }}
            />
          ) : (
            <RiMenuLine
              size={28}
              onClick={() => setMenuOpen(true)}
              style={{ color: "var(--text-primary)", cursor: "pointer" }}
            />
          )}
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full z-50 p-6 flex flex-col gap-6 font-mono
        bg-(--section) transition-all duration-300
        ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 text-(--text-secondary)">
          <li
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer hover:text-white"
          >
            <Link to="heroSection" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer hover:text-white"
          >
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer hover:text-white"
          >
            <Link to="skill" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
        </ul>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit">
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </button>
      </div>
    </>
  );
};

export default Navbar;
