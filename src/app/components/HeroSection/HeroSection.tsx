'use client';
import styles from './HeroSection.module.scss';
import Typewriter from 'typewriter-effect';
import PhotographyContainer from '../PhotographyContainer/PhotographyContainer';
import HeroDevices from '../HeroDevices/HeroDevices';
import { heroData } from '@/app/utils/data';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [data, setData] = useState({
    title: '',
    description: '',
    avatar: '',
    devicesImg: '',
    devicesAlt: '',
    linkByImage: '',
  });

  const { title, description, avatar, linkByImage, devicesImg, devicesAlt } = data || '';

  useEffect(() => {
    setData(heroData);
  }, []);

  return (
    <section className={styles.root}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className={`${styles.container} container`}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              <Typewriter
                options={{
                  strings: [title],
                  autoStart: true,
                  loop: false,
                  cursor: '',
                  delay: 40,
                  deleteSpeed: Infinity,
                }}
              />
            </h1>
            <h2 className={styles.description}>
              <Typewriter
                options={{
                  strings: [description],
                  autoStart: true,
                  loop: false,
                  delay: 40,
                  deleteSpeed: Infinity,
                }}
              />
            </h2>
            <Link href={linkByImage} className={styles.link} target="_blank">
              <PhotographyContainer img={avatar} />
            </Link>
          </div>
        </div>
        <HeroDevices img={devicesImg} alt={devicesAlt} width={860} height={350} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
