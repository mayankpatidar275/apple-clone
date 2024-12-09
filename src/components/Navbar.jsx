import React from "react";
import { navLists } from "../constants/index";
import { appleImg, bagImg, searchImg } from "../utils";

function Navbar() {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-center items-center">
      <nav className="w-full flex screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav, index) => (
            <div
              className="px-5 text-sm text-gray hover:text-white transition-all cursor-pointer"
              key={index}
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
