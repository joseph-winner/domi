"use client";
import { useState, useEffect } from "react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import SaveButton from "@/components/admin/SaveButton";
import { getPageContent, setPageContent } from "@/lib/firestore";
import { Plus, Trash2 } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    title: "Contact Us",
    org: "",
    description: "",
    addressLines: [],
    phones: [],
    email: "",
    website: "",
    mapQuery: "",
    directionsUrl: "",
    scripture: { ref: "", text: "" },
    socialLinks: [],
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const content = await getPageContent("contact");
    if (content) {
      setData(content);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const result = await setPageContent("contact", data);
    if (result.success) {
      alert("Contact page saved successfully!");
    } else {
      alert("Error saving: " + result.error);
    }
    setSaving(false);
  };

  const addSocialLink = () => {
    setData({
      ...data,
      socialLinks: [...(data.socialLinks || []), { platform: "", url: "" }],
    });
  };

  const removeSocialLink = (index) => {
    setData({
      ...data,
      socialLinks: data.socialLinks.filter((_, i) => i !== index),
    });
  };

  const updateSocialLink = (index, field, value) => {
    const newLinks = [...data.socialLinks];
    newLinks[index] = { ...newLinks[index], [field]: value };
    setData({ ...data, socialLinks: newLinks });
  };

  const addPhone = () => {
    setData({
      ...data,
      phones: [...(data.phones || []), ""],
    });
  };

  const removePhone = (index) => {
    setData({
      ...data,
      phones: data.phones.filter((_, i) => i !== index),
    });
  };

  const updatePhone = (index, value) => {
    const newPhones = [...data.phones];
    newPhones[index] = value;
    setData({ ...data, phones: newPhones });
  };

  const addAddressLine = () => {
    setData({
      ...data,
      addressLines: [...(data.addressLines || []), ""],
    });
  };

  const removeAddressLine = (index) => {
    setData({
      ...data,
      addressLines: data.addressLines.filter((_, i) => i !== index),
    });
  };

  const updateAddressLine = (index, value) => {
    const newLines = [...data.addressLines];
    newLines[index] = value;
    setData({ ...data, addressLines: newLines });
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
        title="Contact Page"
        description="Edit contact information and social links"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Contact Information
          </h2>

          <FormField
            label="Page Title"
            name="title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />

          <FormField
            label="Organization Name"
            name="org"
            value={data.org}
            onChange={(e) => setData({ ...data, org: e.target.value })}
            className="mt-4"
          />

          <FormField
            label="Description"
            name="description"
            type="textarea"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            className="mt-4"
            rows={3}
          />

          <FormField
            label="Email"
            name="email"
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="mt-4"
          />

          <FormField
            label="Website"
            name="website"
            value={data.website}
            onChange={(e) => setData({ ...data, website: e.target.value })}
            className="mt-4"
          />

          <FormField
            label="Map Query"
            name="mapQuery"
            value={data.mapQuery}
            onChange={(e) => setData({ ...data, mapQuery: e.target.value })}
            placeholder="e.g., Mbarara-Isingiro Road, Mbarara, Uganda"
            className="mt-4"
          />

          <FormField
            label="Directions URL"
            name="directionsUrl"
            value={data.directionsUrl}
            onChange={(e) =>
              setData({ ...data, directionsUrl: e.target.value })
            }
            placeholder="Google Maps directions link"
            className="mt-4"
          />
        </div>

        {/* Phone Numbers */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Phone Numbers
            </h2>
            <button
              type="button"
              onClick={addPhone}
              className="flex items-center gap-2 text-sm px-3 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition"
            >
              <Plus className="w-4 h-4" />
              Add Phone
            </button>
          </div>

          {(data.phones || []).map((phone, index) => (
            <div key={index} className="flex gap-3 items-center mb-3">
              <FormField
                label={`Phone ${index + 1}`}
                name={`phone-${index}`}
                value={phone}
                onChange={(e) => updatePhone(index, e.target.value)}
                placeholder="+256 XXX XXX XXX"
              />
              <button
                type="button"
                onClick={() => removePhone(index)}
                className="mt-6 p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}

          {(!data.phones || data.phones.length === 0) && (
            <p className="text-sm text-slate-500 text-center py-8">
              No phone numbers added yet
            </p>
          )}
        </div>

        {/* Address Lines */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Address Lines
            </h2>
            <button
              type="button"
              onClick={addAddressLine}
              className="flex items-center gap-2 text-sm px-3 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition"
            >
              <Plus className="w-4 h-4" />
              Add Line
            </button>
          </div>

          {(data.addressLines || []).map((line, index) => (
            <div key={index} className="flex gap-3 items-center mb-3">
              <FormField
                label={`Line ${index + 1}`}
                name={`address-${index}`}
                value={line}
                onChange={(e) => updateAddressLine(index, e.target.value)}
                placeholder="Address line"
              />
              <button
                type="button"
                onClick={() => removeAddressLine(index)}
                className="mt-6 p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}

          {(!data.addressLines || data.addressLines.length === 0) && (
            <p className="text-sm text-slate-500 text-center py-8">
              No address lines added yet
            </p>
          )}
        </div>

        {/* Scripture */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Scripture Verse
          </h2>

          <FormField
            label="Reference"
            name="scripture-ref"
            value={data.scripture?.ref || ""}
            onChange={(e) =>
              setData({
                ...data,
                scripture: { ...data.scripture, ref: e.target.value },
              })
            }
            placeholder="e.g., Mark 1:34"
          />

          <FormField
            label="Text"
            name="scripture-text"
            type="textarea"
            value={data.scripture?.text || ""}
            onChange={(e) =>
              setData({
                ...data,
                scripture: { ...data.scripture, text: e.target.value },
              })
            }
            placeholder="Scripture text"
            className="mt-4"
            rows={3}
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            className="mt-4"
            rows={3}
          />

          <FormField
            label="Email"
            name="email"
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="mt-4"
          />

          <FormField
            label="Phone"
            name="phone"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            className="mt-4"
          />

          <FormField
            label="Address"
            name="address"
            type="textarea"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            className="mt-4"
            rows={2}
          />

          <FormField
            label="Google Maps Embed URL"
            name="mapUrl"
            value={data.mapUrl}
            onChange={(e) => setData({ ...data, mapUrl: e.target.value })}
            placeholder="https://maps.google.com/..."
            className="mt-4"
          />
        </div>

        {/* Social Links */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Social Media Links
            </h2>
            <button
              type="button"
              onClick={addSocialLink}
              className="flex items-center gap-2 text-sm px-3 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition"
            >
              <Plus className="w-4 h-4" />
              Add Link
            </button>
          </div>

          {data.socialLinks.map((link, index) => (
            <div
              key={index}
              className="flex gap-3 items-start p-4 bg-slate-50 rounded-lg mb-3"
            >
              <div className="flex-1 space-y-3">
                <FormField
                  label="Platform"
                  name={`platform-${index}`}
                  value={link.platform}
                  onChange={(e) =>
                    updateSocialLink(index, "platform", e.target.value)
                  }
                  placeholder="Facebook, Twitter, Instagram, etc."
                />
                <FormField
                  label="URL"
                  name={`url-${index}`}
                  value={link.url}
                  onChange={(e) =>
                    updateSocialLink(index, "url", e.target.value)
                  }
                  placeholder="https://..."
                />
              </div>
              <button
                type="button"
                onClick={() => removeSocialLink(index)}
                className="mt-6 p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}

          {data.socialLinks.length === 0 && (
            <p className="text-sm text-slate-500 text-center py-8">
              No social links added yet
            </p>
          )}
        </div>

        <SaveButton saving={saving} />
      </form>
    </div>
  );
}
