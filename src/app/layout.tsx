import type { Metadata } from "next";
import "./globals.css";
import "./tailwind.css";

export const metadata: Metadata = {
  title: "B2BMarket - Global Wholesale & Manufacturers",
  description: "Source millions of products from verified suppliers worldwide. High quality, low MOQ, factory prices.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
