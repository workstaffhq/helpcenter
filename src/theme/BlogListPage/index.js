import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BlogLayout from '@theme/BlogLayout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogListPaginator from '@theme/BlogListPaginator';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import styles from './styles.module.scss';
import SearchMetadata from '@theme/SearchMetadata';
import clsx from 'clsx';

function BlogListPageMetadata(props) {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props) {
  const {metadata, items, sidebar} = props;
  return (
    <BlogLayout>
      <div className={styles.blogPostList}>
      {items.map(({content: BlogPostContent}) => (
        <BlogPostItem
          key={BlogPostContent.metadata.permalink}
          frontMatter={BlogPostContent.frontMatter}
          assets={BlogPostContent.assets}
          metadata={BlogPostContent.metadata}
          truncated={BlogPostContent.metadata.truncated}>
          <BlogPostContent />
        </BlogPostItem>
      ))}
      </div>
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
