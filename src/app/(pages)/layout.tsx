"use static";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Software Engineering Students Association",
  description:
    "SESA is the association for students and alumni of the Software Engineering programme at the University of Auckland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="sesaTheme">
      <body className={inter.className}>
        <div className="bg-primary">
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
