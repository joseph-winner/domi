import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";

// Collection names
const COLLECTIONS = {
  HERO: "hero",
  ABOUT: "about",
  MISSIONS: "missions",
  SERVICES: "services",
  PROGRAMS: "programs",
  VIDEO: "video",
  MEDICAL_CAMP: "medicalCamp",
  WORKS: "works",
  FUNDRAISING: "fundraising",
  FOOTER: "footer",
  NAVBAR: "navbar",
  MESSAGE: "message",
  GALLERY: "gallery",
  SETTINGS: "settings",
  CUSTOM_SECTIONS: "customSections",
  PAGE_ORDER: "pageOrder",
  BLOGS: "blogs",
  PAGES: "pages",
  MISSIONS_LIST: "missionsList",
};

// Default content for each section
const defaultContent = {
  hero: {
    slides: [
      {
        image: "/img/main-slide1.jpg",
        verse: "Isaiah 53:5",
        text: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was upon him, and by his wounds we are healed.",
      },
      {
        image: "/img/main-slide-2.jpg",
        verse: "Matthew 25:40",
        text: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was upon him, and by his wounds we are healed.",
      },
      {
        image: "/img/slider-3.jpg",
        verse: "Proverbs 19:17",
        text: "We aim to enable free access to universal healthcare to all communities while bringing healing to communities and bridging the gap to healthcare needs.",
      },
    ],
    tagline: { primary: "Spirited", secondary: "to Care" },
    title: "Doctors On Mission",
    titleHighlight: "International",
    subtitle:
      "Extending hope-giving healthcare and faith-filled compassion to the underserved communities around the world.",
  },
  about: {
    title: "Who We Are",
    description:
      "Doctor's on Mission International is a volunteer-based non-for-profit organization uniting like-minded Christian medical teams with the aim of serving humanity through freely accessible, acceptable, and reliable medical and surgical care. Our goal is to reduce the burden on medical care within communities while serving God and bringing healing to those in need.",
    stats: [
      {
        number: "2023",
        label: "Founded",
        description:
          "Established in 2023 to unite Christian medical teams to deliver hope and healing in underserved communities.",
      },
      {
        number: "+500",
        label: "Lives Touched",
        description:
          "Through free surgeries, outreach clinics, and medical missions across low-resource settings.",
      },
    ],
    image: "/img/who-we-are.jpg",
  },
  missions: {
    cards: [
      {
        icon: "FaBullseye",
        label: "Mission",
        pill: "Why we go",
        title: "Our Mission",
        text: "To enable free access to universal healthcare to all communities, bringing healing and bridging the gap to essential healthcare needs.",
      },
      {
        icon: "FaEye",
        label: "Vision",
        pill: "What we see",
        title: "Our Vision",
        text: "Uniting Christian medical teams with skills and training to provide free, quality and compassionate care in low‑resource and conflict‑stricken communities.",
      },
      {
        icon: "FaHeart",
        label: "Values",
        pill: "How we serve",
        title: "Core Values",
        text: "The posture that shapes every clinic, conversation and community we step into.",
        list: [
          "Faith",
          "Love",
          "Voluntarism",
          "Integrity",
          "Team work",
          "Result oriented",
        ],
      },
    ],
  },
  services: {
    title: "What We Do",
    items: [
      { icon: "FaStethoscope", title: "Medical Missions" },
      {
        icon: "FaClinicMedical",
        title: "Satellite Health Facilities (Resource-Limited Settings)",
      },
      { icon: "FaChalkboardTeacher", title: "Training" },
      { icon: "FaHandsHelping", title: "Christian Outreach Missions" },
      { icon: "FaAmbulance", title: "Emergency Humanitarian Relief" },
      { icon: "FaBookMedical", title: "Research studies and assessments" },
    ],
  },
  programs: {
    programVideo:
      "https://www.youtube.com/embed/pCgwrY99J0I?si=pQ7OAGc9tHiF-07u",
    interviewVideo:
      "https://www.youtube.com/embed/mD-TQ4MvZOU?si=NNKJHdNjFQy1_DIB",
    title: "Doctors on Mission Medical & Surgical Camp",
    description:
      "Doctors on Mission International partners with local leaders, churches, and organizations to deliver compassionate, practical healthcare where access is limited or unavailable.",
    highlights: [
      { label: "Medical & Surgical Outreach", value: "Community-based care" },
      { label: "Services", value: "Medical • Dental • Eye • HIV counseling" },
      { label: "Impact", value: "Serving hundreds in a single camp" },
      {
        label: "Approach",
        value: "Health education • Vaccination • Follow-up care",
      },
    ],
    interviewTitle: "Program interview",
    interviewDescription:
      "Hear directly from the team about our collaborations and how each medical camp is planned, delivered, and sustained in communities across Uganda.",
  },
  video: {
    tagline: "Our Story",
    title: "Welcome to Doctors On Mission International",
    description:
      "Get to know who we are, what we do, and how we serve communities around the world through medical outreach and compassionate care.",
    subtitle: "Watch this short video to see our mission in action.",
    videoId: "your-youtube-video-id",
  },
  medicalCamp: {
    tagline: "Featured recap",
    title: "Completed Medical Camp",
    description:
      "Relive the highlights from our recent outreach camp—stories, impact, and moments of hope brought to communities in need.",
    stats: [
      { label: "Duration", value: "3 days" },
      { label: "Patients", value: "250+" },
      { label: "Volunteers", value: "30+" },
    ],
    videoLink: "#",
    images: [],
  },
  works: {
    items: [
      {
        title: "Our Partnerships",
        desc: "Partnering with Holy Innocent's Children's Hospital and Children's Surgery International, Doctors on Mission International participated in a one-week children's surgical camp aimed at providing life-saving surgical procedures to over 200 children in south western Uganda.",
        cta: "Programs",
        href: "/programs",
        img: "/img/partnerships.jpg",
        pill: "Community",
      },
      {
        title: "Volunteers",
        desc: "Our volunteers build trust with patients and families from triage and counselling to follow-up care.",
        cta: "Join Team",
        href: "/volunteer",
        img: "/img/volunteers.jpg",
        pill: "Get involved",
      },
      {
        title: "Trainings",
        desc: "We provide training and capacity building for local healthcare workers.",
        cta: "Learn More",
        href: "/trainings",
        img: "/img/trainings.jpg",
        pill: "Education",
      },
    ],
  },
  fundraising: {
    title: "Support Our Mission",
    subtitle: "Partner with us to build the Medical Center.",
    description:
      "Your gift today helps move construction, equipment, and care forward in Gulu.",
    goal: 500000,
    raised: 125000,
    projectLead: {
      name: "Dr. John L. LaNoue",
      title: "Project lead",
      location: "Medical Center • Gulu",
      image: "/img/john.webp",
    },
    features: [
      {
        icon: "ShieldCheck",
        title: "Accountable giving",
        desc: "Clear milestones, documented progress, and responsible use of funds.",
        color: "#EABF4E",
      },
      {
        icon: "Users",
        title: "Community-centered",
        desc: "Designed to serve real needs with local collaboration and long-term impact.",
        color: "#A1CB4A",
      },
      {
        icon: "Stethoscope",
        title: "Health services",
        desc: "Supporting care access, equipment, and future staffing readiness.",
        color: "#10C0DE",
      },
    ],
    videos: [
      {
        title: "Site visit, architectural planning, and technical team review",
        note: "See the vision on the ground in Gulu and how your support turns plans into care.",
        youtubeId: "wYSURsLg45U?si=l77yhtVE1RB5J52n",
        tag: "On-site progress",
      },
    ],
  },
  footer: {
    tagline: "Compassionate care. Sustainable impact.",
    description:
      "Partner with us to bring medical outreach, health education, and hope to communities across Uganda and beyond.",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Our Missions", href: "/missions" },
    ],
    workWithUs: [
      { label: "Join Our Team", href: "/join" },
      { label: "Contact Us", href: "/contact" },
      { label: "Donate", href: "/donate" },
    ],
    socials: [
      { label: "X / Twitter", href: "https://twitter.com", icon: "Twitter" },
      { label: "Facebook", href: "https://facebook.com", icon: "Facebook" },
      { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    ],
    email: "info@doctorsonmissionint.org",
    address: "Gulu, Uganda",
  },
  navbar: {
    phone: "+256 782 524 317 | +256 784 808 738",
    companyName: "DOCTORS ON MISSION INT",
    menuItems: [
      { label: "HOME", href: "/" },
      {
        label: "ABOUT",
        dropdown: [
          { label: "Who We Are", href: "/about" },
          { label: "Our Team", href: "/team" },
        ],
      },
      { label: "VOLUNTEER", href: "/volunteer" },
      { label: "SUPPORT A MISSION", href: "/support" },
      {
        label: "NEWS",
        dropdown: [
          { label: "Reports", href: "/reports" },
          { label: "Press", href: "/press" },
        ],
      },
      { label: "CONTACT", href: "/contact" },
    ],
  },
  message: {
    title: "A Message From Our Team",
    content: "",
    author: "",
    authorTitle: "",
  },
  // Static page defaults
  pages_contact: {
    title: "Contact Us",
    org: "Doctors on Mission International",
    description:
      "Get in touch with us to learn more about our mission and how you can get involved.",
    addressLines: [
      "P.O. Box 421315, Mbarara–Isingiro Road",
      "Mbarara City, South-Western Region, Uganda",
    ],
    phones: ["+256 782 524 317", "+256 784 808 738"],
    email: "info@doctorsonmissionint.org",
    website: "www.doctorsonmissionint.org",
    mapQuery: "Mbarara-Isingiro Road, Mbarara, Uganda",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mbarara-Isingiro+Road,+Mbarara,+Uganda",
    scripture: {
      ref: "Mark 1:34",
      text: "…and Jesus healed many who had various diseases. He also drove out many demons, but he would not let the demons speak because they knew who he was.",
    },
    socialLinks: [
      { platform: "Facebook", url: "https://facebook.com/doctorsonmission" },
      { platform: "Twitter", url: "https://twitter.com/doctorsonmission" },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/company/doctorsonmission",
      },
    ],
  },
  pages_volunteer: {
    title: "Volunteer With Us",
    subtitle: "Make a Difference in Global Healthcare",
    description:
      "Join our volunteer team and help bring compassionate, quality healthcare to underserved communities across Uganda.",
    heroImage: "/img/volunteers.jpg",
    quickStats: [
      { label: "Availability", value: "All year round", icon: "CalendarDays" },
      { label: "Locations", value: "Across Uganda", icon: "MapPin" },
      { label: "Age", value: "18+ (families welcome)", icon: "Users" },
      { label: "Language", value: "English", icon: "Globe2" },
    ],
    highlights: [
      "Taking rounds and maintaining files",
      "Assisting caregivers/nurses in daily work",
      "Shadowing and clinical exposure (where permitted)",
      "Assisting patient movement (with staff guidance)",
      "Vaccinations & health talks (based on skill level)",
      "Routine checks like BP, pulse, temperature (as assigned)",
    ],
    services: [
      {
        icon: "Hospital",
        title: "General Medicine",
        desc: "Primary care support & triage workflows.",
      },
      {
        icon: "ShieldPlus",
        title: "Obstetrics & Midwifery",
        desc: "Maternal health support (placement-based).",
      },
      {
        icon: "HeartHandshake",
        title: "Community Outreach",
        desc: "Health education, camps, and mobile clinics.",
      },
      {
        icon: "ClipboardList",
        title: "Medical Records",
        desc: "Filing, documentation, and patient follow-ups.",
      },
    ],
    requirements: [
      {
        title: "Medical Background",
        description:
          "Medical students, nursing students, or healthcare professionals. Some placements accept motivated pre-med students.",
      },
      {
        title: "Age Requirement",
        description:
          "Minimum 18 years old. Families with older children are welcome on select programs.",
      },
      {
        title: "Language",
        description:
          "English proficiency required. Local language training provided where applicable.",
      },
      {
        title: "Commitment",
        description:
          "Minimum 2-week commitment recommended for meaningful impact.",
      },
    ],
    benefits: [
      {
        title: "Hands-on Experience",
        description:
          "Gain practical medical experience in diverse clinical settings.",
      },
      {
        title: "Cultural Immersion",
        description:
          "Live and work alongside local healthcare teams and communities.",
      },
      {
        title: "Professional Development",
        description:
          "Enhance your skills while making a real difference in global health.",
      },
      {
        title: "Certificate",
        description:
          "Receive a volunteer certificate upon completion of your program.",
      },
    ],
  },
  pages_press: {
    title: "Press & Media",
    description:
      "Stay updated with our latest news, press releases, and media coverage highlighting our medical mission work across Uganda.",
    pressReleases: [
      {
        title: "Bring Healing to Northern Uganda — Help Save Lives Today",
        date: "April 5, 2025",
        description:
          "A successful medical camp delivered critical healthcare services to underserved communities in Northern Uganda—supporting screenings, surgeries, lab diagnostics, and health education with local partners.",
        image: "/images/press/press-release-hero.jpg",
        link: "https://doctorsonmissionint.org/",
      },
      {
        title: "Monthly Newsletter — March 2025",
        date: "March 1, 2025",
        description:
          "Medical Missions have huge success across multiple districts in Uganda.",
        image: "/images/press/newsletter-march-2025.jpg",
        link: "https://doctorsonmissionint.org/",
      },
    ],
  },
  pages_jointeam: {
    title: "Join Our Team",
    subtitle: "Be Part of Something Bigger",
    description:
      "We're looking for passionate healthcare professionals and support staff who want to make a lasting impact in global health missions.",
    heroImage: "/img/join-team.jpg",
    programTypes: [
      "Medical Camp (General)",
      "Dental Outreach",
      "Surgical Mission Support",
      "Public Health / Community Education",
      "Clinical Shadowing",
      "Non-Medical Support (Admin/Media/Logistics)",
    ],
    positions: [
      {
        title: "Medical Officer",
        department: "Medical",
        location: "Uganda",
        type: "Full-time / Contract",
        description:
          "Join our team as a medical officer providing primary care and clinical leadership during medical missions.",
        requirements:
          "Medical degree, valid license, 2+ years clinical experience, passion for mission work",
      },
      {
        title: "Registered Nurse",
        department: "Nursing",
        location: "Uganda",
        type: "Full-time / Contract",
        description:
          "Provide nursing care, patient education, and support during medical camps and outreach programs.",
        requirements:
          "RN license, clinical experience, flexibility, team player",
      },
      {
        title: "Project Coordinator",
        department: "Administration",
        location: "Remote / Uganda",
        type: "Full-time",
        description:
          "Coordinate medical mission logistics, partnerships, and program implementation.",
        requirements:
          "Project management experience, healthcare background preferred, excellent communication skills",
      },
    ],
  },
  pages_support: {
    title: "Support a Medical Mission",
    subtitle: "Partner with us to bring healing to underserved communities",
    description:
      "Your support enables us to provide free medical care, surgeries, and health education to thousands of people who lack access to basic healthcare services.",
    heroImage: "/img/support-1.jpg",
    donationMethods: [
      {
        title: "One-Time Donation",
        description:
          "Make a single gift to support an upcoming medical mission or specific program.",
        icon: "HandCoins",
      },
      {
        title: "Monthly Partnership",
        description:
          "Become a monthly partner and provide sustained support for our ongoing work.",
        icon: "HeartHandshake",
      },
      {
        title: "Sponsor a Mission",
        description:
          "Fully sponsor a medical camp and directly impact hundreds of lives.",
        icon: "Stethoscope",
      },
    ],
    outreaches: [
      {
        tag: "Previous Outreach",
        title: "Surgical Camp at Holy Innocents Childrens Hospital",
        location: "Mbarara, Uganda",
        date: "7 Days • Paediatric Surgical Camp",
        excerpt:
          "In partnership with Holy Innocents Childrens Hospital, we hosted a week-long paediatric surgical camp.",
        highlight: '"He took our illnesses and bore our diseases." Isaiah 53:4',
        image: "/img/upcoming-programs-1.jpg",
      },
      {
        tag: "Previous Outreach",
        title: "Medical Camp at Rurama Health Centre II, Mitooma District",
        location: "Mitooma, Uganda",
        date: "2 Days • Community Medical Camp",
        excerpt:
          "Together with local partners, we conducted a community medical camp providing consultations, basic labs, treatment, and referrals.",
        highlight: '"By His stripes, we were healed." 1 Peter 2:24',
        image: "/img/upcoming-programs -2.jpg",
      },
    ],
  },
  pages_report: {
    title: "Annual Reports",
    description:
      "View our annual reports and learn about our impact, financial transparency, and mission achievements.",
    reports: [
      {
        year: "2024",
        title: "Annual Report 2024",
        description:
          "A comprehensive overview of our medical missions, impact metrics, and financial statements for 2024.",
        fileUrl: "/files/annual-report-2024.pdf",
      },
      {
        year: "2023",
        title: "Annual Report 2023",
        description:
          "Our founding year report highlighting initial missions and establishing our presence in Uganda.",
        fileUrl: "/files/annual-report-2023.pdf",
      },
    ],
  },
};

