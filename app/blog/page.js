"use client";

import { useState, useEffect } from "react";
import { getBlogs } from "@/lib/firestore";
import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlogs();
  }, []);

  async function loadBlogs() {
    const data = await getBlogs();
    const publishedBlogs = data.filter((blog) => blog.published);
    setBlogs(publishedBlogs);
    setLoading(false);
  }

  const featuredPosts = blogs.filter((blog) => blog.featured).slice(0, 3);
  const regularPosts = blogs.filter((blog) => !blog.featured);
  const displayPosts =
    featuredPosts.length > 0 ? featuredPosts : blogs.slice(0, 3);

  const meta = (post) => post.date || post.readTime || post.author || "";

  const PostCard = ({ post }) => (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[color:var(--line)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_-45px_rgba(20,33,31,0.55)]">
      {post.featuredImage && (
        <div className="relative m-2.5 overflow-hidden rounded-[1.15rem]">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            {post.category && (
              <span className="inline-flex items-center rounded-full border border-[color:var(--line)] px-3 py-1 text-[0.72rem] font-medium text-[color:var(--ink-soft)]">
                {post.category}
              </span>
            )}
            {post.featured && (
              <span className="inline-flex items-center rounded-full bg-[color:var(--brand-primary)]/10 px-3 py-1 text-[0.72rem] font-medium text-[color:var(--brand-primary-700)]">
                Featured
              </span>
            )}
          </div>
          {meta(post) && (
            <span className="text-[0.78rem] text-[color:var(--muted)]">
              {meta(post)}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-xl leading-snug tracking-[-0.02em] text-[color:var(--ink)]">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-[color:var(--muted)]">
            {post.excerpt}
          </p>
        )}

        <Link
          href={`/blog/${post.slug}`}
          className="group/btn mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--line)] px-5 py-3 text-sm font-medium text-[color:var(--ink)] transition hover:border-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)] hover:text-white"
        >
          Read this article
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-4 py-1.5 text-[0.78rem] font-medium text-[color:var(--ink-soft)]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-white">
              <Newspaper className="h-3 w-3" />
            </span>
            Blog
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-[2.5rem] leading-[1.04] tracking-[-0.035em] text-[color:var(--ink)] sm:text-6xl">
            Blog &amp; updates
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-relaxed text-[color:var(--muted)] sm:text-lg">
            Go behind the scenes of DOMI missions: field reports, volunteer
            reflections and simple health tips shaped by real patients in
            underserved communities.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        {/* Latest */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl tracking-[-0.02em] text-[color:var(--ink)] sm:text-3xl">
              Latest from the mission field
            </h2>
            <p className="mt-2 max-w-xl text-[0.95rem] text-[color:var(--muted)]">
              Curated highlights from recent DOMI outreaches, volunteer journeys
              and community health campaigns.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-[color:var(--line)] border-t-[color:var(--brand-primary)]" />
          </div>
        ) : displayPosts.length === 0 ? (
          <div className="rounded-[1.5rem] border border-dashed border-[color:var(--line)] py-16 text-center">
            <p className="text-[color:var(--muted)]">
              No blog posts available yet. Check back soon for stories from the
              field!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {displayPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {/* More stories */}
        {!loading && regularPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8 text-2xl tracking-[-0.02em] text-[color:var(--ink)] sm:text-3xl">
              More Stories
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* Share a story */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-7 text-center sm:flex-row sm:text-left">
          <div className="max-w-xl">
            <p className="text-lg tracking-[-0.02em] text-[color:var(--ink)]">
              Have a story from a DOMI outreach that should be told?
            </p>
            <p className="mt-1.5 text-[0.9rem] text-[color:var(--muted)]">
              We love amplifying the voices of patients, volunteers and partners.
              Share your testimony, field reflection or health education idea.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex flex-none items-center gap-2 rounded-full bg-[color:var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--brand-primary-600)]"
          >
            Share a story <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
