import React from 'react';
import Layout from '@theme/Layout';
import ContentBanner from "../../components/ContentBanner";
export default function BlogLayout(props) {
  const {toc, children, ...layoutProps} = props;
  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <main
            className="col col--9 col--offset-1"
            itemScope
            itemType="http://schema.org/Blog">
            {children}
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
      <ContentBanner />
    </Layout>
  );
}
