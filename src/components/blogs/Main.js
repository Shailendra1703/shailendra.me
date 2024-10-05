import Link from "next/link";
import getPosts from "../../app/blogs/post";
import Image from "next/image";
import { BlogCard } from "./BlogCard";

export const format = (date) => {
  const [year, month, day] = date.split("-");
  return `${month}/${day}/${year.slice(2)}`;
};

export default () => {
  const posts = getPosts();

  return (
    <section id="blogs" className="">
      <main className="flex flex-col divide-y divide-dashed flex-1 ">
        {posts
          .sort(
            (a, b) =>
              new Date(b.metadata.publishedAt).getTime() -
              new Date(a.metadata.publishedAt).getTime()
          )
          .map((post) => (
            <Link key={post.slug} href={`/blogs/${post.slug}`}>
              <BlogCard
                href={`/blogs/${post.slug}`}
                title={post.metadata.title}
                description={post.metadata.summary}
                publishedAt={post.metadata.publishedAt}
                iconUrl={post.metadata.image}
                readTime={post.metadata.readTime}
                key={post.slug}
              />
            </Link>
          ))}
      </main>
    </section>
  );
};
