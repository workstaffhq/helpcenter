import React from "react";
import clsx from "clsx";
import { blogPostContainerID } from "@docusaurus/utils-common";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import MDXContent from "@theme/MDXContent";
import ReadMoreLink from "@theme/BlogPostItem/Footer/ReadMoreLink";

export default function BlogPostItemContent({ children, className }) {
  const { isBlogPostPage, metadata } = useBlogPost();
  const { title } = metadata;
  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx("markdown", className)}
      itemProp="articleBody"
    >
      <MDXContent>{children}</MDXContent>
      {!isBlogPostPage && (
        <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
      )}
    </div>
  );
}
