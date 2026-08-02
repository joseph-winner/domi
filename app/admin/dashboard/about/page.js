"use client";
import { useState, useEffect } from "react";
import { Plus, Trash2 } from "lucide-react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import ImageUpload from "@/components/admin/ImageUpload";
import SaveButton from "@/components/admin/SaveButton";
import { getAboutContent, setAboutContent } from "@/lib/firestore";

export default function AboutPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    stats: [],
    image: "",
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const content = await getAboutContent();
    if (content) {
      setData(content);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const result = await setAboutContent(data);
    if (result.success) {
      alert("About section saved successfully!");
    } else {
      alert("Error saving: " + result.error);
    }
    setSaving(false);
  };

  const addStat = () => {
    setData({
      ...data,
      stats: [...data.stats, { number: "", label: "", description: "" }],
    });
  };

  const removeStat = (index) => {
    setData({
      ...data,
      stats: data.stats.filter((_, i) => i !== index),
    });
  };

  const updateStat = (index, field, value) => {
    const newStats = [...data.stats];
    newStats[index] = { ...newStats[index], [field]: value };
    setData({ ...data, stats: newStats });
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
        title="About Section"
        description="Edit the 'Who We Are' section with statistics and description"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main Content */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Content</h2>

          <FormField
            label="Section Title"
            name="title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            placeholder="Who We Are"
          />

          <FormField
            label="Description"
            name="description"
            type="textarea"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            placeholder="Doctor's on Mission International is a volunteer-based..."
            className="mt-4"
            rows={5}
          />

          <div className="mt-4">
            <ImageUpload
              label="Section Image"
              value={data.image}
              onChange={(url) => setData({ ...data, image: url })}
              folder="about"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Statistics Cards
            </h2>
            <button
              type="button"
              onClick={addStat}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Stat
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.stats.map((stat, index) => (
              <div
                key={index}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-slate-700">
                    Stat {index + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeStat(index)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <FormField
                    label="Number/Value"
                    value={stat.number}
                    onChange={(e) =>
                      updateStat(index, "number", e.target.value)
                    }
                    placeholder="2023 or +500"
                  />
                  <FormField
                    label="Label"
                    value={stat.label}
                    onChange={(e) => updateStat(index, "label", e.target.value)}
                    placeholder="Founded"
                  />
                  <FormField
                    label="Description"
                    type="textarea"
                    value={stat.description}
                    onChange={(e) =>
                      updateStat(index, "description", e.target.value)
                    }
                    placeholder="Established in 2023..."
                    rows={2}
                  />
                </div>
              </div>
            ))}
          </div>

          {data.stats.length === 0 && (
            <div className="text-center py-8 text-slate-500">
              No statistics yet. Click &quot;Add Stat&quot; to create one.
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
