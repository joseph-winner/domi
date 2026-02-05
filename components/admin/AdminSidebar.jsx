"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Image,
  FileText,
  Settings,
  Users,
  Home,
  Info,
  Briefcase,
  Tv,
  Heart,
  Stethoscope,
  DollarSign,
  Menu,
  ChevronDown,
  LogOut,
  Layers,
  ArrowUpDown,
  BookOpen,
  MapPin,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const menuItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Hero Section", href: "/admin/dashboard/hero", icon: Home },
  { label: "About", href: "/admin/dashboard/about", icon: Info },
  {
    label: "Missions List",
    href: "/admin/dashboard/missions-list",
    icon: MapPin,
  },
  { label: "Services", href: "/admin/dashboard/services", icon: Briefcase },
  { label: "Programs", href: "/admin/dashboard/programs", icon: FileText },
  { label: "Video Section", href: "/admin/dashboard/video", icon: Tv },
  {
    label: "Medical Camp",
    href: "/admin/dashboard/medical-camp",
    icon: Stethoscope,
  },
  { label: "Works", href: "/admin/dashboard/works", icon: Heart },
  {
    label: "Fundraising",
    href: "/admin/dashboard/fundraising",
    icon: DollarSign,
  },
  { label: "Gallery", href: "/admin/dashboard/gallery", icon: Image },
  { label: "Navbar", href: "/admin/dashboard/navbar", icon: Menu },
  { label: "Footer", href: "/admin/dashboard/footer", icon: FileText },
  { type: "divider", label: "Content" },
  { label: "Blog Posts", href: "/admin/dashboard/blogs", icon: BookOpen },
  { type: "divider", label: "Page Builder" },
  { label: "Custom Sections", href: "/admin/dashboard/sections", icon: Layers },
  {
    label: "Page Order",
    href: "/admin/dashboard/page-order",
    icon: ArrowUpDown,
  },
  { type: "divider", label: "System" },
  { label: "Settings", href: "/admin/dashboard/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/admin");
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 border-b border-slate-800">
        <Link href="/admin/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <img
              src="/logos/doctors-mission-logo.svg"
              alt="Logo"
              className="w-6 h-6"
            />
          </div>
          <div>
            <p className="font-semibold text-sm">DOMI Admin</p>
            <p className="text-xs text-slate-400">Content Manager</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {menuItems.map((item, index) => {
            if (item.type === "divider") {
              return (
                <div key={`divider-${index}`} className="pt-4 pb-2">
                  <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>
              );
            }

            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                  isActive
                    ? "bg-cyan-600 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-800">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2.5 w-full rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
