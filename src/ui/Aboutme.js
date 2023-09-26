import React from "react";
import Image from "next/image";
import hero from "../assets/hero.svg";
import Heading from "yes@@/utils/Heading";
import { aboutme } from "yes@@/constants/aboutme";
const Aboutme = () => {
  return (
    <div className="px-8 lg:px-0">
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-5 my-20">
        <div>
          <Heading heading={"Hii it's Shailendra Singh"} size="lg" />
          <p>{aboutme.about}</p>
        </div>
        <Image src={hero} alt="heroimage" className="hidden lg:block" />
      </div>
      <Heading heading={"Tools"} size={"lg"} />
      <Heading heading={"Software"} size={"sm"} />

      <ul className="list-disc my-2">
        {aboutme.software.map((data) => {
          return <li key={data}>{data}</li>;
        })}
      </ul>
      <Heading heading={"Hardware"} size={"sm"} />

      <ul className="list-disc my-2">
        {aboutme.hardware.map((data) => {
          return <li key={data}>{data}</li>;
        })}
      </ul>
    </div>
  );
};

{
  /* <img
        src="https://img.freepik.com/premium-vector/storyboard-illustration-child-looking-his-tablet-device-desk-which-it-is-laying-amo_764382-6359.jpg?w=740"
        alt="hero"
      /> */
}
export default Aboutme;
