"use client";
import { useState, useEffect } from "react";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import SaveButton from "@/components/admin/SaveButton";
import { getPageContent, setPageContent } from "@/lib/firestore";
import { Plus, Trash2 } from "lucide-react";

export default function ReportPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    title: "Annual Reports",
    description: "",
    reports: [],
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const content = await getPageContent("report");
    if (content) {
      setData(content);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const result = await setPageContent("report", data);
    if (result.success) {
      alert("Report page saved successfully!");
    } else {
      alert("Error saving: " + result.error);
    }
    setSaving(false);
  };

  const addReport = () => {
    setData({
      ...data,
      reports: [
        ...data.reports,
        {
          year: "",
          title: "",
          description: "",
          fileUrl: "",
        },
      ],
    });
  };

  const removeReport = (index) => {
    setData({
      ...data,
      reports: data.reports.filter((_, i) => i !== index),
    });
  };

  const updateReport = (index, field, value) => {
    const newReports = [...data.reports];
    newReports[index] = { ...newReports[index], [field]: value };
    setData({ ...data, reports: newReports });
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
        title="Reports Page"
        description="Manage annual reports and financial documents"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Page Content
          </h2>

          <FormField
            label="Page Title"
            name="title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
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
        </div>

        {/* Reports */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Annual Reports
            </h2>
            <button
              type="button"
              onClick={addReport}
              className="flex items-center gap-2 text-sm px-3 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition"
            >
              <Plus className="w-4 h-4" />
              Add Report
            </button>
          </div>

          {data.reports.map((report, index) => (
            <div
              key={index}
              className="p-4 bg-slate-50 rounded-lg mb-4 space-y-3"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-medium text-slate-700">
                  Report #{index + 1}
                </h3>
                <button
                  type="button"
                  onClick={() => removeReport(index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <FormField
                label="Year"
                name={`report-year-${index}`}
                value={report.year}
                onChange={(e) => updateReport(index, "year", e.target.value)}
                placeholder="2024"
              />

              <FormField
                label="Title"
                name={`report-title-${index}`}
                value={report.title}
                onChange={(e) => updateReport(index, "title", e.target.value)}
                placeholder="Annual Report 2024"
              />

              <FormField
                label="Description"
                name={`report-desc-${index}`}
                type="textarea"
                value={report.description}
                onChange={(e) =>
                  updateReport(index, "description", e.target.value)
                }
                rows={2}
              />

              <FormField
                label="PDF File URL"
                name={`report-url-${index}`}
                value={report.fileUrl}
                onChange={(e) => updateReport(index, "fileUrl", e.target.value)}
                placeholder="Upload to /public/files/ and enter: /files/report-2024.pdf"
              />
            </div>
          ))}

          {data.reports.length === 0 && (
            <p className="text-sm text-slate-500 text-center py-8">
              No reports added yet
            </p>
          )}
        </div>

        <SaveButton saving={saving} />
      </form>
    </div>
  );
}
