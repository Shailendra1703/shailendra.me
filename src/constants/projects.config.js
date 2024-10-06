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
        icon: <Icons.globe className="size-3" />,
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
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Shailendra1703/kurma",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/projects/kurma.png",
    video: "",
  },
];

export const FREELANCE_PROJECTS = [
  {
    title: "Comming soon",
    role: "Comming soon",
    dates: "Apr - Jun, 2024",
    location: "Remote",
    description: "Comming soon",
    image: "/images/profile.jpg",
    mlh: "#",
    links: [
      {
        title: "Website",
        href: "#",
        icon: <Link className="size-3" />,
      },
      {
        title: "Proof",
        href: "#",
        icon: <ExternalLink className="size-3" />,
      },
    ],
  },
  {
    title: "Comming soon",
    role: "Comming soon",
    dates: "Apr - Jun, 2024",
    location: "Remote",
    description: "Comming soon",
    image: "/images/profile.jpg",
    mlh: "#",
    links: [
      {
        title: "Website",
        href: "#",
        icon: <Link className="size-3" />,
      },
      {
        title: "Proof",
        href: "#",
        icon: <ExternalLink className="size-3" />,
      },
    ],
  },
];
