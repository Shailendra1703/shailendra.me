import "./globals.css";
import Navbar from "yes@@/ui/Navbar";
import { Inter } from "next/font/google";
import Footer from "yes@@/ui/Footer";
import Providers from "./providers";
import RollingIcons from "yes@@/ui/RollingIcons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shailendra Singh",
  description: "Portfolio website of shailendra singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto">
        <Providers>
          <Navbar />
          <RollingIcons />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
