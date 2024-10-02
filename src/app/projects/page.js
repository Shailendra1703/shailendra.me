import React from "react";
import { projects } from "@/constants/data";
import AnimateEnter from "@/components/ui/AnimateEnter";
import ExternalLinks from "@/utils/ExternalLinks";
import Heading from "@/utils/Heading";
import { AnimatedPinDemo } from "../page";

const Projects = () => {
  return (
    <AnimateEnter>
      <div>
        <Heading heading="Project" size="lg" />
        {/* <div className="grid md:grid-cols-3 grid-cols-1 flex-wrap gap-5 md:my-20 my-8">
          {projects.map((project) => {
            return (
              <div className="shadow-md dark:shadow-sm dark:shadow-[#2C2D2D] dark:bg-[#1E1E1F] rounded-md px-5 py-3.5 dark:border-[#2c2c2c] border-1 ">
                <p className="text-sm  font-semibold dark:text-[#DACD5D]">
                  {project.year}
                </p>
                <h3 className="font-bold text-md py-1 hover:underline cursor-pointer">
                  {project.name}
                </h3>
                <p className="text-md py-1 dark:text-[#777576] text-[16px] leading-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap ">
                  {project.source.map((link) => {
                    return (
                      <ExternalLinks
                        href={link}
                        underline={false}
                        className="px-3 py-1 rounded-md shadow-sm cursor-pointer border my-2"
                      >
                        Source
                      </ExternalLinks>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </AnimateEnter>
  );
};

export default Projects;
