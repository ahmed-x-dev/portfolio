import "./globals.css";
import { Fraunces, Work_Sans, JetBrains_Mono } from "next/font/google";

import BackgroundEffects from "@/components/effects/BackgroundEffects";

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
        {children}
      </body>
    </html>
  );
}
