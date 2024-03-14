import type { Metadata } from "next";
import { montserrat } from "./fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "MiguelDev",
  description: "Portfolio de Miguel Àngel Ortiz Mora",
  twitter : {
    title:"Miguel Ortiz"
    
  },
  openGraph : {
    title:"Miguel Ortiz",
    images : [

    ]

    
    
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head >
        <meta property="og:title" content="Miguel Ortiz" />
      </head>
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  );
}
