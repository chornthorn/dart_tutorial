import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Optimized for UI',
    Svg: require('@site/static/img/bolt.svg').default,
    description: (
      <>
        Develop with a programming language specialized around the needs of user
        interface creation
      </>
    ),
  },
  {
    title: 'Productive development',
    Svg: require('@site/static/img/heart.svg').default,
    description: (
      <>
        Make changes iteratively: use hot reload to see the result instantly in
        your running app.
      </>
    ),
  },
  {
    title: 'Fast on all platforms',
    Svg: require('@site/static/img/target.svg').default,
    description: (
      <>
        Compile to ARM & x64 machine code for mobile, desktop, and backend. Or
        compile to JavaScript for the web.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
