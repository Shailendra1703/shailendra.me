"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3dpin";
import Image from "next/image";
import Aboutme from "../components/ui/Aboutme";
import AnimateEnter from "@/components/ui/AnimateEnter";
import hero from "../assets/hero.svg";
import RadarPreview from "@/components/ui/RadarPreview";
import { BackgroundCellAnimation } from "@/components/ui/BackgroundRippleEffect";
import Works from "@/components/sections/works";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer title="Shailendra Singh" href="https://singhshailendra.me">
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
      <main className="font-Poppins">
        <BackgroundCellAnimation />
        <Works />
      </main>
    </AnimateEnter>
  );
}
