"use client";
import { useState, useEffect } from "react";
import { Plus, Trash2 } from "lucide-react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import SaveButton from "@/components/admin/SaveButton";
import { getNavbarContent, setNavbarContent } from "@/lib/firestore";

export default function NavbarPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    phone: "",
    companyName: "",
    menuItems: [],
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const content = await getNavbarContent();
    if (content) {
      setData(content);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const result = await setNavbarContent(data);
    if (result.success) {
      alert("Navbar saved successfully!");
    } else {
      alert("Error saving: " + result.error);
    }
    setSaving(false);
  };

  const addMenuItem = () => {
    setData({
      ...data,
      menuItems: [...data.menuItems, { label: "", href: "", dropdown: [] }],
    });
  };

  const removeMenuItem = (index) => {
    setData({
      ...data,
      menuItems: data.menuItems.filter((_, i) => i !== index),
    });
  };

  const updateMenuItem = (index, field, value) => {
    const newItems = [...data.menuItems];
    newItems[index] = { ...newItems[index], [field]: value };
    setData({ ...data, menuItems: newItems });
  };

  const addDropdownItem = (menuIndex) => {
    const newItems = [...data.menuItems];
    if (!newItems[menuIndex].dropdown) {
      newItems[menuIndex].dropdown = [];
    }
    newItems[menuIndex].dropdown.push({ label: "", href: "" });
    setData({ ...data, menuItems: newItems });
  };

  const removeDropdownItem = (menuIndex, dropdownIndex) => {
    const newItems = [...data.menuItems];
    newItems[menuIndex].dropdown = newItems[menuIndex].dropdown.filter(
      (_, i) => i !== dropdownIndex
    );
    setData({ ...data, menuItems: newItems });
  };

  const updateDropdownItem = (menuIndex, dropdownIndex, field, value) => {
    const newItems = [...data.menuItems];
    newItems[menuIndex].dropdown[dropdownIndex] = {
      ...newItems[menuIndex].dropdown[dropdownIndex],
      [field]: value,
    };
    setData({ ...data, menuItems: newItems });
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
        title="Navbar"
        description="Manage the navigation bar content and menu items"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Top Bar Content */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Top Bar</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Phone Numbers"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              placeholder="+256 782 524 317 | +256 784 808 738"
            />
            <FormField
              label="Company Name"
              value={data.companyName}
              onChange={(e) =>
                setData({ ...data, companyName: e.target.value })
              }
              placeholder="DOCTORS ON MISSION INT"
            />
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Menu Items</h2>
            <button
              type="button"
              onClick={addMenuItem}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Menu Item
            </button>
          </div>

          <div className="space-y-4">
            {data.menuItems?.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-slate-700">
                    Menu Item {index + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeMenuItem(index)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Label"
                    value={item.label}
                    onChange={(e) =>
                      updateMenuItem(index, "label", e.target.value)
                    }
                    placeholder="HOME"
                  />
                  <FormField
                    label="Link (leave empty for dropdown)"
                    value={item.href || ""}
                    onChange={(e) =>
                      updateMenuItem(index, "href", e.target.value)
                    }
                    placeholder="/"
                  />
                </div>

                {/* Dropdown Items */}
                <div className="mt-4 pl-4 border-l-2 border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-600">
                      Dropdown Items
                    </span>
                    <button
                      type="button"
                      onClick={() => addDropdownItem(index)}
                      className="text-xs text-cyan-600 hover:text-cyan-700"
                    >
                      + Add dropdown item
                    </button>
                  </div>
                  {item.dropdown?.map((dropItem, dropIndex) => (
                    <div
                      key={dropIndex}
                      className="flex items-center gap-2 mb-2"
                    >
                      <input
                        type="text"
                        value={dropItem.label}
                        onChange={(e) =>
                          updateDropdownItem(
                            index,
                            dropIndex,
                            "label",
                            e.target.value
                          )
                        }
                        placeholder="Label"
                        className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                      />
                      <input
                        type="text"
                        value={dropItem.href}
                        onChange={(e) =>
                          updateDropdownItem(
                            index,
                            dropIndex,
                            "href",
                            e.target.value
                          )
                        }
                        placeholder="Link"
                        className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                      />
                      <button
                        type="button"
                        onClick={() => removeDropdownItem(index, dropIndex)}
                        className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {(!data.menuItems || data.menuItems.length === 0) && (
            <div className="text-center py-8 text-slate-500">
              No menu items yet. Click &quot;Add Menu Item&quot; to create one.
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
