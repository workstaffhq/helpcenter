import React from 'react';
import clsx from 'clsx';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import { usePluralForm } from '@docusaurus/theme-common';
import { blogPostContainerID } from '@docusaurus/utils-common';
import MDXContent from '@theme/MDXContent';
import EditThisPage from '@theme/EditThisPage';
import styles from './styles.module.scss';
import TagsListInline from '@theme/TagsListInline';
import BlogPostAuthors from '@theme/BlogPostAuthors'; // Very simple pluralization: probably good enough for now

function useReadingTimePlural() {
  const { selectMessage } = usePluralForm();
  return (readingTimeFloat) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: 'theme.blog.post.readingTime.plurals',
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One min read|{readingTime} min read',
        },
        {
          readingTime,
        }
      )
    );
  };
}

export default function BlogPostItem(props) {
  const { withBaseUrl } = useBaseUrlUtils();
  const {
    children,
    frontMatter,
    assets,
    metadata,
    truncated,
    isBlogPostPage = false,
  } = props;
  const {
    date,
    formattedDate,
    permalink,
    tags,
    readingTime,
    title,
    editUrl,
    authors,
  } = metadata;
  const image = assets.image;
  console.log(withBaseUrl(assets.image));
  const truncatedPost = !isBlogPostPage && truncated;
  const tagsExists = tags.length > 0;
  const label = tags[0].label;
  // console.log(frontMatter.listingImage)
  return (
    <article
      className={clsx(
        'margin-top--sm',
        !isBlogPostPage ? 'margin-bottom--sm' : undefined
      )}
      itemProp='blogPost'
      itemScope
      itemType='http://schema.org/BlogPosting'
    >
      <header>
        {isBlogPostPage && (
          <TitleBlogPost
            title={title}
            isBlogPostPage={isBlogPostPage}
            permalink={permalink}
          />
        )}

        {!isBlogPostPage && (
          <section>
            {image && <img style={{ objectFit: 'cover', aspectRatio: '1/1', width: '100%' }} src={withBaseUrl(image)} alt='' />}
            <div>
              <TitleBlogPost
                title={title}
                isBlogPostPage={isBlogPostPage}
                permalink={permalink}
              />
              <div className='note'>
                <blockquote>
                  <p>{label.toUpperCase()}</p>
                </blockquote>
              </div>

              <MDXContent>{children}</MDXContent>

              {truncatedPost && (
                <div
                  className={clsx('col text--left')}
                  style={{ paddingLeft: '0' }}
                >
                  <Link
                    to={metadata.permalink}
                    aria-label={translate(
                      {
                        message: 'Read more about {title}',
                        id: 'theme.blog.post.readMoreLabel',
                        description:
                          'The ARIA label for the link to full blog posts from excerpts',
                      },
                      {
                        title,
                      }
                    )}
                  >
                    <b>
                      <Translate
                        id='theme.blog.post.readMore'
                        description='The label used in blog post item excerpts to link to full blog posts'
                      >
                        Read More
                      </Translate>
                    </b>
                  </Link>
                </div>
              )}

              <ArticleDetails
                date={date}
                formattedDate={formattedDate}
                readingTime={readingTime}
                authors={authors}
                assets={assets}
              />
            </div>
          </section>
        )}
        {isBlogPostPage && (
          <ArticleDetails
            date={date}
            formattedDate={formattedDate}
            readingTime={readingTime}
            authors={authors}
            assets={assets}
          />
        )}
      </header>

      {image && (
        <meta
          itemProp='image'
          content={withBaseUrl(image, {
            absolute: true,
          })}
        />
      )}

      {image && isBlogPostPage && (
        <img
          style={{ objectFit: 'cover', aspectRatio: '2/1', width: '100%' }}
          className={'margin-bottom--md'}
          src={withBaseUrl(image)}
          alt=''
        />
      )}

      <div // This ID is used for the feed generation to locate the main content
        id={isBlogPostPage ? blogPostContainerID : undefined}
        className='markdown'
        itemProp='articleBody'
      >
        {isBlogPostPage && <MDXContent>{children}</MDXContent>}{' '}
      </div>

      {(tagsExists || truncated) && (
        <footer
          className={clsx(
            'row margin-top--md',
            isBlogPostPage && styles.blogPostDetailsFull
          )}
        >
          {tagsExists && (
            <div
              className={clsx('col', {
                'col--9': truncatedPost,
              })}
            >
              <TagsListInline tags={tags} />
            </div>
          )}

          {isBlogPostPage && editUrl && (
            <div className='col margin-top--sm'>
              <EditThisPage editUrl={editUrl} />
            </div>
          )}
        </footer>
      )}
    </article>
  );
}

function ArticleDetails(props) {
  const readingTimePlural = useReadingTimePlural();
  return (
    <>
      <div className={clsx(styles.blogPostData, 'margin-vert--md')}>
        <time dateTime={props.date} itemProp='datePublished'>
          {props.formattedDate}
        </time>

        {typeof props.readingTime !== 'undefined' && (
          <>
            {' · '}
            {readingTimePlural(props.readingTime)}
          </>
        )}
      </div>
      <BlogPostAuthors authors={props.authors} assets={props.assets} />
    </>
  );
}

function TitleBlogPost(props) {
  const TitleHeading = props.isBlogPostPage ? 'h1' : 'h2';
  return (
    <TitleHeading className={styles.blogPostTitle} itemProp='headline'>
      {props.isBlogPostPage ? (
        props.title
      ) : (
        <Link itemProp='url' to={props.permalink}>
          {props.title}
        </Link>
      )}
    </TitleHeading>
  );
}
