import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Translate, {translate} from "@docusaurus/Translate";
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><Translate description="Landing page title">Help Center</Translate></h1>
        <p className="hero__subtitle"><Translate description="Landing page subtitle">Your one stop for anything Workstaff</Translate></p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={translate({message: 'Help Center', description: 'Meta title of home page for SEO'})}
      description={translate({message: 'Your one stop for learning Workstaff and getting help', description: 'Meta description for SEO'})}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
