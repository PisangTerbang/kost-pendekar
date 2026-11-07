"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type Photo = { src: string; alt: string; caption: string };

export function HeroSlides({ photos }: { photos: Photo[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (photos.length < 2 || paused || reduce) return;
    const t = setTimeout(() => setI((n) => (n + 1) % photos.length), 4800);
    return () => clearTimeout(t);
  }, [i, paused, reduce, photos.length]);

  if (photos.length === 0) return <div className="size-full bg-nila" />;
  const p = photos[i];

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={p.src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-deep/45 via-transparent to-transparent" />

      {photos.length > 1 && (
        <div className="absolute bottom-5 right-5 z-10 flex items-center gap-2">
          {photos.map((ph, n) => (
            <button
              key={ph.src}
              type="button"
              onClick={() => setI(n)}
              aria-label={`Tampilkan foto ${ph.caption}`}
              aria-current={n === i}
              className={`h-2 rounded-full transition-all duration-500 ${
                n === i ? "w-7 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
