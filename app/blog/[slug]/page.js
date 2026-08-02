"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getBlogBySlug } from "@/lib/firestore";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";

export default function BlogDetailPage() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      loadBlog();
    }
  }, [params.slug]);

  async function loadBlog() {
    setLoading(true);
    const data = await getBlogBySlug(params.slug);
    setBlog(data);
    setLoading(false);
  }

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5fafc]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0086bf]"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5fafc] px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Blog Post Not Found
          </h1>
          <p className="text-slate-600 mb-6">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#0086bf] text-white px-6 py-3 rounded-full hover:bg-sky-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5fafc] pb-16">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-50 to-sky-50/50 border-b border-sky-100">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#0086bf] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>

          {/* Category Badge */}
          {blog.category && (
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-700">
                <Tag className="w-3.5 h-3.5" />
                {blog.category}
              </span>
              {blog.featured && (
                <span className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-[#0086bf]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0086bf] border border-[#0086bf]/30">
                  Featured
                </span>
              )}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            {blog.title}
          </h1>

          {/* Excerpt */}
          {blog.excerpt && (
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              {blog.excerpt}
            </p>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            {blog.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <div>
                  <span className="font-semibold text-slate-800">
                    {blog.author}
                  </span>
                  {blog.authorRole && (
                    <span className="text-slate-500"> • {blog.authorRole}</span>
                  )}
                </div>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(blog.createdAt)}
            </div>
            {blog.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {blog.readTime}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {blog.featuredImage && (
        <div className="max-w-5xl mx-auto px-4 -mt-8 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-sky-100">
            <img
              src={blog.featuredImage}
              alt={blog.title}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4">
        <div
          className="prose prose-slate prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-slate-900
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-[#0086bf] prose-a:no-underline hover:prose-a:underline
          prose-strong:text-slate-900 prose-strong:font-semibold
          prose-ul:my-6 prose-li:text-slate-700
          prose-blockquote:border-l-4 prose-blockquote:border-[#0086bf] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-600
          prose-img:rounded-xl prose-img:shadow-lg"
          dangerouslySetInnerHTML={{ __html: formatContent(blog.content) }}
        />
      </article>

      {/* Footer CTA */}
      <div className="max-w-3xl mx-auto px-4 mt-16">
        <div className="bg-gradient-to-br from-sky-50 to-[#ebbe4d]/10 rounded-2xl border border-sky-100 p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Join Our Mission
          </h3>
          <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
            Be part of bringing hope and healing to communities in need. Your
            support makes stories like this possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/support"
              className="inline-flex items-center gap-2 bg-[#0086bf] text-white px-6 py-3 rounded-full hover:bg-sky-700 transition-colors font-semibold"
            >
              Support a Mission
            </Link>
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 bg-[color:var(--paper)] text-[#0086bf] border-2 border-[#0086bf] px-6 py-3 rounded-full hover:bg-sky-50 transition-colors font-semibold"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Blog */}
      <div className="max-w-3xl mx-auto px-4 mt-8 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-[#0086bf] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Read more stories
        </Link>
      </div>
    </main>
  );
}

// Helper function to format content with proper paragraph breaks
function formatContent(content) {
  if (!content) return "";

  // If content already has HTML tags, return as is
  if (content.includes("<p>") || content.includes("<div>")) {
    return content;
  }

  // Otherwise, convert line breaks to paragraphs
  return content
    .split("\n\n")
    .map((para) => `<p>${para.replace(/\n/g, "<br>")}</p>`)
    .join("");
}
