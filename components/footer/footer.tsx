import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Card from '../card/card';
import styles from './footer.module.scss';
import Link from 'next/link';

const socials = [
  {
    name: 'facebook',
    src: '/assets/fb.svg',
  },
  {
    name: 'instagram',
    src: '/assets/fb.svg',
  },
  {
    name: 'linkedin',
    src: '/assets/fb.svg',
  },
  {
    name: 'twitter',
    src: '/assets/fb.svg',
  },
  {
    name: 'youtube',
    src: '/assets/fb.svg',
  },
];

const links = [
  {
    name: 'Price Comparison',
    href: '/price-comparison',
  },
  {
    name: 'Chrome Extension',
    href: '/chrome-extension',
  },
  {
    name: 'How It Works',
    href: '/how-it-works',
  },
  {
    name: 'Ratepunk Blog',
    href: '/blog',
  },
  {
    name: 'Privacy Policy',
    href: '/privacy-policy',
  },
];

const Footer = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.cardBox}>
          <Card
            logoSrc='/assets/logo.svg'
            title='Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you’re getting the best deal!'
            text='© 2021 Ratepunk. All Rights Reserved.'
          />
        </div>
        <div className={styles.contentBox}>
          <div className={styles.quickLinks}>
            <div className={styles.title}>Quick Links</div>
            <ul className={styles.linksWrapper}>
              {links.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className={
                    router.pathname === link.href ? styles.active : undefined
                  }>
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
          <div className={styles.contactsSocial}>
            <div className={styles.contact}>
              <div className={styles.title}>Contact</div>
              <div className={styles.email}>
                <Image
                  src='/assets/email-footer.svg'
                  alt='email icon'
                  width={16}
                  height={16}
                />
                <p>hi@ratepunk.com</p>
              </div>
            </div>
            <div className={styles.socialIcons}>
              <div className={styles.title}>Social Icons</div>
              <div className={styles.iconsWrapper}>
                {socials.map((social) => (
                  <Image
                    key={social.name}
                    src={social.src}
                    alt={`${social.name} icon`}
                    width={32}
                    height={32}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
