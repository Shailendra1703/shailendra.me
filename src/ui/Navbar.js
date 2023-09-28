import React from "react";
import { navbar } from "../constants/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex  items-center justify-between my-10">
      <a className="font-bold text-2xl px-8 lg:px-0" href="/">
        🗃️ Shailendra Singh
      </a>
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
  );
};

export default Navbar;
