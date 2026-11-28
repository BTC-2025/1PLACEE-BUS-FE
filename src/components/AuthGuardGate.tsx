"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Lock, ShieldCheck, User } from "lucide-react";

interface AuthGuardGateProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const AuthGuardGate: React.FC<AuthGuardGateProps> = ({
  title,
  description,
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const sync = () => {
      setIsLoggedIn(localStorage.getItem("1placee_logged_in") !== "false");
    };
    sync();
    window.addEventListener("1placee-auth-change", sync);
    return () => window.removeEventListener("1placee-auth-change", sync);
  }, []);

  const handleSignIn = () => {
    localStorage.setItem("1placee_logged_in", "true");
    setIsLoggedIn(true);
    window.dispatchEvent(new Event("1placee-auth-change"));
  };

  if (isLoggedIn) {
    return <>{children}</>;
  }

  return (
    <div className="flex-1 flex items-center justify-center px-4 py-16 bg-[#f8fafc]">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 max-w-md w-full text-center space-y-5">
        <div
          style={{ backgroundColor: "#eff6ff", color: "#0e0f89" }}
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto border border-blue-200"
        >
          <Lock className="w-8 h-8" />
        </div>

        <div className="space-y-1.5">
          <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-[#0e0f89] bg-blue-50 px-3 py-0.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            Sign In Required
          </span>
          <h2 className="text-xl font-black text-slate-900">{title}</h2>
          <p className="text-xs text-slate-600 leading-relaxed">{description}</p>
        </div>

        <div className="space-y-2.5 pt-2">
          <button
            type="button"
            onClick={handleSignIn}
            style={{ backgroundColor: "#0e0f89", color: "#ffffff" }}
            className="w-full py-3 rounded-full text-xs font-black flex items-center justify-center gap-2 shadow-md hover:opacity-95 cursor-pointer transition"
          >
            <User className="w-4 h-4" />
            <span>Sign in as Vinothkumar (Verified Business)</span>
          </button>

          <Link
            href="/b2b"
            className="block w-full py-2.5 rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
          >
            Continue Browsing B2B Catalog
          </Link>
        </div>
      </div>
    </div>
  );
};

