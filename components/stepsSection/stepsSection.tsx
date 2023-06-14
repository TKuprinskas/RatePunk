import React, { useState, useEffect } from 'react';
import styles from './stepsSection.module.scss';
import Image from 'next/image';

interface Step {
  step: string;
  title: string;
  text: string;
  image: string;
}

const steps: Step[] = [
  {
    step: 'Step 1',
    title: 'Invite Friends',
    text: 'Refer friends with your unique referral link.',
    image: '/assets/invite.svg',
  },
  {
    step: 'Step 2',
    title: 'Collect Coins',
    text: 'Get 1 coin for each friend that installs our extension using your referral link.',
    image: '/assets/collect-coins.svg',
  },
  {
    step: 'Step 3',
    title: 'Get Voucher',
    text: 'Redeem for a $20 hotel booking voucher once you collect 20 coins.',
    image: '/assets/voucher.svg',
  },
];

const StepsSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className={styles.card}>
      {steps.map((step: Step, index: number) => (
        <div className={styles.box} key={index}>
          {!isMobile && index % 2 === 0 ? (
            <Image
              src={step.image}
              alt={`${step.title} icon`}
              width={128}
              height={140}
            />
          ) : isMobile ? (
            <Image
              src={step.image}
              alt={`${step.title} icon`}
              width={128}
              height={140}
            />
          ) : null}
          <div className={styles.textContainer}>
            <div className={styles.step}>{step.step}</div>
            <div className={styles.title}>{step.title}</div>
            <div className={styles.text}>{step.text}</div>
          </div>
          {!isMobile && index % 2 !== 0 && (
            <Image
              src={step.image}
              alt={`${step.title} icon`}
              width={128}
              height={140}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepsSection;
