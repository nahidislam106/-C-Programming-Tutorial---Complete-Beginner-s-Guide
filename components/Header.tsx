'use client';

import styles from './Header.module.css';

interface HeaderProps {
  onMobileMenuToggle: () => void;
  scrolled: boolean;
}

export default function Header({ onMobileMenuToggle, scrolled }: HeaderProps) {
  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        <h1>💻 C Programming Tutorial </h1>
        <p>A Tutorial by- Nahid&apos;s Iot and Software Solutions</p>
      </div>
      <button 
        className={styles.menuToggle} 
        onClick={onMobileMenuToggle}
        aria-label="Toggle menu"
      >
        ☰
      </button>
    </header>
  );
}
