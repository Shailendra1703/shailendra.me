import { Icons } from "@/components/ui/icons";
import { ExternalLink, Link } from "lucide-react";

export const PROJECTS = [
  {
    title: "Chat Collect",
    href: "https://chatcollect.com",
    dates: "Jan 2024 - Feb 2024",
    active: false,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://chatcollect.com",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "",
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  },
  {
    title: "Magic UI",
    href: "https://magicui.design",
    dates: "June 2023 - Present",
    active: false,
    description:
      "Designed, developed and sold animated UI components for developers.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://magicui.design",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/magicuidesign/magicui",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "https://cdn.magicui.design/bento-grid.mp4",
  },
];

export const FREELANCE_PROJECTS = [
  {
    title: "Ellenox",
    role: "Community Engagement Intern",
    dates: "Apr - Jun, 2024",
    location: "Remote, Hydrabad (India)",
    description:
      "I managed hackathons and tech support for the Ellenox community. I also managed the Ellenox Discord server of 2000+ members.",
    image: "/images/profile.jpg",
    mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    links: [
      {
        title: "Website",
        href: "https://www.ellenox.com/",
        icon: <Link className="size-3" />,
      },
      {
        title: "Proof",
        href: "https://dub.sh/saidev-linkedin",
        icon: <ExternalLink className="size-3" />,
      },
    ],
  },
  {
    title: "Ellenox",
    role: "React Developer",
    dates: "Apr - Jun, 2024",
    location: "Remote, Hydrabad (India)",
    description:
      "I managed hackathons and tech support for the Ellenox community. I also managed the Ellenox Discord server of 2000+ members.",
    image: "/images/profile.jpg",
    mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    links: [
      {
        title: "Website",
        href: "https://www.ellenox.com/",
        icon: <Link className="size-3" />,
      },
      {
        title: "Proof",
        href: "https://dub.sh/saidev-linkedin",
        icon: <ExternalLink className="size-3" />,
      },
    ],
  },
];
