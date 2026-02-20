import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate, {translate} from '@docusaurus/Translate';
import styles from './SocialMedia.module.css';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

const SocialMediaTranslation = 
  {
    title: translate({message: 'Share this article on social media', description: 'Title for social media component'}),
  }
;

function SocialMedia({ metadata }) {
  const {siteConfig: {url: baseUrl}} = useDocusaurusContext();
  const blogPageUrl = metadata.permalink;
  const title = metadata.title
  const description = metadata.description
  return (
    <div className={styles.socialMediaComponent}>
      <div>{SocialMediaTranslation.title}</div>
      <div className={styles.SocialMediaIcons}>
        <div>
          <FacebookShareButton
            url={baseUrl + blogPageUrl}
            hashtag={"#workstaff"}
          >
            <FacebookIcon size={36} round />
          </FacebookShareButton>
        </div>
        <div>
          <TwitterShareButton
            url={baseUrl + blogPageUrl}
            title={title}
            hashtag={"#workstaff"}
          >
            <TwitterIcon size={36} round />
          </TwitterShareButton>
        </div>
        <div>
          <LinkedinShareButton
            url={baseUrl + blogPageUrl}
            title={title}
            summary={description}
            source={baseUrl + blogPageUrl}
          >
            <LinkedinIcon size={36} round />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
