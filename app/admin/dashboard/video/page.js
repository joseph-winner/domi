"use client";
import { useState, useEffect } from "react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import SaveButton from "@/components/admin/SaveButton";
import { getVideoContent, setVideoContent } from "@/lib/firestore";

export default function VideoPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    tagline: "",
    title: "",
    description: "",
    subtitle: "",
    videoId: "",
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const content = await getVideoContent();
    if (content) {
      setData(content);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const result = await setVideoContent(data);
    if (result.success) {
      alert("Video section saved successfully!");
    } else {
      alert("Error saving: " + result.error);
    }
    setSaving(false);
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
        title="Video Section"
        description="Manage the 'Our Story' video section"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Content</h2>

          <FormField
            label="Tagline"
            value={data.tagline}
            onChange={(e) => setData({ ...data, tagline: e.target.value })}
            placeholder="Our Story"
          />

          <FormField
            label="Title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            placeholder="Welcome to Doctors On Mission International"
            className="mt-4"
          />

          <FormField
            label="Description"
            type="textarea"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            placeholder="Get to know who we are, what we do..."
            className="mt-4"
            rows={3}
          />

          <FormField
            label="Subtitle"
            value={data.subtitle}
            onChange={(e) => setData({ ...data, subtitle: e.target.value })}
            placeholder="Watch this short video to see our mission in action."
            className="mt-4"
          />

          <FormField
            label="YouTube Video ID or Embed URL"
            value={data.videoId}
            onChange={(e) => setData({ ...data, videoId: e.target.value })}
            placeholder="dQw4w9WgXcQ or https://www.youtube.com/embed/..."
            className="mt-4"
          />
        </div>

        {/* Preview */}
        {data.videoId && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Preview
            </h2>
            <div className="aspect-video rounded-xl overflow-hidden bg-slate-100">
              <iframe
                src={
                  data.videoId.includes("http")
                    ? data.videoId
                    : `https://www.youtube.com/embed/${data.videoId}`
                }
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Save Button */}
        <div className="flex justify-end">
          <SaveButton loading={saving} />
        </div>
      </form>
    </div>
  );
}
