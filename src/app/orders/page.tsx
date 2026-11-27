"use client";

import React, { useState } from "react";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { BusinessFooter } from "@/components/BusinessFooter";
import {
  Search,
  MessageSquare,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Building2,
  Package,
  ArrowLeft,
  SlidersHorizontal,
  RefreshCw,
} from "lucide-react";

interface SellerOrder {
  id: string;
  date: string;
  timeAgo: string;
  buyerName: string;
  buyerCompany: string;
  shipToAddress: string;
  fulfillment: string;
  channel: "B2B" | "B2C";
  salesChannelLabel: string;
  isBusinessCustomer: boolean;
  productTitle: string;
  asinOrHsn: string;
  sku: string;
  qty: number;
  unitPrice: string;
  subtotal: string;
  orderType: string;
  status: "Payment complete" | "Pending" | "Canceled";
  poNumber: string;
  image: string;
}

const SELLER_ORDERS: SellerOrder[] = [
  {
    id: "113-0463492-0347438",
    date: "Nov 26, 2026 • 10:15 AM",
    timeAgo: "2 hours ago",
    buyerName: "TiendaMIA Procurement",
    buyerCompany: "Xipron Inc.",
    shipToAddress: "Plot 18, Ambattur Industrial Estate, Chennai, TN - 600058",
    fulfillment: "1PLACEE Easy Ship",
    channel: "B2C",
    salesChannelLabel: "1PLACEE.in (B2C)",
    isBusinessCustomer: true,
    productTitle: "VertexPro Ergonomic Dual-Motor Standing Desk Converter | Heavy-Duty Steel Frame",
    asinOrHsn: "B07CWTT4RP",
    sku: "VP-ESD-BLK-01",
    qty: 1,
    unitPrice: "₹3,299.00",
    subtotal: "₹3,299.00",
    orderType: "Expedited",
    status: "Payment complete",
    poNumber: "PO-2026-59099",
    image: "/categories/b2b-products/presser-foot-set.png",
  },
  {
    id: "B2B-904821-IND",
    date: "Nov 25, 2026 • 04:40 PM",
    timeAgo: "1 day ago",
    buyerName: "Ramesh Kumar (Apex Apparels)",
    buyerCompany: "Apex Apparels Pvt. Ltd.",
    shipToAddress: "Tiruppur Textile Park, Tamil Nadu - 641604",
    fulfillment: "Bulk Freight Logistics",
    channel: "B2B",
    salesChannelLabel: "1PLACEE Business (B2B)",
    isBusinessCustomer: true,
    productTitle: "Wholesale 3-1/2\" Household Hand Needles & Sewing Craft Needles — Bulk Lot",
    asinOrHsn: "HSN 731940",
    sku: "SWY-NDL-20K",
    qty: 20000,
    unitPrice: "₹7.67",
    subtotal: "₹1,53,400.00",
    orderType: "Trade Assurance Escrow",
    status: "Payment complete",
    poNumber: "B2B-PO-88412",
    image: "/categories/b2b-products/hand-needles.png",
  },
  {
    id: "111-8494468-3982642",
    date: "Nov 24, 2026 • 11:01 AM",
    timeAgo: "2 days ago",
    buyerName: "Heather Enterprises",
    buyerCompany: "Heather Retail",
    shipToAddress: "Indiranagar, Bengaluru, KA - 560038",
    fulfillment: "1PLACEE FBA",
    channel: "B2C",
    salesChannelLabel: "1PLACEE.in (B2C)",
    isBusinessCustomer: false,
    productTitle: "Industrial Sewing Binder DAYU427 F522 Piping Folder for Overlock Machine",
    asinOrHsn: "B07CWRHWCX",
    sku: "DY427-F522",
    qty: 2,
    unitPrice: "₹712.41",
    subtotal: "₹1,424.82",
    orderType: "Standard",
    status: "Pending",
    poNumber: "N/A",
    image: "/categories/b2b-products/sewing-needles-set.png",
  },
];

