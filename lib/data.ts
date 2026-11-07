export const kost = {
  name: "Kost Putra Pendekar",
  city: "Yogyakarta",
  tagline: "Kost putra eksklusif di Jogja, bebas jam malam.",
  intro:
    "Kamar lengkap dengan AC, kamar mandi dalam, dan water heater. Wifi di atas 150 Mbps untuk kuliah daring, kerja, dan main game tanpa putus.",
  price: 1_400_000,
  priceNote: "Hubungi pemilik untuk info deposit dan biaya lain.",
};

export const whatsapp = {
  number: "6285974853568",
  display: "0859-7485-3568",
  message:
    "Halo, saya lihat website Kost Putra Pendekar. Apakah masih ada kamar kosong?",
};

export const location = {
  mapsUrl: "https://maps.app.goo.gl/T8BPBiQmhEN276XU8",
  address: "",
  embedSrc:
    "https://maps.google.com/maps?q=-7.6833639,110.4170469&z=16&output=embed",
};

export type Facility = { icon: IconName; label: string; note?: string };
export type IconName =
  | "wifi"
  | "ac"
  | "heater"
  | "bath"
  | "bed"
  | "wardrobe"
  | "desk"
  | "tv"
  | "parking"
  | "clock";

export const facilities: Facility[] = [
  { icon: "wifi", label: "Wifi 150+ Mbps", note: "Lancar untuk video call dan game" },
  { icon: "clock", label: "Tanpa jam malam", note: "Akses 24 jam" },
  { icon: "ac", label: "AC" },
  { icon: "bath", label: "Kamar mandi dalam" },
  { icon: "heater", label: "Water heater" },
  { icon: "bed", label: "Kasur" },
  { icon: "wardrobe", label: "Lemari" },
  { icon: "desk", label: "Meja" },
  { icon: "tv", label: "Televisi" },
  { icon: "parking", label: "Parkiran" },
];

export const photos: { src: string; alt: string; caption: string }[] = [
  { src: "/foto/kamar-ac.jpg", alt: "Kamar kosong dengan AC, jendela bergorden, dan lampu plafon", caption: "Kamar ber-AC" },
  { src: "/foto/kamar-kasur-meja.jpg", alt: "Kamar dengan kasur, meja, dan rak dinding", caption: "Kasur dan meja" },
  { src: "/foto/kamar-tv-water-heater.jpg", alt: "Sisi kamar dengan televisi di dinding dan water heater", caption: "TV dan water heater" },
  { src: "/foto/gedung-siang.jpg", alt: "Gedung kost dua lantai dengan taman di siang hari", caption: "Gedung dan taman" },
  { src: "/foto/kamar-meja-belajar.jpg", alt: "Kamar dengan meja belajar dan kursi", caption: "Meja belajar" },
  { src: "/foto/gedung-malam.jpg", alt: "Halaman kost di malam hari dengan lampu menyala", caption: "Halaman di malam hari" },
  { src: "/foto/parkiran.jpg", alt: "Parkiran beratap untuk mobil dan motor", caption: "Parkiran" },
];

export const steps = [
  {
    title: "Chat lewat WhatsApp",
    text: "Tanyakan kamar yang masih kosong dan jadwal untuk melihat kost.",
  },
  {
    title: "Lihat kamar langsung",
    text: "Datang ke lokasi, cek kamar dan fasilitasnya sendiri.",
  },
  {
    title: "Mulai ngekos",
    text: "Sepakati tanggal masuk dengan pemilik, lalu pindahan.",
  },
];

export const faq = [
  {
    q: "Kost ini untuk putra atau putri?",
    a: "Khusus putra.",
  },
  {
    q: "Apakah ada jam malam?",
    a: "Tidak ada. Penghuni bisa keluar masuk 24 jam.",
  },
  {
    q: "Berapa biaya sewanya?",
    a: "Rp1.400.000 per bulan. Untuk deposit dan biaya lain, tanyakan langsung ke pemilik lewat WhatsApp.",
  },
  {
    q: "Apa saja yang ada di kamar?",
    a: "Kasur, lemari, meja, AC, televisi, dan kamar mandi dalam dengan water heater.",
  },
  {
    q: "Seberapa cepat wifinya?",
    a: "Di atas 150 Mbps, cukup untuk kuliah daring, video call, dan main game.",
  },
  {
    q: "Bisa lihat kamar dulu sebelum menyewa?",
    a: "Bisa. Chat pemilik lewat WhatsApp untuk mengatur jadwal datang.",
  },
];
