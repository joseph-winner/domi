import AboutSection from "@/components/homepage/AboutSection";
import CalltoAction from "@/components/homepage/CalltoAction";
import FundraisingSection from "@/components/homepage/FundraisingSection";
import HeroSection from "@/components/homepage/HeroSection";
import MedicalCampSection from "@/components/homepage/MedicalCampSection";
import MessageSection from "@/components/homepage/MessageSection";
import MissionsSection from "@/components/homepage/MissionsSection";
import ServiceSection from "@/components/homepage/ServiceSection";
import VideoSection from "@/components/homepage/VideoSection";
import WorksSection from "@/components/homepage/WorksSection";
import React from "react";

function page() {
  return (
    <div>
      <HeroSection />
      <MissionsSection />
      <CalltoAction />
      <AboutSection />
      <VideoSection />
      <ServiceSection />
      <MessageSection />
      <MedicalCampSection />
      <WorksSection />
      <FundraisingSection />
    </div>
  );
}

export default page;
