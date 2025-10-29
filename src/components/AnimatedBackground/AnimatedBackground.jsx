// src/components/AnimatedBackground/AnimatedBackground.jsx
import React from 'react';
import styles from './AnimatedBackground.module.css';

const AnimatedBackground = () => {
  return (
    <div className={styles.background}>
      <div className={styles.gradient}></div>
      <div className={styles.bubbles}>
        {[...Array(15)].map((_, i) => (
          <div key={i} className={styles.bubble} style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${20 + Math.random() * 20}s`
          }}></div>
        ))}
      </div>
      <div className={styles.grid}></div>
    </div>
  );
};

export default AnimatedBackground;