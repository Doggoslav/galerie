// =====================================================
// KONFIGURACE KATEGORIÍ
// =====================================================
// Každá kategorie má:
//   id        – unikátní URL slug (bez mezer, bez diakritiky)
//   name      – zobrazený název
//   subtitle  – krátký popis
//   cover     – Cloudinary public_id titulní fotky (poster kategorie)
//   photos    – pole Cloudinary public_id fotek v kategorii
//
// Jak přidat fotky:
//   1. Nahraj fotky na cloudinary.com (Assets → Upload)
//   2. Zkopíruj "Public ID" dané fotky
//   3. Vlož ho sem do pole photos[]
//
// PŘÍKLAD public_id: "semester/vylet/IMG_2024"
// =====================================================

export interface Category {
  id: string;
  name: string;
  subtitle: string;
  cover: string;          // Cloudinary public_id
  photos: string[];       // Cloudinary public_id[] 
}

export const categories: Category[] = [
  {
    id: "nizka-clona",
    name: "Nízká clona",
    subtitle: "Fotky vyfocené s nízkou clonou",
    cover: "kautskyl-mala3-orpava1_2_k1mcka",   // ← nahraď svým public_id
    photos: [
      "kautskyl-mala1-oprava1_2_qfbcul",        // ← nahraď svými public_id
      "kautskyl-mala2-oprava1_2_zwciok",
      "kautskyl-mala3-orpava1_2_k1mcka",
    ],
  },
  {
    id: "vysoka-clona",
    name: "Vysoká clona",
    subtitle: "Fotky vyfocené s vysokou clonou",
    cover: "kautskyl-velka3_pcr35z",
    photos: [
      "kautskyl-velka1_siwv1b",
      "kautskyl-velka2_llb96l",
      "kautskyl-velka3_pcr35z",
    ],
  },
  {
    id: "zmrazeny-pohyb",
    name: "Zmrazený pohyb",
    subtitle: "Fotky zmrazeného pohybu",
    cover: "kautskyl-zmrazeny2-oprava1_2_xot7in",
    photos: [
      "kautskyl-zmrazeny1-oprava1_2_h60nca",
      "kautskyl-zmrazeny2-oprava1_2_xot7in",
      "kautskyl-zmrazeny3_gkdxvr",
    ],
  },
  {
    id: "naznaceny-pohyb",
    name: "Naznačený pohyb",
    subtitle: "Fotky naznačeného pohybu",
    cover: "kautskyl-naznaceny1-oprava1_1_uezmza",
    photos: [
      "kautskyl-naznaceny1-oprava1_1_uezmza",
      "kautskyl-naznaceny2-oprava2_1_eh7inx",
      "kautskyl-naznaceny3-oprava1_1_rsuytp",
    ],
  },
  {
    id: "nizke-ISO",
    name: "Nízké ISO",
    subtitle: "Fotky vyfocené s použitím nízkého ISO",
    cover: "kautskyl-nizkeISO3-oprava1_1_et9fjy",
    photos: [
      "kautskyl-nizkeISO1-oprava1-1_ymqibx",
      "kautskyl-nizkeISO2-oprava1-1_b2qrsi",
      "kautskyl-nizkeISO3-oprava1_1_et9fjy",
    ],
  },
  {
    id: "vysoke-ISO",
    name: "Vysoké ISO",
    subtitle: "Fotky vyfocené s použitím vysokého ISO",
    cover: "kautskyl-vysokeISO2-oprava1_1_j6fjki",
    photos: [
      "kautskyl-vysokeISO1-oprava1_1_ibygyp",
      "kautskyl-vysokeISO2-oprava1_1_j6fjki",
      "kautskyl-vysokeISO3-oprava1_1_yup823",
    ],
  },
  {
    id: "fotostory",
    name: "Fotostory",
    subtitle: "Jednoduchý fotopříběh",
    cover: "kautskyl-fotostory2_wkdpid",
    photos: [
      "kautskyl-fotostory1_mhuodc",
      "kautskyl-fotostory2_wkdpid",
      "kautskyl-fotostory3_guzacy",
      "kautskyl-fotostory4_wvcf2j",
      "kautskyl-fotostory5_ty1brs",
      "kautskyl-fotostory6_senkyt",
    ],
  },
  {
    id: "fotoreklama",
    name: "Fotoreklama",
    subtitle: "Reklamní fotografie",
    cover: "kautskyl-fotoreklama1_tx7awt",
    photos: [
      "kautskyl-fotoreklama1_tx7awt",
    ],
  },
];
