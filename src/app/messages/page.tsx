"use client";

import React, { useState } from "react";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { BusinessFooter } from "@/components/BusinessFooter";
import { AuthGuardGate } from "@/components/AuthGuardGate";
import {
  MessageSquare,
  Search,
  Send,
  ShieldCheck,
  CheckCheck,
  Clock,
  Circle,
} from "lucide-react";

interface MessageThread {
  id: string;
  supplierName: string;
  company: string;
  productRef: string;
  unread: boolean;
  time: string;
  messages: { sender: "buyer" | "supplier"; text: string; time: string }[];
}

const INITIAL_THREADS: MessageThread[] = [
  {
    id: "msg-1",
    supplierName: "Dongyang Huisidun",
    company: "Dongyang Huisidun Import & Export Co.",
    productRef: "Industrial Sewing Binder DAYU427 F522",
    unread: true,
    time: "10:42 AM",
    messages: [
      {
        sender: "buyer",
        text: "Hi, what is your best FOB price for 500 pieces with custom logo?",
        time: "10:30 AM",
      },
      {
        sender: "supplier",
        text: "Hello Vinothkumar! For 500 pcs with laser logo, we can offer ₹645.91/pc. Lead time is 10 days.",
        time: "10:42 AM",
      },
    ],
  },
  {
    id: "msg-2",
    supplierName: "Apex Craft Tools",
    company: "Apex Craft Tools Pvt. Ltd.",
    productRef: "Wholesale 3-1/2\" Household Hand Needles",
    unread: true,
    time: "Yesterday",
    messages: [
      {
        sender: "supplier",
        text: "Your sample kit (25pcs/bag) has been dispatched via BlueDart. Tracking ID: BD904821.",
        time: "Yesterday",
      },
    ],
  },
  {
    id: "msg-3",
    supplierName: "VertexPro Solutions",
    company: "VertexPro Commercial Furniture",
    productRef: "Dual-Motor Standing Desk VP-ESD-900",
    unread: false,
    time: "Nov 24",
    messages: [
      {
        sender: "buyer",
        text: "Please share the BIFMA certificate and GST invoice copy.",
        time: "Nov 24",
      },
      {
        sender: "supplier",
        text: "Attached! Thank you for your repeat business.",
        time: "Nov 24",
      },
    ],
  },
];

