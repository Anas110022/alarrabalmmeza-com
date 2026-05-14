import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { Phone, MapPin, Mail, MessageCircle, Instagram, Youtube, Music2 } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

// ── Catalog Data (mirrors original) ──────────────────────────────
type ProductImg = { name: string; img: string };
type ProductTones = { name: string; tones: string[] };
type Product = ProductImg | ProductTones;

type Category = {
  label: string;
  size: string;
  accent: string;
  useImages?: boolean;
  labelOverride?: string;
  products: Product[];
  matteProducts?: Product[];
};

const CATALOG: Category[] = [
  { label: "جدران", size: "30×60", accent: "#C8860A", useImages: true, labelOverride: "جدران 30×60 — 9 ملي",
    products: [
      { name: "C360363L / C360363H27 / C360363D", img: "/alarrab/products/jadran-3060-lamac-01.jpeg" },
      { name: "C360337L / C360337H27", img: "/alarrab/products/jadran-3060-lamac-02.jpeg" },
      { name: "C360000H30", img: "/alarrab/products/jadran-3060-lamac-03.jpeg" },
      { name: "C360357L / C360357H27", img: "/alarrab/products/jadran-3060-lamac-04.jpeg" },
      { name: "C360016LT / 17# / 27#", img: "/alarrab/products/jadran-3060-lamac-05.jpeg" },
      { name: "CG360637L / CG360637H02", img: "/alarrab/products/jadran-3060-lamac-06.jpeg" },
      { name: "C360194L / C360194H19", img: "/alarrab/products/jadran-3060-lamac-07.jpeg" },
      { name: "C360340L / C360340H02", img: "/alarrab/products/jadran-3060-lamac-08.jpeg" },
      { name: "C360002LT / C360002HL(27)", img: "/alarrab/products/jadran-3060-lamac-09.jpeg" },
      { name: "C360336L / C360336H27", img: "/alarrab/products/jadran-3060-lamac-10.jpeg" },
      { name: "C360011LT / C360011HL(19)", img: "/alarrab/products/jadran-3060-lamac-11.jpeg" },
      { name: "C360001LT / C360001HL(27)", img: "/alarrab/products/jadran-3060-lamac-12.jpeg" },
      { name: "C360030LT / C360030HL(4)", img: "/alarrab/products/jadran-3060-lamac-13.jpeg" },
      { name: "C360031LT / C360031HL(4)", img: "/alarrab/products/jadran-3060-lamac-14.jpeg" },
      { name: "C360174", img: "/alarrab/products/jadran-3060-lamac-15.jpeg" },
      { name: "C360020", img: "/alarrab/products/jadran-3060-lamac-16.jpeg" },
      { name: "بلوك أبيض", img: "/alarrab/products/jadran-3060-lamac-17.jpeg" },
      { name: "C360035HL(1)", img: "/alarrab/products/jadran-3060-lamac-18.jpeg" },
      { name: "بلوك أبيض معرق", img: "/alarrab/products/jadran-3060-lamac-19.jpeg" },
    ],
    matteProducts: [
      { name: "CM360685L / cm36348457m-A", img: "/alarrab/products/jadran-3060-01.jpeg" },
      { name: "M360204 / M360204H02", img: "/alarrab/products/jadran-3060-02.jpeg" },
      { name: "C360134", img: "/alarrab/products/jadran-3060-03.jpeg" },
      { name: "C360018", img: "/alarrab/products/jadran-3060-04.jpeg" },
      { name: "M360023", img: "/alarrab/products/jadran-3060-05.jpeg" },
    ],
  },
  { label: "جدران", size: "30×90", accent: "#1A6B8A", useImages: true, labelOverride: "جدران 30×90 — 9 ملي",
    products: [
      { name: "CG390009H02 / CG390009D", img: "/alarrab/products/jadran-3090-01.jpeg" },
      { name: "CM390011H12 / CM390011L", img: "/alarrab/products/jadran-3090-04.jpeg" },
      { name: "CG390004H17 / CG390004L", img: "/alarrab/products/jadran-3090-05.jpeg" },
      { name: "CG390005H26 / CG390005L", img: "/alarrab/products/jadran-3090-07.jpeg" },
      { name: "CG390001L / CG390001H08", img: "/alarrab/products/jadran-3090-08.jpeg" },
      { name: "CG390003H32 / CG390003L", img: "/alarrab/products/jadran-3090-11.jpeg" },
      { name: "CG390002H32 / CG390002L", img: "/alarrab/products/jadran-3090-12.jpeg" },
    ],
    matteProducts: [
      { name: "CM390015H26 / CM390015L", img: "/alarrab/products/jadran-3090-02.jpeg" },
      { name: "CM390014H26 / CM390014L", img: "/alarrab/products/jadran-3090-03.jpeg" },
      { name: "CG390006H15 / CG390006L", img: "/alarrab/products/jadran-3090-06.jpeg" },
      { name: "CM390012H31 / CM390012L", img: "/alarrab/products/jadran-3090-09.jpeg" },
      { name: "CM390013H11 / CM390013L", img: "/alarrab/products/jadran-3090-10.jpeg" },
    ],
  },
  { label: "بورسلان", size: "60×60", accent: "#B54A2A", useImages: true, labelOverride: "بورسلان 60×60 — قص ليزر سماكة 9 ملي", products: [
    { name: "PM660803", img: "/alarrab/products/porc-6060-01.jpeg" },
    { name: "P660432", img: "/alarrab/products/porc-6060-02.jpeg" },
    { name: "PM661534", img: "/alarrab/products/porc-6060-03.jpeg" },
    { name: "PM661508", img: "/alarrab/products/porc-6060-04.jpeg" },
    { name: "P660314", img: "/alarrab/products/porc-6060-05.jpeg" },
    { name: "PS661479", img: "/alarrab/products/porc-6060-06.jpeg" },
    { name: "P60799 DR", img: "/alarrab/products/porc-6060-07.jpeg" },
    { name: "PS661480", img: "/alarrab/products/porc-6060-08.jpeg" },
    { name: "P660310", img: "/alarrab/products/porc-6060-09.jpeg" },
    { name: "P612267-P660345", img: "/alarrab/products/porc-6060-10.jpeg" },
    { name: "P660306", img: "/alarrab/products/porc-6060-11.jpeg" },
    { name: "P660361", img: "/alarrab/products/porc-6060-12.jpeg" },
    { name: "N661077", img: "/alarrab/products/porc-6060-13.jpeg" },
    { name: "N660802", img: "/alarrab/products/porc-6060-14.jpeg" },
  ]},
  { label: "بورسلان", size: "80×80", accent: "#1A7A4A", useImages: true, labelOverride: "بورسلان 80×80 — قص ليزر سماكة 9 ملي", products: [
    { name: "P880223", img: "/alarrab/products/porc-8080-01.jpeg" },
    { name: "M880292-M660305", img: "/alarrab/products/porc-8080-02.jpeg" },
    { name: "P880208", img: "/alarrab/products/porc-8080-03.jpeg" },
    { name: "P880207", img: "/alarrab/products/porc-8080-04.jpeg" },
    { name: "P880209", img: "/alarrab/products/porc-8080-05.jpeg" },
    { name: "P880224", img: "/alarrab/products/porc-8080-06.jpeg" },
    { name: "P880222", img: "/alarrab/products/porc-8080-07.jpeg" },
    { name: "WP880310", img: "/alarrab/products/porc-8080-08.jpeg" },
    { name: "P880210", img: "/alarrab/products/porc-8080-09.jpeg" },
  ]},
  { label: "بورسلان", size: "120×60", accent: "#8A1A5A", useImages: true, labelOverride: "بورسلان 60×120 — قص ليزر سماكة 9 ملي", products:
    Array.from({ length: 19 }, (_, i) => ({
      name: `بورسلان ${i + 1}`,
      img: `/alarrab/products/porc-12060-${String(i + 1).padStart(2, "0")}.jpeg`,
    })),
  },
  { label: "أحواش", size: "45×45", accent: "#3A7A1A", useImages: true, labelOverride: "أحواش 45×45 — 14 ملي", products: [
    { name: "GB450403", img: "/alarrab/products/ahwash-4545-01.jpeg" },
    { name: "GT450310", img: "/alarrab/products/ahwash-4545-02.jpeg" },
    { name: "GT450312-PD14047", img: "/alarrab/products/ahwash-4545-03.jpeg" },
    { name: "G450073", img: "/alarrab/products/ahwash-4545-04.jpeg" },
    { name: "G450077", img: "/alarrab/products/ahwash-4545-05.jpeg" },
    { name: "G450072", img: "/alarrab/products/ahwash-4545-06.jpeg" },
    { name: "G450080", img: "/alarrab/products/ahwash-4545-07.jpeg" },
    { name: "G450074", img: "/alarrab/products/ahwash-4545-08.jpeg" },
    { name: "G450078", img: "/alarrab/products/ahwash-4545-09.jpeg" },
    { name: "G450143", img: "/alarrab/products/ahwash-4545-10.jpeg" },
    { name: "G450081", img: "/alarrab/products/ahwash-4545-11.jpeg" },
    { name: "G450098", img: "/alarrab/products/ahwash-4545-12.jpeg" },
    { name: "G450144", img: "/alarrab/products/ahwash-4545-13.jpeg" },
    { name: "GT450234-GT460035", img: "/alarrab/products/ahwash-4545-14.jpeg" },
    { name: "GT450183", img: "/alarrab/products/ahwash-4545-15.jpeg" },
    { name: "G450082-PD14029", img: "/alarrab/products/ahwash-4545-16.jpeg" },
    { name: "G450076", img: "/alarrab/products/ahwash-4545-17.jpeg" },
    { name: "GT450169", img: "/alarrab/products/ahwash-4545-18.jpeg" },
    { name: "GT450313", img: "/alarrab/products/ahwash-4545-19.jpeg" },
    { name: "GT450305", img: "/alarrab/products/ahwash-4545-20.jpeg" },
    { name: "GT450306", img: "/alarrab/products/ahwash-4545-21.jpeg" },
    { name: "GT450311", img: "/alarrab/products/ahwash-4545-22.jpeg" },
    { name: "GT450309", img: "/alarrab/products/ahwash-4545-23.jpeg" },
    { name: "GB450308", img: "/alarrab/products/ahwash-4545-24.jpeg" },
  ]},
  { label: "أحواش", size: "30×60", accent: "#1A4A6B", useImages: true, labelOverride: "أحواش 30×60 — 14 ملي", products: [
    { name: "GT360023", img: "/alarrab/products/ahwash-3060-01.jpeg" },
    { name: "GT360015", img: "/alarrab/products/ahwash-3060-02.jpeg" },
    { name: "GT360051", img: "/alarrab/products/ahwash-3060-03.jpeg" },
    { name: "GT360014", img: "/alarrab/products/ahwash-3060-04.jpeg" },
    { name: "GT360017", img: "/alarrab/products/ahwash-3060-05.jpeg" },
    { name: "GT360013", img: "/alarrab/products/ahwash-3060-06.jpeg" },
    { name: "GT360053", img: "/alarrab/products/ahwash-3060-07.jpeg" },
    { name: "GT360019", img: "/alarrab/products/ahwash-3060-08.jpeg" },
  ]},
  { label: "أحواش", size: "50×50", accent: "#1A4A6B", useImages: true, labelOverride: "أحواش 50×50 — 14 ملي", products: [
    { name: "GT550066", img: "/alarrab/products/ahwash-5050-gt550066.jpeg" },
    { name: "GT550046", img: "/alarrab/products/ahwash-5050-gt550046.jpeg" },
    { name: "GT550005", img: "/alarrab/products/ahwash-5050-gt550005.jpeg" },
    { name: "GT550015", img: "/alarrab/products/ahwash-5050-gt550015.jpeg" },
    { name: "GT550064", img: "/alarrab/products/ahwash-5050-gt550064.jpeg" },
    { name: "GT550020", img: "/alarrab/products/ahwash-5050-gt550020.jpeg" },
    { name: "GT550002", img: "/alarrab/products/ahwash-5050-gt550002.jpeg" },
    { name: "GT550014", img: "/alarrab/products/ahwash-5050-gt550014.jpeg" },
    { name: "GT550006", img: "/alarrab/products/ahwash-5050-gt550006.jpeg" },
    { name: "GT550019", img: "/alarrab/products/ahwash-5050-gt550019.jpeg" },
    { name: "GT550049", img: "/alarrab/products/ahwash-5050-gt550049.jpeg" },
    { name: "GT550065", img: "/alarrab/products/ahwash-5050-gt550065.jpeg" },
    { name: "GT550003", img: "/alarrab/products/ahwash-5050-gt550003.jpeg" },
  ] },
  { label: "أحواش", size: "60×60", accent: "#1A4A6B", useImages: true, labelOverride: "أحواش 60×60 — 14 ملي", products: [
    { name: "GT660105", img: "/alarrab/products/ahwash-6060-01.jpeg" },
    { name: "GT660008", img: "/alarrab/products/ahwash-6060-02.jpeg" },
    { name: "GC660104", img: "/alarrab/products/ahwash-6060-03.jpeg" },
    { name: "GT660001", img: "/alarrab/products/ahwash-6060-04.jpeg" },
    { name: "GT660002", img: "/alarrab/products/ahwash-6060-05.jpeg" },
    { name: "GT660009", img: "/alarrab/products/ahwash-6060-06.jpeg" },
    { name: "GT660010", img: "/alarrab/products/ahwash-6060-07.jpeg" },
    { name: "GT660005", img: "/alarrab/products/ahwash-6060-08.jpeg" },
    { name: "GT660003", img: "/alarrab/products/ahwash-6060-09.jpeg" },
    { name: "GT660003-2", img: "/alarrab/products/ahwash-6060-10.jpeg" },
  ]},
  { label: "واجهات", size: "30×75", accent: "#8A4A1A", useImages: true, labelOverride: "واجهات 30×75 مقصوص جاهز للتركيب ( سعودي ) 2 سم", products:
    Array.from({ length: 9 }, (_, i) => ({
      name: `واجهة ${i + 1}`,
      img: `/alarrab/products/wajhat-${String(i + 1).padStart(2, "0")}.jpeg`,
    })),
  },
  { label: "سيراميك", size: "60×60", accent: "#7A5A1A", useImages: true, labelOverride: "بلاط سيراميك", products: [
    { name: "S660727", img: "/alarrab/products/ceramic-glossy-60-s660727.jpeg" },
    { name: "C660799", img: "/alarrab/products/ceramic-glossy-60-c660799.jpeg" },
    { name: "C662220", img: "/alarrab/products/ceramic-glossy-60-c662220.jpeg" },
    { name: "C662217", img: "/alarrab/products/ceramic-glossy-60-c662217.jpeg" },
    { name: "C662219", img: "/alarrab/products/ceramic-glossy-60-c662219.jpeg" },
    { name: "S660725", img: "/alarrab/products/ceramic-glossy-60-s660725.jpeg" },
    { name: "C660232", img: "/alarrab/products/ceramic-glossy-60-c660232.jpeg" },
    { name: "S660231", img: "/alarrab/products/ceramic-glossy-60-s660231.jpeg" },
    { name: "S660728", img: "/alarrab/products/ceramic-glossy-60-s660728.jpeg" },
    { name: "S660228", img: "/alarrab/products/ceramic-glossy-60-s660228.jpeg" },
  ], matteProducts: [
    { name: "CM660052", img: "/alarrab/products/ceramic-matte-60-cm660052.jpeg" },
    { name: "CM662793", img: "/alarrab/products/ceramic-matte-60-cm662793.jpeg" },
    { name: "C660232", img: "/alarrab/products/ceramic-matte-60-c660232.jpeg" },
    { name: "CM62794", img: "/alarrab/products/ceramic-matte-60-cm62794.jpeg" },
  ] },
  { label: "اسطح مخفض", size: "40×40", accent: "#5A7A1A", useImages: true, labelOverride: "بلاط اسطح 40×40 — 14 ملي", products: [
    { name: "R400024", img: "/alarrab/products/astah-4040-01.jpeg" },
    { name: "R400020", img: "/alarrab/products/astah-4040-02.jpeg" },
    { name: "R400007", img: "/alarrab/products/astah-4040-03.jpeg" },
    { name: "R400006", img: "/alarrab/products/astah-4040-04.jpeg" },
    { name: "R400018", img: "/alarrab/products/astah-4040-05.jpeg" },
    { name: "R400021", img: "/alarrab/products/astah-4040-06.jpeg" },
    { name: "R400019", img: "/alarrab/products/astah-4040-07.jpeg" },
  ] },
  { label: "غراء بلاط", size: "", accent: "#4A6A8A", useImages: true, labelOverride: "غراء بلاط", products: [
    { name: "غراء سافيتو", img: "/alarrab/products/ghera-saveto-01.jpeg" },
    { name: "غراء فيتونيت", img: "/alarrab/products/ghera-vetonit-01.jpeg" },
    { name: "غراء ستاركو", img: "/alarrab/products/ghera-starco-01.jpeg" },
    { name: "ترويبة", img: "/alarrab/products/ghera-troyba-01.jpeg" },
  ] },
  { label: "منتجات اسمنتية", size: "", accent: "#6A6A6A", useImages: true, labelOverride: "منتجات اسمنتية", products: [{ name: "بلاط عنكبوتي اصفر 40*40", img: "/alarrab/products/cement-spider-yellow-40-01.jpeg" }, { name: "بلاط عنكبوتي احمر 40*40", img: "/alarrab/products/cement-spider-red-40-01.jpeg" }, { name: "بلاط عنكبوتي 40*40 سمنتي", img: "/alarrab/products/cement-spider-grey-40-01.jpeg" }, { name: "بلاط عنكبوتي 40*40 اسود", img: "/alarrab/products/cement-spider-black-40-01.jpeg" }, { name: "انترلوك 10*20 *6سم سمنتي", img: "/alarrab/products/interlock-grey-10-20-6.jpeg" }, { name: "انترلوك 10*20 *6سم اسود", img: "/alarrab/products/interlock-black-10-20-6.jpeg" }, { name: "بلدورة 15*20 *30 سمنتي", img: "/alarrab/products/baldura-grey-15-20-30.jpeg" }, { name: "بلدورة 15*20 *30 اسود", img: "/alarrab/products/baldura-black-15-20-30.jpeg" }, { name: "بلدورة 15*20 *30 اصفر", img: "/alarrab/products/baldura-yellow-15-20-30.jpeg" }, { name: "بلدورة 15*20 *30 احمر", img: "/alarrab/products/baldura-red-15-20-30.jpeg" }, { name: "بلاط بلدي كسر رخام 25*25", img: "/alarrab/products/balad-marble-25-25.jpeg" }, { name: "بلاط بلدي بيج 25*25", img: "/alarrab/products/balad-beige-25-25.jpeg" }], matteProducts: [] },
];

