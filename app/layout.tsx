import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "The Acumen Arc | Strategic Digital Partner",
  description:
    "We build brands that inspire and convert. Web development, marketing, consulting, and high-performance digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* FIX: Applying overflow-x-hidden directly to the body class */}
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-slate-700 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}