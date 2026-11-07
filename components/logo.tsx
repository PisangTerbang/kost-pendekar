// Logo Kost Putra Pendekar: atap rumah di atas huruf P
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#121f36" />
      <path d="M12 31 32 15l20 16" fill="none" stroke="#e08a52" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 51V31h8.5a7.5 7.5 0 0 1 0 15H25" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