const MARBLE = [
  { name: "درج عماني بيج", type: "رخام عماني", cat: "تركيب — أدراج", img: "/alarrab/marble/stairs-omani-01.jpeg", label: "درج عماني بيج — تركيب أدراج" },
  { name: "درج مصري", type: "رخام مصري", cat: "تركيب — أدراج", img: "/alarrab/marble/stairs-egyptian-01.jpeg", label: "رخام مصري — تركيب أدراج" },
  { name: "بيترا جراي تركي", type: "رخام تركي", cat: "تركيب — أدراج", img: "/alarrab/marble/stairs-petra-grey-01.jpeg", label: "بيترا جراي تركي — تركيب أدراج" },
  { name: "درج جلاكسي هندي", type: "جلاكسي هندي", cat: "تركيب — أدراج", img: "/alarrab/marble/stairs-galaxy-indian-01.jpeg", label: "جلاكسي هندي — تركيب أدراج" },
  { name: "درج موغلا أبيض تركي", type: "موغلا أبيض تركي", cat: "تركيب — أدراج", img: "/alarrab/marble/stairs-mugla-white-01.jpeg", label: "موغلا أبيض تركي — تركيب أدراج" },
  { name: "ماركينا بلاك تركي", type: "ماركينا بلاك تركي", cat: "تركيب — أدراج", img: "/alarrab/marble/stairs-marquina-black-01.jpeg", label: "ماركينا بلاك تركي — تركيب أدراج" },
  { name: "درج إمبرادور تركي", type: "إمبرادور تركي", cat: "تركيب — أدراج", img: "/alarrab/marble/stairs-emperador-01.jpeg", label: "إمبرادور تركي — تركيب أدراج" },
  { name: "درج عماني لايت تركي", type: "عماني لايت تركي", cat: "تركيب — أدراج", img: "/alarrab/marble/stairs-omani-light-turkish-01.jpeg", label: "درج عماني لايت تركي — تركيب أدراج" },
  { name: "درج موغلا تركي أبيض قائم أسود", type: "موغلا أبيض تركي", cat: "تركيب — أدراج", img: "/alarrab/marble/stairs-mugla-white-black-riser-01.jpeg", label: "درج موغلا تركي أبيض قائم أسود — تركيب أدراج" },
];

