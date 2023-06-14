import React from 'react';
import styles from './storesSection.module.scss';
import Image from 'next/image';

const StoresSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <a
          href='https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk'
          target='_blank'
          className={styles.box}>
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
        </a>
        <a
          href='https://apps.apple.com/app/ratepunk/id1607823726'
          target='_blank'
          className={styles.box}>
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
        </a>
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
