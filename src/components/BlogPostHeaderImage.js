import React from "react";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";

function BlogPostHeaderImage({ assets, isBlogPostPage }) {
  let image = assets.image;
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <>
      {image && !isBlogPostPage && (
        <img
          style={{ objectFit: "cover", aspectRatio: "1/1", width: "100%" }}
          src={withBaseUrl(image)}
          alt=""
        />
      )}
      {image && isBlogPostPage && (
        <img
          style={{ objectFit: "cover", aspectRatio: "2/1", width: "100%" }}
          className={"margin-bottom--md"}
          src={withBaseUrl(image)}
          alt=""
        />
      )}
    </>
  );
}

export default BlogPostHeaderImage;
