"use client";
import { Save, Loader2 } from "lucide-react";

export default function SaveButton({ loading, onClick, className = "" }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={loading}
      className={`inline-flex items-center gap-2 px-6 py-2.5 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Saving...
        </>
      ) : (
        <>
          <Save className="w-4 h-4" />
          Save Changes
        </>
      )}
    </button>
  );
}
