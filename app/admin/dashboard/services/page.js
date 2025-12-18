"use client";
import { useState, useEffect } from "react";
import { Plus, Trash2 } from "lucide-react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import SaveButton from "@/components/admin/SaveButton";
import { getServicesContent, setServicesContent } from "@/lib/firestore";

const iconOptions = [
  { value: "FaStethoscope", label: "Stethoscope" },
  { value: "FaClinicMedical", label: "Clinic/Medical" },
  { value: "FaChalkboardTeacher", label: "Training/Teaching" },
  { value: "FaHandsHelping", label: "Helping Hands" },
  { value: "FaAmbulance", label: "Ambulance" },
  { value: "FaBookMedical", label: "Medical Book" },
  { value: "FaHeart", label: "Heart" },
  { value: "FaPray", label: "Prayer" },
  { value: "FaUsers", label: "Users/Team" },
];

export default function ServicesPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    title: "What We Do",
    items: [],
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const content = await getServicesContent();
    if (content) {
      setData(content);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const result = await setServicesContent(data);
    if (result.success) {
      alert("Services section saved successfully!");
    } else {
      alert("Error saving: " + result.error);
    }
    setSaving(false);
  };

  const addService = () => {
    setData({
      ...data,
      items: [...data.items, { icon: "FaStethoscope", title: "" }],
    });
  };

  const removeService = (index) => {
    setData({
      ...data,
      items: data.items.filter((_, i) => i !== index),
    });
  };

  const updateService = (index, field, value) => {
    const newItems = [...data.items];
    newItems[index] = { ...newItems[index], [field]: value };
    setData({ ...data, items: newItems });
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
        title="Services Section"
        description="Manage the services/what we do section"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Section Title */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <FormField
            label="Section Title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            placeholder="What We Do"
          />
        </div>

        {/* Services */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Services</h2>
            <button
              type="button"
              onClick={addService}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Service
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.items.map((service, index) => (
              <div
                key={index}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-slate-700">
                    Service {index + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeService(index)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Icon
                    </label>
                    <select
                      value={service.icon}
                      onChange={(e) =>
                        updateService(index, "icon", e.target.value)
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
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
                    value={service.title}
                    onChange={(e) =>
                      updateService(index, "title", e.target.value)
                    }
                    placeholder="Medical Missions"
                  />
                </div>
              </div>
            ))}
          </div>

          {data.items.length === 0 && (
            <div className="text-center py-8 text-slate-500">
              No services yet. Click &quot;Add Service&quot; to create one.
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
