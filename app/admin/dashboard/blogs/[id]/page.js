"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import PageHeader from "@/components/admin/PageHeader";
import FormField from "@/components/admin/FormField";
import ImageUpload from "@/components/admin/ImageUpload";
import SaveButton from "@/components/admin/SaveButton";
import { getBlog, addBlog, updateBlog } from "@/lib/firestore";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogEditorPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const isNew = params.id === "new";

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    author: "",
    authorRole: "",
    readTime: "",
    featuredImage: "",
    published: false,
    featured: false,
  });

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/admin");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (!isNew && params.id) {
      loadBlog();
    }
  }, [params.id, isNew]);

  async function loadBlog() {
    setLoading(true);
    const blog = await getBlog(params.id);
    if (blog) {
      setFormData({
        title: blog.title || "",
        slug: blog.slug || "",
        excerpt: blog.excerpt || "",
        content: blog.content || "",
        category: blog.category || "",
        author: blog.author || "",
        authorRole: blog.authorRole || "",
        readTime: blog.readTime || "",
        featuredImage: blog.featuredImage || "",
        published: blog.published || false,
        featured: blog.featured || false,
      });
    }
    setLoading(false);
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Auto-generate slug from title
    if (field === "title" && isNew) {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      setFormData((prev) => ({ ...prev, slug }));
    }
  };

  const handleSave = async () => {
    if (!formData.title.trim()) {
      alert("Please enter a title");
      return;
    }

    if (!formData.slug.trim()) {
      alert("Please enter a slug");
      return;
    }

    setSaving(true);
    const result = isNew
      ? await addBlog(formData)
      : await updateBlog(params.id, formData);

    if (result.success) {
      router.push("/admin/dashboard/blogs");
    } else {
      alert("Error saving blog: " + result.error);
    }
    setSaving(false);
  };

  if (authLoading || !user || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        href="/admin/dashboard/blogs"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blogs
      </Link>

      <div className="flex items-center justify-between mb-6">
        <PageHeader
          title={isNew ? "Create New Blog Post" : "Edit Blog Post"}
          description={
            isNew
              ? "Share stories and insights from your missions."
              : "Update your blog post content."
          }
        />
        <SaveButton onClick={handleSave} saving={saving} />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
        {/* Basic Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
            Basic Information
          </h3>

          <FormField
            label="Title"
            value={formData.title}
            onChange={(value) => handleChange("title", value)}
            placeholder="Enter blog post title"
            required
          />

          <FormField
            label="URL Slug"
            value={formData.slug}
            onChange={(value) => handleChange("slug", value)}
            placeholder="blog-post-url-slug"
            helpText="Used in the URL: /blog/your-slug"
            required
          />

          <FormField
            label="Excerpt"
            value={formData.excerpt}
            onChange={(value) => handleChange("excerpt", value)}
            placeholder="Brief summary of the blog post..."
            type="textarea"
            rows={3}
          />

          <FormField
            label="Category/Tag"
            value={formData.category}
            onChange={(value) => handleChange("category", value)}
            placeholder="e.g., Field Story, Health Guide, Volunteer Voice"
          />
        </div>

        {/* Author Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
            Author Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Author Name"
              value={formData.author}
              onChange={(value) => handleChange("author", value)}
              placeholder="Dr. John Doe"
            />

            <FormField
              label="Author Role"
              value={formData.authorRole}
              onChange={(value) => handleChange("authorRole", value)}
              placeholder="General Surgeon & Mission Lead"
            />
          </div>

          <FormField
            label="Read Time"
            value={formData.readTime}
            onChange={(value) => handleChange("readTime", value)}
            placeholder="5 min read"
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
            Content
          </h3>

          <ImageUpload
            label="Featured Image"
            value={formData.featuredImage}
            onChange={(value) => handleChange("featuredImage", value)}
            helpText="Main image for the blog post"
          />

          <FormField
            label="Blog Content"
            value={formData.content}
            onChange={(value) => handleChange("content", value)}
            placeholder="Write your blog post content here..."
            type="textarea"
            rows={15}
            helpText="You can use line breaks for paragraphs. HTML is supported."
          />
        </div>

        {/* Settings */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
            Publishing Settings
          </h3>

          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.published}
                onChange={(e) => handleChange("published", e.target.checked)}
                className="w-5 h-5 text-cyan-600 rounded focus:ring-cyan-500"
              />
              <div>
                <div className="font-medium text-gray-900">Published</div>
                <div className="text-sm text-gray-500">
                  Make this blog post visible to the public
                </div>
              </div>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => handleChange("featured", e.target.checked)}
                className="w-5 h-5 text-cyan-600 rounded focus:ring-cyan-500"
              />
              <div>
                <div className="font-medium text-gray-900">Featured Post</div>
                <div className="text-sm text-gray-500">
                  Show this post prominently on the blog page
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4 pt-4 border-t">
          <Link
            href="/admin/dashboard/blogs"
            className="px-6 py-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            Cancel
          </Link>
          <SaveButton onClick={handleSave} saving={saving} />
        </div>
      </div>
    </div>
  );
}
