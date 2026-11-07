"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/icons";
import { Logo } from "@/components/logo";

function useScrolledPast(px: number) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > px);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [px]);
  return past;
}

export function Header({ name, waLink }: { name: string; waLink: string }) {
  const scrolled = useScrolledPast(40);
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6">
      <div
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-full px-4 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "bg-white/80 text-ink shadow-[0_10px_30px_-12px_rgb(19_33_58/0.35)] ring-1 ring-black/5 backdrop-blur-xl"
            : "bg-transparent text-white"
        }`}
      >
        <a href="#" className="flex items-center gap-2.5 font-extrabold tracking-tight">
          <Logo className={`size-9 rounded-[10px] transition-shadow ${scrolled ? "" : "ring-1 ring-white/25"}`} />
          {name}
        </a>
        <nav aria-label="Navigasi" className="hidden gap-8 text-sm font-semibold md:flex">
          {[
            ["Fasilitas", "#fasilitas"],
            ["Harga", "#harga"],
            ["Lokasi", "#lokasi"],
            ["Tanya jawab", "#faq"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="group relative py-1 opacity-80 hover:opacity-100">
              {label}
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded bg-soga transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-wa px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105"
        >
          <WhatsAppIcon className="size-4" />
          Chat
        </a>
      </div>
    </header>
  );
}

export function FloatingWa({ waLink }: { waLink: string }) {
  const show = useScrolledPast(600);
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat pemilik kost lewat WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 380, damping: 24 }}
          className="wa-pulse fixed bottom-5 right-5 z-40 hidden size-14 place-items-center md:grid rounded-full bg-wa text-white shadow-[0_12px_30px_-8px_rgb(18_140_75/0.7)]"
        >
          <WhatsAppIcon className="size-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export function MobileBar({ waLink, price }: { waLink: string; price: string }) {
  const show = useScrolledPast(520);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          exit={{ y: "110%" }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="leading-tight">
              <p className="text-xs font-semibold text-muted">Sewa per bulan</p>
              <p className="text-lg font-extrabold tracking-tight">{price}</p>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-wa px-5 py-3 font-bold text-white"
            >
              <WhatsAppIcon className="size-5" />
              Chat pemilik
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
