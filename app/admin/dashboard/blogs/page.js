"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import PageHeader from "@/components/admin/PageHeader";
import { getBlogs, deleteBlog } from "@/lib/firestore";
import { Plus, Edit2, Trash2, Eye, Calendar, Tag } from "lucide-react";

export default function BlogsPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/admin");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    loadBlogs();
  }, []);

  async function loadBlogs() {
    setLoading(true);
    const data = await getBlogs();
    setBlogs(data);
    setLoading(false);
  }

  async function handleDelete(id, title) {
    if (
      !confirm(
        `Are you sure you want to delete "${title}"? This action cannot be undone.`
      )
    ) {
      return;
    }

    setDeleting(id);
    const result = await deleteBlog(id);
    if (result.success) {
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } else {
      alert("Failed to delete blog: " + result.error);
    }
    setDeleting(null);
  }

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (authLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <PageHeader
          title="Blog Posts"
          description="Create and manage blog posts for your website."
        />
        <Link
          href="/admin/dashboard/blogs/new"
          className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Blog Post
        </Link>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600"></div>
        </div>
      ) : blogs.length === 0 ? (
        <div className="bg-[color:var(--paper)] rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Eye className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No Blog Posts Yet
          </h3>
          <p className="text-gray-500 mb-6">
            Start sharing stories and insights from your missions.
          </p>
          <Link
            href="/admin/dashboard/blogs/new"
            className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Create Your First Blog Post
          </Link>
        </div>
      ) : (
        <div className="bg-[color:var(--paper)] rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-right px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {blogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {blog.featuredImage && (
                          <img
                            src={blog.featuredImage}
                            alt={blog.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                        )}
                        <div>
                          <div className="font-medium text-gray-900">
                            {blog.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {blog.readTime || "5 min read"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800">
                        <Tag className="w-3 h-3" />
                        {blog.category || "General"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div>{blog.author || "Unknown"}</div>
                      {blog.authorRole && (
                        <div className="text-xs text-gray-500">
                          {blog.authorRole}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(blog.createdAt)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          blog.published
                            ? "bg-green-100 text-green-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {blog.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/blog/${blog.slug}`}
                          target="_blank"
                          className="p-2 text-gray-400 hover:text-cyan-600 transition-colors"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/admin/dashboard/blogs/${blog.id}`}
                          className="p-2 text-gray-400 hover:text-cyan-600 transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(blog.id, blog.title)}
                          disabled={deleting === blog.id}
                          className="p-2 text-gray-400 hover:text-red-600 transition-colors disabled:opacity-50"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
