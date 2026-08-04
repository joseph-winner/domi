"use client";

import { Fragment, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { getPageOrder, getCustomSections } from "@/lib/firestore";
import CustomSection from "./CustomSection";
import ExploreImpactSection from "./ExploreImpactSection";
import UpcomingMissionsSection from "./UpcomingMissionsSection";

// Lazy load built-in sections
const BUILT_IN_COMPONENTS = {
  hero: dynamic(() => import("./HeroSection"), { ssr: false }),
  missions: dynamic(() => import("./MissionsSection"), { ssr: false }),
  calltoaction: dynamic(() => import("./CalltoAction"), { ssr: false }),
  about: dynamic(() => import("./AboutSection"), { ssr: false }),
  video: dynamic(() => import("./VideoSection"), { ssr: false }),
  services: dynamic(() => import("./ServiceSection"), { ssr: false }),
  message: dynamic(() => import("./MessageSection"), { ssr: false }),
  medicalcamp: dynamic(() => import("./MedicalCampSection"), { ssr: false }),
  works: dynamic(() => import("./WorksSection"), { ssr: false }),
  fundraising: dynamic(() => import("./FundraisingSection"), { ssr: false }),
  programs: dynamic(() => import("./ProgramsSection"), { ssr: false }),
};

export default function DynamicHomePage() {
  const [pageOrder, setPageOrder] = useState([]);
  const [customSections, setCustomSections] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContent();
  }, []);

  async function loadContent() {
    try {
      const [order, sections] = await Promise.all([
        getPageOrder(),
        getCustomSections(),
      ]);

      // Create a map of custom sections by ID
      const sectionsMap = {};
      sections.forEach((section) => {
        sectionsMap[section.id] = section;
      });

      setPageOrder(order);
      setCustomSections(sectionsMap);
    } catch (error) {
      console.error("Error loading page content:", error);
      // Fallback to default order
      setPageOrder([
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
      ]);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#912923]"></div>
      </div>
    );
  }

  return (
    <div>
      {pageOrder.map((section) => {
        // Skip disabled sections
        if (!section.enabled) return null;

        // Render built-in section
        if (section.type === "built-in") {
          const Component = BUILT_IN_COMPONENTS[section.id];
          if (Component) {
            if (section.id === "message") {
              return (
                <Fragment key={`built-in-${section.id}`}>
                  <Component />
                  <ExploreImpactSection />
                  <UpcomingMissionsSection />
                </Fragment>
              );
            }
            return <Component key={`built-in-${section.id}`} />;
          }
          return null;
        }

        // Render custom section
        if (section.type === "custom") {
          const customSection = customSections[section.id];
          if (customSection && customSection.enabled !== false) {
            return (
              <CustomSection
                key={`custom-${section.id}`}
                section={customSection}
              />
            );
          }
          return null;
        }

        return null;
      })}
    </div>
  );
}
