"use client";
import { useState, useEffect } from "react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import ImageUpload from "@/components/admin/ImageUpload";
import SaveButton from "@/components/admin/SaveButton";
import { getPageContent, setPageContent } from "@/lib/firestore";
import { Plus, Trash2 } from "lucide-react";

export default function VolunteerPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    title: "Volunteer With Us",
    subtitle: "",
    description: "",
    heroImage: "",
    quickStats: [],
    highlights: [],
    services: [],
    requirements: [],
    benefits: [],
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const content = await getPageContent("volunteer");
    if (content) {
      setData(content);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const result = await setPageContent("volunteer", data);
    if (result.success) {
      alert("Volunteer page saved successfully!");
    } else {
      alert("Error saving: " + result.error);
    }
    setSaving(false);
  };

  const addItem = (field) => {
    setData({
      ...data,
      [field]: [...data[field], { title: "", description: "" }],
    });
  };

  const removeItem = (field, index) => {
    setData({
      ...data,
      [field]: data[field].filter((_, i) => i !== index),
    });
  };

  const updateItem = (field, index, key, value) => {
    const newItems = [...data[field]];
    newItems[index] = { ...newItems[index], [key]: value };
    setData({ ...data, [field]: newItems });
  };

  const addQuickStat = () => {
    setData({
      ...data,
      quickStats: [
        ...(data.quickStats || []),
        { label: "", value: "", icon: "" },
      ],
    });
  };

  const removeQuickStat = (index) => {
    setData({
      ...data,
      quickStats: data.quickStats.filter((_, i) => i !== index),
    });
  };

  const updateQuickStat = (index, field, value) => {
    const newStats = [...data.quickStats];
    newStats[index] = { ...newStats[index], [field]: value };
    setData({ ...data, quickStats: newStats });
  };

  const addHighlight = () => {
    setData({
      ...data,
      highlights: [...(data.highlights || []), ""],
    });
  };

  const removeHighlight = (index) => {
    setData({
      ...data,
      highlights: data.highlights.filter((_, i) => i !== index),
    });
  };

  const updateHighlight = (index, value) => {
    const newHighlights = [...data.highlights];
    newHighlights[index] = value;
    setData({ ...data, highlights: newHighlights });
  };

  const addService = () => {
    setData({
      ...data,
      services: [...(data.services || []), { icon: "", title: "", desc: "" }],
    });
  };

  const removeService = (index) => {
    setData({
      ...data,
      services: data.services.filter((_, i) => i !== index),
    });
  };

  const updateService = (index, field, value) => {
    const newServices = [...data.services];
    newServices[index] = { ...newServices[index], [field]: value };
    setData({ ...data, services: newServices });
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
        title="Volunteer Page"
        description="Edit volunteer information and opportunities"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Main Content
          </h2>

          <FormField
            label="Page Title"
            name="title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />

          <FormField
            label="Subtitle"
            name="subtitle"
            value={data.subtitle}
            onChange={(e) => setData({ ...data, subtitle: e.target.value })}
            className="mt-4"
          />

          <FormField
            label="Description"
            name="description"
            type="textarea"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            className="mt-4"
            rows={5}
          />

          <ImageUpload
            label="Hero Image"
            value={data.heroImage}
            onChange={(url) => setData({ ...data, heroImage: url })}
            className="mt-4"
          />
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Quick Stats
            </h2>
            <button
              type="button"
              onClick={addQuickStat}
              className="flex items-center gap-2 text-sm px-3 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition"
            >
              <Plus className="w-4 h-4" />
              Add Stat
            </button>
          </div>

          {(data.quickStats || []).map((stat, index) => (
            <div
              key={index}
              className="flex gap-3 items-start p-4 bg-slate-50 rounded-lg mb-3"
            >
              <div className="flex-1 space-y-3">
                <FormField
                  label="Label"
                  name={`stat-label-${index}`}
                  value={stat.label}
                  onChange={(e) =>
                    updateQuickStat(index, "label", e.target.value)
                  }
                  placeholder="e.g., Availability"
                />
                <FormField
                  label="Value"
                  name={`stat-value-${index}`}
                  value={stat.value}
                  onChange={(e) =>
                    updateQuickStat(index, "value", e.target.value)
                  }
                  placeholder="e.g., All year round"
                />
                <FormField
                  label="Icon (Lucide icon name)"
                  name={`stat-icon-${index}`}
                  value={stat.icon}
                  onChange={(e) =>
                    updateQuickStat(index, "icon", e.target.value)
                  }
                  placeholder="e.g., CalendarDays, MapPin, Users"
                />
              </div>
              <button
                type="button"
                onClick={() => removeQuickStat(index)}
                className="mt-6 p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}

          {(!data.quickStats || data.quickStats.length === 0) && (
            <p className="text-sm text-slate-500 text-center py-8">
              No quick stats added yet
            </p>
          )}
        </div>

        {/* Highlights */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Volunteer Highlights
            </h2>
            <button
              type="button"
              onClick={addHighlight}
              className="flex items-center gap-2 text-sm px-3 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition"
            >
              <Plus className="w-4 h-4" />
              Add Highlight
            </button>
          </div>

          {(data.highlights || []).map((highlight, index) => (
            <div key={index} className="flex gap-3 items-center mb-3">
              <FormField
                label={`Highlight ${index + 1}`}
                name={`highlight-${index}`}
                value={highlight}
                onChange={(e) => updateHighlight(index, e.target.value)}
                placeholder="e.g., Taking rounds and maintaining files"
              />
              <button
                type="button"
                onClick={() => removeHighlight(index)}
                className="mt-6 p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}

          {(!data.highlights || data.highlights.length === 0) && (
            <p className="text-sm text-slate-500 text-center py-8">
              No highlights added yet
            </p>
          )}
        </div>

        {/* Services */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Service Areas
            </h2>
            <button
              type="button"
              onClick={addService}
              className="flex items-center gap-2 text-sm px-3 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition"
            >
              <Plus className="w-4 h-4" />
              Add Service
            </button>
          </div>

          {(data.services || []).map((service, index) => (
            <div
              key={index}
              className="flex gap-3 items-start p-4 bg-slate-50 rounded-lg mb-3"
            >
              <div className="flex-1 space-y-3">
                <FormField
                  label="Icon (Lucide icon name)"
                  name={`service-icon-${index}`}
                  value={service.icon}
                  onChange={(e) => updateService(index, "icon", e.target.value)}
                  placeholder="e.g., Hospital, ShieldPlus, HeartHandshake"
                />
                <FormField
                  label="Title"
                  name={`service-title-${index}`}
                  value={service.title}
                  onChange={(e) =>
                    updateService(index, "title", e.target.value)
                  }
                  placeholder="e.g., General Medicine"
                />
                <FormField
                  label="Description"
                  name={`service-desc-${index}`}
                  type="textarea"
                  value={service.desc}
                  onChange={(e) => updateService(index, "desc", e.target.value)}
                  placeholder="Brief description"
                  rows={2}
                />
              </div>
              <button
                type="button"
                onClick={() => removeService(index)}
                className="mt-6 p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}

          {(!data.services || data.services.length === 0) && (
            <p className="text-sm text-slate-500 text-center py-8">
              No services added yet
            </p>
          )}
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Volunteer Requirements
            </h2>
            <button
              type="button"
              onClick={() => addItem("requirements")}
              className="flex items-center gap-2 text-sm px-3 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition"
            >
              <Plus className="w-4 h-4" />
              Add Requirement
            </button>
          </div>

          {data.requirements.map((item, index) => (
            <div
              key={index}
              className="flex gap-3 items-start p-4 bg-slate-50 rounded-lg mb-3"
            >
              <div className="flex-1 space-y-3">
                <FormField
                  label="Title"
                  name={`req-title-${index}`}
                  value={item.title}
                  onChange={(e) =>
                    updateItem("requirements", index, "title", e.target.value)
                  }
                />
                <FormField
                  label="Description"
                  name={`req-desc-${index}`}
                  type="textarea"
                  value={item.description}
                  onChange={(e) =>
                    updateItem(
                      "requirements",
                      index,
                      "description",
                      e.target.value
                    )
                  }
                  rows={2}
                />
              </div>
              <button
                type="button"
                onClick={() => removeItem("requirements", index)}
                className="mt-6 p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}

          {data.requirements.length === 0 && (
            <p className="text-sm text-slate-500 text-center py-8">
              No requirements added yet
            </p>
          )}
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Volunteer Benefits
            </h2>
            <button
              type="button"
              onClick={() => addItem("benefits")}
              className="flex items-center gap-2 text-sm px-3 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition"
            >
              <Plus className="w-4 h-4" />
              Add Benefit
            </button>
          </div>

          {data.benefits.map((item, index) => (
            <div
              key={index}
              className="flex gap-3 items-start p-4 bg-slate-50 rounded-lg mb-3"
            >
              <div className="flex-1 space-y-3">
                <FormField
                  label="Title"
                  name={`benefit-title-${index}`}
                  value={item.title}
                  onChange={(e) =>
                    updateItem("benefits", index, "title", e.target.value)
                  }
                />
                <FormField
                  label="Description"
                  name={`benefit-desc-${index}`}
                  type="textarea"
                  value={item.description}
                  onChange={(e) =>
                    updateItem("benefits", index, "description", e.target.value)
                  }
                  rows={2}
                />
              </div>
              <button
                type="button"
                onClick={() => removeItem("benefits", index)}
                className="mt-6 p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}

          {data.benefits.length === 0 && (
            <p className="text-sm text-slate-500 text-center py-8">
              No benefits added yet
            </p>
          )}
        </div>

        <SaveButton saving={saving} />
      </form>
    </div>
  );
}
