import React from "react";
import { cn } from "./className";

const Heading = (props) => {
  return (
    <h1
      className={cn(
        props.size === "lg" ? `font-bold text-2xl py-2` : `text-xl py-2`
      )}
    >
      {props.heading}
    </h1>
  );
};

export default Heading;
