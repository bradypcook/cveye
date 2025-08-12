import type { Metadata } from "next";
import { Inter , JetBrains_Mono } from "next/font/google";
import "./globals.css";

const basePath = process.env.NODE_ENV === 'production' ? '/cveye' : '';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'CVEye',
    template: 'CVEye',
  },
  description: "Welcome to CYEve, where searching for CVEs has never been easier!",
  icons: {
    icon: `${basePath}/yellow_eye.ico`,
  },
  openGraph: {
    description: "Dive into real-time and historical Formula 1 stats, all in one place.",
    url: 'https://bradypcook.github.io/cveye',
    siteName: 'CVEye',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
