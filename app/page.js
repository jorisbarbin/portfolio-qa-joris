import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Bonjour, je suis <span className={styles.highlight}>Joris Barbin</span>
        </h1>

        <p className={styles.heroSubtitle}>
          Futur Testeur Logiciel / QA
        </p>

        <p className={styles.heroDescription}>
          Je suis en formation Testeur Logiciel chez OpenClassrooms.
          Je développe mes compétences en tests fonctionnels, automatisation,
          JavaScript, React, Next.js, API, Git et GitHub.
        </p>

        <div className={styles.heroButtons}>
        <Link href="/projets" className={`${styles.btn} ${styles.btnPrimary}`}>
          Voir mes projets
        </Link>

        <Link href="/contact" className={`${styles.btn} ${styles.btnSecondary}`}>
          Me contacter
        </Link>
        </div>
      </div>
    </section>
  );
}
