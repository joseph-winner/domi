"use client";
import { useState, useEffect } from "react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import ImageUpload from "@/components/admin/ImageUpload";
import SaveButton from "@/components/admin/SaveButton";
import { getPageContent, setPageContent } from "@/lib/firestore";
import { Plus, Trash2 } from "lucide-react";

export default function SupportPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    title: "Support Our Mission",
    subtitle: "",
    description: "",
    heroImage: "",
    donationMethods: [],
    outreaches: [],
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const content = await getPageContent("support");
    if (content) {
      setData(content);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const result = await setPageContent("support", data);
    if (result.success) {
      alert("Support page saved successfully!");
    } else {
      alert("Error saving: " + result.error);
    }
    setSaving(false);
  };

  const addMethod = () => {
    setData({
      ...data,
      donationMethods: [
        ...data.donationMethods,
        { title: "", description: "", icon: "" },
      ],
    });
  };

  const removeMethod = (index) => {
    setData({
      ...data,
      donationMethods: data.donationMethods.filter((_, i) => i !== index),
    });
  };

  const updateMethod = (index, field, value) => {
    const newMethods = [...data.donationMethods];
    newMethods[index] = { ...newMethods[index], [field]: value };
    setData({ ...data, donationMethods: newMethods });
  };

  const addOutreach = () => {
    setData({
      ...data,
      outreaches: [
        ...(data.outreaches || []),
        {
          tag: "",
          title: "",
          location: "",
          date: "",
          excerpt: "",
          highlight: "",
          image: "",
        },
      ],
    });
  };

  const removeOutreach = (index) => {
    setData({
      ...data,
      outreaches: data.outreaches.filter((_, i) => i !== index),
    });
  };

  const updateOutreach = (index, field, value) => {
    const newOutreaches = [...data.outreaches];
    newOutreaches[index] = { ...newOutreaches[index], [field]: value };
    setData({ ...data, outreaches: newOutreaches });
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
        title="Support Page"
        description="Manage donation options and support information"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
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
            placeholder="e.g., Partner with us to bring healing to underserved communities"
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

        {/* Donation Methods */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Donation Methods
            </h2>
            <button
              type="button"
              onClick={addMethod}
              className="flex items-center gap-2 text-sm px-3 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition"
            >
              <Plus className="w-4 h-4" />
              Add Method
            </button>
          </div>

          {data.donationMethods.map((method, index) => (
            <div
              key={index}
              className="flex gap-3 items-start p-4 bg-slate-50 rounded-lg mb-3"
            >
              <div className="flex-1 space-y-3">
                <FormField
                  label="Title"
                  name={`method-title-${index}`}
                  value={method.title}
                  onChange={(e) => updateMethod(index, "title", e.target.value)}
                  placeholder="e.g., Bank Transfer, Online Donation"
                />
                <FormField
                  label="Description"
                  name={`method-desc-${index}`}
                  type="textarea"
                  value={method.description}
                  onChange={(e) =>
                    updateMethod(index, "description", e.target.value)
                  }
                  rows={3}
                />
                <FormField
                  label="Icon (emoji or Lucide icon name)"
                  name={`method-icon-${index}`}
                  value={method.icon}
                  onChange={(e) => updateMethod(index, "icon", e.target.value)}
                  placeholder="e.g., 💳, DollarSign"
                />
              </div>
              <button
                type="button"
                onClick={() => removeMethod(index)}
                className="mt-6 p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}

          {data.donationMethods.length === 0 && (
            <p className="text-sm text-slate-500 text-center py-8">
              No donation methods added yet
            </p>
          )}
        </div>

        {/* Previous Outreaches */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Previous Outreaches
            </h2>
            <button
              type="button"
              onClick={addOutreach}
              className="flex items-center gap-2 text-sm px-3 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition"
            >
              <Plus className="w-4 h-4" />
              Add Outreach
            </button>
          </div>

          {(data.outreaches || []).map((outreach, index) => (
            <div
              key={index}
              className="p-4 bg-slate-50 rounded-lg mb-4 space-y-3"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-medium text-slate-700">
                  Outreach #{index + 1}
                </h3>
                <button
                  type="button"
                  onClick={() => removeOutreach(index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <FormField
                label="Tag"
                name={`outreach-tag-${index}`}
                value={outreach.tag}
                onChange={(e) => updateOutreach(index, "tag", e.target.value)}
                placeholder="e.g., Previous Outreach"
              />

              <FormField
                label="Title"
                name={`outreach-title-${index}`}
                value={outreach.title}
                onChange={(e) => updateOutreach(index, "title", e.target.value)}
                placeholder="e.g., Surgical Camp at Holy Innocents Childrens Hospital"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <FormField
                  label="Location"
                  name={`outreach-location-${index}`}
                  value={outreach.location}
                  onChange={(e) =>
                    updateOutreach(index, "location", e.target.value)
                  }
                  placeholder="e.g., Mbarara, Uganda"
                />

                <FormField
                  label="Date/Duration"
                  name={`outreach-date-${index}`}
                  value={outreach.date}
                  onChange={(e) =>
                    updateOutreach(index, "date", e.target.value)
                  }
                  placeholder="e.g., 7 Days • Paediatric Surgical Camp"
                />
              </div>

              <FormField
                label="Excerpt"
                name={`outreach-excerpt-${index}`}
                type="textarea"
                value={outreach.excerpt}
                onChange={(e) =>
                  updateOutreach(index, "excerpt", e.target.value)
                }
                placeholder="Brief description of the outreach"
                rows={3}
              />

              <FormField
                label="Highlight/Scripture"
                name={`outreach-highlight-${index}`}
                value={outreach.highlight}
                onChange={(e) =>
                  updateOutreach(index, "highlight", e.target.value)
                }
                placeholder='e.g., "He took our illnesses and bore our diseases." Isaiah 53:4'
              />

              <ImageUpload
                label="Image"
                value={outreach.image}
                onChange={(url) => updateOutreach(index, "image", url)}
              />
            </div>
          ))}

          {(!data.outreaches || data.outreaches.length === 0) && (
            <p className="text-sm text-slate-500 text-center py-8">
              No outreaches added yet
            </p>
          )}
        </div>

        <SaveButton saving={saving} />
      </form>
    </div>
  );
}
