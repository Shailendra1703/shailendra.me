"use client";

import React, { useState, useEffect } from "react";
import { BlogCard } from "../blogs/BlogCard";
import { Badge } from "../ui/badge";
import Link from "next/link";

const LatestBlogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/blogs");
      const data = await response.json();
      data
        .sort(
          (a, b) =>
            new Date(b.metadata.publishedAt) - new Date(a.metadata.publishedAt)
        )
        .slice(0, 3);
      setPosts(data);
    };
    fetchPosts();
  }, [posts]);

  return (
    <div className="max-w-3xl  lg:mx-auto lg:-mt-20 md:mt-8 mx-4 md:mx-8 ">
      <div className="flex flex-col items-center justify-center space-y-4 text-center  ">
        <div className="space-y-2 z-10">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-semibold">
            Recent Writings
          </div>

          <p className="text-muted-foreground md:text-base/relaxed py-4">
            I love sharing my knowledge with others. I hope you will click on
            them by mistake. Here are a few of my latest articles. You can find
            more on my{" "}
            <Link href="/blogs" className="text-blue-500 hover:underline">
              blog page
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full max-w-3xl mx-auto">
        <ul className="divide-y divide-dashed ">
          {posts
            .sort(
              (a, b) =>
                new Date(b.metadata.publishedAt).getTime() -
                new Date(a.metadata.publishedAt).getTime()
            )
            .map((post, id) => (
              <BlogCard
                href={`/blogs/${post.slug}`}
                title={post.metadata.title}
                description={post.metadata.summary}
                publishedAt={post.metadata.publishedAt}
                iconUrl={post.metadata.icon}
                readTime={post.metadata.readTime}
                key={id}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default LatestBlogs;
