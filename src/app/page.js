"use client";
import React from "react";
import { PinContainer } from "yes@@/ui/3dpin";
import Image from "next/image";
import Aboutme from "../ui/Aboutme";
import AnimateEnter from "yes@@/ui/AnimateEnter";
import hero from "../assets/hero.svg";
import RadarPreview from "yes@@/ui/RadarPreview";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"> */}
          <Image src={hero} alt="image" className="object-cover" />
          {/* </div> */}
        </div>
      </PinContainer>
    </div>
  );
}

export default function Home() {
  return (
    <AnimateEnter>
      <main className="max-w-5xl mx-auto font-Poppins">
        <Aboutme />
        <AnimatedPinDemo />
        <RadarPreview />
      </main>
    </AnimateEnter>
  );
}