export default function SellerManageOrdersPage() {
  const [sellerChannel, setSellerChannel] = useState<"B2B" | "B2C">("B2B");
  const [statusTab, setStatusTab] = useState<"Pending" | "All orders" | "Canceled">("All orders");
  const [showFilters, setShowFilters] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<SellerOrder | null>(null);
  const [sellerNotes, setSellerNotes] = useState("");
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  const filteredOrders = SELLER_ORDERS.filter((o) => {
    if (o.channel !== sellerChannel) return false;
    if (statusTab === "Pending" && o.status !== "Pending") return false;
    if (statusTab === "Canceled" && o.status !== "Canceled") return false;
    if (
      searchQuery.trim() &&
      !o.id.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !o.buyerName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !o.productTitle.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-slate-800">
      <BusinessNavbar />

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 py-6 space-y-5">
        {/* Toast */}
        {toastMsg && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-lg text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMsg}</span>
          </div>
        )}

        {/* =================================================================== */}
        {/* ORDER DETAILS VIEW (Image 4 - When clicking an Order ID)            */}
        {/* =================================================================== */}
        {selectedOrder ? (
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedOrder(null)}
                  style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                  className="px-4 py-2 rounded-full text-xs font-black flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Go back to order list</span>
                </button>
                <h1 className="text-base sm:text-lg font-black text-slate-900">
                  Order details{" "}
                  <span className="text-xs font-mono text-slate-500">
                    Order ID: #{selectedOrder.id}
                  </span>
                </h1>
                {selectedOrder.isBusinessCustomer && (
                  <span className="text-[10px] font-black bg-slate-200 text-slate-800 px-2 py-0.5 rounded">
                    Business customer
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => showToast(`Refund initiated for #${selectedOrder.id}`)}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs font-bold cursor-pointer"
                >
                  Refund Order
                </button>
                <button
                  type="button"
                  onClick={() => showToast(`Review request sent to ${selectedOrder.buyerName}`)}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs font-bold cursor-pointer"
                >
                  Request a Review
                </button>
              </div>
            </div>

            <div
              style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "flex-start", flexWrap: "wrap" }}
            >
              {/* Left 3 Boxes */}
              <div style={{ flex: "1 1 650px", minWidth: 0 }} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Order Summary */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-2 text-xs">
                    <h2 className="text-sm font-black text-slate-900">Order summary</h2>
                    <div className="grid grid-cols-2 gap-y-1.5">
                      <span className="text-slate-500">Ship By:</span>
                      <strong className="text-amber-700">{selectedOrder.date}</strong>
                      <span className="text-slate-500">Shipping service:</span>
                      <strong className="text-slate-800">{selectedOrder.orderType}</strong>
                      <span className="text-slate-500">Fulfillment:</span>
                      <strong className="text-slate-800">{selectedOrder.fulfillment}</strong>
                      <span className="text-slate-500">Sales channel:</span>
                      <strong className="text-slate-800">{selectedOrder.salesChannelLabel}</strong>
                    </div>
                  </div>

                  {/* Ship To */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <h2 className="text-sm font-black text-slate-900">Ship to</h2>
                      {selectedOrder.channel === "B2B" ? (
                        <button
                          type="button"
                          onClick={() => showToast(`Chat opened with ${selectedOrder.buyerName}`)}
                          className="text-[#0e0f89] font-bold hover:underline cursor-pointer flex items-center gap-1"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Contact Buyer: {selectedOrder.buyerName}</span>
                        </button>
                      ) : (
                        <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          1PLACEE Protected Buyer
                        </span>
                      )}
                    </div>
                    <p className="font-bold text-slate-800">{selectedOrder.buyerCompany}</p>
                    <p className="text-slate-600">{selectedOrder.shipToAddress}</p>
                  </div>
                </div>

                {/* More Details */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 text-xs flex flex-wrap gap-6">
                  <div>
                    <span className="text-slate-500">Buyer PO #: </span>
                    <strong className="font-mono text-slate-900">{selectedOrder.poNumber}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500">Tax Collection Model: </span>
                    <strong className="text-slate-900">1PLACEE GST Facilitator</strong>
                  </div>
                </div>

                {/* Order Contents */}
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="px-4 py-3 border-b border-slate-200 font-black text-sm text-slate-900">
                    Order contents
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                        <tr>
                          <th className="py-2.5 px-4">Status</th>
                          <th className="py-2.5 px-4">Image</th>
                          <th className="py-2.5 px-4">Product name</th>
                          <th className="py-2.5 px-4">Quantity</th>
                          <th className="py-2.5 px-4">Unit price</th>
                          <th className="py-2.5 px-4">Proceeds</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-3 px-4">
                            <span className="bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded">
                              {selectedOrder.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <img
                              src={selectedOrder.image}
                              alt={selectedOrder.productTitle}
                              className="w-12 h-12 rounded-lg object-contain border border-slate-200 p-1"
                            />
                          </td>
                          <td className="py-3 px-4 space-y-0.5 max-w-xs">
                            <p className="font-bold text-[#0e0f89]">{selectedOrder.productTitle}</p>
                            <span className="text-[11px] text-slate-500 block">
                              ID: {selectedOrder.asinOrHsn} • SKU: {selectedOrder.sku}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-bold">{selectedOrder.qty}</td>
                          <td className="py-3 px-4 font-bold">{selectedOrder.unitPrice}</td>
                          <td className="py-3 px-4 font-black text-slate-900">
                            {selectedOrder.subtotal}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right Sales Proceeds & Seller Notes */}
              <aside style={{ width: "300px", minWidth: "280px" }} className="space-y-4 shrink-0">
                <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-2 text-xs">
                  <h3 className="text-sm font-black text-slate-900">Sales proceeds</h3>
                  <div className="flex justify-between text-slate-600">
                    <span>Items total:</span>
                    <strong className="text-slate-900">{selectedOrder.subtotal}</strong>
                  </div>
                  <div className="flex justify-between text-sm font-black text-slate-900 pt-2 border-t border-slate-100">
                    <span>Grand total:</span>
                    <span>{selectedOrder.subtotal}</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-2 text-xs">
                  <h3 className="text-sm font-black text-slate-900">Seller Notes</h3>
                  <textarea
                    rows={4}
                    placeholder="For your records only, will not be displayed to the buyer."
                    value={sellerNotes}
                    onChange={(e) => setSellerNotes(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-300"
                  />
                  <button
                    type="button"
                    onClick={() => showToast("Seller note saved")}
                    style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                    className="w-full py-2 rounded-lg text-xs font-black cursor-pointer"
                  >
                    Save Note
                  </button>
                </div>
              </aside>
            </div>
          </div>
        ) : (
          /* ================================================================= */
          /* MAIN SELLER MANAGE ORDERS VIEW (Images 1, 2, 3)                   */
          /* ================================================================= */
          <>
            {/* Top Seller Header + B2B / B2C Switcher */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-lg sm:text-xl font-black text-slate-900">
                  Seller Manage Orders &amp; Buyer Inquiries
                </h1>
                <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  Replying to buyer inquiries within 4 hours helps close B2B &amp; B2C deals faster.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setSellerChannel("B2B")}
                  style={
                    sellerChannel === "B2B"
                      ? { backgroundColor: "#0e0f89", color: "#ffffff" }
                      : { backgroundColor: "transparent", color: "#64748b", opacity: 0.65 }
                  }
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-black transition cursor-pointer"
                >
                  <Building2 className="w-4 h-4" />
                  <span>B2B Seller Orders</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSellerChannel("B2C")}
                  style={
                    sellerChannel === "B2C"
                      ? { backgroundColor: "#0e0f89", color: "#ffffff" }
                      : { backgroundColor: "transparent", color: "#64748b", opacity: 0.65 }
                  }
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-black transition cursor-pointer"
                >
                  <Package className="w-4 h-4" />
                  <span>B2C Seller Orders</span>
                </button>
              </div>
            </div>

            {/* Tabs + Search Bar */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
              <div className="px-5 pt-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-6">
                  {(["Pending", "All orders", "Canceled"] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setStatusTab(tab)}
                      className={`pb-3 text-xs sm:text-sm font-bold border-b-2 cursor-pointer transition ${
                        statusTab === tab
                          ? "border-[#0e0f89] text-[#0e0f89] font-black"
                          : "border-transparent text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 pb-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Order ID, Buyer or Product..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 w-56 focus:outline-none focus:border-[#0e0f89]"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowFilters(!showFilters)}
                    className="px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => showToast("Orders refreshed")}
                    className="p-1.5 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50 cursor-pointer"
                    title="Refresh"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Left Refine Sidebar + Right Orders Table */}
              <div
                style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}
                className="w-full"
              >
                {showFilters && (
                  <aside
                    style={{ width: "220px", minWidth: "220px" }}
                    className="p-4 border-r border-slate-200 bg-slate-50/50 space-y-4 shrink-0 hidden md:block text-xs"
                  >
                    <span className="font-black text-slate-900 block">Refine by:</span>
                    <div className="space-y-1.5">
                      <span className="font-bold text-slate-700 block">Sales channel</span>
                      <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                        <input type="checkbox" defaultChecked className="accent-[#0e0f89]" />
                        <span>1PLACEE Business</span>
                      </label>
                      <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                        <input type="checkbox" defaultChecked className="accent-[#0e0f89]" />
                        <span>1PLACEE Retail</span>
                      </label>
                    </div>
                    <div className="space-y-1.5 pt-2 border-t border-slate-200">
                      <span className="font-bold text-slate-700 block">Order type</span>
                      <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                        <input type="checkbox" className="accent-[#0e0f89]" />
                        <span>Subscribe &amp; Save</span>
                      </label>
                      <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                        <input type="checkbox" defaultChecked className="accent-[#0e0f89]" />
                        <span>Business customer</span>
                      </label>
                    </div>
                  </aside>
                )}

                <div style={{ flex: 1, minWidth: 0 }} className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-600 border-b border-slate-200 font-bold">
                      <tr>
                        <th className="py-3 px-4">Order date</th>
                        <th className="py-3 px-4">Order details</th>
                        <th className="py-3 px-4">Image</th>
                        <th className="py-3 px-4">Product name</th>
                        <th className="py-3 px-4">Order type</th>
                        <th className="py-3 px-4">Order Status</th>
                        <th className="py-3 px-4">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {filteredOrders.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-10 text-center text-slate-500">
                            No orders found in this view.
                          </td>
                        </tr>
                      ) : (
                        filteredOrders.map((order) => (
                          <tr key={order.id} className="hover:bg-slate-50/50">
                            <td className="py-4 px-4 align-top whitespace-nowrap">
                              <strong className="text-slate-900 block">{order.timeAgo}</strong>
                              <span className="text-[11px] text-slate-500">{order.date}</span>
                            </td>
                            <td className="py-4 px-4 align-top space-y-1">
                              <button
                                type="button"
                                onClick={() => setSelectedOrder(order)}
                                className="font-mono font-bold text-[#0e0f89] hover:underline cursor-pointer block text-left"
                              >
                                {order.id}
                              </button>
                              <span className="text-[11px] text-slate-600 block">
                                Buyer: <strong>{order.buyerName}</strong>
                              </span>
                              <span className="text-[11px] text-slate-500 block">
                                {order.fulfillment} • {order.salesChannelLabel}
                              </span>
                              {order.isBusinessCustomer && (
                                <span className="inline-block text-[10px] font-bold bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded">
                                  Business customer
                                </span>
                              )}
                            </td>
                            <td className="py-4 px-4 align-top">
                              <img
                                src={order.image}
                                alt={order.productTitle}
                                className="w-12 h-12 rounded-lg object-contain border border-slate-200 p-1 bg-white"
                              />
                            </td>
                            <td className="py-4 px-4 align-top max-w-xs space-y-1">
                              <button
                                type="button"
                                onClick={() => setSelectedOrder(order)}
                                className="font-bold text-[#0e0f89] hover:underline text-left cursor-pointer line-clamp-2"
                              >
                                {order.productTitle}
                              </button>
                              <span className="text-[11px] text-slate-500 block">
                                ID: {order.asinOrHsn} • SKU: {order.sku}
                              </span>
                              <span className="text-[11px] text-slate-700 font-semibold block">
                                Qty: {order.qty} • Subtotal: <strong>{order.subtotal}</strong>
                              </span>
                            </td>
                            <td className="py-4 px-4 align-top font-bold text-slate-800">
                              {order.orderType}
                            </td>
                            <td className="py-4 px-4 align-top">
                              <span
                                className={`inline-block text-[10px] font-black px-2 py-0.5 rounded text-white ${
                                  order.status === "Payment complete"
                                    ? "bg-emerald-600"
                                    : "bg-amber-500"
                                }`}
                              >
                                {order.status}
                              </span>
                            </td>
                            <td className="py-4 px-4 align-top space-y-1.5">
                              <button
                                type="button"
                                onClick={() => setSelectedOrder(order)}
                                style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                                className="w-full px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer"
                              >
                                Order Details
                              </button>
                              {order.channel === "B2B" ? (
                                <button
                                  type="button"
                                  onClick={() => showToast(`Buyer chat opened for ${order.id}`)}
                                  className="w-full px-3 py-1 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-[11px] font-bold text-slate-700 cursor-pointer"
                                >
                                  Message Buyer
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => showToast(`Refund initiated for ${order.id}`)}
                                  className="w-full px-3 py-1 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-[11px] font-bold text-slate-700 cursor-pointer"
                                >
                                  Refund Order
                                </button>
                              )}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      <BusinessFooter />
    </div>
  );
}
