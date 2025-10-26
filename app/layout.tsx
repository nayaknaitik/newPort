// app/layout.tsx
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import ScrollContainer from "@/components/layout/ScrollContainer";
import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naitik Nayak - Portfolio",
  description: "Portfolio of Naitik Nayak",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans bg-black text-white">
        <ScrollProgressBar height={4} color="#f3f3f3" />
       {children}
      </body>
    </html>
  );
}
