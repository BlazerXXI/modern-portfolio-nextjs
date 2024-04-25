import React from 'react';
import styles from './NavigationBar.module.scss';
import Link from 'next/link';
import Logo from '../../../../public/header/brandLogo160px.webp';
import Button from '../Button/Button';

const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link rel="stylesheet" href="./">
          <img className={styles.logoSpin} src={Logo.src} alt="brand logo" width={55} height={55} />
        </Link>
      </div>
      <Button className={styles.buttonMotion} type="button" text="Contact me" />
    </nav>
  );
};

export default NavigationBar;
