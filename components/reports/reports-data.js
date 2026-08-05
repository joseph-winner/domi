// Hardcoded PDF library. Files live in /public/files/reports.
// fileUrl is URL-encoded so filenames with spaces resolve correctly.
const f = (name) => `/files/reports/${encodeURIComponent(name)}`;

export const bethelReport = {
  id: "bethel-smile-concept-note",
  title: "Bethel Smile Project — Concept Note",
  subtitle: "Cleft lip & palate programme • Doctors on Mission International",
  description:
    "The full concept note for the Bethel Smile Project, outlining the cleft care model, partnerships, target communities and expected impact across Uganda.",
  category: "Concept Note",
  year: 2026,
  location: "Uganda",
  fileUrl: f("Bethel Smile Project concept note 2.pdf"),
};

export const reports = [
  {
    id: "annual-report-2024",
    title: "Annual Report 2024",
    subtitle: "Impact, programmes and outcomes • Jan – Dec 2024",
    description:
      "A full year of measurable impact — mission highlights, patients served, surgical outcomes and financial transparency across all DOMI programmes.",
    category: "Annual Report",
    year: 2024,
    location: "Uganda",
    fileUrl: f("domi-annual-report-2024.pdf"),
  },
  {
    id: "buhweju-eye-mission",
    title: "Buhweju Eye Surgical Mission",
    subtitle: "Eye surgical camp • Butare Health Centre III, Buhweju",
    description:
      "Outcomes from a week-long eye surgical camp restoring sight through cataract and other ophthalmic procedures for an underserved rural community.",
    category: "Surgical Mission",
    year: 2025,
    location: "Buhweju",
    fileUrl: f("BUHWEJU_EYE_SURGICAL_MISSION_Report.pdf"),
  },
  {
    id: "paediatric-surgical-karamoja",
    title: "Paediatric Surgical Camp — Karamoja",
    subtitle: "Children's surgical outreach • Karamoja sub-region",
    description:
      "A paediatric surgical camp delivering free corrective and general surgery to children in one of Uganda's most remote and underserved regions.",
    category: "Surgical Mission",
    year: 2026,
    location: "Karamoja",
    fileUrl: f("PAEDIATRIC SURGICAL CAMP KARAMOJA Report.pdf"),
  },
  {
    id: "paediatric-orthopedic-napak",
    title: "Paediatric Orthopedic Camp — Napak",
    subtitle: "Orthopaedic outreach • Napak, Karamoja • July 2026",
    description:
      "Corrective orthopaedic assessment and surgery for children with congenital and acquired musculoskeletal conditions in Napak District.",
    category: "Surgical Mission",
    year: 2026,
    location: "Napak",
    fileUrl: f("Pediatric_Orthopedic_Camp_Report_Napak_Karamoja_July_2026.pdf"),
  },
  {
    id: "gulu-medical-camp",
    title: "Gulu Medical Camp Report",
    subtitle: "Community medical camp • Angaya Parish, Gulu",
    description:
      "Screening, treatment and referral outcomes from a community medical camp serving villages across Gulu District.",
    category: "Medical Camp",
    year: 2025,
    location: "Gulu",
    fileUrl: f("Gulu_Medical_Camp_Report_2025.pdf"),
  },
  {
    id: "ogul-medical-mission",
    title: "Ogul Medical Mission",
    subtitle: "Village medical outreach • Ogul, Gulu District",
    description:
      "General consultations, maternal and child health services and health education delivered to the community of Ogul village.",
    category: "Medical Camp",
    year: 2025,
    location: "Ogul, Gulu",
    fileUrl: f("OGUL_MEDICAL_MISSION_report.pdf"),
  },
  {
    id: "cancer-screening-2025",
    title: "Cancer Screening Report 2025",
    subtitle: "Cervical & breast cancer screening outreach",
    description:
      "Findings from a community screening drive for cervical and breast cancer, including detection, counselling and onward referral for treatment.",
    category: "Screening",
    year: 2025,
    location: "Uganda",
    fileUrl: f("CANCER_SCREENING_report_2025.pdf"),
  },
  {
    id: "ituri-ebola-framework",
    title: "Ituri Ebola Response — Operational Framework",
    subtitle: "Emergency response framework • Q3 2026",
    description:
      "The operational framework guiding DOMI's Ebola response — surveillance, contact tracing, community engagement, treatment support and isolation.",
    category: "Emergency Response",
    year: 2026,
    location: "Ituri & Uganda",
    fileUrl: f("Ituri_Ebola_Response_Operational_Framework_Q3_2026_report.pdf"),
  },
  // Bethel concept note also appears in the general library.
  bethelReport,
];

export const reportCategories = [
  "All",
  "Annual Report",
  "Surgical Mission",
  "Medical Camp",
  "Screening",
  "Emergency Response",
  "Concept Note",
];
