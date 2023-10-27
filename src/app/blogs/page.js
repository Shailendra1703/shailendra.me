import React from "react";
import Heading from "yes@@/utils/Heading";
import { allDocs } from "contentlayer/generated";
import Link from "next/link";
import { pick } from "contentlayer/client";
import { cn } from "yes@@/utils/className";
import "../../styles/prose.css";

export const metaData = {
  title: "Blogs",
  description: "A place where I share ideas about design and code.",
};

async function getData() {
  const posts = allDocs
    .map((post) => pick(post, ["slug", "title", "publishedAt"]))
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  if (!posts) return null;
  return { posts };
}

const page = async () => {
  const { posts } = await getData();
  return (
    <div className="space-y-16">
      <Heading heading="Blogs" size="lg" />
      <div className="space-y-2">
        {posts.map((post) => {
          return (
            <Link
              href={`/blogs/${post.slug}`}
              className={cn(
                "flex flex-row justify-between py-2 px-2 -mx-2 rounded-md my-2",
                "hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:bg-opacity-20",
                "transition-all duration-200"
              )}
            >
              <span className="flex-grow truncate text-secondary mr-2">
                {post.title} →
              </span>
              <span className="text-tertiary flex-shrink-0">
                {post.publishedAt}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
