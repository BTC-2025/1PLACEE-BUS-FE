import type { Metadata } from "next";
import "./globals.css";
import "./tailwind.css";

export const metadata: Metadata = {
  title: "1PLACEE Business - Universal Multi-Vendor B2B & B2C Marketplace",
  description: "Wholesale bulk hub with volume price slabs, verified GST tax invoicing, Input Tax Credit (ITC) & verified merchant selling.",
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
