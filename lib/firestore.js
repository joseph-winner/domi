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
};

// Generic get/set functions
async function getContent(collectionName) {
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

// Gallery functions
export async function getGalleryItems() {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.GALLERY));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting gallery:", error);
    return [];
  }
}

export async function addGalleryItem(item) {
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
  try {
    await deleteDoc(doc(db, COLLECTIONS.GALLERY, id));
    return { success: true };
  } catch (error) {
    console.error("Error deleting gallery item:", error);
    return { success: false, error: error.message };
  }
}

// Site settings
export async function getSiteSettings() {
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
  try {
    const querySnapshot = await getDocs(
      collection(db, COLLECTIONS.CUSTOM_SECTIONS)
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
  try {
    const docRef = doc(db, "content", COLLECTIONS.PAGE_ORDER);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().sections || [];
    }
    // Default page order
    return [
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
  } catch (error) {
    console.error("Error getting page order:", error);
    return [];
  }
}

// Set page section order
export async function setPageOrder(sections) {
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
