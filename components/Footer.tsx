import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>💻 Happy Coding! 🎉</p>
      <p><strong>Made with ❤️ for aspiring programmers</strong></p>
      <p className={styles.tagline}>Start coding today, build amazing things tomorrow!</p>
      <p className={styles.copyright}>© Nahid's Iot and Software Solutions</p>
    </footer>
  );
}
