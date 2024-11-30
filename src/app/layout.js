import "./globals.css";
import Footer from "@/components/ui/Footer";
import Providers from "./providers";
import RollingIcons from "@/components/ui/RollingIcons";
import AnimateEnter from "@/components/ui/AnimateEnter";

export const metadata = {
  title: { default: "Shailendra Singh" },
  creator: "Shailendra Singh",
  publisher: "Shailendra Singh",
  description:
    "I'm Shailendra Singh, a web developer and cybersecurity enthusiast",
  keywords: [
    "Shailendra Singh",
    "Shailendra",
    "singhshailendra",
    "singhshailendra.in",
  ],
  authors: [{ name: "Shailendra Singh", url: "https://singhshailendra.in" }],
  openGraph: {
    title: "Shailendra Singh",
    description:
      "I'm Shailendra Singh, a web developer and cybersecurity enthusiast",
    url: "https://singhshailendra.in",
    siteName: "Shailendra Singh",
    images: [
      {
        url: "https://singhshailendra.in/og.png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shailendra Singh",
    description:
      "I'm Shailendra Singh, a web developer and cybersecurity enthusiast",
    siteId: "singhshailendra",
    creator: "singhshailendra",
    creatorId: "singhshailendra",
    images: {
      url: "https://singhshailendra.in/og.png",
      alt: "",
    },
  },

  alternates: {
    canonical: "https://singhshailendra.in",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
