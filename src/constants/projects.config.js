import { Icons } from "@/components/ui/icons";
import { ExternalLink, Link } from "lucide-react";

export const PROJECTS = [
  {
    title: "Array Sorting Visualizer",
    href: "https://shailendra1703.github.io/Array-Sorting-Visualizer/",
    dates: "2022",
    active: false,
    description:
      "Created a Array-Sorting visualizer using JavaScript which gives a visual representation of how different sorting Techniques works",
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    links: [
      {
        type: "Website",
        href: "https://shailendra1703.github.io/Array-Sorting-Visualizer/",
        icon: <Icons.globe className="h-3 w-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Shailendra1703/Array-Sorting-Visualizer",
        icon: <Icons.github className="h-3 w-3" />,
      },
    ],
    image: "/projects/array.png",
    video: "",
  },
  {
    title: "Kurma",
    href: "https://github.com/Shailendra1703/kurma",
    dates: "Oct 2024 - Present",
    active: false,
    description:
      "Kurma is an open-source Retrieval-Augmented Generation (RAG) that integrates open-source LLMs with Langchain. It allows seamless interaction with multiple PDFs simultaneously for enhanced document analysis and conversational capabilities.",
    technologies: ["Python", "Streamlit", "openAI", "Huggingface", "langchain"],
    links: [
      {
        type: "Website",
        href: "https://github.com/Shailendra1703/kurma",
        icon: <Icons.globe className="h-3 w-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Shailendra1703/kurma",
        icon: <Icons.github className="h-3 w-3" />,
      },
    ],
    image: "/projects/kurma.png",
    video: "",
  },
];

export const FREELANCE_PROJECTS = [
  {
    title: "Crownworld",
    role: "Developer",
    dates: "2023",
    location: "Remote",
    description: "ReactJS website Styled with Material UI",
    image: "/images/professional/crownworld.jpeg",
    mlh: "#",
    links: [
      {
        title: "Website",
        href: "https://crownworld.io",
        icon: <Link className="h-3 w-3" />,
      },
      // {
      //   title: "Proof",
      //   href: "#",
      //   icon: <ExternalLink className="h-3 w-3" />,
      // },
    ],
  },
  {
    title: "HeyStack",
    role: "Developer",
    dates: "2023",
    location: "Remote",
    description:
      "NextJS website styled with tailwindcss with a complete blog section powered by headless CMS and deployed it on AWS lightsail",
    image: "/images/professional/heyStack.jpeg",
    mlh: "#",
    links: [
      {
        title: "Website",
        href: "https://hey-stack.netlify.app",
        icon: <Link className="h-3 w-3" />,
      },
      // {
      //   title: "Proof",
      //   href: "#",
      //   icon: <ExternalLink className="h-3 w-3" />,
      // },
    ],
  },
  {
    title: "Bitcoinverse",
    role: "Developer & Project Manager",
    dates: "2023",
    location: "Remote",
    description:
      "ReactJS crypto launchpad website with mint,swap, staking features",
    image: "/images/professional/bitcoinverse.jpg",
    mlh: "#",
    links: [
      {
        title: "Website",
        href: "https://bitcoinverse.tech/",
        icon: <Link className="h-3 w-3" />,
      },
      // {
      //   title: "Proof",
      //   href: "#",
      //   icon: <ExternalLink className="h-3 w-3" />,
      // },
    ],
  },
  {
    title: "Bogdanoff",
    role: "Developer",
    dates: "2024",
    location: "Remote",
    description: "ReactJS memecoin website for $BOG token",
    image: "#",
    mlh: "#",
    links: [
      {
        title: "Website",
        href: "https://bogdanoff.xyz/",
        icon: <Link className="h-3 w-3" />,
      },
      // {
      //   title: "Proof",
      //   href: "#",
      //   icon: <ExternalLink className="h-3 w-3" />,
      // },
    ],
  },
];
