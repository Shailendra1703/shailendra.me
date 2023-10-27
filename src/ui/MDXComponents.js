import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";
import ExternalLinks from "yes@@/utils/ExternalLinks";

const CustomLink = (props) => {
  const href = props.href;

  const isInternalLink = href && href.startsWith("/");

  if (isInternalLink) {
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

const components = { CustomLink, RoundedImage, CustomLink };
const MDXComponents = ({ code }) => {
  const Component = useMDXComponent(code);
  return (
    <article className="prose-quoteless prose prose-neutral dark:prose-invert">
      <Component components={components} />
    </article>
  );
};

export default MDXComponents;
