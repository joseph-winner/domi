"use client";
import { useState, useEffect } from "react";
import { Plus, Trash2, Image as ImageIcon } from "lucide-react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import ImageUpload from "@/components/admin/ImageUpload";
import {
  getGalleryItems,
  addGalleryItem,
  deleteGalleryItem,
} from "@/lib/firestore";

export default function GalleryPage() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newImage, setNewImage] = useState({
    url: "",
    title: "",
    category: "medical-camp",
    description: "",
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    const items = await getGalleryItems();
    setImages(items);
    setLoading(false);
  };

  const handleAdd = async () => {
    if (!newImage.url) {
      alert("Please upload an image");
      return;
    }
    setSaving(true);
    const result = await addGalleryItem(newImage);
    if (result.success) {
      await loadImages();
      setShowModal(false);
      setNewImage({
        url: "",
        title: "",
        category: "medical-camp",
        description: "",
      });
    } else {
      alert("Error adding image: " + result.error);
    }
    setSaving(false);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    const result = await deleteGalleryItem(id);
    if (result.success) {
      await loadImages();
    } else {
      alert("Error deleting image: " + result.error);
    }
  };

  const categories = [
    { value: "medical-camp", label: "Medical Camp" },
    { value: "team", label: "Team" },
    { value: "events", label: "Events" },
    { value: "community", label: "Community" },
    { value: "facilities", label: "Facilities" },
    { value: "other", label: "Other" },
  ];

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
        title="Gallery"
        description="Manage images for the website gallery"
      />

      {/* Actions */}
      <div className="mb-6">
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Image
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative bg-[color:var(--paper)] rounded-xl overflow-hidden shadow-sm border border-slate-200"
          >
            <img
              src={image.url}
              alt={image.title || "Gallery image"}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
              <p className="text-white font-medium text-center px-2">
                {image.title || "Untitled"}
              </p>
              <p className="text-white/70 text-xs mt-1">{image.category}</p>
              <button
                onClick={() => handleDelete(image.id)}
                className="mt-3 px-3 py-1.5 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
            <div className="p-3">
              <p className="text-sm font-medium text-slate-900 truncate">
                {image.title || "Untitled"}
              </p>
              <p className="text-xs text-slate-500">{image.category}</p>
            </div>
          </div>
        ))}

        {images.length === 0 && (
          <div className="col-span-full text-center py-16 text-slate-500">
            <ImageIcon className="w-12 h-12 mx-auto mb-4 text-slate-300" />
            <p>No images in the gallery yet.</p>
            <p className="text-sm">
              Click &quot;Add Image&quot; to upload your first image.
            </p>
          </div>
        )}
      </div>

      {/* Add Image Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[color:var(--paper)] rounded-2xl p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Add Image
            </h2>

            <div className="space-y-4">
              <ImageUpload
                label="Image"
                value={newImage.url}
                onChange={(url) => setNewImage({ ...newImage, url })}
                folder="gallery"
              />

              <FormField
                label="Title"
                value={newImage.title}
                onChange={(e) =>
                  setNewImage({ ...newImage, title: e.target.value })
                }
                placeholder="Image title"
              />

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Category
                </label>
                <select
                  value={newImage.category}
                  onChange={(e) =>
                    setNewImage({ ...newImage, category: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <FormField
                label="Description (optional)"
                type="textarea"
                value={newImage.description}
                onChange={(e) =>
                  setNewImage({ ...newImage, description: e.target.value })
                }
                placeholder="Brief description..."
                rows={2}
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
                onClick={handleAdd}
                disabled={saving}
                className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition disabled:opacity-50"
              >
                {saving ? "Adding..." : "Add Image"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
