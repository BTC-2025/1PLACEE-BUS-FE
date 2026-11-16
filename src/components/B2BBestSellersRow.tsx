"use client";

import React from "react";
import Link from "next/link";
import { B2B_BEST_SELLERS } from "../data/b2bBestSellersData";

export const B2BBestSellersRow: React.FC = () => {
  return (
    <section className="w-full mt-6 select-none">
      {/* 
        Container matching the exact aspect ratio, rounded corners, and vibrant orange container 
        of the user uploaded image (1024x331).
        Users can click the whole banner or individual links.
      */}
      <div className="w-full rounded-2xl overflow-hidden shadow-md border border-orange-400/30 group relative bg-[#e85d04]">
        <img
          src="/products/bestsellers/bestsellers-banner-full.jpg"
          alt="Best Sellers - 6 Items Single Row"
          className="w-full h-auto object-cover block"
          loading="lazy"
        />

        {/* Interactive Clickable Hotspots for each of the 6 cards */}
        <div className="absolute inset-y-0 left-0 w-full flex">
          {/* Header area link (first 10%) */}
          <Link
            href="/products?collection=bestsellers"
            className="absolute top-0 left-0 w-full h-[25%] z-10 cursor-pointer"
            aria-label="View All Best Sellers"
          />

          {/* 6 Product Hotspots across the card area (starts at 3.5% width, each approx 15.5% width) */}
          <div className="absolute bottom-[8%] left-[3.5%] right-[3.5%] top-[24%] grid grid-cols-6 gap-2 z-20">
            {B2B_BEST_SELLERS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="w-full h-full rounded-xl hover:ring-2 hover:ring-white/80 transition-all cursor-pointer"
                title={`${item.title} - ${item.price}`}
                aria-label={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
