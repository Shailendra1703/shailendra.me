import { PiBooksFill } from "react-icons/pi";
import { FiCornerUpLeft } from "react-icons/fi";
import Link from "next/link";

export default () => (
  <header>
    <div className="h-8 w-8 overflow-hidden rounded-full">
      <div className="flex h-full w-full animate-img items-center justify-center rounded-full border border-neutral-300 bg-neutral-200 text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800">
        <PiBooksFill className="h-4 w-4" />
      </div>
    </div>
    <div className="mt-6">
      <Link href="/" className="exclude flex h-8 items-center text-neutral-500">
        <FiCornerUpLeft className="h-4 w-4" />
        <span className="ml-1.5 text-sm">Home</span>
      </Link>
      <h1 className="animate-intro font-medium tracking-tight opacity-0 mt-3 text-xl">
        Blogs
      </h1>
      <h2 className="animate-intro tracking-tight opacity-0 [animation-delay:100ms]">
        Infrequent posts about design and tech
      </h2>
    </div>
    <hr className="my-6 animate-intro border-neutral-200 opacity-0 [animation-delay:150ms] dark:border-neutral-800" />
  </header>
);
