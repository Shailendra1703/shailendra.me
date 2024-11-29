import Header from "@components/blogs/Header";
import Main from "@components/blogs/Main";

export const metadata = {
  title: "Blogs",
  description: "Infrequent posts about design and tech",
  openGraph: {
    title: "Blogs",
    description: "Infrequent posts about design and tech",
    images: [
      {
        url: "https://singhshailendra.in/og?title=Blogs",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  twitter: {
    title: "Writing",
    description: "Infrequent posts about design and tech",
    images: [
      {
        url: "https://singhshailendra.in/og?title=Blogs",
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
