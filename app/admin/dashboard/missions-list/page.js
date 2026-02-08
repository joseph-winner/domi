"use client";
import { useEffect, useMemo, useState } from "react";
import { Plus, Pencil, Trash2, ExternalLink } from "lucide-react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import ImageUpload from "@/components/admin/ImageUpload";
import MultiImageUpload from "@/components/admin/MultiImageUpload";
import slugify from "@/lib/slugify";
import {
  addMissionItem,
  deleteMissionItem,
  getMissionItems,
  updateMissionItem,
} from "@/lib/firestore";

const emptyMission = {
  title: "",
  slug: "",
  location: "",
  date: "",
  image: "",
  descriptionImages: [],
  videoUrl: "",
  excerpt: "",
  overview: "",
  impact: [],
  partners: [],
};

export default function MissionsListAdminPage() {
  const [loading, setLoading] = useState(true);
  const [missions, setMissions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyMission);

  useEffect(() => {
    loadMissions();
  }, []);

  const loadMissions = async () => {
    setLoading(true);
    const items = await getMissionItems();
    setMissions(items);
    setLoading(false);
  };

  const openAddModal = () => {
    setEditing(null);
    setForm(emptyMission);
    setShowModal(true);
  };

  const openEditModal = (mission) => {
    setEditing(mission);
    setForm({
      ...emptyMission,
      ...mission,
      impact: mission.impact || [],
      partners: mission.partners || [],
      descriptionImages: mission.descriptionImages || [],
      videoUrl: mission.videoUrl || "",
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this mission?")) return;
    const result = await deleteMissionItem(id);
    if (result.success) {
      await loadMissions();
    } else {
      alert("Error deleting mission: " + result.error);
    }
  };

  const normalizedForm = useMemo(() => {
    const computedSlug = form.slug || slugify(form.title);
    return { ...form, slug: computedSlug };
  }, [form]);

  const handleSave = async () => {
    if (!normalizedForm.title) {
      alert("Please enter a title.");
      return;
    }
    setSaving(true);
    const payload = {
      ...normalizedForm,
      impact: Array.isArray(normalizedForm.impact) ? normalizedForm.impact : [],
      partners: Array.isArray(normalizedForm.partners)
        ? normalizedForm.partners
        : [],
      descriptionImages: Array.isArray(normalizedForm.descriptionImages)
        ? normalizedForm.descriptionImages
        : [],
      videoUrl: normalizedForm.videoUrl || "",
    };

    const result = editing?.id
      ? await updateMissionItem(editing.id, payload)
      : await addMissionItem(payload);

    if (result.success) {
      await loadMissions();
      setShowModal(false);
      setEditing(null);
      setForm(emptyMission);
    } else {
      alert("Error saving mission: " + result.error);
    }
    setSaving(false);
  };

  const updateArrayField = (field, value) => {
    const list = value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    setForm((prev) => ({ ...prev, [field]: list }));
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
        title="Missions List"
        description="Add, edit, and delete mission pages"
      />

      <div className="mb-6">
        <button
          onClick={openAddModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Mission
        </button>
      </div>

      <div className="space-y-4">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-start gap-4">
              <img
                src={mission.image || "/img/upcoming-programs.jpg"}
                alt={mission.title}
                className="w-28 h-20 object-cover rounded-xl border border-slate-200"
              />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {mission.title}
                </h3>
                <p className="text-sm text-slate-500">{mission.location}</p>
                <p className="text-xs text-slate-400 mt-1">
                  /missions/{mission.slug || slugify(mission.title)}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href={`/missions/${mission.slug || slugify(mission.title)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                <ExternalLink className="w-4 h-4" />
                View
              </a>
              <button
                onClick={() => openEditModal(mission)}
                className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                <Pencil className="w-4 h-4" />
                Edit
              </button>
              <button
                onClick={() => handleDelete(mission.id)}
                className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-red-200 text-red-600 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        ))}

        {missions.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No missions yet. Click "Add Mission" to create one.
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              {editing ? "Edit Mission" : "Add Mission"}
            </h2>

            <div className="space-y-4">
              <ImageUpload
                label="Mission Image"
                value={form.image}
                onChange={(url) => setForm((prev) => ({ ...prev, image: url }))}
                folder="missions"
              />
              <MultiImageUpload
                label="Description Images"
                value={form.descriptionImages}
                onChange={(images) =>
                  setForm((prev) => ({
                    ...prev,
                    descriptionImages: images,
                  }))
                }
                folder="missions"
              />

              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  label="Title"
                  value={form.title}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, title: e.target.value }))
                  }
                  placeholder="Mission title"
                  required
                />
                <FormField
                  label="Slug"
                  value={form.slug}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, slug: e.target.value }))
                  }
                  placeholder={slugify(form.title)}
                />
                <FormField
                  label="Location"
                  value={form.location}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, location: e.target.value }))
                  }
                  placeholder="Mbarara, Uganda"
                />
                <FormField
                  label="Date / Duration"
                  value={form.date}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, date: e.target.value }))
                  }
                  placeholder="7 Days • Paediatric Surgical Camp"
                />
              </div>

              <FormField
                label="Excerpt"
                type="textarea"
                value={form.excerpt}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, excerpt: e.target.value }))
                }
                placeholder="Short summary for cards"
                rows={3}
              />
              <FormField
                label="Overview"
                type="textarea"
                value={form.overview}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, overview: e.target.value }))
                }
                placeholder="Full overview for the mission page"
                rows={4}
              />
              <div>
                <FormField
                  label="YouTube Video Link"
                  value={form.videoUrl}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, videoUrl: e.target.value }))
                  }
                  placeholder="https://www.youtube.com/watch?v=..."
                />
                <p className="mt-2 text-xs text-slate-500">
                  Paste the full YouTube link. We will embed it automatically.
                </p>
              </div>
              <FormField
                label="Impact (comma separated)"
                value={form.impact.join(", ")}
                onChange={(e) => updateArrayField("impact", e.target.value)}
                placeholder="200+ patients, follow-up care, local training"
              />
              <FormField
                label="Partners (comma separated)"
                value={form.partners.join(", ")}
                onChange={(e) => updateArrayField("partners", e.target.value)}
                placeholder="Hospital A, NGO B"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-slate-600 hover:text-slate-900 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Mission"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
