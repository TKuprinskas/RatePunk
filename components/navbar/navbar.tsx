import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './navbar.module.scss';
import Image from 'next/image';

const menuItems = [
  { name: 'Chrome Extension', href: '/chrome-extension' },
  { name: 'Price Comparison', href: '/price-comparison' },
  { name: 'Blog', href: '/blog' },
];

const Navbar = () => {
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
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={
                router.pathname === item.href ? styles.active : undefined
              }>
              <Link href={item.href} legacyBehavior>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
