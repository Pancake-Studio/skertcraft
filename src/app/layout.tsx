import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AOSProvider } from "@/components/aos/aos";
import { Providers } from "./providers";
import CursorTail from '@/components/custom/curserTail';
import { Toaster } from 'sonner'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const lineSans = localFont({
  src: "./fonts/LINESeedSansTH_W_Rg.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const pixellet = localFont({
  src: "./fonts/pixellet.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const ZFTERMIN = localFont({
  src: "./fonts/ZFTERMIN.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SkertCraft Network",
  description: "A new minecraft server",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lineSans.className} dark:bg-[#121212] bg-white `}>
        <Providers>
          <Toaster richColors />
          <AOSProvider>
            {children}
            <CursorTail />
          </AOSProvider>
        </Providers>
      </body>
    </html>
  );
}