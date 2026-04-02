import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Matheus Audibert",
  description: "Intern Software Engineer",
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  openGraph: {
    title: "Matheus Audibert",
    description: "Intern Software Engineer",
    images: [{ url: "https://i.postimg.cc/QxNf6tMw/preview.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Audibert",
    description: "Intern Software Engineer",
    images: ["https://i.postimg.cc/QxNf6tMw/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
