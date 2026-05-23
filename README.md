# 📷 Fotogalerie semestru

Minimalistická webová galerie fotek ze semestru. Nasazení na Vercel + fotky na Cloudinary (zdarma).

---

## 🚀 Jak spustit lokálně

```bash
npm install
npm run dev
```
Otevři http://localhost:3000

---

## ☁️ Nastavení Cloudinary (hosting fotek)

1. Zaregistruj se zdarma na https://cloudinary.com
2. V dashboardu najdi svůj **Cloud Name** (vlevo nahoře)
3. Otevři soubor `.env.local` a vlož svůj cloud name:
   ```
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tady_vloz_svuj_cloud_name
   ```

### Nahrání fotek na Cloudinary
1. Přihlás se na cloudinary.com → **Media Library**
2. Vytvoř složky pro kategorie (např. `semester/prednasky`, `semester/vylety`)
3. Nahraj fotky do složek přes drag & drop
4. U každé fotky zkopíruj **Public ID** (kliknutí na fotku → ikona kopírování)

---

## 📁 Jak přidat/změnit kategorie a fotky

Otevři soubor **`lib/categories.ts`** – tam je vše komentované.

Každá kategorie vypadá takto:
```typescript
{
  id: "vylety",              // URL slug  → /kategorie/vylety
  name: "Výlety",            // Zobrazený název
  subtitle: "Exkurze ...",   // Popis pod názvem
  cover: "semester/vylety/titulni-foto",   // Public ID titulní fotky
  photos: [
    "semester/vylety/foto1",  // Public ID fotek v kategorii
    "semester/vylety/foto2",
    // ...
  ],
}
```

---

## 🌐 Nasazení na Vercel

1. Nahraj projekt na GitHub (`git init`, `git add .`, `git commit`, `git push`)
2. Jdi na https://vercel.com → **New Project** → vyber svůj repo
3. V sekci **Environment Variables** přidej:
   - Key: `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
   - Value: tvůj cloud name z Cloudinary
4. Klikni **Deploy** → Vercel ti dá URL (např. `moje-galerie.vercel.app`)

---

## 🎨 Úprava vzhledu

- Barvy a fonty: `app/globals.css` (CSS proměnné na začátku)
- Název stránky: `app/layout.tsx` (metadata)
- Titulek na hlavní stránce: `app/page.tsx`
