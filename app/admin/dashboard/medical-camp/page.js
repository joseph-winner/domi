"use client";
import { useState, useEffect } from "react";
import { Plus, Trash2 } from "lucide-react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import ImageUpload from "@/components/admin/ImageUpload";
import SaveButton from "@/components/admin/SaveButton";
import { getMedicalCampContent, setMedicalCampContent } from "@/lib/firestore";

export default function MedicalCampPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    tagline: "",
    title: "",
    description: "",
    stats: [],
    videoLink: "",
    images: [],
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const content = await getMedicalCampContent();
    if (content) {
      setData(content);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const result = await setMedicalCampContent(data);
    if (result.success) {
      alert("Medical Camp section saved successfully!");
    } else {
      alert("Error saving: " + result.error);
    }
    setSaving(false);
  };

  const addStat = () => {
    setData({
      ...data,
      stats: [...data.stats, { label: "", value: "" }],
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

  const addImage = (url) => {
    setData({
      ...data,
      images: [...data.images, url],
    });
  };

  const removeImage = (index) => {
    setData({
      ...data,
      images: data.images.filter((_, i) => i !== index),
    });
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
        title="Medical Camp Section"
        description="Manage the completed medical camp recap section"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main Content */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Content</h2>

          <FormField
            label="Tagline"
            value={data.tagline}
            onChange={(e) => setData({ ...data, tagline: e.target.value })}
            placeholder="Featured recap"
          />

          <FormField
            label="Title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            placeholder="Completed Medical Camp"
            className="mt-4"
          />

          <FormField
            label="Description"
            type="textarea"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            placeholder="Relive the highlights from our recent outreach camp..."
            className="mt-4"
            rows={3}
          />

          <FormField
            label="Video Link (Watch Highlights)"
            value={data.videoLink}
            onChange={(e) => setData({ ...data, videoLink: e.target.value })}
            placeholder="https://..."
            className="mt-4"
          />
        </div>

        {/* Stats */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Statistics</h2>
            <button
              type="button"
              onClick={addStat}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Stat
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.stats?.map((stat, index) => (
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
                    label="Label"
                    value={stat.label}
                    onChange={(e) => updateStat(index, "label", e.target.value)}
                    placeholder="Duration"
                  />
                  <FormField
                    label="Value"
                    value={stat.value}
                    onChange={(e) => updateStat(index, "value", e.target.value)}
                    placeholder="3 days"
                  />
                </div>
              </div>
            ))}
          </div>

          {(!data.stats || data.stats.length === 0) && (
            <div className="text-center py-8 text-slate-500">
              No stats yet. Click &quot;Add Stat&quot; to create one.
            </div>
          )}
        </div>

        {/* Gallery Images */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Gallery Images
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.images?.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg border border-slate-200"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            ))}
            <ImageUpload
              label=""
              value=""
              onChange={(url) => url && addImage(url)}
              folder="medical-camp"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <SaveButton loading={saving} />
        </div>
      </form>
    </div>
  );
}
