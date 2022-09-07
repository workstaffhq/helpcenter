import React from "react";
import BlogPostItemHeaderTitle from "@theme/BlogPostItem/Header/Title";
import BlogPostItemHeaderInfo from "@theme/BlogPostItem/Header/Info";
import BlogPostItemHeaderAuthors from "@theme/BlogPostItem/Header/Authors";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import BlogPostHeaderImage from "../../../components/BlogPostHeaderImage";
import BlogPostItemContent from "@theme/BlogPostItem/Content";

export default function BlogPostItemHeader({ children }) {
  const { assets, isBlogPostPage, metadata } = useBlogPost();
  const { tags } = metadata;
  const tagsExists = tags.length > 0;
  const label = tags[0].label;
  return (
    <header>
      {isBlogPostPage ? (
        <div>
          <BlogPostItemHeaderTitle />
          <BlogPostItemHeaderInfo />
          <BlogPostItemHeaderAuthors />
          <BlogPostHeaderImage
            assets={assets}
            isBlogPostPage={isBlogPostPage}
          />
        </div>
      ) : (
        <>
          <BlogPostHeaderImage
            assets={assets}
            isBlogPostPage={isBlogPostPage}
          />
          <div>
            <BlogPostItemHeaderTitle />
            {tagsExists && (
              <div className="note">
                <blockquote>
                  <p>{label.toUpperCase()}</p>
                </blockquote>
              </div>
            )}
            <BlogPostItemContent>{children}</BlogPostItemContent>
            <BlogPostItemHeaderInfo />
            <BlogPostItemHeaderAuthors />
          </div>
        </>
      )}
    </header>
  );
}
