import React from "react";
import AnimateEnter from "@/components/ui/AnimateEnter";
import { BackgroundCellAnimation } from "@/components/ui/BackgroundRippleEffect";
import LatestBlogs from "@/components/sections/LatestBlogs";
import Projects from "@/components/sections/Projects";
import Changelog from "@/components/sections/Changelog";

export default function Home() {
  return (
    <AnimateEnter>
      <main className="font-Poppins">
        <BackgroundCellAnimation />
        <LatestBlogs />
        <Projects />
        <Changelog />
      </main>
    </AnimateEnter>
  );
}
