import React from "react";
import Image from "next/image";
import hero from "../assets/hero.svg";
const Aboutme = () => {
  return (
    <div className="grid grid-cols-2 justify-center items-center gap-5 my-20">
      <div>
        <h1 className="font-bold text-2xl py-2">Heyy Hii it's Shailendra </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
          laudantium autem nisi ipsum optio nemo ipsa fugit nostrum itaque
          delectus, doloremque nihil molestiae expedita quidem fuga est facilis
          officiis cumque deserunt assumenda consectetur, magnam aliquid?
          Tempora beatae, quasi, eveniet veniam ab dolorem fuga nemo, enim error
          delectus harum in ratione itaque laboriosam vero necessitatibus
          perspiciatis ex saepe vitae officiis! Magnam dicta voluptas libero,
          cumque asperiores iusto unde laudantium voluptatem. Dicta, sint
          aliquid quas eos beatae ab autem delectus accusantium esse aperiam
          debitis? Expedita harum eveniet a veniam et deserunt nam?
        </p>
      </div>

      <Image src={hero} alt="heroimage" />
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
