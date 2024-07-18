import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/ui/Footer";
import Providers from "./providers";
import RollingIcons from "@/components/ui/RollingIcons";
import AnimateEnter from "@/components/ui/AnimateEnter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  authors: [{ name: "Shailendra Singh", url: "https://singhshailendra.me" }],
  category: "developer",
  creator: "Shailendra Singh",
  description: "software developer",
  keywords: [
    "Shailendra Singh",
    "Shailendra",
    "Jaipur",
    "singhshailendra",
    "notion",
    "notionstyle",
    "illustration",
    "singhshailendra.me",
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
      <body className="bg-white dark:bg-slate-950">
        <Providers>
          <AnimateEnter>
            <>
              <nav className="fixed bottom-4 left-2 z-50 sm:left-4 md:left-6">
                <RollingIcons />
              </nav>
              {children}
              {/* <Footer /> */}
            </>
          </AnimateEnter>
        </Providers>
      </body>
    </html>
  );
}
