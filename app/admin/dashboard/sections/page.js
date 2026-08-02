"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import PageHeader from "@/components/admin/PageHeader";
import { getCustomSections, deleteCustomSection } from "@/lib/firestore";
import {
  Plus,
  Edit2,
  Trash2,
  GripVertical,
  Eye,
  EyeOff,
  Layers,
} from "lucide-react";

export default function CustomSectionsPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/admin");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    loadSections();
  }, []);

  async function loadSections() {
    setLoading(true);
    const data = await getCustomSections();
    setSections(data);
    setLoading(false);
  }

  async function handleDelete(id, name) {
    if (
      !confirm(
        `Are you sure you want to delete "${name}"? This action cannot be undone.`
      )
    ) {
      return;
    }

    setDeleting(id);
    const result = await deleteCustomSection(id);
    if (result.success) {
      setSections((prev) => prev.filter((s) => s.id !== id));
    } else {
      alert("Failed to delete section: " + result.error);
    }
    setDeleting(null);
  }

  if (authLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#912923]"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <PageHeader
          title="Custom Sections"
          description="Create and manage custom sections that can be placed anywhere on your website."
        />
        <Link
          href="/admin/dashboard/sections/new"
          className="flex items-center gap-2 bg-[#912923] text-white px-4 py-2 rounded-lg hover:bg-[#7a2320] transition-colors"
        >
          <Plus className="w-5 h-5" />
          Create Section
        </Link>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#912923]"></div>
        </div>
      ) : sections.length === 0 ? (
        <div className="bg-[color:var(--paper)] rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <Layers className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No Custom Sections Yet
          </h3>
          <p className="text-gray-500 mb-6">
            Create your first custom section to add dynamic content to your
            website.
          </p>
          <Link
            href="/admin/dashboard/sections/new"
            className="inline-flex items-center gap-2 bg-[#912923] text-white px-6 py-3 rounded-lg hover:bg-[#7a2320] transition-colors"
          >
            <Plus className="w-5 h-5" />
            Create Your First Section
          </Link>
        </div>
      ) : (
        <div className="bg-[color:var(--paper)] rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-600">
            <div className="col-span-1"></div>
            <div className="col-span-4">Section Name</div>
            <div className="col-span-2">Blocks</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-3 text-right">Actions</div>
          </div>

          {sections.map((section) => (
            <div
              key={section.id}
              className="grid grid-cols-12 gap-4 px-6 py-4 items-center border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="col-span-1">
                <GripVertical className="w-5 h-5 text-gray-400 cursor-grab" />
              </div>
              <div className="col-span-4">
                <h3 className="font-medium text-gray-900">{section.name}</h3>
                {section.description && (
                  <p className="text-sm text-gray-500 truncate">
                    {section.description}
                  </p>
                )}
              </div>
              <div className="col-span-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {section.blocks?.length || 0} blocks
                </span>
              </div>
              <div className="col-span-2">
                {section.enabled !== false ? (
                  <span className="inline-flex items-center gap-1 text-green-600 text-sm">
                    <Eye className="w-4 h-4" />
                    Visible
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-gray-400 text-sm">
                    <EyeOff className="w-4 h-4" />
                    Hidden
                  </span>
                )}
              </div>
              <div className="col-span-3 flex items-center justify-end gap-2">
                <Link
                  href={`/admin/dashboard/sections/${section.id}`}
                  className="p-2 text-gray-600 hover:text-[#912923] hover:bg-gray-100 rounded-lg transition-colors"
                  title="Edit section"
                >
                  <Edit2 className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => handleDelete(section.id, section.name)}
                  disabled={deleting === section.id}
                  className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                  title="Delete section"
                >
                  {deleting === section.id ? (
                    <div className="w-4 h-4 border-2 border-gray-300 border-t-red-600 rounded-full animate-spin"></div>
                  ) : (
                    <Trash2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Info Card */}
      <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
        <h4 className="font-medium text-blue-900 mb-2">💡 Tip: Page Order</h4>
        <p className="text-sm text-blue-700">
          After creating custom sections, visit the{" "}
          <Link
            href="/admin/dashboard/page-order"
            className="underline font-medium"
          >
            Page Order
          </Link>{" "}
          page to arrange where your sections appear on the homepage.
        </p>
      </div>
    </div>
  );
}
