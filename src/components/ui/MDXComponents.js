import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import ExternalLinks from "@/utils/ExternalLinks";
import { CodeBlock } from "../blogs/post/Codeblock";

const CustomLink = (props) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <ExternalLinks href={href} {...props} />;
};

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const components = {
  CodeBlock,
  a: CustomLink,
  img: RoundedImage,
  // Add any other custom components here
};

const MDXComponents = ({ source }) => {
  if (!source) {
    console.error("Source is null or undefined");
    return null; // or return some fallback UI
  }
  return (
    <article className="prose-quoteless prose prose-neutral dark:prose-invert">
      {JSON.stringify(source, null)}
      <MDXRemote {...source} components={components} />
    </article>
  );
};

export default MDXComponents;
