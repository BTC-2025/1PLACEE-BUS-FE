import type { Metadata } from "next";
import "./globals.css";
import "./tailwind.css";

export const metadata: Metadata = {
  title: "1PLACEE Business - Universal Multi-Vendor B2B & B2C Marketplace",
  description: "Wholesale bulk hub with volume price slabs, verified GST tax invoicing, Input Tax Credit (ITC) & verified merchant selling.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png?v=6", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=6", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png?v=6", type: "image/png" },
      { url: "/icon.png?v=6", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=6",
    apple: "/apple-touch-icon.png?v=6",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=6" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=6" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=6" />
        <link rel="shortcut icon" href="/favicon.ico?v=6" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=6" />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
