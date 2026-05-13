import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Joris Barbin
        </Link>

        <ul className={styles.menu}>
          <li>
            <Link href="/" className={styles.link}>
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/projets" className={styles.link}>
              Projets
            </Link>
          </li>
          <li>
            <Link href="/formation" className={styles.link}>
              Formation
            </Link>
          </li>
          <li>
            <Link href="/a-propos" className={styles.link}>
              À propos
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}