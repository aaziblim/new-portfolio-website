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
export const metadata: Metadata = {
  title: "Abdul-Aziz Ziblim | Full-Stack Developer",
  description: "Full-Stack Developer & Mobile Engineer. I build modern web and mobile applications with React, Next.js, React Native, and Python/Django.",
  keywords: ["Abdul-Aziz Ziblim", "Full-Stack Developer", "Mobile Engineer", "React", "Next.js", "Django", "portfolio"],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
