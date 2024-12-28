import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AOSProvider } from "@/components/aos/aos";
import { Providers } from "./providers";
import CursorTail from '@/components/custom/curserTail';
import { Toaster } from 'sonner'
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const lineSans = localFont({
  src: "./fonts/LINESeedSansTH_W_Rg.woff",
  variable: "--font-line-sans",
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
      <body className={`${lineSans.className} dark:bg-gradient-to-b bg-gray-100 dark:bg-[#09090b] dark:to-transparent dark:from-orange-950/30`}>
        <Providers>
          <Toaster richColors />
          <AOSProvider>
            <div className="fixed top-0 z-[60] w-full">
              <div className="relative w-full bg-white dark:bg-black py-1 bg-opacity-[70%] dark:bg-opacity-[40%] backdrop-blur-md border-b-1 dark:border-b-0 border-gray-300">
                <div className="max-w-7xl mx-auto flex justify-center items-center px-4 md:px-6 lg:px-8">
                  <Navbar />
                </div>
              </div>
            </div>
            <div className=" mt-16">
              {children}
              <Footer />
            </div>
            <CursorTail />
          </AOSProvider>
        </Providers>
      </body>
    </html>
  );
}