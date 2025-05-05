import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.link}>Home</Link>
      <Link href="/about" className={styles.link}>About</Link>
      <Link href="/plans" className={styles.link}>Plans</Link>
      <Link href="/cannabis" className={styles.link}>Cannabis</Link>
      <Link href="/loans" className={styles.link}>Loans</Link>
      <Link href="/dashboard" className={styles.link}>Dashboard</Link>
      <Link href="/contact" className={styles.link}>Contact</Link>
      <Link href="/auth/signin" className={styles.link}>Sign In</Link>
    </nav>
  );
}