export default function MessagesPage() {
  const [threads, setThreads] = useState<MessageThread[]>(INITIAL_THREADS);
  const [activeId, setActiveId] = useState<string>(INITIAL_THREADS[0].id);
  const [filterTab, setFilterTab] = useState<"all" | "unread" | "read">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [replyText, setReplyText] = useState("");

  const unreadCount = threads.filter((t) => t.unread).length;

  const filteredThreads = threads.filter((t) => {
    if (filterTab === "unread" && !t.unread) return false;
    if (filterTab === "read" && t.unread) return false;
    if (
      searchQuery.trim() &&
      !t.supplierName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !t.productRef.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const activeThread = threads.find((t) => t.id === activeId) || threads[0];

  const handleSelectThread = (id: string) => {
    setActiveId(id);
    setThreads((prev) =>
      prev.map((t) => (t.id === id ? { ...t, unread: false } : t))
    );
  };

  const handleToggleUnread = (id: string) => {
    setThreads((prev) =>
      prev.map((t) => (t.id === id ? { ...t, unread: !t.unread } : t))
    );
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !activeThread) return;
    setThreads((prev) =>
      prev.map((t) =>
        t.id === activeThread.id
          ? {
              ...t,
              unread: false,
              time: "Just now",
              messages: [
                ...t.messages,
                { sender: "buyer", text: replyText.trim(), time: "Just now" },
              ],
            }
          : t
      )
    );
    setReplyText("");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-slate-800">
      <BusinessNavbar />

      <AuthGuardGate
        title="B2B Message Center"
        description="Please sign in to view your supplier negotiations, read/unread inquiries, and chat history."
      >
        <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 py-6 space-y-5">
          {/* Header */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              >
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-black text-slate-900">
                  Message Center
                </h1>
                <p className="text-xs text-slate-500">
                  Direct B2B supplier negotiations &amp; order inquiries
                </p>
              </div>
            </div>

            {/* Read / Unread Filter Pills */}
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-black">
              {(
                [
                  { id: "all", label: `All (${threads.length})` },
                  { id: "unread", label: `Unread (${unreadCount})` },
                  { id: "read", label: `Read (${threads.length - unreadCount})` },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilterTab(tab.id)}
                  style={
                    filterTab === tab.id
                      ? { backgroundColor: "#0e0f89", color: "#ffffff" }
                      : { backgroundColor: "transparent", color: "#475569" }
                  }
                  className="px-3.5 py-1.5 rounded-lg cursor-pointer transition"
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Split-Pane Inbox */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              minHeight: "540px",
            }}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
          >
            {/* Left Thread List */}
            <aside
              style={{ width: "340px", minWidth: "280px", borderRight: "1px solid #e2e8f0" }}
              className="flex flex-col bg-slate-50/40 shrink-0"
            >
              <div className="p-3 border-b border-slate-200">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search supplier or product..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#0e0f89]"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto divide-y divide-slate-200/70">
                {filteredThreads.length === 0 ? (
                  <div className="p-8 text-center text-xs text-slate-400">
                    No messages in this filter.
                  </div>
                ) : (
                  filteredThreads.map((t) => {
                    const isActive = t.id === activeThread?.id;
                    const lastMsg = t.messages[t.messages.length - 1];
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => handleSelectThread(t.id)}
                        style={{
                          backgroundColor: isActive ? "#eff6ff" : t.unread ? "#ffffff" : "transparent",
                          borderLeft: isActive ? "4px solid #0e0f89" : "4px solid transparent",
                        }}
                        className="w-full text-left p-4 hover:bg-blue-50/40 transition cursor-pointer space-y-1"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="flex items-center gap-1.5 text-xs font-black text-slate-900 truncate">
                            {t.unread && (
                              <Circle className="w-2.5 h-2.5 fill-[#0e0f89] text-[#0e0f89] shrink-0" />
                            )}
                            {t.supplierName}
                          </span>
                          <span className="text-[10px] text-slate-400 shrink-0">{t.time}</span>
                        </div>
                        <span className="text-[11px] font-semibold text-[#0e0f89] block truncate">
                          {t.productRef}
                        </span>
                        <p
                          className={`text-xs truncate ${
                            t.unread ? "font-bold text-slate-800" : "text-slate-500"
                          }`}
                        >
                          {lastMsg?.text}
                        </p>
                      </button>
                    );
                  })
                )}
              </div>
            </aside>

            {/* Right Active Chat */}
            <div style={{ flex: 1, minWidth: 0 }} className="flex flex-col bg-white">
              {activeThread ? (
                <>
                  {/* Chat Header */}
                  <div className="px-5 py-3.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 bg-slate-50/60">
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-sm font-black text-slate-900">
                          {activeThread.company}
                        </strong>
                        <span className="inline-flex items-center gap-1 text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <ShieldCheck className="w-3 h-3" />
                          Verified
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 block">
                        Regarding: {activeThread.productRef}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleUnread(activeThread.id)}
                      className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-[11px] font-bold text-slate-700 cursor-pointer"
                    >
                      {activeThread.unread ? "Mark as Read" : "Mark as Unread"}
                    </button>
                  </div>

                  {/* Messages Feed */}
                  <div className="flex-1 p-5 space-y-4 overflow-y-auto bg-[#f8fafc]/60">
                    {activeThread.messages.map((m, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col max-w-[75%] ${
                          m.sender === "buyer" ? "ml-auto items-end" : "mr-auto items-start"
                        }`}
                      >
                        <div
                          style={
                            m.sender === "buyer"
                              ? { backgroundColor: "#0e0f89", color: "#ffffff" }
                              : { backgroundColor: "#ffffff", color: "#1e293b" }
                          }
                          className="px-4 py-2.5 rounded-2xl text-xs leading-relaxed shadow-2xs border border-slate-200/70"
                        >
                          {m.text}
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5" />
                          {m.time}
                          {m.sender === "buyer" && <CheckCheck className="w-3 h-3 text-[#0e0f89]" />}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Reply Input */}
                  <form
                    onSubmit={handleSendReply}
                    className="p-4 border-t border-slate-200 flex items-center gap-3 bg-white"
                  >
                    <input
                      type="text"
                      placeholder="Write your reply to supplier..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      className="flex-1 px-4 py-2.5 text-xs rounded-full border border-slate-300 focus:outline-none focus:border-[#0e0f89]"
                    />
                    <button
                      type="submit"
                      style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
                      className="px-5 py-2.5 rounded-full text-xs font-black flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-xs text-slate-400">
                  Select a conversation to view messages
                </div>
              )}
            </div>
          </div>
        </main>
      </AuthGuardGate>

      <BusinessFooter />
    </div>
  );
}
