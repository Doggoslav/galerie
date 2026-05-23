import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/categories";
import { cloudinaryUrl } from "@/lib/cloudinary";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerMeta}>
            <span className={styles.subject}>Foto 1</span>
            <span className={styles.separator}>·</span>
            <span className={styles.year}>2025 / 2026</span>
          </div>
          <h1 className={styles.mainTitle}>Lukáš Kautský</h1>
          <p className={styles.mainSubtitle}>Fotogalerie semestru</p>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link key={cat.id} href={`/kategorie/${cat.id}`} className={styles.cardLink}>
              <article className={styles.card}>
                <div className={styles.coverWrap}>
                  <Image
                    src={cloudinaryUrl(cat.cover, { w: 600, q: 80 })}
                    alt={cat.name}
                    fill
                    className={styles.coverImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  />
                  <div className={styles.badge}>{cat.photos.length} foto</div>
                </div>
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{cat.name}</h2>
                  <p className={styles.cardSubtitle}>{cat.subtitle}</p>
                  <div className={styles.cardCta}>
                    Zobrazit <span>→</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        Lukáš Kautský · Foto 1 · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
