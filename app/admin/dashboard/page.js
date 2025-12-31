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
  Layers,
  Globe,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { initializeContent } from "@/lib/firestore";

const stats = [
  {
    label: "Homepage Sections",
    value: "12",
    icon: Layers,
    color: "from-cyan-500 to-blue-500",
  },
  {
    label: "Static Pages",
    value: "8",
    icon: FileText,
    color: "from-amber-500 to-orange-500",
  },
  {
    label: "Blog Posts",
    value: "0",
    icon: BookOpen,
    color: "from-green-500 to-emerald-500",
  },
  {
    label: "Media Files",
    value: "24",
    icon: Image,
    color: "from-purple-500 to-pink-500",
  },
];

const quickActions = [
  {
    label: "Edit Hero Section",
    href: "/admin/dashboard/hero",
    icon: LayoutDashboard,
    category: "section",
  },
  {
    label: "Manage Blogs",
    href: "/admin/dashboard/blogs",
    icon: BookOpen,
    category: "content",
  },
  {
    label: "Manage Gallery",
    href: "/admin/dashboard/gallery",
    icon: Image,
    category: "content",
  },
  {
    label: "Site Settings",
    href: "/admin/dashboard/settings",
    icon: Settings,
    category: "settings",
  },
];

// Homepage Sections (components for homepage)
const homepageSections = [
  {
    name: "Hero Section",
    description: "Main banner with slides",
    href: "/admin/dashboard/hero",
    icon: LayoutDashboard,
  },
  {
    name: "About Section",
    description: "Who we are information",
    href: "/admin/dashboard/about",
    icon: FileText,
  },
  {
    name: "Missions",
    description: "Mission, Vision, Values",
    href: "/admin/dashboard/missions",
    icon: TrendingUp,
  },
  {
    name: "Services",
    description: "What we do",
    href: "/admin/dashboard/services",
    icon: Users,
  },
  {
    name: "Programs",
    description: "Program information",
    href: "/admin/dashboard/programs",
    icon: FileText,
  },
  {
    name: "Medical Camp",
    description: "Medical camp highlights",
    href: "/admin/dashboard/medical-camp",
    icon: Users,
  },
  {
    name: "Works",
    description: "Our work showcase",
    href: "/admin/dashboard/works",
    icon: Image,
  },
  {
    name: "Fundraising",
    description: "Support our mission",
    href: "/admin/dashboard/fundraising",
    icon: TrendingUp,
  },
  {
    name: "Video Section",
    description: "Welcome video",
    href: "/admin/dashboard/video",
    icon: Eye,
  },
  {
    name: "Footer",
    description: "Footer content",
    href: "/admin/dashboard/footer",
    icon: Settings,
  },
  {
    name: "Navbar",
    description: "Navigation menu",
    href: "/admin/dashboard/navbar",
    icon: Settings,
  },
];

// Static Pages (route pages)
const staticPages = [
  {
    name: "Contact Page",
    route: "/contact",
    description: "Contact information & form",
    status: "active",
    href: "/admin/dashboard/contact",
  },
  {
    name: "Gallery Page",
    route: "/gallery",
    description: "Photo gallery",
    status: "active",
    href: "/admin/dashboard/gallery",
  },
  {
    name: "Support Page",
    route: "/support",
    description: "Support a mission",
    status: "active",
    href: "/admin/dashboard/support",
  },
  {
    name: "Volunteer Page",
    route: "/volunteer",
    description: "Volunteer information",
    status: "active",
    href: "/admin/dashboard/volunteer",
  },
  {
    name: "Join Team Page",
    route: "/jointeam",
    description: "Join our team",
    status: "active",
    href: "/admin/dashboard/jointeam",
  },
  {
    name: "Press Page",
    route: "/press",
    description: "Press releases",
    status: "active",
    href: "/admin/dashboard/press",
  },
  {
    name: "Report Page",
    route: "/report",
    description: "Annual reports",
    status: "active",
    href: "/admin/dashboard/report",
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

        {/* Content Overview */}
        <div className="lg:col-span-2 space-y-4">
          {/* Homepage Sections */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-600" />
                <h2 className="text-lg font-semibold text-slate-900">
                  Homepage Sections
                </h2>
              </div>
              <Link
                href="/admin/dashboard/page-order"
                className="text-sm text-cyan-600 hover:text-cyan-700"
              >
                Manage Order
              </Link>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Sections that appear on the homepage (components)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
              {homepageSections.map((section, idx) => (
                <Link
                  key={idx}
                  href={section.href}
                  className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50/50 transition group"
                >
                  <section.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-slate-900 group-hover:text-cyan-700">
                      {section.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {section.description}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-cyan-600 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Static Pages */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-amber-600" />
              <h2 className="text-lg font-semibold text-slate-900">
                Static Pages
              </h2>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Individual route pages (not homepage sections)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {staticPages.map((page, idx) => (
                <Link
                  key={idx}
                  href={page.href}
                  className="flex items-start justify-between p-3 rounded-lg border border-slate-200 hover:border-amber-300 hover:bg-amber-50/50 transition group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-slate-900 group-hover:text-amber-700">
                      {page.name}
                    </div>
                    <div className="text-xs text-slate-500 mb-1">
                      {page.description}
                    </div>
                    <code className="text-[10px] text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded">
                      {page.route}
                    </code>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex px-2 py-1 rounded-full text-[10px] font-medium bg-green-100 text-green-700">
                      {page.status}
                    </span>
                    <Edit className="w-4 h-4 text-slate-300 group-hover:text-amber-600 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Blog Management */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-green-600" />
                <h2 className="text-lg font-semibold text-slate-900">
                  Blog Posts
                </h2>
              </div>
              <Link
                href="/admin/dashboard/blogs"
                className="text-sm text-cyan-600 hover:text-cyan-700 font-medium"
              >
                Manage Blogs →
              </Link>
            </div>
            <p className="text-sm text-slate-600 mb-3">
              Create and manage blog posts for your website.
            </p>
            <Link
              href="/admin/dashboard/blogs/new"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <FileText className="w-4 h-4" />
              Create New Blog Post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
