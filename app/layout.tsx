import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundAccents from "./components/BackgroundAccents";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "THE ONLINE MUSIC SCHOOL LTD",
    template: "%s | THE ONLINE MUSIC SCHOOL LTD",
  },
  description:
    "THE ONLINE MUSIC SCHOOL LTD is a UK-based education company focused on online music education and digital music learning.",
  applicationName: "THE ONLINE MUSIC SCHOOL LTD",
  verification: {
    google: "iEHLni3XPNPeXarPAB71Zt7zfRRKqt80Nxdp34B8pBQ",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        <div className="min-h-dvh flex flex-col relative">
          <BackgroundAccents />
          <div className="relative z-10 flex min-h-dvh flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
