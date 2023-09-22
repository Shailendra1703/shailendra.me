import Image from "next/image";
import Navbar from "../ui/Navbar";
import Aboutme from "../ui/Aboutme";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto font-Poppins">
      <Navbar />
      <Aboutme />
    </main>
  );
}
