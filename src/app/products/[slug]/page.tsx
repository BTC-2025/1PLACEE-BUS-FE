import React from "react";
import { Metadata } from "next";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { B2CProductDetailClient } from "./B2CProductDetailClient";

export const metadata: Metadata = {
  title: "Apple iPhone 18 Pro (Desert Titanium, 256GB) - 1PLACEE Business B2C Store",
  description: "Buy Apple iPhone 18 Pro online at 1PLACEE. Exclusive GST benefits, verified supplier invoice, fast delivery, and EMI options available.",
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return (
    <div className="min-h-screen bg-[#f5f6f9] text-slate-800 font-sans">
      <BusinessNavbar />
      <main className="w-full">
        <B2CProductDetailClient slug={resolvedParams.slug} />
      </main>
    </div>
  );
}

