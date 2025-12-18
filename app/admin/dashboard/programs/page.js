"use client";
import { useState, useEffect } from "react";
import { Plus, Trash2 } from "lucide-react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import SaveButton from "@/components/admin/SaveButton";
import { getProgramsContent, setProgramsContent } from "@/lib/firestore";

export default function ProgramsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    programVideo: "",
    interviewVideo: "",
    title: "",
    description: "",
    highlights: [],
    interviewTitle: "",
    interviewDescription: "",
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const content = await getProgramsContent();
    if (content) {
      setData(content);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const result = await setProgramsContent(data);
    if (result.success) {
      alert("Programs section saved successfully!");
    } else {
      alert("Error saving: " + result.error);
    }
    setSaving(false);
  };

  const addHighlight = () => {
    setData({
      ...data,
      highlights: [...data.highlights, { label: "", value: "" }],
    });
  };

  const removeHighlight = (index) => {
    setData({
      ...data,
      highlights: data.highlights.filter((_, i) => i !== index),
    });
  };

  const updateHighlight = (index, field, value) => {
    const newHighlights = [...data.highlights];
    newHighlights[index] = { ...newHighlights[index], [field]: value };
    setData({ ...data, highlights: newHighlights });
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
        title="Programs Section"
        description="Manage the medical & surgical camp programs section"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main Content */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Main Content
          </h2>

          <FormField
            label="Section Title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            placeholder="Doctors on Mission Medical & Surgical Camp"
          />

          <FormField
            label="Description"
            type="textarea"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            placeholder="Doctors on Mission International partners with..."
            className="mt-4"
            rows={4}
          />
        </div>

        {/* Videos */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Video Embeds
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Program Video URL (YouTube Embed)"
              value={data.programVideo}
              onChange={(e) =>
                setData({ ...data, programVideo: e.target.value })
              }
              placeholder="https://www.youtube.com/embed/..."
            />
            <FormField
              label="Interview Video URL (YouTube Embed)"
              value={data.interviewVideo}
              onChange={(e) =>
                setData({ ...data, interviewVideo: e.target.value })
              }
              placeholder="https://www.youtube.com/embed/..."
            />
          </div>
        </div>

        {/* Interview Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Interview Section
          </h2>

          <FormField
            label="Interview Title"
            value={data.interviewTitle}
            onChange={(e) =>
              setData({ ...data, interviewTitle: e.target.value })
            }
            placeholder="Program interview"
          />

          <FormField
            label="Interview Description"
            type="textarea"
            value={data.interviewDescription}
            onChange={(e) =>
              setData({ ...data, interviewDescription: e.target.value })
            }
            placeholder="Hear directly from the team about..."
            className="mt-4"
            rows={3}
          />
        </div>

        {/* Highlights */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Highlights</h2>
            <button
              type="button"
              onClick={addHighlight}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Highlight
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.highlights?.map((highlight, index) => (
              <div
                key={index}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-slate-700">
                    Highlight {index + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeHighlight(index)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <FormField
                    label="Label"
                    value={highlight.label}
                    onChange={(e) =>
                      updateHighlight(index, "label", e.target.value)
                    }
                    placeholder="Medical & Surgical Outreach"
                  />
                  <FormField
                    label="Value"
                    value={highlight.value}
                    onChange={(e) =>
                      updateHighlight(index, "value", e.target.value)
                    }
                    placeholder="Community-based care"
                  />
                </div>
              </div>
            ))}
          </div>

          {(!data.highlights || data.highlights.length === 0) && (
            <div className="text-center py-8 text-slate-500">
              No highlights yet. Click &quot;Add Highlight&quot; to create one.
            </div>
          )}
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <SaveButton loading={saving} />
        </div>
      </form>
    </div>
  );
}
