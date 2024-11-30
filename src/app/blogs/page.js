import Header from "@components/blogs/Header";
import Main from "@components/blogs/Main";

export const metadata = {
  title: "Blogs",
  description: "I write sometimes please check them out",
  openGraph: {
    title: "Blogs",
    description: "I write sometimes please check them out",

    images: [
      {
        url: "https://singhshailendra.in/api/og?title=Blogs",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  twitter: {
    title: "Writing",
    card: "summary_large_image",
    description: "I write sometimes please check them out",
    images: [
      {
        url: "https://singhshailendra.in/api/og?title=Blogs",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  alternates: { canonical: "https://singhshailendra.in/blogs" },
};

export default () => (
  <section className="max-w-3xl md:mx-auto my-20 mx-4 ">
    <Header />
    <Main />
  </section>
);
