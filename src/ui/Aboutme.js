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
          <Heading heading={"Hii I'm Shailendra Singh"} size="lg" />
          <p className="py-3">{aboutme.about}</p>
        </div>
        <Image src={hero} alt="heroimage" className="hidden lg:block" />
      </div>
      <Heading heading={"Tools"} size={"lg"} />
      <Heading heading={"Software"} size={"lg"} />

      <ul className="list-disc my-2">
        <li>
          <span className="font-bold">Coding : </span>Visual Studio Code with
          One Dark Pro Theme
        </li>
        <li>
          <span className="font-bold">Terminal: </span>Git Bash
        </li>
        <li>
          <span className="font-bold">Notes : </span>Notion
        </li>
        <li>
          <span className="font-bold">Music: </span> Spotify
        </li>
      </ul>

      <Heading heading={"Hardware"} size={"lg"} />

      <ul className="list-disc my-2">
        <li>
          <span className="font-bold">Coding PC : </span> Dell Inspiron 15
        </li>
        <li>
          <span className="font-bold">Keyboard </span> Cosmic Byte
        </li>
        <li>
          <span className="font-bold">Monitor : </span> Yet to Buy
        </li>
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
