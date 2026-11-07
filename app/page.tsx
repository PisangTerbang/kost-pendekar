import { FloatingWa, Header, MobileBar } from "@/components/chrome";
import { Gallery } from "@/components/gallery";
import { HeroSlides } from "@/components/hero-slides";
import { JogjaNight } from "@/components/jogja-night";
import { Icon, WhatsAppIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import {
  CountUp,
  DrawLine,
  MotionProvider,
  Reveal,
  Stagger,
  StaggerItem,
  WordsReveal,
} from "@/components/motion";
import { facilities, faq, kost, location, photos, steps, whatsapp } from "@/lib/data";

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-8";
const h2 = "text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em]";

const waLink = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message)}`;
const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Math.round(n / 1000) * 1000);

function WaButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-wa px-7 py-4 font-bold text-white shadow-[0_14px_30px_-12px_rgb(18_140_75/0.8)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_36px_-12px_rgb(18_140_75/0.9)] ${className}`}
    >
      <WhatsAppIcon className="size-5 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
      {label}
    </a>
  );
}

export default function Home() {
  const heroPhotos = photos.slice(0, 3);
  const galleryPhotos = photos.slice(1);
  const featured = facilities.filter((f) => f.icon === "wifi" || f.icon === "clock");
  const bath = facilities.find((f) => f.icon === "bath");
  const rest = facilities.filter((f) => !["wifi", "clock", "bath"].includes(f.icon));
  const wifi = featured.find((f) => f.icon === "wifi");
  const clock = featured.find((f) => f.icon === "clock");

  return (
    <MotionProvider>
      <Header name={kost.name} waLink={waLink} />

      <a
        href="#isi"
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-full bg-white px-5 py-3 font-bold text-ink shadow-lg focus:translate-y-0"
      >
        Langsung ke isi halaman
      </a>

      <main id="isi">
        <section className="relative overflow-hidden bg-deep text-white">
          <JogjaNight />
          <div className={`${wrap} relative grid min-h-[92svh] items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.1fr_1fr] lg:pt-28`}>
            <div>
              <Reveal y={12}>
                <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-sky ring-1 ring-white/15 backdrop-blur">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#4ade80] opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-[#4ade80]" />
                  </span>
                  Kost putra di {kost.city}
                </p>
              </Reveal>
              <h1 className="mt-6 text-[clamp(2.6rem,7vw,5rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
                <WordsReveal text={kost.tagline} />
              </h1>
              <Reveal delay={0.6}>
                <p className="mt-6 max-w-[50ch] text-lg text-white/75">{kost.intro}</p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <WaButton label="Tanya kamar kosong" />
                  <a
                    href="#fasilitas"
                    className="rounded-full px-6 py-4 font-bold text-white ring-1 ring-white/25 transition-colors hover:bg-white hover:text-deep"
                  >
                    Lihat fasilitas
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.3} y={40} className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/3.4] overflow-hidden rounded-[36px] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] ring-1 ring-white/10 sm:aspect-[5/4] lg:aspect-[4/4.6]">
                <HeroSlides photos={heroPhotos} />
              </div>

              <div className="float-a absolute -left-3 top-8 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 text-ink shadow-xl backdrop-blur sm:-left-8">
                <span className="grid size-9 place-items-center rounded-xl bg-nila text-white">
                  <Icon name="wifi" className="size-5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-xs font-semibold text-muted">Internet</span>
                  <span className="font-extrabold">150+ Mbps</span>
                </span>
              </div>
              <div className="float-b absolute -right-2 top-1/2 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 text-ink shadow-xl backdrop-blur sm:-right-6">
                <span className="grid size-9 place-items-center rounded-xl bg-soga text-white">
                  <Icon name="clock" className="size-5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-xs font-semibold text-muted">Akses</span>
                  <span className="font-extrabold">24 jam</span>
                </span>
              </div>
              <div className="float-c absolute -bottom-6 left-6 rounded-2xl bg-white px-5 py-4 text-ink shadow-2xl sm:left-10">
                <p className="text-xs font-semibold text-muted">Sewa per bulan</p>
                <p className="text-2xl font-extrabold tracking-tight">{rupiah(kost.price)}</p>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="marquee overflow-hidden border-b border-line bg-white py-5" aria-hidden="true">
          <div className="marquee-track flex w-max items-center gap-10 pr-10">
            {[...facilities, ...facilities].map((f, i) => (
              <span key={i} className="flex items-center gap-3 whitespace-nowrap text-lg font-bold text-ink/80">
                <Icon name={f.icon} className="size-6 text-nila" />
                {f.label}
                <span className="ml-7 size-1.5 rounded-full bg-soga" />
              </span>
            ))}
          </div>
        </div>

        <section id="fasilitas" className={`${wrap} py-20 sm:py-28`}>
          <Reveal>
            <h2 className={h2}>Fasilitas lengkap, tinggal bawa barang pribadi</h2>
          </Reveal>

          <Stagger className="mt-12 grid auto-rows-[minmax(150px,auto)] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {wifi && (
              <StaggerItem className="col-span-2 row-span-2 flex flex-col justify-between overflow-hidden rounded-[28px] bg-nila p-7 text-white sm:p-9">
                <div className="flex items-start justify-between">
                  <Icon name="wifi" className="size-9 text-sky" />
                  <span className="signal flex h-10 items-end gap-1.5" aria-hidden="true">
                    <span className="h-3 w-2 rounded-sm bg-sky" />
                    <span className="h-5 w-2 rounded-sm bg-sky" />
                    <span className="h-7 w-2 rounded-sm bg-sky" />
                    <span className="h-10 w-2 rounded-sm bg-sky" />
                  </span>
                </div>
                <div className="mt-10">
                  <p className="text-[clamp(4rem,11vw,7rem)] font-extrabold leading-none tracking-[-0.05em]">
                    <CountUp to={150} />
                    <span className="text-sky">+</span>
                  </p>
                  <p className="mt-2 text-xl font-bold">Mbps wifi</p>
                  {wifi.note && <p className="text-white/70">{wifi.note}</p>}
                </div>
              </StaggerItem>
            )}

            {clock && (
              <StaggerItem className="col-span-2 flex items-center gap-6 rounded-[28px] bg-soga p-7 text-white">
                <svg viewBox="0 0 64 64" className="size-20 shrink-0" aria-hidden="true">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.5" />
                  <line x1="32" y1="32" x2="32" y2="16" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  <line className="clock-hand" x1="32" y1="32" x2="32" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="32" cy="32" r="3" fill="currentColor" />
                </svg>
                <div>
                  <p className="text-2xl font-extrabold">{clock.label}</p>
                  {clock.note && <p className="text-white/80">{clock.note}. Pulang jam berapa pun tidak masalah.</p>}
                </div>
              </StaggerItem>
            )}

            {bath && (
              <StaggerItem className="col-span-2 flex items-center gap-5 rounded-[28px] bg-white p-7 ring-1 ring-line">
                <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-sky/25 text-nila">
                  <Icon name="bath" className="size-8" />
                </span>
                <div>
                  <p className="text-xl font-extrabold">{bath.label}</p>
                  <p className="text-muted">Lengkap dengan water heater untuk mandi air hangat.</p>
                </div>
              </StaggerItem>
            )}

            {rest.map((f) => (
              <StaggerItem
                key={f.label}
                className="group flex flex-col justify-between rounded-[24px] bg-white p-6 ring-1 ring-line transition-all duration-300 hover:-translate-y-1.5 hover:bg-nila hover:text-white hover:shadow-[0_20px_40px_-20px_rgb(43_76_126/0.7)] hover:ring-nila"
              >
                <Icon name={f.icon} className="size-8 text-nila transition-colors group-hover:text-sky" />
                <p className="mt-6 text-lg font-bold">{f.label}</p>
              </StaggerItem>
            ))}

            <StaggerItem className="group relative overflow-hidden rounded-[24px] bg-deep p-6 text-white">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex h-full flex-col justify-between">
                <WhatsAppIcon className="size-8 text-[#4ade80] transition-transform duration-300 group-hover:scale-110" />
                <p className="mt-6 text-lg font-bold leading-snug">Atur jadwal lihat kamar</p>
              </a>
            </StaggerItem>
          </Stagger>
        </section>

        {galleryPhotos.length > 0 && (
          <section aria-labelledby="galeri" className={`${wrap} pb-20 sm:pb-28`}>
            <Reveal>
              <h2 id="galeri" className={h2}>Lihat kamar dan lingkungannya</h2>
            </Reveal>
            <Gallery photos={galleryPhotos} />
          </section>
        )}

        <section id="harga" className="relative overflow-hidden bg-white py-20 sm:py-28">
          <div className={`${wrap} grid gap-12 md:grid-cols-2 md:items-center`}>
            <Reveal>
              <h2 className={h2}>Satu harga untuk kamar yang sudah lengkap</h2>
              <p className="mt-5 max-w-[46ch] text-lg text-muted">{kost.priceNote}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="glow-border rounded-[32px] p-8 shadow-[0_30px_60px_-30px_rgb(18_31_54/0.35)] sm:p-10">
                <p className="font-semibold text-muted">Sewa kamar</p>
                <p className="mt-1 text-[clamp(2.6rem,6vw,3.6rem)] font-extrabold leading-none tracking-[-0.04em]">
                  <CountUp to={kost.price} as="rupiah" duration={1.8} />
                </p>
                <p className="mt-2 font-semibold text-muted">per bulan</p>
                <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-line pt-7">
                  {facilities.map((f) => (
                    <li key={f.label} className="flex items-center gap-2.5 text-[0.95rem]">
                      <Icon name={f.icon} className="size-5 shrink-0 text-nila" />
                      {f.label}
                    </li>
                  ))}
                </ul>
                <WaButton label="Tanya ketersediaan kamar" className="mt-9 w-full" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className={`${wrap} py-20 sm:py-28`}>
          <Reveal>
            <h2 className={h2}>Tiga langkah mulai ngekos</h2>
          </Reveal>
          <div className="relative mt-14">
            <DrawLine className="absolute left-0 right-0 top-6 hidden h-0.5 bg-gradient-to-r from-soga via-nila to-sky md:block" />
            <ol className="relative grid gap-10 md:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <Reveal delay={0.2 + i * 0.25}>
                    <span className="grid size-12 place-items-center rounded-full bg-deep text-lg font-extrabold text-white ring-8 ring-paper">
                      {i + 1}
                    </span>
                    <p className="mt-5 text-xl font-extrabold">{s.title}</p>
                    <p className="mt-2 max-w-[34ch] text-muted">{s.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="faq" className={`${wrap} pb-20 sm:pb-28`}>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <h2 className={h2}>Pertanyaan yang sering ditanyakan</h2>
              <p className="mt-4 max-w-[38ch] text-muted">
                Pertanyaanmu belum ada di sini? Tanyakan langsung ke pemilik.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-bold text-wa underline decoration-2 underline-offset-4"
              >
                <WhatsAppIcon className="size-5" />
                Tanya lewat WhatsApp
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="divide-y divide-line overflow-hidden rounded-[28px] bg-white ring-1 ring-line">
                {faq.map((item, n) => (
                  <details key={item.q} className="faq group" open={n === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-lg font-bold transition-colors hover:text-nila sm:px-8 [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <span
                        aria-hidden="true"
                        className="grid size-8 shrink-0 place-items-center rounded-full bg-paper text-nila transition-transform duration-300 group-open:rotate-45 group-open:bg-nila group-open:text-white"
                      >
                        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <p className="faq-body px-6 pb-6 text-muted sm:px-8">{item.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="lokasi" className={`${wrap} pb-20 sm:pb-28`}>
          <Reveal>
            <div className="grid overflow-hidden rounded-[36px] bg-white ring-1 ring-line lg:grid-cols-[1fr_1.5fr]">
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <h2 className={h2}>Lokasi kost</h2>
                <p className="mt-4 max-w-[40ch] text-muted">
                  {location.address || `${kost.name}, ${kost.city}.`} Buka di Google Maps untuk rute dari tempatmu.
                </p>
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-deep px-6 py-3.5 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-nila"
                >
                  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                  Buka di Google Maps
                </a>
              </div>
              {location.embedSrc ? (
                <iframe
                  src={location.embedSrc}
                  title={`Peta lokasi ${kost.name}`}
                  className="h-80 w-full sm:h-[26rem]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="grid h-80 place-items-center bg-paper sm:h-[26rem]">
                  <span className="font-bold">Ketuk untuk membuka Google Maps</span>
                </a>
              )}
            </div>
          </Reveal>
        </section>

        <section className="relative overflow-hidden bg-deep text-white">
          <JogjaNight compact />
          <div className={`${wrap} relative py-24 text-center sm:py-32`}>
            <Reveal>
              <h2 className={`${h2} mx-auto max-w-[18ch]`}>Mau lihat kamarnya dulu?</h2>
              <p className="mx-auto mt-5 max-w-[44ch] text-lg text-white/75">
                Chat pemilik di WhatsApp {whatsapp.display} untuk atur jadwal datang.
              </p>
              <WaButton label="Chat via WhatsApp" className="mt-10" />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-deep pb-20 text-white/60 md:pb-0">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-3 py-6 text-sm`}>
          <p className="flex items-center gap-3">
            <Logo className="size-8 rounded-[9px] ring-1 ring-white/20" />
            {kost.name}, {kost.city}
          </p>
          <p>WhatsApp {whatsapp.display}</p>
        </div>
      </footer>

      <FloatingWa waLink={waLink} />
      <MobileBar waLink={waLink} price={rupiah(kost.price)} />
    </MotionProvider>
  );
}
