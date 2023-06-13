import React from 'react';
import styles from './storesSection.module.scss';
import Image from 'next/image';

const StoresSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.box}>
          <Image
            src='/assets/chrome.svg'
            alt='Chrome icon'
            width={48}
            height={48}
          />
          <div className={styles.textContainer}>
            <div className={styles.subtitle}>available in the</div>
            <div className={styles.title}>chrome web store</div>
          </div>
        </div>
        <div className={styles.box}>
          <Image
            src='/assets/apple.svg'
            alt='Apple icon'
            width={48}
            height={48}
          />
          <div className={styles.textContainer}>
            <div className={styles.subtitle}>available in the</div>
            <div className={styles.title}>apple app store</div>
          </div>
        </div>
        <div className={styles.reviewsBox}>
          <div className={styles.stars}>
            <span className={styles.star}>&#9733;</span>
            <span className={styles.star}>&#9733;</span>
            <span className={styles.star}>&#9733;</span>
            <span className={styles.star}>&#9733;</span>
            <span className={styles.star}>&#9733;</span>
          </div>
          <div className={styles.starsText}>Chrome Store reviews</div>
        </div>
      </div>
    </div>
  );
};

export default StoresSection;
