import React from "react";
import { Radar } from "./Radar";
import { IconContainer } from "./Iconcontainer";
import { RiFilePaper2Fill } from "react-icons/ri";
import { HiDocumentReport, HiMiniDocumentArrowUp } from "react-icons/hi";
import { BiSolidReport } from "react-icons/bi";
import { FaReact, FaNodeJs, FaFigma, FaJs, FaGithub } from "react-icons/fa";

const RadarPreview = () => {
  return (
    <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
          <IconContainer text="Web Development" delay={0.2} />
          <IconContainer
            delay={0.4}
            text="Mobile apps"
            icon={<FaReact className="h-8 w-8 text-slate-600" />}
          />
          <IconContainer
            text="Designing"
            delay={0.3}
            icon={<FaNodeJs className="h-8 w-8 text-slate-600" />}
          />
        </div>
      </div>
      <div className="mx-auto w-full max-w-md">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
          <IconContainer
            text="Maintenence"
            delay={0.5}
            icon={<FaFigma className=" h-8 w-8 text-slate-600" />}
          />
          <IconContainer
            text="Server management"
            icon={<FaGithub className=" h-8 w-8 text-slate-600" />}
            delay={0.8}
          />
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
          <IconContainer
            delay={0.6}
            text="GitHub Integration"
            icon={<FaFigma className=" h-8 w-8 text-slate-600" />}
          />
          <IconContainer
            delay={0.7}
            text="CMS Integration"
            icon={<FaFigma className=" h-8 w-8 text-slate-600" />}
          />
        </div>
      </div>

      <Radar className="absolute -bottom-12" />
      <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </div>
  );
};

export default RadarPreview;