// Generic get/set functions
async function getContent(collectionName) {
  if (!db) {
    console.warn("Firestore not initialized");
    return defaultContent[collectionName] || null;
  }
  try {
    const docRef = doc(db, "content", collectionName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
    return defaultContent[collectionName] || null;
  } catch (error) {
    console.error(`Error getting ${collectionName}:`, error);
    return defaultContent[collectionName] || null;
  }
}

async function setContent(collectionName, data) {
  if (!db) {
    console.warn("Firestore not initialized");
    return { success: false, error: "Firestore not initialized" };
  }
  try {
    const docRef = doc(db, "content", collectionName);
    await setDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error(`Error setting ${collectionName}:`, error);
    return { success: false, error: error.message };
  }
}

// Specific getter functions
export const getHeroContent = () => getContent(COLLECTIONS.HERO);
export const getAboutContent = () => getContent(COLLECTIONS.ABOUT);
export const getMissionsContent = () => getContent(COLLECTIONS.MISSIONS);
export const getServicesContent = () => getContent(COLLECTIONS.SERVICES);
export const getProgramsContent = () => getContent(COLLECTIONS.PROGRAMS);
export const getVideoContent = () => getContent(COLLECTIONS.VIDEO);
export const getMedicalCampContent = () => getContent(COLLECTIONS.MEDICAL_CAMP);
export const getWorksContent = () => getContent(COLLECTIONS.WORKS);
export const getFundraisingContent = () => getContent(COLLECTIONS.FUNDRAISING);
export const getFooterContent = () => getContent(COLLECTIONS.FOOTER);
export const getNavbarContent = () => getContent(COLLECTIONS.NAVBAR);
export const getMessageContent = () => getContent(COLLECTIONS.MESSAGE);

// Specific setter functions
export const setHeroContent = (data) => setContent(COLLECTIONS.HERO, data);
export const setAboutContent = (data) => setContent(COLLECTIONS.ABOUT, data);
export const setMissionsContent = (data) =>
  setContent(COLLECTIONS.MISSIONS, data);
export const setServicesContent = (data) =>
  setContent(COLLECTIONS.SERVICES, data);
export const setProgramsContent = (data) =>
  setContent(COLLECTIONS.PROGRAMS, data);
export const setVideoContent = (data) => setContent(COLLECTIONS.VIDEO, data);
export const setMedicalCampContent = (data) =>
  setContent(COLLECTIONS.MEDICAL_CAMP, data);
export const setWorksContent = (data) => setContent(COLLECTIONS.WORKS, data);
export const setFundraisingContent = (data) =>
  setContent(COLLECTIONS.FUNDRAISING, data);
export const setFooterContent = (data) => setContent(COLLECTIONS.FOOTER, data);
export const setNavbarContent = (data) => setContent(COLLECTIONS.NAVBAR, data);
export const setMessageContent = (data) =>
  setContent(COLLECTIONS.MESSAGE, data);

// Generic page content functions for static pages
export const getPageContent = (pageName) =>
  getContent(`${COLLECTIONS.PAGES}_${pageName}`);
export const setPageContent = (pageName, data) =>
  setContent(`${COLLECTIONS.PAGES}_${pageName}`, data);

// Gallery functions
export async function getGalleryItems() {
  if (!db) return [];
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.GALLERY));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting gallery:", error);
    return [];
  }
}

