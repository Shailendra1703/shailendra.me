"use client";

import React, { useState, useEffect } from "react";
import { BlogCard } from "../blogs/BlogCard";

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
  }, []);

  return (
    <div className="max-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mt-12 mb-8">
        Latest Blogs
      </h2>
      <div className="flex flex-col gap-3 w-full">
        <ul className="divide-y divide-dashed">
          {posts
            .sort(
              (a, b) =>
                new Date(b.metadata.publishedAt).getTime() -
                new Date(a.metadata.publishedAt).getTime()
            )
            .map((post, id) => (
              <BlogCard
                href={`/blog/${post.slug}`}
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
