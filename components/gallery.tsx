"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

type Photo = { src: string; alt: string; caption: string };
const ease = [0.22, 1, 0.36, 1] as const;

// Galeri foto: klik untuk membuka tampilan penuh, geser dengan panah atau swipe
export function Gallery({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);

  const show = (n: number) => {
    setOpen(n);
    dialog.current?.showModal();
  };
  const close = useCallback(() => dialog.current?.close(), []);
  const step = useCallback(
    (d: number) => setOpen((n) => (n === null ? n : (n + d + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => {
      setOpen(null);
      document.documentElement.style.overflow = "";
    };
    el.addEventListener("keydown", onKey);
    el.addEventListener("close", onClose);
    return () => {
      el.removeEventListener("keydown", onKey);
      el.removeEventListener("close", onClose);
    };
  }, [step]);

  useEffect(() => {
    if (open !== null) document.documentElement.style.overflow = "hidden";
  }, [open]);

  return (
    <>
      <ul className="mt-10 grid grid-cols-2 items-start gap-3 sm:grid-cols-3 sm:gap-5">
        {photos.map((p, n) => (
          <motion.li
            key={p.src}
            className="sm:nth-[3n+2]:mt-14"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (n % 3) * 0.08, ease }}
          >
            <button
              type="button"
              onClick={() => show(n)}
              className="group relative block aspect-[3/4] w-full overflow-hidden rounded-[24px] bg-line text-left"
              aria-label={`Perbesar foto: ${p.caption}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-ink backdrop-blur transition-transform duration-500 group-hover:-translate-y-1 sm:bottom-4 sm:left-4">
                {p.caption}
              </span>
              <span
                aria-hidden="true"
                className="absolute right-3 top-3 grid size-9 scale-75 place-items-center rounded-full bg-white/90 text-ink opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </span>
            </button>
          </motion.li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        aria-label="Foto kost"
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-deep/95 backdrop:backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {open !== null && (
          <div className="pointer-events-none flex h-full flex-col items-center justify-center gap-4 p-4 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={photos[open].src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease }}
                className="pointer-events-auto relative h-[78dvh] w-full max-w-[min(90vw,46dvh)]"
              >
                <Image
                  src={photos[open].src}
                  alt={photos[open].alt}
                  fill
                  sizes="90vw"
                  className="rounded-2xl object-contain"
                />
              </motion.div>
            </AnimatePresence>
            <p className="pointer-events-auto font-bold text-white">
              {photos[open].caption}
              <span className="ml-3 font-medium text-white/60">
                {open + 1} dari {photos.length}
              </span>
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={close}
          aria-label="Tutup"
          className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white hover:text-ink"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
        {[-1, 1].map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => step(d)}
            aria-label={d < 0 ? "Foto sebelumnya" : "Foto berikutnya"}
            className={`absolute top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white hover:text-ink ${
              d < 0 ? "left-3 sm:left-8" : "right-3 sm:right-8"
            }`}
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d={d < 0 ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
            </svg>
          </button>
        ))}
      </dialog>
    </>
  );
}