export async function addGalleryItem(item) {
  if (!db) return { success: false, error: "Firestore not initialized" };
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.GALLERY), {
      ...item,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding gallery item:", error);
    return { success: false, error: error.message };
  }
}

export async function updateGalleryItem(id, item) {
  if (!db) return { success: false, error: "Firestore not initialized" };
  try {
    await updateDoc(doc(db, COLLECTIONS.GALLERY, id), {
      ...item,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating gallery item:", error);
    return { success: false, error: error.message };
  }
}

export async function deleteGalleryItem(id) {
  if (!db) return { success: false, error: "Firestore not initialized" };
  try {
    await deleteDoc(doc(db, COLLECTIONS.GALLERY, id));
    return { success: true };
  } catch (error) {
    console.error("Error deleting gallery item:", error);
    return { success: false, error: error.message };
  }
}

// Missions list functions
export async function getMissionItems() {
  if (!db) return [];
  try {
    const querySnapshot = await getDocs(
      collection(db, COLLECTIONS.MISSIONS_LIST),
    );
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting missions list:", error);
    return [];
  }
}

export async function addMissionItem(item) {
  if (!db) return { success: false, error: "Firestore not initialized" };
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.MISSIONS_LIST), {
      ...item,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding mission item:", error);
    return { success: false, error: error.message };
  }
}

export async function updateMissionItem(id, item) {
  if (!db) return { success: false, error: "Firestore not initialized" };
  try {
    await updateDoc(doc(db, COLLECTIONS.MISSIONS_LIST, id), {
      ...item,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating mission item:", error);
    return { success: false, error: error.message };
  }
}

export async function deleteMissionItem(id) {
  if (!db) return { success: false, error: "Firestore not initialized" };
  try {
    await deleteDoc(doc(db, COLLECTIONS.MISSIONS_LIST, id));
    return { success: true };
  } catch (error) {
    console.error("Error deleting mission item:", error);
    return { success: false, error: error.message };
  }
}

// Site settings
export async function getSiteSettings() {
  if (!db) {
    return {
      siteName: "Doctors On Mission International",
      logo: "/logos/doctors-mission-logo.svg",
      favicon: "/favicon.ico",
      primaryColor: "#0389C3",
      secondaryColor: "#EABF4E",
      accentColor: "#A1CB4A",
    };
  }
  try {
    const docRef = doc(db, "content", COLLECTIONS.SETTINGS);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
    return {
      siteName: "Doctors On Mission International",
      logo: "/logos/doctors-mission-logo.svg",
      favicon: "/favicon.ico",
      primaryColor: "#0389C3",
      secondaryColor: "#EABF4E",
      accentColor: "#A1CB4A",
    };
  } catch (error) {
    console.error("Error getting settings:", error);
    return null;
  }
}

export async function setSiteSettings(settings) {
  if (!db) return { success: false, error: "Firestore not initialized" };
  try {
    const docRef = doc(db, "content", COLLECTIONS.SETTINGS);
    await setDoc(docRef, {
      ...settings,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error setting settings:", error);
    return { success: false, error: error.message };
  }
}

// Initialize content with defaults
export async function initializeContent() {
  if (!db) return { success: false, error: "Firestore not initialized" };
  try {
    for (const [key, value] of Object.entries(defaultContent)) {
      const docRef = doc(db, "content", key);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          ...value,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }
    }
    return { success: true };
  } catch (error) {
    console.error("Error initializing content:", error);
    return { success: false, error: error.message };
  }
}

export { COLLECTIONS, defaultContent };

// ============ CUSTOM SECTIONS (Page Builder) ============

// Get all custom sections
export async function getCustomSections() {
  if (!db) return [];
  try {
    const querySnapshot = await getDocs(
      collection(db, COLLECTIONS.CUSTOM_SECTIONS),
    );
    return querySnapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  } catch (error) {
    console.error("Error getting custom sections:", error);
    return [];
  }
}

// Get single custom section
export async function getCustomSection(id) {
  if (!db) return null;
  try {
    const docRef = doc(db, COLLECTIONS.CUSTOM_SECTIONS, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  } catch (error) {
    console.error("Error getting custom section:", error);
    return null;
  }
}

// Add custom section
export async function addCustomSection(section) {
  if (!db) return { success: false, error: "Firestore not initialized" };
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.CUSTOM_SECTIONS), {
      ...section,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding custom section:", error);
    return { success: false, error: error.message };
  }
}

// Update custom section
export async function updateCustomSection(id, section) {
  if (!db) return { success: false, error: "Firestore not initialized" };
  try {
    await updateDoc(doc(db, COLLECTIONS.CUSTOM_SECTIONS, id), {
      ...section,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating custom section:", error);
    return { success: false, error: error.message };
  }
}

// Delete custom section
export async function deleteCustomSection(id) {
  if (!db) return { success: false, error: "Firestore not initialized" };
  try {
    await deleteDoc(doc(db, COLLECTIONS.CUSTOM_SECTIONS, id));
    return { success: true };
  } catch (error) {
    console.error("Error deleting custom section:", error);
    return { success: false, error: error.message };
  }
}

// ============ PAGE ORDER ============

// Get page section order
export async function getPageOrder() {
  const defaultOrder = [
    { id: "hero", type: "built-in", enabled: true },
    { id: "missions", type: "built-in", enabled: true },
    { id: "calltoaction", type: "built-in", enabled: true },
    { id: "about", type: "built-in", enabled: true },
    { id: "video", type: "built-in", enabled: true },
    { id: "services", type: "built-in", enabled: true },
    { id: "message", type: "built-in", enabled: true },
    { id: "medicalcamp", type: "built-in", enabled: true },
    { id: "works", type: "built-in", enabled: true },
    { id: "fundraising", type: "built-in", enabled: true },
    { id: "programs", type: "built-in", enabled: true },
  ];

  if (!db) return defaultOrder;

  try {
    const docRef = doc(db, "content", COLLECTIONS.PAGE_ORDER);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().sections || [];
    }
    return defaultOrder;
  } catch (error) {
    console.error("Error getting page order:", error);
    return defaultOrder;
  }
}

// Set page section order
export async function setPageOrder(sections) {
  if (!db) return { success: false, error: "Firestore not initialized" };
  try {
    const docRef = doc(db, "content", COLLECTIONS.PAGE_ORDER);
    await setDoc(docRef, {
      sections,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error setting page order:", error);
    return { success: false, error: error.message };
  }
}

// ============ BLOG FUNCTIONS ============

// Get all blogs
export async function getBlogs() {
  if (!db) return [];
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.BLOGS));
    return querySnapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => {
        // Sort by createdAt descending (newest first)
        const aTime = a.createdAt?.toMillis() || 0;
        const bTime = b.createdAt?.toMillis() || 0;
        return bTime - aTime;
      });
  } catch (error) {
    console.error("Error getting blogs:", error);
    return [];
  }
}

// Get single blog by ID
export async function getBlog(id) {
  if (!db) return null;
  try {
    const docRef = doc(db, COLLECTIONS.BLOGS, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  } catch (error) {
    console.error("Error getting blog:", error);
    return null;
  }
}

// Get single blog by slug
export async function getBlogBySlug(slug) {
  if (!db) return null;
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.BLOGS));
    const blogs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return blogs.find((blog) => blog.slug === slug) || null;
  } catch (error) {
    console.error("Error getting blog by slug:", error);
    return null;
  }
}

// Add blog
export async function addBlog(blog) {
  if (!db) return { success: false, error: "Firestore not initialized" };
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.BLOGS), {
      ...blog,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding blog:", error);
    return { success: false, error: error.message };
  }
}

