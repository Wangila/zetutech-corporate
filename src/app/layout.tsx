import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "ZetuTech LLC engineers high-fidelity platforms and multi-sided marketplaces designed for absolute data integrity and verifiable human execution. Based in Somerset, NJ.";

export const metadata: Metadata = {
  title: {
    default: "ZetuTech LLC | Architecting Trust in the Digital Economy",
    template: "%s | ZetuTech LLC",
  },
  description,
  applicationName: "ZetuTech LLC",
  authors: [{ name: "ZetuTech LLC" }],
  openGraph: {
    type: "website",
    siteName: "ZetuTech LLC",
    title: "ZetuTech LLC | Architecting Trust in the Digital Economy",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZetuTech LLC | Architecting Trust in the Digital Economy",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-950 font-sans text-slate-50 selection:bg-amber-500 selection:text-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-amber-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
