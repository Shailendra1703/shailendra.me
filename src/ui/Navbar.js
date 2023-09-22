import React from "react";
import { navbar } from "../constants/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex  items-center justify-between my-10">
      <p className="font-bold text-xl ">Shailendra Singh</p>
      <div className="space-x-4">
        {navbar.map((data) => {
          return (
            <Link
              key={data.name}
              className="group transition-all duration-300 ease-in-out"
              href="#"
            >
              <span className="py-1 bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                {data.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