type LbItem = {
  img: string | null;
  tones?: string[];
  name: string;
  cat: string;
  label: string;
};

// Group catalog by primary label (جدران، بورسلان، أحواش، واجهات)
const PRIMARY_GROUPS: { label: string; en: string; indexes: number[] }[] = (() => {
  const order: string[] = [];
  const map = new Map<string, number[]>();
  CATALOG.forEach((c, i) => {
    if (!map.has(c.label)) { map.set(c.label, []); order.push(c.label); }
    map.get(c.label)!.push(i);
  });
  const enMap: Record<string, string> = {
    "جدران": "Wall Tiles",
    "بورسلان": "Porcelain",
    "أحواش": "Outdoor Tiles",
    "واجهات": "Facades",
    "سيراميك": "Ceramic",
    "اسطح مخفض": "Sunken Roof Tiles",
    "غراء بلاط": "Tile Adhesive",
    "منتجات اسمنتية": "Cement Products",
  };
  return order.map((label) => ({ label, en: enMap[label] ?? "", indexes: map.get(label)! }));
})();

const HERO_IMAGES = [1,2,3,4,5,6].map((n) => `/alarrab/hero/hero-0${n}.jpeg`);

function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(() => HERO_IMAGES.map((_, i) => i === 0));

  useEffect(() => {
    // Preload all images once
    HERO_IMAGES.forEach((src, i) => {
      const img = new Image();
      img.onload = () => setLoaded((prev) => {
        if (prev[i]) return prev;
        const next = [...prev];
        next[i] = true;
        return next;
      });
      img.src = src;
    });
  }, []);

  useEffect(() => {
    let id: ReturnType<typeof setInterval> | null = null;
    const start = () => {
      if (id) return;
      id = setInterval(() => {
        setIndex((i) => (i + 1) % HERO_IMAGES.length);
      }, 5000);
    };
    const stop = () => {
      if (id) { clearInterval(id); id = null; }
    };
    const onVis = () => (document.hidden ? stop() : start());
    start();
    document.addEventListener("visibilitychange", onVis);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div className="hero-slideshow">
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          className="hero-slide"
          style={{
            backgroundImage: loaded[i] ? `url(${src})` : undefined,
            opacity: i === index ? 1 : 0,
          }}
        />
      ))}
      <div className="hero-slideshow-overlay" />
    </div>
  );
}

