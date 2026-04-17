import React from "react";
import {
  RiInstagramLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailFill,
} from "@remixicon/react";

const SocialMedia = () => {
  return (
    <div
      className="w-fit  flex items-center justify-center gap-4 md:gap-6 px-5 py-2 rounded-2xl"
      style={{ backgroundColor: "var(--card)" }}
    >
      {/* GitHub */}
      <a
        href="https://github.com/deekshith2607"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 transition"
      >
        <RiGithubFill size={22} color="gray" />
      </a>

      <span className="text-gray-500">|</span>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/_dee.xith_rao?igsh=MWc1NW1yaG8zN3NjZg=="
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 transition"
      >
        <RiInstagramLine size={22} color="gray" />
      </a>

      <span className="text-gray-500">|</span>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/deekshith-rao-103a03364"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 transition"
      >
        <RiLinkedinBoxFill size={22} color="gray" />
      </a>

      <span className="text-gray-500">|</span>

      {/* Email */}
      <a
        href="mailto:deekshitho2607@gmail.com?subject=Hello&body=I want to connect with you"
        className="hover:scale-110 transition"
      >
        <RiMailFill size={22} color="gray" />
      </a>
    </div>
  );
};

export default SocialMedia;