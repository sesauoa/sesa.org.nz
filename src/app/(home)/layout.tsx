"use static";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
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
      <link rel="icon" href={favicon.src} />
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
