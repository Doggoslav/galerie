import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/categories";
import { cloudinaryUrl } from "@/lib/cloudinary";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return categories.map((cat) => ({ id: cat.id }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cat = categories.find((c) => c.id === id);
  if (!cat) notFound();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Všechny kategorie
        </Link>
        <div className={styles.headerContent}>
          <div>
            <p className={styles.eyebrow}>Kategorie</p>
            <h1 className={styles.title}>{cat.name}</h1>
            <p className={styles.subtitle}>{cat.subtitle}</p>
          </div>
          <p className={styles.count}>{cat.photos.length} fotografií</p>
        </div>
      </header>

      <main className={styles.main}>
        {cat.photos.length > 0 ? (
          <div className={styles.masonry}>
            {cat.photos.map((publicId, i) => (
              <div key={publicId + i} className={styles.photoWrap}>
                <Image
                  src={cloudinaryUrl(publicId, { w: 800, q: 85 })}
                  alt={`${cat.name} – fotografie ${i + 1}`}
                  width={800}
                  height={600}
                  className={styles.photo}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>📷</p>
            <p>Zatím žádné fotografie v této kategorii.</p>
          </div>
        )}
      </main>
    </div>
  );
}
