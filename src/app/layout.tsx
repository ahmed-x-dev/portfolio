import "./globals.css";
import { Fraunces, Work_Sans, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import BackgroundEffects from "@/components/effects/BackgroundEffects";
import type { Metadata } from "next";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Ahmed Faisal — Full-Stack Developer",
  description:
    "Ahmed Faisal's developer portfolio — showcasing projects, skills, and experience in Next.js, React, TypeScript, Python, and FastAPI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body>
        <BackgroundEffects />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
