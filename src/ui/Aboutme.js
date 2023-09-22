import React from "react";
import Image from "next/image";
const Aboutme = () => {
  return (
    <div className="grid grid-cols-2 justify-center items-center gap-5">
      <p>
        Exploring ways to create unique, fluid experiences. Unlimitedly obsessed
        with solving problems where design and engineering intersect, by
        creating pixel-perfect, polished interfaces. Currently tinkering with
        various projects and apps. Streamlining a new platform, for the next era
        of personal computing at Deta. Previously worked at Landmarks - building
        beautiful web apps. Studying Computer Science. Ardent in reading,
        writing, and improving consistently through learning. Currently
        interested in TypeScript and C. Experimenting native apps with Swift.
        Generating new experiences with Figma.
      </p>
      <img
        src="https://img.freepik.com/premium-vector/storyboard-illustration-child-looking-his-tablet-device-desk-which-it-is-laying-amo_764382-6359.jpg?w=740"
        alt="hero"
      />
    </div>
  );
};

export default Aboutme;
