import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const impactAreas = [
  {
    title: "Ebola Emergency Response in DRC & Uganda",
    description:
      "With Amigos Internacionales and Marie Claire Foundation, we support Ebola response through contact tracing, community engagement, disease surveillance, treatment support and isolation centres.",
    image: "/img/ebola-response.jpeg",
    alt: "Ebola emergency response work in the community",
    type: "image",
    cta: { label: "View missions", href: "/missions" },
  },
  {
    title: "Medical & Surgical Missions",
    description:
      "We conduct monthly and quarterly medical and surgical outreach missions, providing essential healthcare services to vulnerable communities with limited access to medical care.",
    type: "gold",
    cta: { label: "View missions", href: "/missions" },
  },
  {
    title: "Humanitarian Medical Relief",
    description:
      "Working together with our partners, we respond to humanitarian medical needs and emergencies, delivering essential healthcare services to communities affected by crises.",
    type: "navy",
  },
  {
    title: "Satellite Hospitals Network",
    description:
      "Through our Satellite Hospitals Program, we partner with healthcare facilities to expand access to specialist and surgical care for vulnerable communities.",
    image: "/img/about-5.jpg",
    alt: "Partner healthcare facility supporting specialist care",
    type: "image",
  },
  {
    title: "Volunteer Medical Programs",
    description:
      "We provide opportunities for healthcare professionals from around the world to volunteer in Africa, using their skills and expertise to transform lives and strengthen healthcare delivery.",
    image: "/img/volunteers.jpg",
    alt: "Volunteer medical professionals working together",
    type: "wide",
    cta: { label: "Become a volunteer", href: "/voluteer" },
  },
];

const Eyebrow = ({ tone }) => (
  <p
    className={`text-[0.68rem] font-semibold uppercase tracking-[0.2em] ${
      tone === "dark"
        ? "text-[#8a6a12]"
        : "text-[color:var(--brand-secondary)]"
    }`}
  >
    Impact Area
  </p>
);

function ImageCard({ area, wide }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[16px] ${
        wide ? "min-h-[20rem] sm:col-span-2 lg:col-span-4" : "min-h-[26rem]"
      }`}
    >
      <Image
        src={area.image}
        alt={area.alt}
        fill
        sizes={wide ? "100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      {/* Strong scrim so copy is always legible */}
      <div
        className={`absolute inset-0 ${
          wide
            ? "bg-gradient-to-r from-black/85 via-black/55 to-black/10"
            : "bg-gradient-to-t from-black/90 via-black/45 to-black/10"
        }`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 p-6 sm:p-7 ${
          wide ? "max-w-xl" : ""
        }`}
      >
        <Eyebrow />
        <h3 className="mt-2 text-xl font-semibold leading-tight text-white sm:text-2xl">
          {area.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/85">
          {area.description}
        </p>
        {area.cta && (
          <Link
            href={area.cta.href}
            className="group/btn mt-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-secondary)] px-5 py-2.5 text-sm font-semibold text-[#3a2a06] transition hover:-translate-y-0.5"
          >
            {area.cta.label}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        )}
      </div>
    </article>
  );
}

function SolidCard({ area }) {
  const isNavy = area.type === "navy";
  return (
    <article
      className={`relative flex min-h-[26rem] flex-col overflow-hidden rounded-[16px] p-7 ${
        isNavy
          ? "bg-[color:var(--brand-primary)]"
          : "bg-[color:var(--brand-secondary)]"
      }`}
    >
      {/* Decorative concentric rings */}
      <div
        className={`pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full border ${
          isNavy ? "border-white/15" : "border-[#3a2a06]/15"
        }`}
      />
      <div
        className={`pointer-events-none absolute -bottom-28 -right-2 h-56 w-56 rounded-full border ${
          isNavy ? "border-white/15" : "border-[#3a2a06]/15"
        }`}
      />
      <div className="relative">
        <Eyebrow tone={isNavy ? "light" : "dark"} />
        <h3
          className={`mt-4 text-xl font-semibold leading-tight sm:text-2xl ${
            isNavy ? "text-white" : "text-[#2a1f04]"
          }`}
        >
          {area.title}
        </h3>
      </div>
      <p
        className={`relative mt-4 text-sm leading-relaxed ${
          isNavy ? "text-white/80" : "text-[#3a2a06]/85"
        }`}
      >
        {area.description}
      </p>
      {area.cta && (
        <Link
          href={area.cta.href}
          className="group/btn relative mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
        >
          {area.cta.label}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Link>
      )}
    </article>
  );
}

function ExploreImpactSection() {
  const topCards = impactAreas.filter((a) => a.type !== "wide");
  const wideCard = impactAreas.find((a) => a.type === "wide");

  return (
    <section className="bg-[color:var(--paper)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Our work in action
          </span>
          <h2 className="mt-5 text-[2.25rem] leading-[1.02] tracking-[-0.035em] !text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
            Explore <span className="tone-muted">Our Impact</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
            From emergency response to lasting partnerships, our programmes bring
            compassionate healthcare closer to communities across Africa.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topCards.map((area) =>
            area.type === "image" ? (
              <ImageCard key={area.title} area={area} />
            ) : (
              <SolidCard key={area.title} area={area} />
            )
          )}
          {wideCard && <ImageCard key={wideCard.title} area={wideCard} wide />}
        </div>
      </div>
    </section>
  );
}

export default ExploreImpactSection;
