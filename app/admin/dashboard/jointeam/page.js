"use client";
import { useState, useEffect } from "react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import ImageUpload from "@/components/admin/ImageUpload";
import SaveButton from "@/components/admin/SaveButton";
import { getPageContent, setPageContent } from "@/lib/firestore";
import { Plus, Trash2 } from "lucide-react";

export default function JoinTeamPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    title: "Join Our Team",
    subtitle: "",
    description: "",
    heroImage: "",
    programTypes: [],
    positions: [],
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const content = await getPageContent("jointeam");
    if (content) {
      setData(content);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const result = await setPageContent("jointeam", data);
    if (result.success) {
      alert("Join Team page saved successfully!");
    } else {
      alert("Error saving: " + result.error);
    }
    setSaving(false);
  };

  const addPosition = () => {
    setData({
      ...data,
      positions: [
        ...data.positions,
        {
          title: "",
          department: "",
          location: "",
          type: "",
          description: "",
          requirements: "",
        },
      ],
    });
  };

  const removePosition = (index) => {
    setData({
      ...data,
      positions: data.positions.filter((_, i) => i !== index),
    });
  };

  const updatePosition = (index, field, value) => {
    const newPositions = [...data.positions];
    newPositions[index] = { ...newPositions[index], [field]: value };
    setData({ ...data, positions: newPositions });
  };

  const addProgramType = () => {
    setData({
      ...data,
      programTypes: [...(data.programTypes || []), ""],
    });
  };

  const removeProgramType = (index) => {
    setData({
      ...data,
      programTypes: data.programTypes.filter((_, i) => i !== index),
    });
  };

  const updateProgramType = (index, value) => {
    const newTypes = [...data.programTypes];
    newTypes[index] = value;
    setData({ ...data, programTypes: newTypes });
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
        title="Join Team Page"
        description="Manage career opportunities and job openings"
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
            label="Subtitle"
            name="subtitle"
            value={data.subtitle}
            onChange={(e) => setData({ ...data, subtitle: e.target.value })}
            placeholder="e.g., Be Part of Something Bigger"
            className="mt-4"
          />

          <FormField
            label="Description"
            name="description"
            type="textarea"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            className="mt-4"
            rows={4}
          />

          <ImageUpload
            label="Hero Image"
            value={data.heroImage}
            onChange={(url) => setData({ ...data, heroImage: url })}
            className="mt-4"
          />
        </div>

        {/* Program Types */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Program Types
            </h2>
            <button
              type="button"
              onClick={addProgramType}
              className="flex items-center gap-2 text-sm px-3 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition"
            >
              <Plus className="w-4 h-4" />
              Add Type
            </button>
          </div>

          {(data.programTypes || []).map((type, index) => (
            <div key={index} className="flex gap-3 items-center mb-3">
              <FormField
                label={`Type ${index + 1}`}
                name={`type-${index}`}
                value={type}
                onChange={(e) => updateProgramType(index, e.target.value)}
                placeholder="e.g., Medical Camp (General), Dental Outreach"
              />
              <button
                type="button"
                onClick={() => removeProgramType(index)}
                className="mt-6 p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}

          {(!data.programTypes || data.programTypes.length === 0) && (
            <p className="text-sm text-slate-500 text-center py-8">
              No program types added yet
            </p>
          )}
        </div>

        {/* Job Positions */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Open Positions
            </h2>
            <button
              type="button"
              onClick={addPosition}
              className="flex items-center gap-2 text-sm px-3 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition"
            >
              <Plus className="w-4 h-4" />
              Add Position
            </button>
          </div>

          {data.positions.map((position, index) => (
            <div
              key={index}
              className="p-4 bg-slate-50 rounded-lg mb-4 space-y-3"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-medium text-slate-700">
                  Position #{index + 1}
                </h3>
                <button
                  type="button"
                  onClick={() => removePosition(index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <FormField
                label="Job Title"
                name={`position-title-${index}`}
                value={position.title}
                onChange={(e) => updatePosition(index, "title", e.target.value)}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <FormField
                  label="Department"
                  name={`position-dept-${index}`}
                  value={position.department}
                  onChange={(e) =>
                    updatePosition(index, "department", e.target.value)
                  }
                  placeholder="e.g., Medical, Admin"
                />

                <FormField
                  label="Location"
                  name={`position-location-${index}`}
                  value={position.location}
                  onChange={(e) =>
                    updatePosition(index, "location", e.target.value)
                  }
                  placeholder="e.g., Remote, On-site"
                />

                <FormField
                  label="Type"
                  name={`position-type-${index}`}
                  value={position.type}
                  onChange={(e) =>
                    updatePosition(index, "type", e.target.value)
                  }
                  placeholder="e.g., Full-time, Part-time"
                />
              </div>

              <FormField
                label="Description"
                name={`position-desc-${index}`}
                type="textarea"
                value={position.description}
                onChange={(e) =>
                  updatePosition(index, "description", e.target.value)
                }
                rows={3}
              />

              <FormField
                label="Requirements"
                name={`position-req-${index}`}
                type="textarea"
                value={position.requirements}
                onChange={(e) =>
                  updatePosition(index, "requirements", e.target.value)
                }
                placeholder="List requirements (one per line or comma-separated)"
                rows={3}
              />
            </div>
          ))}

          {data.positions.length === 0 && (
            <p className="text-sm text-slate-500 text-center py-8">
              No positions added yet
            </p>
          )}
        </div>

        <SaveButton saving={saving} />
      </form>
    </div>
  );
}
