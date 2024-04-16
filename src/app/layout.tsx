import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patrick de Andrade Flausino",
  description:
    "Patrick de Andrade Flausino é um engenheiro de software, formado em Ciência da Computação pela Universidade Federal de Alfenas (UNIFAL-MG)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
