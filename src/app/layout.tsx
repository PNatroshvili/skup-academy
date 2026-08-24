import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/lib/content";

// One strong Georgian type family, several weights — display, heading,
// body and label all come from the same face, per the brief's typography
// principle ("do not use too many fonts").
const georgian = Noto_Sans_Georgian({
  variable: "--font-georgian",
  subsets: ["georgian", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.meta.url),
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  keywords: [...siteContent.meta.keywords],
  authors: [{ name: siteContent.nav.brand }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ka_GE",
    url: siteContent.meta.url,
    siteName: siteContent.nav.brand,
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: [{ url: siteContent.meta.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: [siteContent.meta.ogImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteContent.nav.brand,
    url: siteContent.meta.url,
    image: `${siteContent.meta.url}${siteContent.meta.ogImage}`,
    description: siteContent.meta.description,
    telephone: siteContent.contact.phone,
    areaServed: { "@type": "City", name: "Tbilisi" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tbilisi",
      addressCountry: "GE",
    },
    sameAs: [siteContent.contact.facebook],
    hasCourse: {
      "@type": "Course",
      name: siteContent.course.title,
      description: siteContent.course.description,
      provider: {
        "@type": "EducationalOrganization",
        name: siteContent.nav.brand,
      },
    },
  };

  return (
    <html lang="ka" className={`${georgian.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-bg text-fg">{children}</body>
    </html>
  );
}