function Home() {
  const [activePrimary, setActivePrimary] = useState(0);
  const [activeTab, setActiveTab] = useState(PRIMARY_GROUPS[0].indexes[0]);
  const [activeFinish, setActiveFinish] = useState<"glossy" | "matte">("glossy");
  const [navOpen, setNavOpen] = useState(false);
  const [lbItems, setLbItems] = useState<LbItem[]>([]);
  const [lbIdx, setLbIdx] = useState(0);
  const lbOpen = lbItems.length > 0;

  const closeLb = useCallback(() => setLbItems([]), []);
  const openLb = useCallback((items: LbItem[], idx: number) => {
    setLbItems(items);
    setLbIdx(idx);
  }, []);

  // Deep-link: #p=<catIdx>-<g|m>-<prodIdx>  or  #m=<marbleIdx>
  useEffect(() => {
    const applyHash = () => {
      const h = window.location.hash;
      const pm = h.match(/^#p=(\d+)-(g|m)-(\d+)/);
      const mm = h.match(/^#m=(\d+)/);
      if (pm) {
        const catIdx = Number(pm[1]);
        const finish: "glossy" | "matte" = pm[2] === "m" ? "matte" : "glossy";
        const prodIdx = Number(pm[3]);
        const cat = CATALOG[catIdx];
        if (!cat) return;
        const primaryIdx = PRIMARY_GROUPS.findIndex((g) => g.indexes.includes(catIdx));
        if (primaryIdx >= 0) setActivePrimary(primaryIdx);
        setActiveTab(catIdx);
        setActiveFinish(finish);
        setTimeout(() => {
          const prods: Product[] = (cat.label === "جدران" || cat.label === "سيراميك") && finish === "matte"
            ? (cat.matteProducts ?? [])
            : cat.products;
          const items: LbItem[] = prods.map((p) => ({
            img: "img" in p ? p.img : null,
            tones: "tones" in p ? p.tones : undefined,
            name: p.name,
            cat: `${cat.label} — ${cat.size}`,
            label: cat.labelOverride ?? `${cat.size} سم`,
          }));
          if (items[prodIdx]) {
            document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
            openLb(items, prodIdx);
          }
        }, 250);
      } else if (mm) {
        const i = Number(mm[1]);
        const items: LbItem[] = MARBLE.map((m) => ({ img: m.img, name: m.name, cat: m.cat, label: m.label }));
        if (items[i]) {
          setTimeout(() => {
            document.getElementById("marble")?.scrollIntoView({ behavior: "smooth" });
            openLb(items, i);
          }, 250);
        }
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [openLb]);

  // ESC + arrow keys + body lock
  useEffect(() => {
    if (!lbOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") setLbIdx((i) => Math.min(i + 1, lbItems.length - 1));
      if (e.key === "ArrowRight" || e.key === "ArrowUp") setLbIdx((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lbOpen, lbItems.length, closeLb]);

  const cat = CATALOG[activeTab];
  const isWall = cat.label === "جدران";
  const hasFinish = cat.label === "جدران" || cat.label === "سيراميك";
  const displayProducts: Product[] = hasFinish && activeFinish === "matte"
    ? (cat.matteProducts ?? [])
    : cat.products;
  const panelLbItems: LbItem[] = displayProducts.map((p) => ({
    img: "img" in p ? p.img : null,
    tones: "tones" in p ? p.tones : undefined,
    name: p.name,
    cat: `${cat.label} — ${cat.size}`,
    label: cat.labelOverride ?? `${cat.size} سم`,
  }));

  const marbleLbItems: LbItem[] = MARBLE.map((m) => ({
    img: m.img, name: m.name, cat: m.cat, label: m.label,
  }));

  const navLinks = [
    ["#about", "من نحن"],
    ["#catalog", "الكتالوج"],
    ["#marble", "أنواع الرخام"],
    ["#partnership", "الشراكة"],
    ["#clients", "العملاء"],
    ["#contact", "تواصل معنا"],
  ] as const;

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-brand-wrap">
          <div className="nav-brand-text">
            <span className="nav-brand">العراب المميزة</span>
            <span className="nav-brand-sub">للتجارة</span>
          </div>
          <div className="nav-logo-circle">
            <img src="/alarrab/logo.jpeg" alt="شعار العراب المميزة" className="nav-logo-img" />
          </div>
        </div>
        <div className="nav-logo">
          <div className="nav-links-wrap">
            <ul className={`nav-links ${navOpen ? "open" : ""}`}>
              {navLinks.map(([href, label], i) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setNavOpen(false)}
                    className={i === navLinks.length - 1 ? "nav-cta" : ""}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="nav-toggle" aria-label="القائمة" onClick={() => setNavOpen(v => !v)}>
          ☰
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <HeroSlideshow />
        <div className="hero-bg" />
        <h1>وجهتك الأولى<br />لـ<span className="gold">السيراميك والبورسلان والرخام</span></h1>
        <p className="hero-tagline"><span className="hero-tagline-main">أناقة تدوم وجودة تثق بها</span><span className="hero-tagline-sub">لكل تفاصيل منزلك</span></p>
      </section>


      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="about-inner">
          <div className="about-text">
            <div className="section-tag">من نحن</div>
            <h2 className="section-title" style={{ textAlign: "right", marginBottom: "1.5rem" }}>
              أكثر من <span>30 عاماً</span> من الخبرة
            </h2>
            <p className="about-ar">
              تُمثل شركة العراب المميزة للتجارة، والمعروفة سابقاً باسم <strong>(مجموعة دار الركن التجارية)</strong>،
              بخبرة تمتد لأكثر من 30 عاماً في السيراميك، عنواناً للجودة والثقة والتميز. رسّخنا مكانتنا عبر سنوات طويلة
              من تقديم منتجات عالية الاعتمادية وخدمة استثنائية، واليوم اسمنا الجديد يعكس مسيرة التطور والنمو.
            </p>
            <p className="about-en">
              With over 30 years of experience in ceramics, Alarrab Almomaiaza Trading Co. — formerly known as{" "}
              <strong>Dar Al Rukn Trading Group</strong> — stands as a symbol of quality, trust, and excellence. We have
              built a strong reputation through decades of delivering reliable products and outstanding service.
            </p>

          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section className="catalog" id="catalog">
        <div className="section-header catalog-header">
          <div className="section-tag tag-ornate"><span className="tag-line" /><span>الكتالوج الكامل</span><span className="tag-line" /></div>
          <h2 className="section-title catalog-title">تصفّح <span>حسب الفئة والحجم</span></h2>
          <div className="title-underline" aria-hidden="true"><span /><span className="diamond" /><span /></div>
          <p className="section-sub">اختر الفئة الرئيسية، ثم اختر المقاس المناسب لمشروعك</p>
        </div>

        {/* Primary categories */}
        <div className="primary-tabs-wrapper">
          <div className="primary-tabs">
            {PRIMARY_GROUPS.map((g, i) => {
              const firstAccent = CATALOG[g.indexes[0]].accent;
              const isActive = i === activePrimary;
              return (
                <button
                  key={g.label}
                  className={`primary-tab ${isActive ? "active" : ""}`}
                  onClick={() => {
                    setActivePrimary(i);
                    setActiveTab(g.indexes[0]);
                    setActiveFinish("glossy");
                  }}
                  style={{ ['--acc' as never]: firstAccent }}
                >
                  <span className="primary-tab-ar">{(g.label === "غراء بلاط" || g.label === "منتجات اسمنتية") ? g.label : `بلاط ${g.label}`}</span>
                  <span className="primary-tab-count">{g.indexes.length} مقاسات متوفرة</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Size sub-categories for the active primary */}
        {PRIMARY_GROUPS[activePrimary].label !== "منتجات اسمنتية" && (
          <div className="sub-tabs-wrapper" key={`sub-${activePrimary}`}>
            <div className="sub-tabs">
              {PRIMARY_GROUPS[activePrimary].indexes.map((idx) => {
                const c = CATALOG[idx];
                const isActive = idx === activeTab;
                return (
                  <button
                    key={idx}
                    className={`sub-tab ${isActive ? "active" : ""}`}
                    onClick={() => { setActiveTab(idx); setActiveFinish("glossy"); }}
                    style={{ ['--acc' as never]: c.accent }}
                  >
                    <span className="sub-tab-size">مقاس {c.size}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Finish step — wall tiles only */}
        {(PRIMARY_GROUPS[activePrimary].label === "جدران" || PRIMARY_GROUPS[activePrimary].label === "سيراميك") && (
          <div className="finish-tabs-wrapper">
            
            <div className="finish-tabs">
              <button
                className={`finish-tab ${activeFinish === "glossy" ? "active" : ""}`}
                onClick={() => setActiveFinish("glossy")}
              >
                <span className="finish-dot finish-dot-glossy" />
                <span className="finish-label">لامع</span>
                <span className="finish-en">Glossy</span>
              </button>
              <button
                className={`finish-tab ${activeFinish === "matte" ? "active" : ""}`}
                onClick={() => setActiveFinish("matte")}
              >
                <span className="finish-dot finish-dot-matte" />
                <span className="finish-label">مطفي</span>
                <span className="finish-en">Matte</span>
              </button>
            </div>
          </div>
        )}

        <div className="section-panel" style={{ animation: "fadeUp 0.4s ease" }} key={`${activeTab}-${activeFinish}`}>
          <div
            className="panel-header"
            style={{ background: `linear-gradient(135deg, ${cat.accent}22, ${cat.accent}08)` }}
          >
            <div className="panel-cat">{cat.label}</div>
            <div className="panel-size">
              {cat.size}
              {(PRIMARY_GROUPS[activePrimary].label === "جدران" || PRIMARY_GROUPS[activePrimary].label === "سيراميك") && (
                <span className="panel-finish-chip">{activeFinish === "glossy" ? "لامع" : "مطفي"}</span>
              )}
            </div>
          </div>

          {displayProducts.length === 0 ? (
            <div className="finish-empty">
              <div className="finish-empty-icon">✦</div>
              <div className="finish-empty-title">قريباً</div>
              <div className="finish-empty-sub">
                {hasFinish && activeFinish === "matte"
                  ? `تشكيلة البلاط المطفي بمقاس ${cat.size} قيد التحضير`
                  : `تشكيلة ${cat.label} بمقاس ${cat.size} قيد التحضير`}
              </div>
            </div>
          ) : (

          <div className="product-grid">
            {displayProducts.map((prod, j) => {
              const isImg = "img" in prod;
              const sizeLabel = cat.labelOverride ?? `${cat.size} سم`;
              const SITE = "https://arabian-hearth-craft.lovable.app";
              const finishKey = activeFinish === "matte" ? "m" : "g";
              const deepLink = `${SITE}/#p=${activeTab}-${finishKey}-${j}`;
              const imgUrl = isImg ? `${SITE}${(prod as ProductImg).img}` : "";
              const waText = `السلام عليكم،\nأنا مهتم بهذا اللون من موقع معرض العراب:\n\n• الفئة: ${cat.label}\n• المقاس: ${sizeLabel}\n\nشاهد اللون مباشرة على الموقع:\n${deepLink}\n\nأرجو إفادتي بالسعر والتوفر.`;
              const waHref = `https://wa.me/966563944445?text=${encodeURIComponent(waText)}`;
              return (
                <div
                  key={j}
                  className="product-card"
                  style={{ animationDelay: `${j * 0.05}s` }}
                  onClick={() => openLb(panelLbItems, j)}
                >
                  <div className="card-img">
                    {isImg ? (
                      <img src={prod.img} alt={prod.name} loading="lazy" />
                    ) : (
                      <div className="tile-mosaic">
                        {Array.from({ length: 24 }).map((_, k) => {
                          const c = prod.tones[k % prod.tones.length];
                          const f = k % 5 === 0 ? "brightness(1.15)" : k % 7 === 0 ? "brightness(0.85)" : undefined;
                          return <div key={k} style={{ background: c, filter: f }} />;
                        })}
                      </div>
                    )}
                    <div className="card-overlay">
                      <div className="card-overlay-icon">🔍</div>
                    </div>
                    <a
                      className="card-wa-btn"
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`تواصل واتساب بخصوص ${prod.name}`}
                      title="استفسر عن هذا اللون عبر واتساب"
                    >
                      <MessageCircle size={18} />
                    </a>
                  </div>
                  <div className="card-body">
                    <div className="card-cat">{cat.label}</div>
                    <div className="card-name">{prod.name}</div>
                    <div className="card-size">{sizeLabel}</div>
                  </div>
                </div>
              );
            })}
            </div>
          )}
        </div>
      </section>

      {/* MARBLE */}
      <section className="marble-section" id="marble">
        <div className="marble-inner">
          <div className="section-header">
            <h2 className="section-title">أنواع الرخام <span>المتوفر لدينا</span></h2>
          </div>
          <div className="marble-grid">
            {MARBLE.map((m, i) => {
              const SITE = "https://arabian-hearth-craft.lovable.app";
              const imgUrl = `${SITE}${m.img}`;
              const deepLink = `${SITE}/#m=${i}`;
              const waText = `السلام عليكم،\nأنا مهتم بهذا الرخام من موقع معرض العراب:\n\n• الفئة: ${m.cat}\n\nشاهده مباشرة على الموقع:\n${deepLink}\n\nأرجو إفادتي بالسعر والتوفر.`;
              const waHref = `https://wa.me/966563944445?text=${encodeURIComponent(waText)}`;
              return (
              <div key={i} className="marble-card" onClick={() => openLb(marbleLbItems, i)}>
                <div className="marble-img">
                  <img src={m.img} alt={m.name} loading="lazy" />
                </div>
                <div className="marble-card-overlay">
                  <div className="marble-zoom-icon">🔍</div>
                </div>
                <a
                  className="card-wa-btn"
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`تواصل واتساب بخصوص ${m.name}`}
                  title="استفسر عن هذا الرخام عبر واتساب"
                >
                  <MessageCircle size={18} />
                </a>
                <div className="marble-body">
                  <div className="marble-cat">{m.cat}</div>
                  <div className="marble-name">{m.name}</div>
                  <div className="marble-type">{m.type}</div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="partnership-section" id="partnership">
        <div className="partnership-inner">
          <div className="section-header">
            <h2 className="section-title">اتفاقية الهيئة الملكية مع <span>مصنع وانغ كانغ</span></h2>
          </div>

          <div
            className="partnership-image"
            onClick={() => openLb([{ img: "/alarrab/partnership-wangkang.png", name: "اتفاقية الشراكة مع وانغ كانغ", cat: "شراكة استراتيجية", label: "اتفاقية الهيئة الملكية مع مصنع وانغ كانغ" }], 0)}
          >
            <img src="/alarrab/partnership-wangkang.png" alt="اتفاقية الشراكة مع وانغ كانغ" loading="lazy" />
          </div>

          <div className="partnership-grid">
            <div className="partnership-block ar">
              <h3>شركة وانغ كانغ السعودية للسيراميك المحدودة</h3>
              <p>تأسست في يوليو 2018، ومسجلة في مدينة ينبع — السعودية. وقد اعتبرتها لجنة التنمية والإصلاح الصينية المشروع الرئيسي للطاقة الصناعية بين الصين والسعودية.</p>
              <p>تخطط الشركة لبناء مصنعين كبيرين حديثين للسيراميك؛ المرحلة الأولى في منطقة ينبع الصناعية السعودية، والمرحلة الثانية في مدينة طريف السعودية.</p>
              <p>تتضمن المرحلة الأولى بناء أربعة خطوط إنتاج للسيراميك بإجمالي استثمارات يبلغ 100 مليون دولار أمريكي. وقد بدأ خطّان للإنتاج التجريبي في سبتمبر 2019، وعند اكتمال المصنع ستنتج الشركة 200,000 متر مربع يومياً من أنواع السيراميك المختلفة.</p>
              <p>ستغطي مبيعات المنتجات السوق المحلية والدول العربية المحيطة. وفي المستقبل ستُنشئ الشركة مصنع فريت ومصنع تغليف الكرتون ومصنع القوالب وغيرها لإنشاء سلسلة صناعية متكاملة.</p>
            </div>
            <div className="partnership-block en">
              <h3>Wang Kang Saudi Ceramics Co. Ltd.</h3>
              <p>Established in July 2018 and registered in Yanbu, Saudi Arabia. The Chinese National Development and Reform Commission recognized the company as a key industrial energy project between China and Saudi Arabia.</p>
              <p>The company plans to build two large modern ceramic factories. Phase one is located in Yanbu Industrial City, while phase two will be established in Turaif.</p>
              <p>Phase one includes the construction of four ceramic production lines with a total investment of USD 100 million. Two production lines began trial operations in September 2019. Upon full completion, the factory will produce 200,000 square meters of various ceramic products daily.</p>
              <p>The company's products will serve the local Saudi market and neighboring Arab countries. Future plans include a frit factory, carton packaging factory, mold factory, and other supporting facilities to create a complete ceramic manufacturing industrial chain.</p>
            </div>
          </div>

          <div className="partnership-stats">
            <div className="p-stat"><div className="p-stat-n">2018</div><div className="p-stat-l">سنة التأسيس</div></div>
            <div className="p-stat"><div className="p-stat-n">$100M</div><div className="p-stat-l">إجمالي الاستثمار</div></div>
            <div className="p-stat"><div className="p-stat-n">200,000</div><div className="p-stat-l">م² إنتاج يومي</div></div>
            <div className="p-stat"><div className="p-stat-n">4</div><div className="p-stat-l">خطوط إنتاج</div></div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="clients-section" id="clients">
        <div className="clients-inner">
          <div className="section-header" style={{ marginBottom: "1rem" }}>
            <h2 className="section-title">عملاؤنا</h2>
          </div>
          <div className="clients-strip">
            <img src="/alarrab/clients-logos.png" alt="عملاؤنا" loading="lazy" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="section-tag">تواصل معنا</div>
        <h2>نحن هنا لـ<span style={{ background: "linear-gradient(90deg,#E8A820,#C8860A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>مساعدتك</span></h2>
        <p>تواصل معنا عبر أي من القنوات التالية وسنرد عليك في أقرب وقت</p>

        <div className="contact-info-grid">
          <a className="contact-info-card" href="tel:+966550666160">
            <div className="cii"><Phone strokeWidth={1.6} /></div>
            <div className="cil">الهاتف</div>
            <div className="civ" style={{ direction: "ltr" }}>+966 55 066 6160</div>
          </a>
          <div className="contact-info-card" style={{ cursor: "default" }}>
            <div className="cii"><MapPin strokeWidth={1.6} /></div>
            <div className="cil">العنوان</div>
            <div className="civ">الرياض - حي الرمال - طريق الأمير محمد بن سلمان</div>
          </div>
          <a className="contact-info-card" href="mailto:alarab.almmeza@gmail.com">
            <div className="cii"><Mail strokeWidth={1.6} /></div>
            <div className="cil">البريد الإلكتروني</div>
            <div className="civ" style={{ direction: "ltr", fontSize: "0.85rem" }}>alarab.almmeza@gmail.com</div>
          </a>
          <a className="contact-info-card" href={`https://wa.me/966563944445?text=${encodeURIComponent("السلام عليكم،\nشاهدت منتجاتكم عبر موقع معرض العراب:\nhttps://arabian-hearth-craft.lovable.app\n\nوأرغب بالاستفسار عن المنتجات.")}`} target="_blank" rel="noopener noreferrer">
            <div className="cii"><MessageCircle strokeWidth={1.6} /></div>
            <div className="cil">WhatsApp</div>
            <div className="civ" style={{ direction: "ltr" }}>+966 56 394 4445</div>
          </a>
        </div>

        <div className="socials-row" aria-label="حساباتنا الاجتماعية">
          <a className="social-btn" href="https://www.tiktok.com/@alarrabtrading" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <Music2 strokeWidth={1.7} />
          </a>
        </div>
      </section>

      <footer>
        <span className="footer-brand">العراب المميزة للتجارة</span>
        &nbsp;© {new Date().getFullYear()} — جميع الحقوق محفوظة
      </footer>

      {/* LIGHTBOX */}
      {lbOpen && <Lightbox items={lbItems} idx={lbIdx} setIdx={setLbIdx} onClose={closeLb} />}
    </>
  );
}

function Lightbox({
  items, idx, setIdx, onClose,
}: { items: LbItem[]; idx: number; setIdx: (n: number | ((i: number) => number)) => void; onClose: () => void }) {
  const item = items[idx];
  const many = items.length > 1;
  return (
    <div className="lightbox open" role="dialog" aria-modal="true">
      <div className="lb-backdrop" onClick={onClose} />
      <div className="lb-box">
        <button className="lb-close" onClick={onClose} aria-label="إغلاق">✕</button>
        <div className="lb-img-wrap">
          {item.img ? (
            <img
              src={item.img}
              alt={item.name}
              style={{ cursor: many ? "pointer" : "default" }}
              onClick={() => many && setIdx((i) => (i + 1) % items.length)}
            />
          ) : (
            <div className="lb-mosaic">
              {Array.from({ length: 40 }).map((_, k) => {
                const c = item.tones![k % item.tones!.length];
                const f = k % 5 === 0 ? "brightness(1.15)" : k % 7 === 0 ? "brightness(0.85)" : undefined;
                return <div key={k} style={{ background: c, filter: f }} />;
              })}
            </div>
          )}
        </div>
        <div className="lb-info">
          <div className="lb-cat">{item.cat}</div>
          <div className="lb-name">{item.name}</div>
          <div className="lb-label">{item.label}</div>
          {many && <div className="lb-counter">{idx + 1} / {items.length}</div>}
        </div>
        {many && (
          <div className="lb-nav">
            <button
              className="lb-btn"
              disabled={idx >= items.length - 1}
              onClick={() => setIdx((i) => Math.min(i + 1, items.length - 1))}
            >
              <span>التالي</span> <span style={{ fontSize: "1.3rem" }}>‹</span>
            </button>
            <button
              className="lb-btn"
              disabled={idx <= 0}
              onClick={() => setIdx((i) => Math.max(i - 1, 0))}
            >
              <span style={{ fontSize: "1.3rem" }}>›</span> <span>السابق</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
