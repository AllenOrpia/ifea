import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IFEA",
  description: "Build your dream interior through IFEA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FFFFF0] `}>
        <main className="min-h-[100vh] min-w-[100vw] relative px-20">
          <Header />
          {children}
          <Footer />
        </main>
         
        </body>
    </html>
  );
}
