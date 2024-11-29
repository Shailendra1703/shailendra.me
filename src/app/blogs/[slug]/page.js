import { notFound } from "next/navigation";
import { format } from "@/components/blogs/Main";
import { FiCornerUpLeft } from "react-icons/fi";
import { DATA } from "@/constants/aboutme.config";
import Link from "next/link";
import Header from "@/components/blogs/post/Header";
import MDX from "@/components/blogs/post/MDX";
import allPosts from "../post";
import "../post.css";
import { TracingBeam } from "@/components/acternityui/trackingbeam";

export function generateMetadata({ params }) {
  const post = allPosts().find((post) => post.slug === params.slug);
  if (!post) return;

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  const ogImage = image
    ? image
    : `https://singhshailendra.in/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    keywords: description
      .split(/[.?]/)
      .map((sentence) => sentence.trim())
      .filter((sentence) => sentence.length > 0),
    authors: [
      {
        name: `${DATA.name}`,
        url: `${DATA.url}/blogs/${post.slug}`,
      },
    ],
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blogs/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      site: DATA.url,
      creator: `${DATA.name}`,
      description,
      images: [ogImage],
    },
  };
}

export default ({ params }) => {
  const post = allPosts().find((post) => post.slug === params.slug);
  if (!post) notFound();

  return (
    <section className="max-w-2xl mx-auto my-20">
      <TracingBeam className="px-6">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `https://singhshailendra.in${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `https://singhshailendra.in/blogs/${post.slug}`,
              author: { "@type": "Person", name: "Shailendra Singh" },
            }),
          }}
        />
        <Link
          href="/blogs"
          className="exclude flex h-8 items-center text-neutral-500"
        >
          <FiCornerUpLeft className="h-4 w-4" />
          <span className="ml-1.5 text-sm">Writings</span>
        </Link>
        <Header
          title={post.metadata.title}
          date={format(post.metadata.publishedAt)}
          slug={params.slug}
        />
        <article className="prose dark:prose-invert animate-children mx-auto max-w-2xl">
          <MDX source={post.content} />
        </article>
      </TracingBeam>
    </section>
  );
};
