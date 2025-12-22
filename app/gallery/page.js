import Image from "next/image";
import fs from "fs";
import path from "path";

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

function formatTitleFromFilename(filename) {
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
  const withSpaces = nameWithoutExt.replace(/[-_]+/g, " ");
  return withSpaces
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

async function getGalleryImages() {
  const imagesDir = path.join(process.cwd(), "public", "img");
  const files = fs.readdirSync(imagesDir, { withFileTypes: true });

  return files
    .filter((file) => file.isFile())
    .filter((file) =>
      imageExtensions.includes(path.extname(file.name).toLowerCase())
    )
    .map((file) => {
      const title = formatTitleFromFilename(file.name);
      return {
        src: `/img/${file.name}`,
        title,
      };
    });
}

export default async function ImagesPage() {
  const galleryImages = await getGalleryImages();
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Glow blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-10 h-72 w-72 rounded-full bg-sky-500/40 blur-3xl animate-float" />
        <div className="absolute top-40 right-0 h-72 w-72 rounded-full bg-amber-400/30 blur-3xl animate-float delay-1000" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-400/25 blur-3xl animate-float delay-2000" />
      </div>

      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-28 md:px-6 lg:px-8">
        {/* Header */}
        <header className="space-y-6 text-center md:text-left animate-fade-in-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-slate-900/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 shadow-md shadow-sky-900/40 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Visual Stories
          </p>

          <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            A living gallery of
            <span className="relative ml-2 inline-block">
              <span className="bg-gradient-to-r from-amber-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
                impact & hope
              </span>
              <span className="pointer-events-none absolute inset-x-2 -bottom-1 h-1 rounded-full bg-gradient-to-r from-amber-400/40 via-sky-400/40 to-emerald-400/40 blur-[2px]" />
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base md:mx-0">
            Wander through a curated collection of moments that define your
            mission – from quiet acts of kindness to powerful community
            milestones, every frame is a chapter in your story.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <button className="group inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-900/50 transition hover:bg-sky-400">
              Explore the gallery
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
            <span className="text-xs text-slate-400 sm:text-sm">
              Scroll to discover featured moments
            </span>
          </div>
        </header>

        {/* Mosaic Grid - images only */}
        <section className="grid auto-rows-[180px] gap-4 md:auto-rows-[220px] md:grid-cols-3 lg:auto-rows-[260px]">
          {galleryImages.map((item, index) => (
            <article
              key={item.src}
              className={`group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/80 shadow-xl shadow-slate-950/70 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-sky-500/60 hover:shadow-2xl hover:shadow-sky-900/70 ${
                index % 7 === 0
                  ? "md:col-span-2 md:row-span-2"
                  : index % 5 === 0
                  ? "md:row-span-2"
                  : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-transparent to-sky-900/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative h-full w-full overflow-hidden">
                <div className="absolute inset-0 scale-110 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.5),transparent_55%),radial-gradient(circle_at_80%_0,rgba(251,191,36,0.5),transparent_55%),radial-gradient(circle_at_0_80%,rgba(45,212,191,0.45),transparent_55%)] opacity-0 mix-blend-screen blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1 group-hover:saturate-150"
                />
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
