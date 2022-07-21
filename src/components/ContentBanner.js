import React from "react";
import styles from "./ContentBanner.modules.scss";

function ContentBanner() {
  return (
    <div className={styles.contentBannerSection}>
      <div className={styles.contentBannerContainer}>
        <Logo />
        <h2 className={styles.contentBannerTitle}>
          <div>Get Started With Workstaff Today!</div>
        </h2>
        <div className={styles.contentBannerBody}>
          <div>
            The basic Workstaff plan offers all scheduling and communication
            tools at absolutely no charge.
          </div>
          <div>
            Create your account, invite a few colleagues and start planning.
            Getting started with Workstaff only takes a few minutes.
          </div>
        </div>
        <a className="button button--cta" href="https://employer.workstaff.app/en/signup/" target="_blank" >
          <div>Start for Free</div>
        </a>
      </div>
    </div>
  );
}

function Logo() {
  return <i className="ws-logo" />;
}

export default ContentBanner;
