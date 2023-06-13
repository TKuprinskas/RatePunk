import React from 'react';
import Image from 'next/image';
import styles from './card.module.scss';

type CardProps = {
  logoSrc: string;
  title: string;
  text: string;
};

const Card: React.FC<CardProps> = ({ logoSrc, title, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        <Image src={logoSrc} alt='Logo' width={125} height={32} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Card;
