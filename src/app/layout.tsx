import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Providers } from "./providers";
import { SiteShell } from "@/components/chrome/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.url),
  title: {
    default: site.seo.title,
    template: `%s · ${site.person.name}`,
  },
  description: site.seo.description,
  keywords: [...site.seo.keywords],
  authors: [{ name: site.person.name, url: site.seo.url }],
  openGraph: {
    title: site.seo.ogTitle,
    description: site.seo.ogDescription,
    url: site.seo.url,
    siteName: site.person.name,
    locale: site.seo.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.ogTitle,
    description: site.seo.ogDescription,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.seo.url },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-bg text-fg">
        <JsonLd />
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  );
}
