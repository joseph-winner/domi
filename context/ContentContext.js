"use client";
import { createContext, useContext, useState, useEffect } from "react";
import {
  getHeroContent,
  getAboutContent,
  getMissionsContent,
  getServicesContent,
  getProgramsContent,
  getVideoContent,
  getMedicalCampContent,
  getWorksContent,
  getFundraisingContent,
  getFooterContent,
  getNavbarContent,
  getMessageContent,
} from "@/lib/firestore";

const ContentContext = createContext({});

export const useContent = () => useContext(ContentContext);

export function ContentProvider({ children }) {
  const [content, setContent] = useState({
    hero: null,
    about: null,
    missions: null,
    services: null,
    programs: null,
    video: null,
    medicalCamp: null,
    works: null,
    fundraising: null,
    footer: null,
    navbar: null,
    message: null,
  });
  const [loading, setLoading] = useState(true);

  const fetchAllContent = async () => {
    setLoading(true);
    try {
      const [
        hero,
        about,
        missions,
        services,
        programs,
        video,
        medicalCamp,
        works,
        fundraising,
        footer,
        navbar,
        message,
      ] = await Promise.all([
        getHeroContent(),
        getAboutContent(),
        getMissionsContent(),
        getServicesContent(),
        getProgramsContent(),
        getVideoContent(),
        getMedicalCampContent(),
        getWorksContent(),
        getFundraisingContent(),
        getFooterContent(),
        getNavbarContent(),
        getMessageContent(),
      ]);

      setContent({
        hero,
        about,
        missions,
        services,
        programs,
        video,
        medicalCamp,
        works,
        fundraising,
        footer,
        navbar,
        message,
      });
    } catch (error) {
      console.error("Error fetching content:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAllContent();
  }, []);

  const refreshContent = (section) => {
    fetchAllContent();
  };

  return (
    <ContentContext.Provider value={{ content, loading, refreshContent }}>
      {children}
    </ContentContext.Provider>
  );
}
