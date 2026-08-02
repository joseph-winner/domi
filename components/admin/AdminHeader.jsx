"use client";
import { Bell, Search, User, ExternalLink } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function AdminHeader() {
  const { user } = useAuth();

  return (
    <header className="h-16 bg-[color:var(--paper)] border-b border-slate-200 px-6 flex items-center justify-between">
      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-64 rounded-lg bg-slate-100 border-0 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* View Site */}
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 transition"
        >
          <ExternalLink className="w-4 h-4" />
          View Site
        </Link>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-slate-100 transition">
          <Bell className="w-5 h-5 text-slate-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* User */}
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="text-right">
            <p className="text-sm font-medium text-slate-900">
              {user?.email?.split("@")[0] || "Admin"}
            </p>
            <p className="text-xs text-slate-500">Administrator</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}
