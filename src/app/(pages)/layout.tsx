"use static";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import favicon from "../../../public/favicon.ico";

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
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href={favicon.src} />
        <div className="bg-sesa-navy-dark">
          <Navigation />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
