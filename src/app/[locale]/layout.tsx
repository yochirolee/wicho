import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const metadataByLocale = {
    es: {
      title: "Servicios de Jardinería en Sarasota - Wicho Landscaping | Diseño, Césped, Riego",
      description: "Expertos en jardinería en Sarasota. Diseño de jardines, mulch, césped, iluminación y riego.",
      keywords: [
        "jardinería Sarasota",
        "diseño de jardines Sarasota",
        "instalación de mulch Sarasota",
        "mantenimiento de jardines Sarasota",
        "corte y siembra de césped Sarasota",
        "iluminación de jardines",
        "sistema de riego para jardines Sarasota ",
      ],
      alternates: {
        languages: {
          en: "/en",
        },
      },
      openGraph: {
        title: "Servicios de Jardinería en Sarasota - Wicho Landscaping",
        description: "Expertos en jardinería en Sarasota. Diseño de jardines, mulch, césped, iluminación y riego.",
        url: "https://wicho.vercel.app/",
        siteName: "Wicho Landscaping",
        images: [
          {
            url: "https://wicho.vercel.app/logoWicho1.png",
            width: 1200,
            height: 630,
          },
        ],
        locale: "es_ES",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Servicios de Jardinería en Sarasota - Wicho Landscaping",
        description: "Expertos en jardinería en Sarasota. Diseño de jardines, mulch, césped, iluminación y riego.",
        images: ["https://wicho.vercel.app/logoWicho1.png"],
      },
    },
    en: {
      title: "Landscaping Services in Sarasota - Wicho Landscaping | Garden Design & Irrigation",
      description: "Landscaping experts in Sarasota. Garden design, mulch installation, lawn care, lighting, and irrigation systems.",
      keywords: [
        "landscaping Sarasota",
        "garden design Sarasota",
        "mulch installation Sarasota",
        "lawn care and planting Sarasota",
        "irrigation systems for gardens",
        "garden lighting sarasota",
        "garden mainteinance Sarasota",
        "outdoor garden lighting Sarasota",
      ],
      alternates: {
        languages: {
          es: "/",
        },
      },
      openGraph: {
        title: "Landscaping Services in Sarasota - Wicho Landscaping",
        description: "Landscaping experts in Sarasota. Garden design, mulch installation, lawn care, lighting, and irrigation systems.",
        url: "https://wicho.vercel.app/",
        siteName: "Wicho Landscaping",
        images: [
          {
            url: "https://wicho.vercel.app/logoWicho1.png",
            width: 1200,
            height: 630,
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Landscaping Services in Sarasota - Wicho Landscaping",
        description: "Landscaping experts in Sarasota...",
        images: ["https://wicho.vercel.app/logoWicho1.png"],
      },
    },
  };

  return metadataByLocale[locale as "es" | "en"];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;  // params es una promesa
}) {
  const { locale } = await params;  // espera la promesa

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}