import Image from "next/image";

const impactAreas = [
  {
    title: "Ebola Emergency Response in DRC & Uganda",
    description:
      "Together with Amigos Internacionales and Marie Claire Foundation in the Democratic Republic of Congo, Doctors on Mission International supports Ebola response efforts through contact tracing, community engagement, disease surveillance, emergency response, treatment support, isolation centres, and collaboration with health authorities.",
    image: "/img/ebola-response.jpeg",
    alt: "Ebola emergency response work in the community",
    layout: "lg:col-span-3 lg:row-span-2",
    type: "image",
  },
  {
    title: "Medical & Surgical Missions",
    description:
      "We conduct monthly and quarterly medical and surgical outreach missions, providing essential healthcare services to vulnerable communities with limited access to medical care.",
    image: "/img/upcoming-programs-1.jpg",
    alt: "Medical team providing care during an outreach mission",
    layout: "lg:col-span-3",
    type: "gold",
  },
  {
    title: "Humanitarian Medical Relief",
    description:
      "Working together with our partners, we respond to humanitarian medical needs and emergencies, delivering essential healthcare services to communities affected by crises.",
    image: "/img/3daymedcamp.jpg",
    alt: "Humanitarian medical relief outreach",
    layout: "lg:col-span-3 lg:row-span-2",
    type: "image",
  },
  {
    title: "Satellite Hospitals Network",
    description:
      "Through our Satellite Hospitals Program, we partner with healthcare facilities to expand access to specialist and surgical care for vulnerable communities.",
    image: "/img/about-5.jpg",
    alt: "Partner healthcare facility supporting specialist care",
    layout: "lg:col-span-3",
    type: "navy",
  },
  {
    title: "Volunteer Medical Programs",
    description:
      "We provide opportunities for healthcare professionals from around the world to volunteer in Africa, using their skills and expertise to transform lives and strengthen healthcare delivery.",
    image: "/img/volunteers.jpg",
    alt: "Volunteer medical professionals working together",
    layout: "lg:col-span-6",
    type: "wide",
  },
];

const cardClasses = {
  gold: "bg-[color:var(--brand-secondary)]",
  navy: "bg-[color:var(--brand-primary)]",
};

function ExploreImpactSection() {
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
            From emergency response to lasting partnerships, our programmes
            bring compassionate healthcare closer to communities across Africa.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:auto-rows-[17rem] lg:grid-cols-12">
          {impactAreas.map((area) => {
            if (area.type === "image") {
              return (
                <article
                  key={area.title}
                  className={`group relative min-h-[22rem] overflow-hidden rounded-[16px] border border-[color:var(--line)] ${area.layout}`}
                >
                  <Image
                    src={area.image}
                    alt={area.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-primary)] via-[color:var(--brand-primary)]/50 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-secondary)]">
                      Impact area
                    </p>
                    <h3 className="mt-2 text-xl leading-tight text-white sm:text-2xl">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">
                      {area.description}
                    </p>
                  </div>
                </article>
              );
            }

            if (area.type === "wide") {
              return (
                <article
                  key={area.title}
                  className={`group relative min-h-[22rem] overflow-hidden rounded-[16px] border border-[color:var(--line)] ${area.layout}`}
                >
                  <Image
                    src={area.image}
                    alt={area.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--brand-primary)] via-[color:var(--brand-primary)]/70 to-transparent" />
                  <div className="relative flex h-full max-w-lg flex-col justify-end p-6 sm:p-7">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-secondary)]">
                      Impact area
                    </p>
                    <h3 className="mt-2 text-xl leading-tight text-white sm:text-2xl">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">
                      {area.description}
                    </p>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={area.title}
                className={`relative flex min-h-[17rem] flex-col justify-between overflow-hidden rounded-[16px] border border-[color:var(--line)] p-6 sm:p-7 ${area.layout} ${cardClasses[area.type]}`}
              >
                <div className="absolute -bottom-14 -right-14 h-48 w-48 rounded-full border border-white/20" />
                <div className="absolute -bottom-24 -right-4 h-48 w-48 rounded-full border border-white/20" />
                <div className="relative">
                  <p className={`text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${area.type === "navy" ? "text-[color:var(--brand-secondary)]" : "text-[color:var(--ink)]/70"}`}>
                    Impact area
                  </p>
                  <h3 className={`mt-4 text-xl leading-tight sm:text-2xl ${area.type === "navy" ? "text-white" : "!text-[color:var(--ink)]"}`}>
                    {area.title}
                  </h3>
                </div>
                <p className={`relative mt-5 text-sm leading-relaxed ${area.type === "navy" ? "text-white/80" : "text-[color:var(--ink-soft)]"}`}>
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExploreImpactSection;
