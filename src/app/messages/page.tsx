"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { BusinessFooter } from "@/components/BusinessFooter";
import {
  MessageSquare,
  Search,
  Send,
  Building,
  ShieldCheck,
  CheckCheck,
  Paperclip,
  Phone,
  MoreVertical,
} from "lucide-react";

interface SupplierChat {
  id: string;
  name: string;
  company: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  verified: boolean;
}

const chats: SupplierChat[] = [
  {
    id: "c-1",
    name: "Rajesh Sharma",
    company: "Apex Seating Solutions Pvt Ltd",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
    lastMessage: "Yes, for 100 units of the Executive Chair, we can offer ₹3,600/unit with free freight to Chennai.",
    time: "11:42 AM",
    unread: 1,
    verified: true,
  },
  {
    id: "c-2",
    name: "Sunita Verma",
    company: "D-Link Commercial Distributor",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=60",
    lastMessage: "The 305m Cat6 drum reels have dispatched. Here is your LR tracking copy.",
    time: "Yesterday",
    unread: 0,
    verified: true,
  },
  {
    id: "c-3",
    name: "Vikram Mehta",
    company: "Titan Merchandise & Gifts",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
    lastMessage: "Logo sample mockup has been approved by your branding team.",
    time: "10 Nov",
    unread: 0,
    verified: true,
  },
];

export default function MessagesChatPage() {
  const [activeChat, setActiveChat] = useState<SupplierChat>(chats[0]);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "them",
      text: "Hello! Thank you for inquiring about Apex Executive Chairs. What quantity are you planning for your project?",
      time: "11:30 AM",
    },
    {
      sender: "me",
      text: "We require 100 chairs for our new Chennai office expansion. Can you offer custom volume slab pricing below ₹3,800?",
      time: "11:35 AM",
    },
    {
      sender: "them",
      text: "Yes, for 100 units of the Executive Chair, we can offer ₹3,600/unit with free freight to Chennai.",
      time: "11:42 AM",
    },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        sender: "me",
        text: inputText,
        time: "Just now",
      },
    ]);
    setInputText("");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <BusinessNavbar />

      <main className="flex-1 max-w-[1400px] mx-auto w-full px-4 py-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[650px]">
          {/* Chat List Sidebar */}
          <div className="md:col-span-4 border-r border-slate-200 flex flex-col">
            <div className="p-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center justify-between mb-3">
                <h1 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <span>Supplier Chat Hub</span>
                </h1>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                  Real-Time
                </span>
              </div>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search suppliers or conversations..."
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="flex-1 divide-y divide-slate-100 overflow-y-auto">
              {chats.map((c) => (
                <div
                  key={c.id}
                  onClick={() => setActiveChat(c)}
                  className={`p-4 flex items-start gap-3 cursor-pointer transition ${
                    activeChat.id === c.id ? "bg-blue-50/70 border-l-4 border-blue-600" : "hover:bg-slate-50"
                  }`}
                >
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-slate-900 truncate">
                        {c.name}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold">{c.time}</span>
                    </div>
                    <span className="text-[11px] text-blue-700 font-bold block truncate">
                      {c.company}
                    </span>
                    <p className="text-xs text-slate-500 truncate mt-0.5">{c.lastMessage}</p>
                  </div>
                  {c.unread > 0 && (
                    <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] font-black flex items-center justify-center shrink-0">
                      {c.unread}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Active Conversation Area */}
          <div className="md:col-span-8 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-slate-200 bg-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={activeChat.avatar}
                  alt={activeChat.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                    <span>{activeChat.name}</span>
                    {activeChat.verified && (
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    )}
                  </h2>
                  <span className="text-xs text-slate-500 font-semibold">
                    {activeChat.company} • Active Now
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/contracts"
                  className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition"
                >
                  Create Contract
                </Link>
              </div>
            </div>

            {/* Messages Scrollable */}
            <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-slate-50/50">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${m.sender === "me" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-md p-3.5 rounded-2xl text-xs leading-relaxed ${
                      m.sender === "me"
                        ? "bg-[#1862c6] text-white rounded-br-none shadow-xs"
                        : "bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-xs"
                    }`}
                  >
                    {m.text}
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium mt-1 px-1 flex items-center gap-1">
                    {m.time} {m.sender === "me" && <CheckCheck className="w-3 h-3 text-blue-500" />}
                  </span>
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSend} className="p-4 border-t border-slate-200 bg-white flex items-center gap-2">
              <button
                type="button"
                className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition"
              >
                <Paperclip className="w-5 h-5" />
              </button>
              <input
                type="text"
                placeholder="Type your quotation counter-offer, terms or question..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 px-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#1862c6] hover:bg-blue-700 text-white font-black text-xs transition flex items-center gap-1.5"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </main>

      <BusinessFooter />
    </div>
  );
}
