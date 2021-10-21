import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Translate, {translate} from "@docusaurus/Translate";
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><Translate description="Landing page title">Help Center</Translate></h1>
        <p className="hero__subtitle"><Translate description="Landing page subtitle">Your one stop for anything Workstaff</Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/managers">
            Video Intro - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={translate({message: 'Obtenez de l\'aide sur l\'utilisation de Workstaff', description: 'Meta description for SEO'})}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
