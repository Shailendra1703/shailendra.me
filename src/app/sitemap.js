import allPosts from "../app/blogs/post";

export default () => {
  const posts = allPosts().map((post) => ({
    url: `https://singhshailendra.in/blogs/${post.slug}`,
    lastModified: post.metadata?.publishedAt,
  }));

  const routes = ["", "/about", "/projects", "/blogs"].map((route) => ({
    url: `https://singhshailendra.in/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
};
