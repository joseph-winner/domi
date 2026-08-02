import Image from "next/image";
import fs from "fs";
import path from "path";
import Banner from "@/layout/Banner";

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
    <main className="bg-[color:var(--paper)]">
      <Banner
        eyebrow="Gallery"
        title="A living gallery of impact and hope"
        subtitle="Moments that define our mission, from quiet acts of kindness to powerful community milestones."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid auto-rows-[180px] gap-4 md:auto-rows-[220px] md:grid-cols-3 lg:auto-rows-[260px]">
          {galleryImages.map((item, index) => (
            <article
              key={item.src}
              className={`group relative overflow-hidden rounded-[12px] border border-[color:var(--line)] bg-[color:var(--surface)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_65px_-45px_rgba(12,34,51,0.55)] ${
                index % 7 === 0
                  ? "md:col-span-2 md:row-span-2"
                  : index % 5 === 0
                  ? "md:row-span-2"
                  : ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium text-white">{item.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
