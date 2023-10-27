import React from "react";
import { allDocs } from "contentlayer/generated";
import MDXComponents from "yes@@/ui/MDXComponents";
import Link from "next/link";
import ExternalLinks from "yes@@/utils/ExternalLinks";
import AnimateEnter from "yes@@/ui/AnimateEnter";

async function getDocFromParams(slug) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);
  if (!doc) return;

  return doc;
}

const page = async ({ params }) => {
  const doc = await getDocFromParams(params.slug);

  return (
    <AnimateEnter>
      <div className="text-secondary">
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(doc.body),
          }}
          suppressHydrationWarning
          type="application/ld+json"
        ></script>
        <Link className="text-secondary text-sm no-underline" href="/blogs">
          ← Back to all posts
        </Link>
        <h1 className="text-secondary text-2xl font-medium">{doc.title}</h1>
        <div>
          <MDXComponents code={doc.body.code} />
        </div>
      </div>
    </AnimateEnter>
  );
};

export default page;
