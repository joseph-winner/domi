"use client";
import { useState, useEffect } from "react";
import { Plus, Trash2 } from "lucide-react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import ImageUpload from "@/components/admin/ImageUpload";
import SaveButton from "@/components/admin/SaveButton";
import { getFundraisingContent, setFundraisingContent } from "@/lib/firestore";

const iconOptions = [
  { value: "ShieldCheck", label: "Shield Check" },
  { value: "Users", label: "Users" },
  { value: "Stethoscope", label: "Stethoscope" },
  { value: "Heart", label: "Heart" },
  { value: "DollarSign", label: "Dollar Sign" },
  { value: "Building", label: "Building" },
];

export default function FundraisingPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    goal: 0,
    raised: 0,
    projectLead: {
      name: "",
      title: "",
      location: "",
      image: "",
    },
    features: [],
    videos: [],
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const content = await getFundraisingContent();
    if (content) {
      setData(content);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const result = await setFundraisingContent(data);
    if (result.success) {
      alert("Fundraising section saved successfully!");
    } else {
      alert("Error saving: " + result.error);
    }
    setSaving(false);
  };

  const addFeature = () => {
    setData({
      ...data,
      features: [
        ...data.features,
        { icon: "ShieldCheck", title: "", desc: "", color: "#EABF4E" },
      ],
    });
  };

  const removeFeature = (index) => {
    setData({
      ...data,
      features: data.features.filter((_, i) => i !== index),
    });
  };

  const updateFeature = (index, field, value) => {
    const newFeatures = [...data.features];
    newFeatures[index] = { ...newFeatures[index], [field]: value };
    setData({ ...data, features: newFeatures });
  };

  const addVideo = () => {
    setData({
      ...data,
      videos: [...data.videos, { title: "", note: "", youtubeId: "", tag: "" }],
    });
  };

  const removeVideo = (index) => {
    setData({
      ...data,
      videos: data.videos.filter((_, i) => i !== index),
    });
  };

  const updateVideo = (index, field, value) => {
    const newVideos = [...data.videos];
    newVideos[index] = { ...newVideos[index], [field]: value };
    setData({ ...data, videos: newVideos });
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
        title="Fundraising Section"
        description="Manage the fundraising/donation section"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main Content */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Main Content
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Title"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              placeholder="Support Our Mission"
            />
            <FormField
              label="Subtitle"
              value={data.subtitle}
              onChange={(e) => setData({ ...data, subtitle: e.target.value })}
              placeholder="Partner with us to build the Medical Center"
            />
          </div>

          <FormField
            label="Description"
            type="textarea"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            placeholder="Your gift today helps move construction..."
            className="mt-4"
            rows={3}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <FormField
              label="Fundraising Goal ($)"
              type="number"
              value={data.goal}
              onChange={(e) =>
                setData({ ...data, goal: parseInt(e.target.value) || 0 })
              }
              placeholder="500000"
            />
            <FormField
              label="Amount Raised ($)"
              type="number"
              value={data.raised}
              onChange={(e) =>
                setData({ ...data, raised: parseInt(e.target.value) || 0 })
              }
              placeholder="125000"
            />
          </div>
        </div>

        {/* Project Lead */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Project Lead
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <FormField
                label="Name"
                value={data.projectLead?.name || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    projectLead: { ...data.projectLead, name: e.target.value },
                  })
                }
                placeholder="Dr. John L. LaNoue"
              />
              <FormField
                label="Title"
                value={data.projectLead?.title || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    projectLead: { ...data.projectLead, title: e.target.value },
                  })
                }
                placeholder="Project lead"
              />
              <FormField
                label="Location"
                value={data.projectLead?.location || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    projectLead: {
                      ...data.projectLead,
                      location: e.target.value,
                    },
                  })
                }
                placeholder="Medical Center • Gulu"
              />
            </div>
            <ImageUpload
              label="Photo"
              value={data.projectLead?.image || ""}
              onChange={(url) =>
                setData({
                  ...data,
                  projectLead: { ...data.projectLead, image: url },
                })
              }
              folder="team"
            />
          </div>
        </div>

        {/* Features */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Features</h2>
            <button
              type="button"
              onClick={addFeature}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Feature
            </button>
          </div>

          <div className="space-y-4">
            {data.features?.map((feature, index) => (
              <div
                key={index}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-slate-700">
                    Feature {index + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Icon
                    </label>
                    <select
                      value={feature.icon}
                      onChange={(e) =>
                        updateFeature(index, "icon", e.target.value)
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                    >
                      {iconOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <FormField
                    label="Title"
                    value={feature.title}
                    onChange={(e) =>
                      updateFeature(index, "title", e.target.value)
                    }
                    placeholder="Accountable giving"
                  />
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Color
                    </label>
                    <input
                      type="color"
                      value={feature.color}
                      onChange={(e) =>
                        updateFeature(index, "color", e.target.value)
                      }
                      className="w-full h-10 rounded-lg border border-slate-300 cursor-pointer"
                    />
                  </div>
                </div>
                <FormField
                  label="Description"
                  value={feature.desc}
                  onChange={(e) => updateFeature(index, "desc", e.target.value)}
                  placeholder="Clear milestones, documented progress..."
                  className="mt-4"
                />
              </div>
            ))}
          </div>

          {(!data.features || data.features.length === 0) && (
            <div className="text-center py-8 text-slate-500">
              No features yet. Click &quot;Add Feature&quot; to create one.
            </div>
          )}
        </div>

        {/* Videos */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Progress Videos
            </h2>
            <button
              type="button"
              onClick={addVideo}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Video
            </button>
          </div>

          <div className="space-y-4">
            {data.videos?.map((video, index) => (
              <div
                key={index}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-slate-700">
                    Video {index + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeVideo(index)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Title"
                    value={video.title}
                    onChange={(e) =>
                      updateVideo(index, "title", e.target.value)
                    }
                    placeholder="Site visit, architectural planning..."
                  />
                  <FormField
                    label="Tag"
                    value={video.tag}
                    onChange={(e) => updateVideo(index, "tag", e.target.value)}
                    placeholder="On-site progress"
                  />
                </div>
                <FormField
                  label="YouTube ID"
                  value={video.youtubeId}
                  onChange={(e) =>
                    updateVideo(index, "youtubeId", e.target.value)
                  }
                  placeholder="wYSURsLg45U?si=l77yhtVE1RB5J52n"
                  className="mt-4"
                />
                <FormField
                  label="Note/Description"
                  value={video.note}
                  onChange={(e) => updateVideo(index, "note", e.target.value)}
                  placeholder="See the vision on the ground..."
                  className="mt-4"
                />
              </div>
            ))}
          </div>

          {(!data.videos || data.videos.length === 0) && (
            <div className="text-center py-8 text-slate-500">
              No videos yet. Click &quot;Add Video&quot; to create one.
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
