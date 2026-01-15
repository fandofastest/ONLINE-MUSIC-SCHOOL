import Link from "next/link";

import Container from "./Container";
import LogoMark from "./LogoMark";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/what-we-offer", label: "What We Offer" },
  {
    href: "/technology-learning-approach",
    label: "Technology & Learning Approach",
  },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-6">
          <div className="min-w-0">
            <Link href="/" className="flex items-center gap-3">
              <LogoMark className="h-9 w-9" />
              <span className="block text-sm font-semibold tracking-wide text-slate-900">
                THE ONLINE MUSIC SCHOOL LTD
              </span>
            </Link>
            <p className="mt-1 text-xs text-slate-600">
              Online music education and digital music learning
            </p>
          </div>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-5 text-sm text-slate-700">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:hidden">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
