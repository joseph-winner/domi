"use client";
import { useState, useEffect } from "react";
import { Plus, Trash2 } from "lucide-react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import ImageUpload from "@/components/admin/ImageUpload";
import SaveButton from "@/components/admin/SaveButton";
import { getWorksContent, setWorksContent } from "@/lib/firestore";

export default function WorksPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    items: [],
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const content = await getWorksContent();
    if (content) {
      setData(content);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const result = await setWorksContent(data);
    if (result.success) {
      alert("Works section saved successfully!");
    } else {
      alert("Error saving: " + result.error);
    }
    setSaving(false);
  };

  const addItem = () => {
    setData({
      ...data,
      items: [
        ...data.items,
        { title: "", desc: "", cta: "", href: "", img: "", pill: "" },
      ],
    });
  };

  const removeItem = (index) => {
    setData({
      ...data,
      items: data.items.filter((_, i) => i !== index),
    });
  };

  const updateItem = (index, field, value) => {
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
        title="Works Section"
        description="Manage partnerships, volunteers, and trainings cards"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Work Items</h2>
            <button
              type="button"
              onClick={addItem}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Item
            </button>
          </div>

          <div className="space-y-6">
            {data.items?.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium text-slate-700">
                    Item {index + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <FormField
                      label="Title"
                      value={item.title}
                      onChange={(e) =>
                        updateItem(index, "title", e.target.value)
                      }
                      placeholder="Our Partnerships"
                    />
                    <FormField
                      label="Pill/Tag"
                      value={item.pill}
                      onChange={(e) =>
                        updateItem(index, "pill", e.target.value)
                      }
                      placeholder="Community"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        label="CTA Text"
                        value={item.cta}
                        onChange={(e) =>
                          updateItem(index, "cta", e.target.value)
                        }
                        placeholder="Programs"
                      />
                      <FormField
                        label="Link URL"
                        value={item.href}
                        onChange={(e) =>
                          updateItem(index, "href", e.target.value)
                        }
                        placeholder="/programs"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <ImageUpload
                      label="Image"
                      value={item.img}
                      onChange={(url) => updateItem(index, "img", url)}
                      folder="works"
                    />
                  </div>
                </div>

                <FormField
                  label="Description"
                  type="textarea"
                  value={item.desc}
                  onChange={(e) => updateItem(index, "desc", e.target.value)}
                  placeholder="Partnering with Holy Innocent's Children's Hospital..."
                  className="mt-4"
                  rows={4}
                />
              </div>
            ))}
          </div>

          {(!data.items || data.items.length === 0) && (
            <div className="text-center py-8 text-slate-500">
              No items yet. Click &quot;Add Item&quot; to create one.
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
