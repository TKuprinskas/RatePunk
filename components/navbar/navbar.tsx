import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './navbar.module.scss';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href='/' legacyBehavior>
          <a className={styles.logo}>
            <Image src='/assets/logo.svg' alt='Logo' width={125} height={32} />
          </a>
        </Link>
        <button className={styles.menuToggle} onClick={handleMenuToggle}>
          <Image src='/assets/menu.svg' alt='Menu' width={40} height={40} />
        </button>
        <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
          <li
            className={
              router.pathname === '/chrome-extension' ? styles.active : ''
            }>
            <Link href='/chrome-extension' legacyBehavior>
              <a>Chrome Extension</a>
            </Link>
          </li>
          <li
            className={
              router.pathname === '/price-comparison' ? styles.active : ''
            }>
            <Link href='/price-comparison' legacyBehavior>
              <a>Price Comparison</a>
            </Link>
          </li>
          <li className={router.pathname === '/blog' ? styles.active : ''}>
            <Link href='/blog' legacyBehavior>
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
