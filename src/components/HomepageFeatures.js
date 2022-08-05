import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

import ManagersImageUrl from '@site/static/img/managers.jpg';
import WorkersImageUrl from '@site/static/img/workers.jpg';

const FeatureList = [
  {
    title: translate({message: 'Help for Managers / Employers', description: 'Landing page highlight title for managers'}),
    url: '/docs/managers/',
    image: <img alt="Managers" src={ManagersImageUrl}/>,
    description: (
      <Translate description="Landing page intro for managers">
          Learn how to effectively use Workstaff to become a scheduling ninja.
      </Translate>
    ),
  },
  {
    title: translate({message: 'Help for Workers', description: 'Landing page highlight title for workers'}),
    url: '/docs/workers/',
    image: <img alt="Workers" src={WorkersImageUrl}/>,
    description: (
      <Translate description="Landing page intro for workers">
        Learn how to use the Workstaff mobile app to interact with your employer like a champ.
      </Translate>
    ),
  }
];

function Feature({title, url, image, description}) {
  return (
    <div className={clsx('col')}>
      <div className={styles.featureImg}>
          <Link to={url}>
            {image}
          </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <h3><Link to={url}>{title}</Link></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
