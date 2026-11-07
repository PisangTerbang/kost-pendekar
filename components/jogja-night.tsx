"use client";

import { motion, useScroll, useTransform } from "motion/react";

// Bintang dengan posisi tetap (dihitung sekali, sama di server dan browser)
function makeStars(count: number) {
  let seed = 7;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  return Array.from({ length: count }, () => ({
    x: rand() * 1440,
    y: rand() * 620,
    r: rand() < 0.15 ? 1.6 : rand() * 0.9 + 0.4,
    d: (rand() * 4).toFixed(2),
  }));
}
const stars = makeStars(110);

// Jendela kost di lapisan depan: [x, y, menyala berkedip?]
const windows: [number, number, boolean][] = [
  [86, 318, false], [110, 318, true], [86, 348, true], [110, 348, false],
  [262, 300, true], [288, 300, false], [314, 300, false], [262, 334, false], [288, 334, true], [314, 334, false],
  [1186, 312, false], [1212, 312, true], [1238, 312, false], [1186, 346, true], [1238, 346, false],
  [1352, 326, true], [1378, 326, false],
];

// Atap joglo: puncak curam di tengah, sayap landai di kiri-kanan
function Joglo({ x, w, base }: { x: number; w: number; base: number }) {
  const c = x + w / 2;
  const top = base - w * 0.42;
  return (
    <path
      d={`M${x} ${base} L${x + w * 0.18} ${base - w * 0.16} L${c - w * 0.12} ${base - w * 0.2} L${c - w * 0.05} ${top} L${c + w * 0.05} ${top} L${c + w * 0.12} ${base - w * 0.2} L${x + w * 0.82} ${base - w * 0.16} L${x + w} ${base} Z`}
    />
  );
}

export function JogjaNight({ compact = false }: { compact?: boolean }) {
  const { scrollY } = useScroll();
  const far = useTransform(scrollY, [0, 800], [0, 40]);
  const mid = useTransform(scrollY, [0, 800], [0, 20]);
  const moonY = useTransform(scrollY, [0, 800], [0, 120]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Langit */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a1428_0%,#12223f_50%,#1f3a66_88%,#2a4a7c_100%)]" />

      {/* Bintang berkelip dan bintang jatuh */}
      <svg viewBox="0 0 1440 640" preserveAspectRatio="xMidYMin slice" className="absolute inset-0 size-full">
        <defs>
          <linearGradient id="trail" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset="1" stopColor="#fff" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <g fill="#fff">
          {stars.map((s, i) => (
            <circle key={i} cx={s.x} cy={s.y} r={s.r} className="twinkle" style={{ animationDelay: `${s.d}s` }} />
          ))}
        </g>
        <g className="shooting">
          <line x1="0" y1="0" x2="120" y2="0" stroke="url(#trail)" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>

      {/* Bulan sabit */}
      <motion.div
        style={{ y: moonY }}
        className={`absolute top-[14%] size-12 sm:size-14 ${compact ? "right-[12%]" : "left-[44%] max-lg:left-auto max-lg:right-[10%]"}`}
      >
        <span className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgb(255_244_214/0.28),transparent_65%)]" />
        <span className="absolute inset-0 rounded-full shadow-[inset_-11px_5px_0_0_#fff4d6]" />
      </motion.div>

      {/* Siluet kota Jogja di bagian bawah */}
      <svg
        viewBox="0 110 1440 290"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-x-0 bottom-0 h-[clamp(150px,30vh,280px)] w-full"
      >
        <defs>
          <linearGradient id="haze" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e08a52" stopOpacity="0" />
            <stop offset="1" stopColor="#e08a52" stopOpacity="0.2" />
          </linearGradient>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        <rect x="0" y="200" width="1440" height="200" fill="url(#haze)" />
        {/* Gunung Merapi dengan asap tipis */}
        <motion.g style={{ y: far }}>
          <path
            fill="#1a2f55"
            d="M0 400V300C180 292 360 270 520 205C560 188 590 168 612 150L640 146L668 152C700 172 740 196 800 222C960 285 1180 296 1440 300V400Z"
          />
          <g fill="#c9d6ea" filter="url(#soft)">
            <ellipse className="smoke" cx="640" cy="132" rx="16" ry="8" />
            <ellipse className="smoke" cx="648" cy="132" rx="12" ry="6" style={{ animationDelay: "2.2s" }} />
            <ellipse className="smoke" cx="634" cy="132" rx="10" ry="5" style={{ animationDelay: "4.4s" }} />
          </g>
        </motion.g>

        {/* Atap joglo, pepohonan, dan Tugu Jogja */}
        <motion.g style={{ y: mid }} fill="#14264a">
          <Joglo x={150} w={150} base={340} />
          <Joglo x={420} w={120} base={345} />
          <Joglo x={700} w={170} base={338} />
          <Joglo x={1260} w={130} base={342} />
          <circle cx="380" cy="320" r="34" />
          <circle cx="408" cy="330" r="26" />
          <circle cx="620" cy="326" r="30" />
          <circle cx="1120" cy="322" r="36" />
          <circle cx="1150" cy="334" r="24" />
          {/* Tugu */}
          <path d="M968 345h44v-14h-6v-10h-32v10h-6z" />
          <path d="M978 321l4-86h16l4 86z" />
          <path d="M982 235l8-38 8 38z" />
          <circle cx="990" cy="194" r="4" />
          <rect x="0" y="338" width="1440" height="62" />
        </motion.g>

        {/* Lapisan depan: bangunan kost dengan jendela menyala */}
        <g fill="#0b1527">
          <path d="M60 400V300l38-22 38 22v100z" />
          <path d="M236 400V284h104v116z" />
          <path d="M226 286l62-26 62 26z" />
          <path d="M1170 400V296h96v104z" />
          <path d="M1160 298l58-24 58 24z" />
          <path d="M1336 400V310h60v90z" />
          <rect x="0" y="372" width="1440" height="28" />
        </g>
        <g fill="#f5c46a">
          {windows.map(([x, y, blink], i) => (
            <rect
              key={i}
              x={x}
              y={y}
              width="14"
              height="16"
              rx="2"
              className={blink ? "window-blink" : undefined}
              style={blink ? { animationDelay: `${(i % 5) * 1.3}s` } : undefined}
              opacity={blink ? undefined : 0.9}
            />
          ))}
        </g>
      </svg>

      {/* Gelapkan sedikit di bagian bawah agar teks tetap terbaca */}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0a1428]/60 to-transparent" />
    </div>
  );
}
