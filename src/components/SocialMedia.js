import React from 'react';
import styles from './SocialMedia.module.css';
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

function SocialMedia({ metadata }) {
  const baseUrl = "https://help-next.workstaff.app";
  const blogPageUrl = metadata.permalink;
  const title = metadata.title
  const description = metadata.description
  console.log(metadata);
  return (
    <div className={styles.socialMediaComponent}>
      <div>Share this article on social media</div>
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
