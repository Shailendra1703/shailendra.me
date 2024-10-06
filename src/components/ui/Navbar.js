import React from "react";
import { navbar } from "../../constants/data";
import Link from "next/link";
import { FaCode } from "react-icons/fa6";
const Navbar = () => {
  return (
    <header
      className="fixed w-[100vw] font-poppins text-white"
      style={{ zIndex: 100 }}
    >
      <nav className="flex flex-row lg:-translate-x-2  justify-between max-w-4xl md:mx-auto py-3 px-4 border border-slate-300 border-opacity-30 rounded-md my-4 backdrop-filter backdrop-blur-lg mx-4">
        <Link
          href="/"
          className="font-poppins text-xl font-semibold flex items-center"
        >
          <FaCode className="h-6 w-6 opacity-80 mr-4" />
          <span className="font-kaushan">Shailendra Singh</span>
        </Link>
        <div className="space-x-4 hidden lg:block">
          {navbar.map((data) => {
            return (
              <Link
                key={data.name}
                className="group transition-all duration-300 ease-in-out"
                href={data.href}
              >
                <span className="py-1 bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out dark:from-white dark:to-white">
                  {data.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
