import React from 'react';
import styles from './ContentBanner.modules.scss';
import Translate, {translate} from '@docusaurus/Translate';

const ContentBannerTranslation = 
  {
    title: translate({message: 'Get Started With Workstaff Today!', description: 'Title for component description'}),
    url: translate({message:'https://employer.workstaff.app/en/signup/'}),
    content_banner_plan: (
      <Translate description="The description for pricing">
          The basic Workstaff plan offers all scheduling and communication tools at absolutely no charge.
      </Translate>
    ),
    content_banner_create: (
      <Translate description="The description for account creation">
          Create your account, invite a few colleagues and start planning. Getting started with Workstaff only takes a few minutes.
      </Translate>
    ),
    button: translate({message: 'Start for Free', description: 'The component button label to link to the sign up page'}),
  }
;

function ContentBanner() {
  return (
    <div className={styles.contentBannerSection}>
      <div className={styles.contentBannerContainer}>
        <Logo />
        <h2 className={styles.contentBannerTitle}>
          {ContentBannerTranslation.title}
        </h2>
        <div className={styles.contentBannerBody}>
          <div>
            {ContentBannerTranslation.content_banner_plan}
            &nbsp;
            {ContentBannerTranslation.content_banner_create}
          </div>
        </div>
        <a className="button button--cta" href={ContentBannerTranslation.url} target="_blank" >
          <div>{ContentBannerTranslation.button}</div>
        </a>
      </div>
    </div>
  );
}

function Logo() {
  return <i className="ws-logo" />;
}

export default ContentBanner;
