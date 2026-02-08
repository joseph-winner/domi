"use client";
import { useRef, useState } from "react";
import { X, Upload } from "lucide-react";
import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function MultiImageUpload({
  value = [],
  onChange,
  label = "Description Images",
  folder = "images",
  helperText = "Upload 2-6 images for the mission description gallery.",
}) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef(null);

  const handleUpload = async (event) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;

    setUploading(true);
    try {
      const uploads = await Promise.all(
        files.map(async (file) => {
          const timestamp = Date.now();
          const fileName = `${folder}/${timestamp}_${file.name}`;
          const storageRef = ref(storage, fileName);
          await uploadBytes(storageRef, file);
          return getDownloadURL(storageRef);
        }),
      );

      const next = [...value, ...uploads];
      onChange(next);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload image(s). Please try again.");
    }

    setUploading(false);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const removeImage = (index) => {
    const next = value.filter((_, idx) => idx !== index);
    onChange(next);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        {label}
      </label>
      {helperText && (
        <p className="mb-3 text-xs text-slate-500">{helperText}</p>
      )}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {value.map((url, index) => (
          <div
            key={`${url}-${index}`}
            className="relative overflow-hidden rounded-xl border border-slate-200"
          >
            <img
              src={url}
              alt={`Description image ${index + 1}`}
              className="h-24 w-full object-cover sm:h-28"
            />
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/75"
              aria-label="Remove image"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex h-24 flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 text-xs font-medium text-slate-500 transition hover:border-cyan-500 hover:bg-cyan-50/50 sm:h-28"
        >
          {uploading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent" />
              Uploading...
            </span>
          ) : (
            <>
              <Upload className="h-4 w-4" />
              Add images
            </>
          )}
        </button>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleUpload}
        className="hidden"
      />
    </div>
  );
}
