import React from 'react';
import styles from './SocialMedia.module.css';
import Translate, {translate} from '@docusaurus/Translate';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

const SocialMediaTranslation = 
  {
    title: translate({message: 'Share this article on social media', description: 'Title for social media component'}),
  }
;

function SocialMedia({ metadata }) {
  const baseUrl = "https://help-next.workstaff.app";
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
            hashtag={"#hashtag"}
          >
            <i className="ws-facebook" />
          </FacebookShareButton>
        </div>
        <div>
          <TwitterShareButton
            url={baseUrl + blogPageUrl}
            title={title}
            hashtag={"#hashtag"}
          >
            <i className="ws-twitter" />
          </TwitterShareButton>
        </div>
        <div>
          <LinkedinShareButton
            url={baseUrl + blogPageUrl}
            title={title}
            summary={description}
            source={baseUrl + blogPageUrl}
          >
            <i className="ws-linkedin" />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
