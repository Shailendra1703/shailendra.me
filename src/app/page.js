import Image from "next/image";

import Aboutme from "../ui/Aboutme";
import AnimateEnter from "yes@@/ui/AnimateEnter";

export default function Home() {
  return (
    <AnimateEnter>
      <main className="max-w-5xl mx-auto font-Poppins">
        <Aboutme />
      </main>
    </AnimateEnter>
  );
}
