"use client";
import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

const AnimateEnter = ({ children }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.main
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-5xl"
        exit={{ opacity: 0, y: 20 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </m.main>
    </LazyMotion>
  );
};

export default AnimateEnter;
