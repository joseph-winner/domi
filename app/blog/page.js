export const metadata = {
  title: "Medical Mission Stories & Health Insights",
  description:
    "Stories from the field, volunteer experiences and practical health tips from Doctor's on Mission International (DOMI).",
};

const featuredPosts = [
  {
    id: 1,
    tag: "Field Story",
    title: "When a Village Clinic Became an Emergency Theatre Overnight",
    excerpt:
      "How a small DOMI outreach in rural Uganda turned into a life-saving surgical response when a bus accident overwhelmed the local health centre.",
    author: "Dr. Grace Atuhaire",
    role: "General Surgeon & Mission Lead",
    readTime: "7 min read",
    highlight:
      "In remote communities, minutes can mean the difference between life and loss.",
  },
  {
    id: 2,
    tag: "Health Guide",
    title: "5 Simple Checks Every Community Health Outreach Should Offer",
    excerpt:
      "From blood pressure screening to basic eye exams, these quick checks can quietly prevent long‑term disability.",
    author: "Nurse Daniel Akampurira",
    role: "Community Health Nurse",
    readTime: "5 min read",
  },
  {
    id: 3,
    tag: "Volunteer Voice",
    title: "What I Learnt Serving on My First DOMI Mission",
    excerpt:
      "A medical student reflects on faith, fatigue and the small moments of joy that make every long day worth it.",
    author: "Sarah Nanyonga",
    role: "Medical Student Volunteer",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f5fafc] pb-16 text-slate-800">
      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-4 pt-10 sm:pt-14 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_minmax(0,1fr)] items-center">
          <div className="space-y-6 text-slate-800">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0086bf] animate-pulse" />
              DOMI Stories & Insights
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
              Healing bodies,
              <span className="relative inline-block text-[#0086bf]">
                <span className="absolute inset-x-0 -bottom-1 h-2 bg-[#ebbe4d]/40 blur-[2px]" />
                <span className="relative mx-2 bg-gradient-to-r from-[#0086bf] via-sky-500 to-[#ebbe4d] bg-clip-text text-transparent">
                  restoring hope
                </span>
              </span>
              — one story at a time.
            </h1>

            <p className="max-w-xl text-sm sm:text-base text-slate-700">
              Go behind the scenes of DOMI missions: read field reports,
              volunteer reflections and simple health tips shaped by real
              patients in underserved communities.
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#0086bf] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-500/30 hover:bg-sky-700 transition-transform hover:-translate-y-0.5">
                Start with the latest
                <span className="text-lg">↗</span>
              </button>
              <div className="flex flex-wrap gap-2 text-xs sm:text-[0.78rem] text-slate-500">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 shadow-sm border border-slate-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Surgical missions
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 shadow-sm border border-slate-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  Community clinics
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 shadow-sm border border-slate-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  Health education
                </span>
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-3 gap-4 max-w-md text-xs sm:text-sm">
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-sky-50">
                <dt className="text-slate-600">Mission stories</dt>
                <dd className="mt-1 text-lg font-semibold text-slate-900">
                  40+
                </dd>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-sky-50">
                <dt className="text-slate-600">Volunteer voices</dt>
                <dd className="mt-1 text-lg font-semibold text-slate-900">
                  25+
                </dd>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-sky-50">
                <dt className="text-slate-600">Health briefs</dt>
                <dd className="mt-1 text-lg font-semibold text-slate-900">
                  30+
                </dd>
              </div>
            </dl>
          </div>

          {/* Right card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#0086bf]/10 via-sky-300/15 to-[#ebbe4d]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl bg-white/90 border border-sky-100 shadow-xl">
              <div className="border-b border-sky-50 bg-sky-50/60 px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live from the field
                </div>
                <span className="rounded-full bg-[#ebbe4d]/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-amber-700">
                  Mission Log
                </span>
              </div>
              <div className="px-5 py-4 space-y-3 text-sm text-slate-800">
                <p className="font-semibold text-slate-900">
                  "We set up theatre under lantern light, but hope felt brighter
                  than any generator."
                </p>
                <p>
                  Each DOMI mission blends clinical excellence with compassion.
                  Our blog captures those moments of quiet courage, answered
                  prayer and restored health that statistics alone can&apos;t
                  show.
                </p>
                <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                  <span>New posts every mission season</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2.5 py-1 text-[0.7rem] text-sky-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0086bf]" />
                    Faith • Medicine • Community
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="mt-12 max-w-6xl mx-auto px-4">
        <div className="flex items-baseline justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Latest from the mission field
            </h2>
            <p className="mt-1 text-sm text-slate-700">
              Curated highlights from recent DOMI outreaches, volunteer journeys
              and community health campaigns.
            </p>
          </div>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 hover:border-[#0086bf]/60 hover:text-[#0086bf]">
            Receive mission updates
            <span className="text-base">✉</span>
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className={`group relative flex flex-col rounded-2xl border bg-white/90 p-4 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg ${
                post.id === 1
                  ? "border-[#0086bf]/50 md:col-span-2 md:flex-row md:items-stretch"
                  : "border-sky-100"
              }`}
            >
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-sky-700">
                  <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ebbe4d]" />
                    {post.tag}
                  </span>
                  {post.id === 1 && (
                    <span className="rounded-full bg-[#0086bf]/10 px-2 py-1 text-[0.6rem] text-[#0086bf] border border-[#0086bf]/30">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-[#0086bf]">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-700">
                  {post.excerpt}
                </p>

                {post.highlight && (
                  <p className="text-xs text-sky-800 bg-sky-50/90 border border-sky-200 rounded-xl px-3 py-2">
                    {post.highlight}
                  </p>
                )}

                <div className="flex items-center justify-between pt-3 text-[0.7rem] sm:text-xs text-slate-600">
                  <div>
                    <p className="font-semibold text-slate-800">
                      {post.author}
                    </p>
                    <p>{post.role}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#ebbe4d]/15 px-3 py-1 text-[0.68rem] font-semibold text-amber-700">
                      ⏱ {post.readTime}
                    </span>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 rounded-full bg-[#0086bf] px-3 py-1 text-[0.7rem] font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0086bf]"
                    >
                      Read story
                      <span className="ml-0.5">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-dashed border-[#0086bf]/30 bg-sky-50/40 px-6 py-5 text-sm">
          <div className="max-w-xl text-center sm:text-left">
            <p className="font-semibold text-slate-900">
              Have a story from a DOMI outreach that should be told?
            </p>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              We love amplifying the voices of patients, volunteers and
              partners. Share your testimony, field reflection or health
              education idea for the DOMI blog.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-[#ebbe4d] px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 shadow-md shadow-amber-300/50 hover:bg-[#e1b53b] transition-transform hover:-translate-y-0.5">
            Share a story
            <span className="text-base">✍</span>
          </button>
        </div>
      </section>
    </main>
  );
}
