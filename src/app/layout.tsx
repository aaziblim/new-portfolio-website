import type { Metadata } from "next";
import { Inter, Calistoga, Manrope } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});
const siteUrl = "https://abdulaziz-ziblim.vercel.app"; // Update this with your actual domain

export const metadata: Metadata = {
  // Basic SEO
  title: {
    default: "Abdul-Aziz Ziblim | Full-Stack Developer & Mobile Engineer",
    template: "%s | Abdul-Aziz Ziblim",
  },
  description: "Full-Stack Developer & Mobile Engineer based in Ghana. I build modern web and mobile applications with React, Next.js, React Native, and Python/Django. Available for freelance projects.",
  keywords: [
    "Abdul-Aziz Ziblim",
    "Full-Stack Developer",
    "Mobile Engineer",
    "React Developer",
    "Next.js Developer",
    "Django Developer",
    "React Native Developer",
    "Ghana Developer",
    "Kumasi Developer",
    "Web Developer Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Abdul-Aziz Ziblim", url: siteUrl }],
  creator: "Abdul-Aziz Ziblim",

  // Favicon & Icons
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Abdul-Aziz Ziblim Portfolio",
    title: "Abdul-Aziz Ziblim | Full-Stack Developer & Mobile Engineer",
    description: "Full-Stack Developer & Mobile Engineer. I build modern web and mobile applications with React, Next.js, React Native, and Python/Django.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Abdul-Aziz Ziblim - Full-Stack Developer",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Abdul-Aziz Ziblim | Full-Stack Developer",
    description: "Full-Stack Developer & Mobile Engineer. Building modern web and mobile applications.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@azizjibril", // Update with your Twitter handle if you have one
  },

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add your verification codes when you have them)
  // verification: {
  //   google: "your-google-verification-code",
  // },

  // Other
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for rich search results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdul-Aziz Ziblim",
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
    jobTitle: "Full-Stack Developer & Mobile Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kumasi",
      addressCountry: "Ghana",
    },
    email: "azizmeltzer@gmail.com",
    sameAs: [
      "https://github.com/aaziblim",
      "https://www.linkedin.com/in/azizjibril",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "React Native",
      "Python",
      "Django",
      "TypeScript",
      "JavaScript",
      "Full-Stack Development",
      "Mobile App Development",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={twMerge(
          "bg-gray-900 text-white antialiased font-sans",
          inter.variable,
          calistoga.variable,
          manrope.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
