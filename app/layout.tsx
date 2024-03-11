import type { Metadata } from "next";
import { montserrat } from "./fonts/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "MiguelDev",
  description: "Portfolio de Miguel Àngel Ortiz Mora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  );
}
