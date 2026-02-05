const missions = [
  {
    slug: "holy-innocents-surgical-camp",
    title: "Surgical Camp at Holy Innocents Children's Hospital",
    location: "Mbarara, Uganda",
    date: "7 Days • Paediatric Surgical Camp",
    image: "/img/upcoming-programs-1.jpg",
    excerpt:
      "In partnership with Holy Innocents Children's Hospital, we hosted a week-long paediatric surgical camp focused on safe surgery, compassionate care, and restoring hope for children and families.",
    overview:
      "Surgeons, anesthetists, nurses, and volunteers partnered with local clinicians to provide life‑saving procedures and post‑op follow‑up for children who otherwise lacked access to care.",
    impact: [
      "200+ children assessed for surgical care",
      "Multi‑disciplinary team of local and visiting clinicians",
      "Post‑operative follow‑up and caregiver education",
    ],
    partners: [
      "Holy Innocents Children's Hospital",
      "Children's Surgery International",
      "Local district health teams",
    ],
  },
  {
    slug: "rurama-medical-camp",
    title: "Medical Camp at Rurama Health Centre II, Mitooma District",
    location: "Mitooma, Uganda",
    date: "2 Days • Community Medical Camp",
    image: "/img/upcoming-programs%20-2.jpg",
    excerpt:
      "Together with local partners, we conducted a community medical camp providing consultations, basic labs, treatment, and referrals for underserved families.",
    overview:
      "Our teams delivered general outpatient care, basic laboratory testing, health education, and referrals to higher facilities for complex cases.",
    impact: [
      "Hundreds of community members consulted",
      "Health education sessions for caregivers",
      "Referrals coordinated for complex cases",
    ],
    partners: ["Mitooma District Health Office", "Local churches"],
  },
  {
    slug: "kibuuku-christian-medical-mission",
    title:
      "Kibuuku Christian Medical Mission at Bulangira Health Center III, Kibuuku District",
    location: "Kibuuku, Uganda",
    date: "Community Outreach",
    image: "/img/upcoming-programs.jpg",
    excerpt:
      "A Christian medical mission serving families in Kibuuku District through consultations, health education, and essential medicines.",
    overview:
      "Medical teams partnered with local leadership to provide screenings, treatment, and ongoing community health education.",
    impact: [
      "Primary care consultations",
      "Maternal and child health education",
      "Community follow‑ups coordinated with local clinics",
    ],
    partners: ["Bulangira Health Center III", "Local faith leaders"],
  },
  {
    slug: "nungamo-christian-medical-mission",
    title:
      "Nungamo Christian Medical Mission at Rwashamaire Health Center IV, Isingiro District",
    location: "Isingiro, Uganda",
    date: "Community Outreach",
    image: "/img/volunteers.jpg",
    excerpt:
      "A collaborative mission providing general medicine, triage support, and referral pathways to communities in Isingiro District.",
    overview:
      "Clinicians and volunteers worked alongside local providers to expand access to basic medical care and screenings.",
    impact: [
      "Expanded access to primary care",
      "Screenings for common conditions",
      "Referrals and follow‑up planning",
    ],
    partners: ["Rwashamaire Health Center IV", "Local district leaders"],
  },
  {
    slug: "kajara-county-outreach",
    title: "Kajara County Outreach, Ntungamo District",
    location: "Ntungamo, Uganda",
    date: "Community Outreach",
    image: "/img/3daymedcamp.jpg",
    excerpt:
      "Serving communities in south‑western Uganda with mobile clinics, health talks, and basic treatment services.",
    overview:
      "Our mobile outreach teams provide consultations, basic diagnostics, and health education in hard‑to‑reach communities.",
    impact: [
      "Mobile clinic days across multiple villages",
      "Health education and prevention campaigns",
      "Local clinic capacity support",
    ],
    partners: ["Ntungamo District Health Office", "Community health workers"],
  },
  {
    slug: "kisoro-christian-medical-mission",
    title:
      "Kisoro Christian Medical Mission at Busanza Health Center IV, Kisoro District",
    location: "Kisoro, Uganda",
    date: "Community Outreach",
    image: "/img/partnerships.jpg",
    excerpt:
      "Medical mission supporting families in Kisoro District through consultations, medication, and referrals.",
    overview:
      "Our team partners with local clinicians to deliver compassionate care and ensure continuity through referrals and follow‑up.",
    impact: [
      "Primary care and triage support",
      "Medication distribution where needed",
      "Follow‑up pathways for chronic care",
    ],
    partners: ["Busanza Health Center IV", "Kisoro District partners"],
  },
  {
    slug: "ibanda-christian-medical-mission",
    title:
      "Ibanda Christian Medical Mission at Rukooko Health Center IV, Ibanda District",
    location: "Ibanda, Uganda",
    date: "Community Outreach",
    image: "/img/support-1.jpg",
    excerpt:
      "A community‑centered mission delivering consultations, health education, and referral support in Ibanda District.",
    overview:
      "Working with local health workers, we provide essential care, preventive education, and referral coordination for complex cases.",
    impact: [
      "Community consultations and triage",
      "Health education for families",
      "Referral support for advanced care",
    ],
    partners: ["Rukooko Health Center IV", "Local community leaders"],
  },
];

const getMissionBySlug = (slug) =>
  missions.find((mission) => mission.slug === slug);

export { missions, getMissionBySlug };
