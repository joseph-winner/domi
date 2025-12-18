"use client";
import { useState, useEffect } from "react";
import { Plus, Trash2, GripVertical } from "lucide-react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import ImageUpload from "@/components/admin/ImageUpload";
import SaveButton from "@/components/admin/SaveButton";
import { getHeroContent, setHeroContent } from "@/lib/firestore";

export default function HeroPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    slides: [],
    tagline: { primary: "", secondary: "" },
    title: "",
    titleHighlight: "",
    subtitle: "",
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const content = await getHeroContent();
    if (content) {
      setData(content);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const result = await setHeroContent(data);
    if (result.success) {
      alert("Hero section saved successfully!");
    } else {
      alert("Error saving: " + result.error);
    }
    setSaving(false);
  };

  const addSlide = () => {
    setData({
      ...data,
      slides: [...data.slides, { image: "", verse: "", text: "" }],
    });
  };

  const removeSlide = (index) => {
    setData({
      ...data,
      slides: data.slides.filter((_, i) => i !== index),
    });
  };

  const updateSlide = (index, field, value) => {
    const newSlides = [...data.slides];
    newSlides[index] = { ...newSlides[index], [field]: value };
    setData({ ...data, slides: newSlides });
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
        title="Hero Section"
        description="Manage the main hero banner with slides, taglines, and call-to-action"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main Content */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Main Content
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Title"
              name="title"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              placeholder="Doctors On Mission"
            />
            <FormField
              label="Title Highlight"
              name="titleHighlight"
              value={data.titleHighlight}
              onChange={(e) =>
                setData({ ...data, titleHighlight: e.target.value })
              }
              placeholder="International"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <FormField
              label="Tagline Primary"
              name="taglinePrimary"
              value={data.tagline?.primary || ""}
              onChange={(e) =>
                setData({
                  ...data,
                  tagline: { ...data.tagline, primary: e.target.value },
                })
              }
              placeholder="Spirited"
            />
            <FormField
              label="Tagline Secondary"
              name="taglineSecondary"
              value={data.tagline?.secondary || ""}
              onChange={(e) =>
                setData({
                  ...data,
                  tagline: { ...data.tagline, secondary: e.target.value },
                })
              }
              placeholder="to Care"
            />
          </div>

          <FormField
            label="Subtitle"
            name="subtitle"
            type="textarea"
            value={data.subtitle}
            onChange={(e) => setData({ ...data, subtitle: e.target.value })}
            placeholder="Extending hope-giving healthcare..."
            className="mt-4"
            rows={3}
          />
        </div>

        {/* Slides */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Hero Slides
            </h2>
            <button
              type="button"
              onClick={addSlide}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Slide
            </button>
          </div>

          <div className="space-y-6">
            {data.slides.map((slide, index) => (
              <div
                key={index}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <GripVertical className="w-5 h-5 text-slate-400 cursor-grab" />
                    <span className="font-medium text-slate-700">
                      Slide {index + 1}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeSlide(index)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ImageUpload
                    label="Background Image"
                    value={slide.image}
                    onChange={(url) => updateSlide(index, "image", url)}
                    folder="hero"
                  />
                  <div className="space-y-4">
                    <FormField
                      label="Bible Verse Reference"
                      value={slide.verse}
                      onChange={(e) =>
                        updateSlide(index, "verse", e.target.value)
                      }
                      placeholder="Isaiah 53:5"
                    />
                    <FormField
                      label="Verse Text"
                      type="textarea"
                      value={slide.text}
                      onChange={(e) =>
                        updateSlide(index, "text", e.target.value)
                      }
                      placeholder="But he was pierced for our transgressions..."
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            ))}

            {data.slides.length === 0 && (
              <div className="text-center py-8 text-slate-500">
                No slides yet. Click &quot;Add Slide&quot; to create one.
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
