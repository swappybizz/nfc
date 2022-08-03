import React from "react";
import Ada from "../assets/ada.svg";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-transparent">

    <header className="text-mainer body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          
          <Link to="/about" className="mr-5 hover:text-gray-900 text-xl hover:font-bold transition-transform">Om Oss</Link>
          <Link to="/contact " className="mr-5 hover:text-gray-900 text-xl hover:font-bold transition-transform">Kontakt Oss</Link>
        </nav>
        <Link to="/" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <img src={Ada} />

          <span className="ml-3 text-xl"></span>
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;
