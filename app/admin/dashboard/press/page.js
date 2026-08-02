"use client";
import { useState, useEffect } from "react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import ImageUpload from "@/components/admin/ImageUpload";
import SaveButton from "@/components/admin/SaveButton";
import { getPageContent, setPageContent } from "@/lib/firestore";
import { Plus, Trash2 } from "lucide-react";

export default function PressPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    title: "Press & Media",
    description: "",
    pressReleases: [],
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const content = await getPageContent("press");
    if (content) {
      setData(content);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const result = await setPageContent("press", data);
    if (result.success) {
      alert("Press page saved successfully!");
    } else {
      alert("Error saving: " + result.error);
    }
    setSaving(false);
  };

  const addPressRelease = () => {
    setData({
      ...data,
      pressReleases: [
        ...data.pressReleases,
        {
          title: "",
          date: "",
          description: "",
          image: "",
          link: "",
          pdfFile: "",
        },
      ],
    });
  };

  const removePressRelease = (index) => {
    setData({
      ...data,
      pressReleases: data.pressReleases.filter((_, i) => i !== index),
    });
  };

  const updatePressRelease = (index, field, value) => {
    const newReleases = [...data.pressReleases];
    newReleases[index] = { ...newReleases[index], [field]: value };
    setData({ ...data, pressReleases: newReleases });
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
        title="Press & Media Page"
        description="Manage press releases and media coverage"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Page Content
          </h2>

          <FormField
            label="Page Title"
            name="title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />

          <FormField
            label="Description"
            name="description"
            type="textarea"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            className="mt-4"
            rows={3}
          />
        </div>

        {/* Press Releases */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Press Releases
            </h2>
            <button
              type="button"
              onClick={addPressRelease}
              className="flex items-center gap-2 text-sm px-3 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition"
            >
              <Plus className="w-4 h-4" />
              Add Press Release
            </button>
          </div>

          {data.pressReleases.map((release, index) => (
            <div
              key={index}
              className="p-4 bg-slate-50 rounded-lg mb-4 space-y-3"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-medium text-slate-700">
                  Press Release #{index + 1}
                </h3>
                <button
                  type="button"
                  onClick={() => removePressRelease(index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <FormField
                label="Title"
                name={`release-title-${index}`}
                value={release.title}
                onChange={(e) =>
                  updatePressRelease(index, "title", e.target.value)
                }
              />

              <FormField
                label="Date"
                name={`release-date-${index}`}
                type="date"
                value={release.date}
                onChange={(e) =>
                  updatePressRelease(index, "date", e.target.value)
                }
              />

              <FormField
                label="Description"
                name={`release-desc-${index}`}
                type="textarea"
                value={release.description}
                onChange={(e) =>
                  updatePressRelease(index, "description", e.target.value)
                }
                rows={3}
              />

              <ImageUpload
                label="Image"
                value={release.image}
                onChange={(url) => updatePressRelease(index, "image", url)}
              />

              <div className="space-y-3">
                <FormField
                  label="External Link (optional)"
                  name={`release-link-${index}`}
                  value={release.link || ""}
                  onChange={(e) =>
                    updatePressRelease(index, "link", e.target.value)
                  }
                  placeholder="https://..."
                />

                <div className="text-xs text-slate-600 text-center py-2">
                  — OR —
                </div>

                <div>
                  <ImageUpload
                    label="PDF Document (optional)"
                    value={release.pdfFile || ""}
                    onChange={(url) =>
                      updatePressRelease(index, "pdfFile", url)
                    }
                    accept=".pdf"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Upload PDF to /public/files/ folder and it will be
                    accessible at /files/filename.pdf
                  </p>
                  {release.pdfFile && (
                    <a
                      href={release.pdfFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-cyan-600 hover:text-cyan-700 mt-2"
                    >
                      View current PDF →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {data.pressReleases.length === 0 && (
            <p className="text-sm text-slate-500 text-center py-8">
              No press releases added yet
            </p>
          )}
        </div>

        <SaveButton saving={saving} />
      </form>
    </div>
  );
}
