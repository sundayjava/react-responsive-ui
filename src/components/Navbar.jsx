import React, { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hookbank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-start">
        <div
          onClick={() => setToggle((prev) => !prev)}
          className={`harmburger-open ${
            toggle && "harmburger-close"
          } w-[28px] h-[28px] cursor-pointer z-10`}
        >
          <p></p>
          <p></p>
          <p></p>
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
                onClick={()=>setToggle(!toggle)}
              >
                <a className="hover:border-white hover:border-2 hover:px-3 rounded-full" href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        onClick={() => setToggle((prev) => !prev)}
        className={`sm:hidden ${
          toggle ? "bottom-0" : "bottom-full"
        } bg-black/5 backdrop-blur-sm fixed h-screen w-screen left-0`}
      ></div>
    </div>
  );
};

export default Navbar;
