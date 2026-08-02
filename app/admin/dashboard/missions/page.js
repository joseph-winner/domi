"use client";
import { useState, useEffect } from "react";
import { Plus, Trash2 } from "lucide-react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import SaveButton from "@/components/admin/SaveButton";
import { getMissionsContent, setMissionsContent } from "@/lib/firestore";

const iconOptions = [
  { value: "FaBullseye", label: "Bullseye (Mission)" },
  { value: "FaEye", label: "Eye (Vision)" },
  { value: "FaHeart", label: "Heart (Values)" },
  { value: "FaStar", label: "Star" },
  { value: "FaHandHoldingHeart", label: "Hand Holding Heart" },
  { value: "FaPray", label: "Praying" },
];

export default function MissionsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    cards: [],
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const content = await getMissionsContent();
    if (content) {
      setData(content);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const result = await setMissionsContent(data);
    if (result.success) {
      alert("Missions section saved successfully!");
    } else {
      alert("Error saving: " + result.error);
    }
    setSaving(false);
  };

  const addCard = () => {
    setData({
      ...data,
      cards: [
        ...data.cards,
        {
          icon: "FaBullseye",
          label: "",
          pill: "",
          title: "",
          text: "",
          list: [],
        },
      ],
    });
  };

  const removeCard = (index) => {
    setData({
      ...data,
      cards: data.cards.filter((_, i) => i !== index),
    });
  };

  const updateCard = (index, field, value) => {
    const newCards = [...data.cards];
    newCards[index] = { ...newCards[index], [field]: value };
    setData({ ...data, cards: newCards });
  };

  const updateCardList = (cardIndex, listString) => {
    const newCards = [...data.cards];
    newCards[cardIndex] = {
      ...newCards[cardIndex],
      list: listString
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };
    setData({ ...data, cards: newCards });
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
        title="Missions Section"
        description="Edit Mission, Vision, and Values cards"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Cards */}
        <div className="bg-[color:var(--paper)] rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Mission Cards
            </h2>
            <button
              type="button"
              onClick={addCard}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Card
            </button>
          </div>

          <div className="space-y-6">
            {data.cards.map((card, index) => (
              <div
                key={index}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium text-slate-700">
                    Card {index + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeCard(index)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Icon
                    </label>
                    <select
                      value={card.icon}
                      onChange={(e) =>
                        updateCard(index, "icon", e.target.value)
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
                    label="Label"
                    value={card.label}
                    onChange={(e) => updateCard(index, "label", e.target.value)}
                    placeholder="Mission"
                  />
                  <FormField
                    label="Pill Text"
                    value={card.pill}
                    onChange={(e) => updateCard(index, "pill", e.target.value)}
                    placeholder="Why we go"
                  />
                  <FormField
                    label="Title"
                    value={card.title}
                    onChange={(e) => updateCard(index, "title", e.target.value)}
                    placeholder="Our Mission"
                  />
                </div>

                <FormField
                  label="Description"
                  type="textarea"
                  value={card.text}
                  onChange={(e) => updateCard(index, "text", e.target.value)}
                  placeholder="To enable free access..."
                  className="mt-4"
                  rows={3}
                />

                <FormField
                  label="List Items (comma-separated, for Values card)"
                  value={card.list?.join(", ") || ""}
                  onChange={(e) => updateCardList(index, e.target.value)}
                  placeholder="Faith, Love, Voluntarism, Integrity..."
                  className="mt-4"
                />
              </div>
            ))}

            {data.cards.length === 0 && (
              <div className="text-center py-8 text-slate-500">
                No cards yet. Click &quot;Add Card&quot; to create one.
              </div>
            )}
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
