"use client";
import React from "react";
import "../app/globals.css";
import { useTheme } from "next-themes";

const RollingIcons = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    console.log(theme);
    if (theme === "light") {
      setTheme("light");
    } else if (theme === "dark") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };
  return (
    <div className="container">
      <button onClick={changeTheme}>Toggle</button>
    </div>
  );
};

export default RollingIcons;
