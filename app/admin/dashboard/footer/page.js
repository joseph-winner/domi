"use client";
import { useState, useEffect } from "react";
import { Plus, Trash2 } from "lucide-react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import SaveButton from "@/components/admin/SaveButton";
import { getFooterContent, setFooterContent } from "@/lib/firestore";

export default function FooterPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    tagline: "",
    description: "",
    quickLinks: [],
    workWithUs: [],
    socials: [],
    email: "",
    address: "",
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const content = await getFooterContent();
    if (content) {
      setData(content);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const result = await setFooterContent(data);
    if (result.success) {
      alert("Footer saved successfully!");
    } else {
      alert("Error saving: " + result.error);
    }
    setSaving(false);
  };

  const addLink = (section) => {
    setData({
      ...data,
      [section]: [...data[section], { label: "", href: "" }],
    });
  };

  const removeLink = (section, index) => {
    setData({
      ...data,
      [section]: data[section].filter((_, i) => i !== index),
    });
  };

  const updateLink = (section, index, field, value) => {
    const newLinks = [...data[section]];
    newLinks[index] = { ...newLinks[index], [field]: value };
    setData({ ...data, [section]: newLinks });
  };

  const addSocial = () => {
    setData({
      ...data,
      socials: [...data.socials, { label: "", href: "", icon: "Twitter" }],
    });
  };

  const removeSocial = (index) => {
    setData({
      ...data,
      socials: data.socials.filter((_, i) => i !== index),
    });
  };

  const updateSocial = (index, field, value) => {
    const newSocials = [...data.socials];
    newSocials[index] = { ...newSocials[index], [field]: value };
    setData({ ...data, socials: newSocials });
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
        title="Footer"
        description="Manage footer content, links, and contact information"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main Content */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Content</h2>

          <FormField
            label="Tagline"
            value={data.tagline}
            onChange={(e) => setData({ ...data, tagline: e.target.value })}
            placeholder="Compassionate care. Sustainable impact."
          />

          <FormField
            label="Description"
            type="textarea"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            placeholder="Partner with us to bring medical outreach..."
            className="mt-4"
            rows={3}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <FormField
              label="Email"
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="info@doctorsonmissionint.org"
            />
            <FormField
              label="Address"
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
              placeholder="Gulu, Uganda"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Quick Links
            </h2>
            <button
              type="button"
              onClick={() => addLink("quickLinks")}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Link
            </button>
          </div>

          <div className="space-y-2">
            {data.quickLinks?.map((link, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={link.label}
                  onChange={(e) =>
                    updateLink("quickLinks", index, "label", e.target.value)
                  }
                  placeholder="Label"
                  className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                />
                <input
                  type="text"
                  value={link.href}
                  onChange={(e) =>
                    updateLink("quickLinks", index, "href", e.target.value)
                  }
                  placeholder="Link"
                  className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                />
                <button
                  type="button"
                  onClick={() => removeLink("quickLinks", index)}
                  className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Work With Us Links */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Work With Us Links
            </h2>
            <button
              type="button"
              onClick={() => addLink("workWithUs")}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Link
            </button>
          </div>

          <div className="space-y-2">
            {data.workWithUs?.map((link, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={link.label}
                  onChange={(e) =>
                    updateLink("workWithUs", index, "label", e.target.value)
                  }
                  placeholder="Label"
                  className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                />
                <input
                  type="text"
                  value={link.href}
                  onChange={(e) =>
                    updateLink("workWithUs", index, "href", e.target.value)
                  }
                  placeholder="Link"
                  className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                />
                <button
                  type="button"
                  onClick={() => removeLink("workWithUs", index)}
                  className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Social Links
            </h2>
            <button
              type="button"
              onClick={addSocial}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Social
            </button>
          </div>

          <div className="space-y-2">
            {data.socials?.map((social, index) => (
              <div key={index} className="flex items-center gap-2">
                <select
                  value={social.icon}
                  onChange={(e) => updateSocial(index, "icon", e.target.value)}
                  className="px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                >
                  <option value="Twitter">Twitter/X</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Linkedin">LinkedIn</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Youtube">YouTube</option>
                </select>
                <input
                  type="text"
                  value={social.label}
                  onChange={(e) => updateSocial(index, "label", e.target.value)}
                  placeholder="Label"
                  className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                />
                <input
                  type="text"
                  value={social.href}
                  onChange={(e) => updateSocial(index, "href", e.target.value)}
                  placeholder="URL"
                  className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                />
                <button
                  type="button"
                  onClick={() => removeSocial(index)}
                  className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
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
