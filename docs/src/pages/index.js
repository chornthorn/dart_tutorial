import React, { Fragment } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Fragment>
      {/*<ExperimentalWarning />*/}
      <header className={clsx('hero hero--background', styles.heroBanner)}>
        <div className="container">
          <img
            src="img/logo.svg"
            alt="Simple Dart App Logo"
            width="99"
            height="99"
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/overview"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

function ExperimentalWarning() {
  return (
    <div className={clsx(styles.experimentalWarning)}>
      🚧 This is an experimental docs. It might be change any time. 🚧
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description={`The official documentation site for Simple Dart Application. ${siteConfig.tagline}`}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
