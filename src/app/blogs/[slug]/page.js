import { notFound } from "next/navigation";
import { format } from "@/components/blogs/Main";
import { FiCornerUpLeft } from "react-icons/fi";
import Link from "next/link";
import Header from "@/components/blogs/post/Header";
import MDX from "@/components/blogs/post/MDX";
import allPosts from "../post";

export const generateStaticParams = async () => {
  const posts = allPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = ({ params }) => {
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
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://singhshailendra.in/writing/${post.slug}`,
      images: [{ url: ogImage }],
      author: "Shailendra Singh",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: { canonical: `https://singhshailendra.in/blogs/${post.slug}` },
  };
};

export default ({ params }) => {
  const post = allPosts().find((post) => post.slug === params.slug);
  if (!post) notFound();

  return (
    <section className="max-w-3xl mx-auto my-20">
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
        <span className="ml-1.5 text-sm">Writing</span>
      </Link>
      <Header
        title={post.metadata.title}
        date={format(post.metadata.publishedAt)}
        slug={params.slug}
      />
      <article className="prose animate-children space-y-3">
        <MDX source={post.content} />
      </article>
    </section>
  );
};
