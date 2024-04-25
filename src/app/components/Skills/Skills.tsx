'use client';
import React from 'react';
import styles from './Skills.module.scss';
import { skills } from '@/app/utils/data';

const Skills = () => {
  return (
    <section className={styles.root}>
      <div className={`${styles.container} container`}>
        <h2 className="title">My skills</h2>
        <div className={styles.skills}>
          {skills.map((skill: string) => (
            <p className={styles.skill}>{skill}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
