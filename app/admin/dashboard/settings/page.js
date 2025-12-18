"use client";
import { useState, useEffect } from "react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import ImageUpload from "@/components/admin/ImageUpload";
import SaveButton from "@/components/admin/SaveButton";
import { getSiteSettings, setSiteSettings } from "@/lib/firestore";

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    siteName: "",
    logo: "",
    favicon: "",
    primaryColor: "#0389C3",
    secondaryColor: "#EABF4E",
    accentColor: "#A1CB4A",
    metaTitle: "",
    metaDescription: "",
    googleAnalyticsId: "",
  });

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const settings = await getSiteSettings();
    if (settings) {
      setData(settings);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const result = await setSiteSettings(data);
    if (result.success) {
      alert("Settings saved successfully!");
    } else {
      alert("Error saving: " + result.error);
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title="Site Settings"
        description="Configure global site settings, branding, and SEO"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Branding */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Branding
          </h2>

          <FormField
            label="Site Name"
            value={data.siteName}
            onChange={(e) => setData({ ...data, siteName: e.target.value })}
            placeholder="Doctors On Mission International"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <ImageUpload
              label="Logo"
              value={data.logo}
              onChange={(url) => setData({ ...data, logo: url })}
              folder="branding"
            />
            <ImageUpload
              label="Favicon"
              value={data.favicon}
              onChange={(url) => setData({ ...data, favicon: url })}
              folder="branding"
            />
          </div>
        </div>

        {/* Colors */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Brand Colors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Primary Color
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={data.primaryColor}
                  onChange={(e) =>
                    setData({ ...data, primaryColor: e.target.value })
                  }
                  className="w-12 h-12 rounded-lg border border-slate-300 cursor-pointer"
                />
                <input
                  type="text"
                  value={data.primaryColor}
                  onChange={(e) =>
                    setData({ ...data, primaryColor: e.target.value })
                  }
                  className="flex-1 px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Secondary Color
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={data.secondaryColor}
                  onChange={(e) =>
                    setData({ ...data, secondaryColor: e.target.value })
                  }
                  className="w-12 h-12 rounded-lg border border-slate-300 cursor-pointer"
                />
                <input
                  type="text"
                  value={data.secondaryColor}
                  onChange={(e) =>
                    setData({ ...data, secondaryColor: e.target.value })
                  }
                  className="flex-1 px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Accent Color
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={data.accentColor}
                  onChange={(e) =>
                    setData({ ...data, accentColor: e.target.value })
                  }
                  className="w-12 h-12 rounded-lg border border-slate-300 cursor-pointer"
                />
                <input
                  type="text"
                  value={data.accentColor}
                  onChange={(e) =>
                    setData({ ...data, accentColor: e.target.value })
                  }
                  className="flex-1 px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                />
              </div>
            </div>
          </div>

          {/* Color Preview */}
          <div className="mt-6 p-4 bg-slate-50 rounded-xl">
            <p className="text-sm font-medium text-slate-700 mb-3">Preview</p>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-xl"
                  style={{ backgroundColor: data.primaryColor }}
                />
                <span className="text-xs text-slate-500 mt-1">Primary</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-xl"
                  style={{ backgroundColor: data.secondaryColor }}
                />
                <span className="text-xs text-slate-500 mt-1">Secondary</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-xl"
                  style={{ backgroundColor: data.accentColor }}
                />
                <span className="text-xs text-slate-500 mt-1">Accent</span>
              </div>
            </div>
          </div>
        </div>

        {/* SEO */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            SEO Settings
          </h2>

          <FormField
            label="Meta Title"
            value={data.metaTitle}
            onChange={(e) => setData({ ...data, metaTitle: e.target.value })}
            placeholder="Doctors On Mission International - Compassionate Healthcare"
          />

          <FormField
            label="Meta Description"
            type="textarea"
            value={data.metaDescription}
            onChange={(e) =>
              setData({ ...data, metaDescription: e.target.value })
            }
            placeholder="Extending hope-giving healthcare and faith-filled compassion..."
            className="mt-4"
            rows={3}
          />

          <FormField
            label="Google Analytics ID (optional)"
            value={data.googleAnalyticsId}
            onChange={(e) =>
              setData({ ...data, googleAnalyticsId: e.target.value })
            }
            placeholder="G-XXXXXXXXXX"
            className="mt-4"
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <SaveButton loading={saving} />
        </div>
      </form>
    </div>
  );
}
