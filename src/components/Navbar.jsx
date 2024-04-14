import { useState, useEffect } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex w-full justify-between py-6 px-16 navbar ${
        scroll ? "bg-gray-800 bg-opacity-95 text-white" : ""
      } fixed top-0 z-[10]`}
    >
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul
        className={`list-none sm:flex hidden  justify-end items-center flex-1 `}
      >
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`text-white text-[16px] ${
              i === navLinks.length - 1 ? "mr-0" : "mr-10"
            } hover:text-gray-200`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className={`sm:hidden flex flex-1 justify-end items-center`}>
        <img
          src={toggle ? close : menu}
          onClick={() => setToggle((prev) => !prev)}
          alt="menu"
          className="cursor-pointer h-[28px] w-[28px] object-contain"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4  my-2 min-w-[140px] rounded-xl sidebar `}
        >
          <ul
            className={`list-none flex flex-col justify-center items-center flex-1 `}
          >
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`text-white text-[16px] ${
                  i === navLinks.length - 1 ? "mr-0" : "mb-10"
                } hover:text-gray-200`}
              >
                <a
                  href={`#${nav.id}`}
                  onClick={() => setToggle((prev) => !prev)}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
