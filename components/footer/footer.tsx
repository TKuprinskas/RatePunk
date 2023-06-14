import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Card from '../card/card';
import styles from './footer.module.scss';
import Link from 'next/link';

interface Social {
  name: string;
  src: string;
}

interface Link {
  name: string;
  href: string;
}

const socials: Social[] = [
  {
    name: 'instagram',
    src: '/assets/instagram.svg',
  },
  {
    name: 'facebook',
    src: '/assets/facebook.svg',
  },
  {
    name: 'linkedin',
    src: '/assets/linkedin.svg',
  },
  {
    name: 'twitter',
    src: '/assets/twitter.svg',
  },
  {
    name: 'tiktok',
    src: '/assets/tiktok.svg',
  },
];

const links: Link[] = [
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

const Footer: React.FC = () => {
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
              {links.map((link: Link, index: number) => (
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
                {socials.map((social: Social) => (
                  <div className={styles.iconBox} key={social.name}>
                    <Image
                      key={social.name}
                      src={social.src}
                      alt={`${social.name} icon`}
                      width={16}
                      height={16}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          © 2021 Ratepunk. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