// Update blog
export async function updateBlog(id, blog) {
  if (!db) return { success: false, error: "Firestore not initialized" };
  try {
    await updateDoc(doc(db, COLLECTIONS.BLOGS, id), {
      ...blog,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating blog:", error);
    return { success: false, error: error.message };
  }
}

// Delete blog
export async function deleteBlog(id) {
  if (!db) return { success: false, error: "Firestore not initialized" };
  try {
    await deleteDoc(doc(db, COLLECTIONS.BLOGS, id));
    return { success: true };
  } catch (error) {
    console.error("Error deleting blog:", error);
    return { success: false, error: error.message };
  }
}

// ============ PAGES FUNCTIONS ============

// Get all pages info (routes that are not sections)
export async function getPages() {
  const defaultPages = [
    { id: "about", name: "About", route: "/about", editable: true },
    { id: "contact", name: "Contact", route: "/contact", editable: true },
    { id: "gallery", name: "Gallery", route: "/gallery", editable: true },
    { id: "programs", name: "Programs", route: "/programs", editable: true },
    { id: "support", name: "Support", route: "/support", editable: true },
    { id: "volunteer", name: "Volunteer", route: "/voluteer", editable: true },
    { id: "jointeam", name: "Join Team", route: "/jointeam", editable: true },
    { id: "press", name: "Press", route: "/press", editable: true },
    { id: "report", name: "Reports", route: "/report", editable: true },
  ];

  if (!db) return defaultPages;

  try {
    const docRef = doc(db, "content", COLLECTIONS.PAGES);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().pages || defaultPages;
    }
    return defaultPages;
  } catch (error) {
    console.error("Error getting pages:", error);
    return defaultPages;
  }
}

// Update pages configuration
export async function updatePages(pages) {
  if (!db) return { success: false, error: "Firestore not initialized" };
  try {
    const docRef = doc(db, "content", COLLECTIONS.PAGES);
    await setDoc(docRef, {
      pages,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating pages:", error);
    return { success: false, error: error.message };
  }
}
