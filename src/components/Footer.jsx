import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="w-full mt-20 border-t border-white/10 bg-black/20 backdrop-blur-md">
      
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">
            Deekshith Rao
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Frontend Developer | React & Tailwind Enthusiast
          </p>
        </div>

        {/* Middle Links */}
        <div className="flex gap-6 text-sm text-gray-300">
         <ul
                     className="flex space-x-6"
                     style={{ color: "var(--text-secondary)" }}
                   >
                     <li className="cursor-pointer hover:text-white"><Link to="heroSecton" smooth={true} duration={500}>Home</Link> </li>
                     <li className="cursor-pointer hover:text-white"><Link to="about" smooth={true} duration={500}>About</Link></li>
                     <li className="cursor-pointer hover:text-white"><Link to="skill" smooth={true} duration={500}>Skills</Link></li>
                     <li className="cursor-pointer hover:text-white"><Link to="contact" smooth={true}>Contact</Link></li>
                   </ul>
        </div>


      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-gray-500 py-4 border-t border-white/5">
        © {new Date().getFullYear()} All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;