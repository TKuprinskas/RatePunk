import React from 'react';
import styles from './stepsSection.module.scss';
import Image from 'next/image';

const StepsSection = () => {
  return (
    <div className={styles.card}>
      <div className={styles.box}>
        <Image
          src='/assets/invite.svg'
          alt='Invite icon'
          width={128}
          height={140}
        />
        <div className={styles.textContainer}>
          <div className={styles.step}>Step 1</div>
          <div className={styles.title}>Invite Friends</div>
          <div className={styles.text}>
            Refer friends with your unique referral link.
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.textContainer}>
          <div className={styles.step}>Step 2</div>
          <div className={styles.title}>Collect Coins</div>
          <div className={styles.text}>
            Get 1 coin for each friend that installs our extension using your
            referral link.
          </div>
        </div>
        <Image
          src='/assets/collect-coins.svg'
          alt='Collect coins icon'
          width={144}
          height={144}
        />
      </div>
      <div className={styles.box}>
        <Image
          src='/assets/voucher.svg'
          alt='Voucher icon'
          width={128}
          height={91}
        />
        <div className={styles.textContainer}>
          <div className={styles.step}>Step 3</div>
          <div className={styles.title}>Get Voucher</div>
          <div className={styles.text}>
            Redeem for a $20 hotel booking voucher once you collect 20 coins.
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
