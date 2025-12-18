"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import PageHeader from "@/components/admin/PageHeader";
import SaveButton from "@/components/admin/SaveButton";
import { getPageOrder, setPageOrder, getCustomSections } from "@/lib/firestore";
import {
  GripVertical,
  Eye,
  EyeOff,
  ChevronUp,
  ChevronDown,
  Layers,
  Package,
} from "lucide-react";

// Built-in section names for display
const BUILT_IN_SECTIONS = {
  hero: {
    name: "Hero Section",
    description: "Main banner with title and call-to-action",
  },
  missions: {
    name: "Missions Section",
    description: "Organization's mission and vision",
  },
  calltoaction: {
    name: "Call to Action",
    description: "Donation/action prompt",
  },
  about: { name: "About Section", description: "About the organization" },
  video: { name: "Video Section", description: "Featured video content" },
  services: { name: "Services Section", description: "Services offered" },
  message: { name: "Message Section", description: "Leadership message" },
  medicalcamp: {
    name: "Medical Camp",
    description: "Medical camp information",
  },
  works: { name: "Our Works", description: "Work/projects showcase" },
  fundraising: { name: "Fundraising", description: "Fundraising campaigns" },
  programs: { name: "Programs", description: "Programs offered" },
};

export default function PageOrderPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [sections, setSections] = useState([]);
  const [customSections, setCustomSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/admin");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    const [orderData, customData] = await Promise.all([
      getPageOrder(),
      getCustomSections(),
    ]);

    // Map custom sections for quick lookup
    const customMap = {};
    customData.forEach((s) => {
      customMap[s.id] = s;
    });
    setCustomSections(customData);

    // Merge page order with custom sections that might not be in the order yet
    let mergedSections = [...orderData];

    // Add any custom sections not already in the order
    customData.forEach((cs) => {
      if (!mergedSections.find((s) => s.id === cs.id && s.type === "custom")) {
        mergedSections.push({
          id: cs.id,
          type: "custom",
          enabled: cs.enabled !== false,
        });
      }
    });

    setSections(mergedSections);
    setLoading(false);
  }

  async function handleSave() {
    setSaving(true);
    const result = await setPageOrder(sections);
    setSaving(false);

    if (!result.success) {
      alert("Failed to save: " + result.error);
    }
  }

  function toggleSection(index) {
    setSections((prev) => {
      const newSections = [...prev];
      newSections[index] = {
        ...newSections[index],
        enabled: !newSections[index].enabled,
      };
      return newSections;
    });
  }

  function moveSection(index, direction) {
    if (
      (direction === -1 && index === 0) ||
      (direction === 1 && index === sections.length - 1)
    ) {
      return;
    }

    setSections((prev) => {
      const newSections = [...prev];
      const temp = newSections[index];
      newSections[index] = newSections[index + direction];
      newSections[index + direction] = temp;
      return newSections;
    });
  }

  function getSectionInfo(section) {
    if (section.type === "built-in") {
      return (
        BUILT_IN_SECTIONS[section.id] || { name: section.id, description: "" }
      );
    } else {
      const custom = customSections.find((c) => c.id === section.id);
      return {
        name: custom?.name || "Unknown Section",
        description: custom?.description || "Custom section",
      };
    }
  }

  if (authLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#912923]"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <PageHeader
          title="Page Order"
          description="Arrange the order of sections on your homepage and toggle their visibility."
        />
        <SaveButton onSave={handleSave} saving={saving} />
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#912923]"></div>
        </div>
      ) : (
        <>
          {/* Legend */}
          <div className="flex items-center gap-6 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-blue-600" />
              <span>Built-in Section</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-600" />
              <span>Custom Section</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {sections.map((section, index) => {
              const info = getSectionInfo(section);
              const isBuiltIn = section.type === "built-in";

              return (
                <div
                  key={`${section.type}-${section.id}`}
                  className={`flex items-center gap-4 px-4 py-4 border-b border-gray-100 last:border-b-0 ${
                    !section.enabled ? "bg-gray-50 opacity-60" : ""
                  }`}
                >
                  <GripVertical className="w-5 h-5 text-gray-400 cursor-grab flex-shrink-0" />

                  <div className="flex-shrink-0">
                    {isBuiltIn ? (
                      <Package className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Layers className="w-5 h-5 text-purple-600" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900">{info.name}</h3>
                    <p className="text-sm text-gray-500 truncate">
                      {info.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {/* Visibility Toggle */}
                    <button
                      onClick={() => toggleSection(index)}
                      className={`p-2 rounded-lg transition-colors ${
                        section.enabled
                          ? "text-green-600 hover:bg-green-50"
                          : "text-gray-400 hover:bg-gray-100"
                      }`}
                      title={section.enabled ? "Hide section" : "Show section"}
                    >
                      {section.enabled ? (
                        <Eye className="w-5 h-5" />
                      ) : (
                        <EyeOff className="w-5 h-5" />
                      )}
                    </button>

                    {/* Move Up */}
                    <button
                      onClick={() => moveSection(index, -1)}
                      disabled={index === 0}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Move up"
                    >
                      <ChevronUp className="w-5 h-5" />
                    </button>

                    {/* Move Down */}
                    <button
                      onClick={() => moveSection(index, 1)}
                      disabled={index === sections.length - 1}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Move down"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Instructions */}
          <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-100">
            <h4 className="font-medium text-amber-900 mb-2">📋 How to use</h4>
            <ul className="text-sm text-amber-800 space-y-1">
              <li>
                • Drag sections or use arrows to reorder them on the homepage
              </li>
              <li>• Click the eye icon to show/hide sections</li>
              <li>• Click Save to apply changes to your website</li>
              <li>• Custom sections can be created in the Sections page</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
