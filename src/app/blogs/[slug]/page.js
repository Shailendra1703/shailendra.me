import React from "react";
import { allDocs } from "contentlayer/generated";

async function getDocFromParams(slug) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);
  if (!doc) return;

  return doc;
}

const page = async ({ params }) => {
  const doc = await getDocFromParams(params.slug);

  return <div>{JSON.stringify(doc.body.raw)}</div>;
};

export default page;
