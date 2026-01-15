export default function BackgroundAccents() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -top-28 left-1/2 h-72 w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-r from-slate-50 via-sky-50 to-white blur-2xl" />
      <div className="absolute top-24 left-[-220px] h-80 w-[900px] -rotate-6 rounded-full bg-gradient-to-r from-white via-slate-50 to-sky-50 blur-2xl" />
      <div className="absolute -bottom-40 right-[-260px] h-96 w-[980px] rotate-12 rounded-full bg-gradient-to-r from-white via-slate-50 to-sky-50 blur-2xl" />
      <div className="absolute bottom-10 left-1/2 h-64 w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-50 via-white to-slate-50 blur-2xl" />

      <svg
        className="absolute inset-x-0 top-0 h-[520px] w-full opacity-[0.095]"
        viewBox="0 0 1200 520"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="line" x1="0" y1="0" x2="1200" y2="0">
            <stop offset="0" stopColor="#0f172a" stopOpacity="0" />
            <stop offset="0.2" stopColor="#0f172a" stopOpacity="0.55" />
            <stop offset="0.8" stopColor="#0ea5e9" stopOpacity="0.55" />
            <stop offset="1" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineSoft" x1="0" y1="0" x2="0" y2="520">
            <stop offset="0" stopColor="#0f172a" stopOpacity="0.12" />
            <stop offset="0.7" stopColor="#0ea5e9" stopOpacity="0.08" />
            <stop offset="1" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
          <pattern id="staff" width="18" height="18" patternUnits="userSpaceOnUse">
            <path d="M0 4H18" stroke="#0f172a" strokeOpacity="0.35" />
            <path d="M0 8H18" stroke="#0f172a" strokeOpacity="0.35" />
            <path d="M0 12H18" stroke="#0f172a" strokeOpacity="0.35" />
          </pattern>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#0f172a" fillOpacity="0.22" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="1200" height="520" fill="url(#staff)" />
        <rect x="0" y="0" width="1200" height="520" fill="url(#dots)" opacity="0.28" />

        <path d="M0 110C220 70 420 160 640 110s420-120 560-80" fill="none" stroke="url(#line)" strokeWidth="1.25" />
        <path d="M0 170C220 130 420 220 640 170s420-120 560-80" fill="none" stroke="url(#line)" strokeWidth="1.25" />
        <path d="M0 230C220 190 420 280 640 230s420-120 560-80" fill="none" stroke="url(#line)" strokeWidth="1.25" />
        <path d="M0 290C220 250 420 340 640 290s420-120 560-80" fill="none" stroke="url(#line)" strokeWidth="1.25" />
        <path d="M0 350C220 310 420 400 640 350s420-120 560-80" fill="none" stroke="url(#line)" strokeWidth="1.25" />

        <path
          d="M-40 40 L1240 40"
          stroke="url(#lineSoft)"
          strokeWidth="1"
          opacity="0.35"
        />
        <path
          d="M-40 470 L1240 470"
          stroke="url(#lineSoft)"
          strokeWidth="1"
          opacity="0.35"
        />
      </svg>

      <svg
        className="absolute inset-x-0 bottom-0 h-[340px] w-full opacity-[0.07]"
        viewBox="0 0 1200 340"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="diag" x1="0" y1="340" x2="1200" y2="0">
            <stop offset="0" stopColor="#0f172a" stopOpacity="0" />
            <stop offset="0.35" stopColor="#0f172a" stopOpacity="0.45" />
            <stop offset="0.75" stopColor="#0ea5e9" stopOpacity="0.45" />
            <stop offset="1" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 280C260 220 420 340 640 280s420-120 560-80" fill="none" stroke="url(#diag)" strokeWidth="1.2" />
        <path d="M0 310C260 250 420 370 640 310s420-120 560-80" fill="none" stroke="url(#diag)" strokeWidth="1.2" />
      </svg>
    </div>
  );
}
