"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PageHeader({
  title,
  description,
  backLink = "/admin/dashboard",
}) {
  return (
    <div className="mb-6">
      <Link
        href={backLink}
        className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-4 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </Link>
      <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
      {description && <p className="text-slate-600 mt-1">{description}</p>}
    </div>
  );
}
