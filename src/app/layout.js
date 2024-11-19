import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/ui/Footer";
import Providers from "./providers";
import RollingIcons from "@/components/ui/RollingIcons";
import AnimateEnter from "@/components/ui/AnimateEnter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  authors: [{ name: "Shailendra Singh", url: "https://singhshailendra.in" }],
  category: "developer",
  creator: "Shailendra Singh",
  description: "software developer",
  keywords: [
    "Shailendra Singh",
    "Shailendra",
    "Jaipur",
    "singhshailendra",
    "singhshailendra.in",
    "India",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Design",
    "Engineering",
    "Frontend",
    "Developer",
    "Software",
  ],
  publisher: "Shailendra Singh",
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
  },
  themeColor: [
    { color: "white", media: "(prefers-color-scheme: light)" },
    { color: "black", media: "(prefers-color-scheme: dark)" },
  ],
  title: "Shailendra Singh",
  description: "Portfolio website of shailendra singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shailendra Singh" />
        <meta
          property="og:description"
          content="I'm Shailendra Singh, a web developer and cybersecurity enthusiast. I create innovative open-source projects, build websites and apps, and specialize in React, Next.js, and API integrations. Explore my work and journey here."
        />
        <meta property="og:url" content="https://singhshailendra.in" />

        <meta property="og:image" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shailendra Singh" />
        <meta
          name="twitter:description"
          content="I'm Shailendra Singh, a web developer and cybersecurity enthusiast. I create innovative open-source projects, build websites and apps, and specialize in React, Next.js, and API integrations. Explore my work and journey here."
        />
        <meta name="twitter:image" content="" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </head>

      <link rel="shortcut icon" href="/images/profile.jpg" />
      <body className="bg-white dark:bg-slate-950">
        <Providers>
          <AnimateEnter>
            <>
              <nav className="fixed bottom-4 left-2 z-50 sm:left-4 md:left-6">
                <RollingIcons />
              </nav>
              {children}
              <Footer />
            </>
          </AnimateEnter>
        </Providers>
      </body>
    </html>
  );
}
