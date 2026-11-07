import type { IconName } from "@/lib/data";

const paths: Record<IconName, React.ReactNode> = {
  wifi: (
    <>
      <path d="M2 9a15 15 0 0 1 20 0" />
      <path d="M5 12.5a10 10 0 0 1 14 0" />
      <path d="M8.5 16a5 5 0 0 1 7 0" />
      <circle cx="12" cy="19.5" r="1" fill="currentColor" />
    </>
  ),
  ac: (
    <>
      <rect x="2.5" y="4" width="19" height="9" rx="2" />
      <path d="M6 10h12" />
      <path d="M8 16.5c0 1.5-1 2-1 3.5M12 16.5c0 1.5-1 2-1 3.5M16 16.5c0 1.5-1 2-1 3.5" />
    </>
  ),
  heater: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="3" />
      <path d="M12 8c-1.5 2-2 3-2 4.2a2 2 0 0 0 4 0C14 11 13.5 10 12 8Z" />
      <path d="M9 18h6" />
    </>
  ),
  bath: (
    <>
      <path d="M3 12h18v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-2Z" />
      <path d="M6 12V5.5a2 2 0 0 1 3.7-1" />
      <path d="M7 19l-1 2M17 19l1 2" />
    </>
  ),
  bed: (
    <>
      <path d="M3 18V7M21 18v-5a3 3 0 0 0-3-3h-7v6" />
      <path d="M3 15h18" />
      <rect x="5" y="10" width="4" height="3" rx="1" />
    </>
  ),
  wardrobe: (
    <>
      <rect x="4.5" y="2.5" width="15" height="17" rx="1.5" />
      <path d="M12 2.5v17M10 10v2M14 10v2M6 19.5V21.5M18 19.5V21.5" />
    </>
  ),
  desk: (
    <>
      <path d="M2.5 8h19" />
      <path d="M4 8v12M20 8v12" />
      <path d="M14 8v6h6" />
      <path d="M8 8V4.5h4V8" />
    </>
  ),
  tv: (
    <>
      <rect x="2.5" y="5" width="19" height="12" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  parking: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9.5 17V7h3.5a3 3 0 0 1 0 6H9.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}
