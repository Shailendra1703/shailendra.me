import React, { Suspense } from "react";

const layout = ({ children }) => {
  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col items-start justify-center sm:px-4 overflow-hidden">
      <Suspense fallback={null}>
        <div className="dark:prose-dark prose my-4 w-full max-w-3xl">
          {children}
        </div>
      </Suspense>
    </article>
  );
};

export default layout;
