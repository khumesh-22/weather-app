import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto flex flex-col items-center text-white mb-6 gap-2 md:flex-row md:justify-evenly">
      <div className="flex gap-x-4 md:order-last">
        <a
          className="text-3xl hover:animate-bounce"
          target="_blank"
          href="https://github.com/khumesh-22"
        >
          <i className="bx bxl-github"></i>
        </a>

        <a
          className="text-3xl hover:animate-bounce"
          target="_blank"
          href="https://www.linkedin.com/in/khumesh-gautam-43a0b8184"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>
      </div>

      <p className="text-xs sm:text-base md:order-2">
        • Copyright ©2023 | All rights reserved •
      </p>
      <p className="text-xs sm:text-base">@Gautam</p>
    </footer>
  );
};

export default Footer;
