"use client";
import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Image,
  FileText,
  Users,
  Settings,
  TrendingUp,
  Eye,
  Edit,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { initializeContent } from "@/lib/firestore";

const stats = [
  {
    label: "Total Sections",
    value: "12",
    icon: FileText,
    color: "from-cyan-500 to-blue-500",
  },
  {
    label: "Media Files",
    value: "24",
    icon: Image,
    color: "from-amber-500 to-orange-500",
  },
  {
    label: "Page Views",
    value: "1.2K",
    icon: Eye,
    color: "from-green-500 to-emerald-500",
  },
  {
    label: "Last Updated",
    value: "Today",
    icon: Edit,
    color: "from-purple-500 to-pink-500",
  },
];

const quickActions = [
  {
    label: "Edit Hero Section",
    href: "/admin/dashboard/hero",
    icon: LayoutDashboard,
  },
  { label: "Manage Gallery", href: "/admin/dashboard/gallery", icon: Image },
  {
    label: "Update Programs",
    href: "/admin/dashboard/programs",
    icon: FileText,
  },
  { label: "Site Settings", href: "/admin/dashboard/settings", icon: Settings },
];

const sections = [
  {
    name: "Hero Section",
    status: "published",
    lastEdit: "2 hours ago",
    href: "/admin/dashboard/hero",
  },
  {
    name: "About Section",
    status: "published",
    lastEdit: "1 day ago",
    href: "/admin/dashboard/about",
  },
  {
    name: "Missions",
    status: "published",
    lastEdit: "3 days ago",
    href: "/admin/dashboard/missions",
  },
  {
    name: "Services",
    status: "published",
    lastEdit: "1 week ago",
    href: "/admin/dashboard/services",
  },
  {
    name: "Programs",
    status: "draft",
    lastEdit: "5 hours ago",
    href: "/admin/dashboard/programs",
  },
  {
    name: "Medical Camp",
    status: "published",
    lastEdit: "2 days ago",
    href: "/admin/dashboard/medical-camp",
  },
  {
    name: "Works",
    status: "published",
    lastEdit: "4 days ago",
    href: "/admin/dashboard/works",
  },
  {
    name: "Fundraising",
    status: "published",
    lastEdit: "1 day ago",
    href: "/admin/dashboard/fundraising",
  },
  {
    name: "Video Section",
    status: "published",
    lastEdit: "1 week ago",
    href: "/admin/dashboard/video",
  },
  {
    name: "Footer",
    status: "published",
    lastEdit: "2 weeks ago",
    href: "/admin/dashboard/footer",
  },
  {
    name: "Navbar",
    status: "published",
    lastEdit: "1 month ago",
    href: "/admin/dashboard/navbar",
  },
];

export default function DashboardPage() {
  const [initializing, setInitializing] = useState(false);

  const handleInitialize = async () => {
    setInitializing(true);
    const result = await initializeContent();
    if (result.success) {
      alert("Content initialized successfully!");
    } else {
      alert("Error initializing content: " + result.error);
    }
    setInitializing(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600 mt-1">
            Welcome back! Here&apos;s an overview of your website content.
          </p>
        </div>
        <button
          onClick={handleInitialize}
          disabled={initializing}
          className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition disabled:opacity-50"
        >
          {initializing ? "Initializing..." : "Initialize Content"}
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">
                  {stat.value}
                </p>
              </div>
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            {quickActions.map((action, idx) => (
              <Link
                key={idx}
                href={action.href}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition group"
              >
                <div className="flex items-center gap-3">
                  <action.icon className="w-5 h-5 text-slate-600" />
                  <span className="text-sm font-medium text-slate-700">
                    {action.label}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Content Sections
            </h2>
            <Link
              href="/admin/dashboard/sections"
              className="text-sm text-cyan-600 hover:text-cyan-700"
            >
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-slate-500 border-b border-slate-200">
                  <th className="pb-3 font-medium">Section</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Last Edit</th>
                  <th className="pb-3 font-medium"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sections.slice(0, 6).map((section, idx) => (
                  <tr key={idx} className="text-sm">
                    <td className="py-3 font-medium text-slate-900">
                      {section.name}
                    </td>
                    <td className="py-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          section.status === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {section.status}
                      </span>
                    </td>
                    <td className="py-3 text-slate-600">{section.lastEdit}</td>
                    <td className="py-3">
                      <Link
                        href={section.href}
                        className="text-cyan-600 hover:text-cyan-700 font-medium"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
