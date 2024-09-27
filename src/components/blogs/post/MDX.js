import { createElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import CodeBlock from "./Codeblock";

export const slugify = (s) =>
  s
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");

const CustomLink = (props) => {
  if (props.href?.startsWith("/"))
    return (
      <Link href={props.href} {...props}>
        {props.children}
      </Link>
    );

  if (props.href?.startsWith("#")) return <a {...props} />;
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const Img = (props) => {
  return <Image {...props} className="rounded-lg" />;
};

const Code = ({ children, ...props }) => {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
};

const createHeading = (level) => {
  const Heading = ({ children }) => {
    const slug = slugify(children);

    return createElement(
      `h${level}`,
      { id: slug },
      [
        createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;
  return Heading;
};

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  Image: Img,
  a: CustomLink,
  code: CodeBlock,
};

export default (props) => (
  <MDXRemote
    {...props}
    components={{ ...components, ...(props.components || {}) }}
  />
);
