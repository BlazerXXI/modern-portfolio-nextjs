import React from 'react';
import styles from './Main.module.scss';
import HeroSection from '../HeroSection/HeroSection';
import Skills from '../Skills/page';

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles.container} container`}>
        <HeroSection />
        <Skills />
      </div>
    </main>
  );
};

export default Main;
