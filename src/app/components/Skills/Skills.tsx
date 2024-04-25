'use client';
import React from 'react';
import styles from './Skills.module.scss';
import { skills } from '@/app/utils/data';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section className={styles.root}>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        initial={{ x: 100, opacity: 0 }}
        className={`${styles.container} container`}
      >
        <h2 className="title">My skills</h2>
        <div className={styles.skills}>
          {skills.map((skill: string) => (
            <p key={skill} className={styles.skill}>
              {skill}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
