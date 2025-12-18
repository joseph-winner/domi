"use client";
import React, { useState, useEffect } from "react";
import {
  FaStethoscope,
  FaClinicMedical,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaAmbulance,
  FaBookMedical,
  FaHeart,
  FaPray,
  FaUsers,
} from "react-icons/fa";
import { getServicesContent } from "@/lib/firestore";

const iconMap = {
  FaStethoscope,
  FaClinicMedical,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaAmbulance,
  FaBookMedical,
  FaHeart,
  FaPray,
  FaUsers,
};

const defaultContent = {
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
};

function ServiceSectionDynamic() {
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    const loadContent = async () => {
      const data = await getServicesContent();
      if (data) {
        setContent({ ...defaultContent, ...data });
      }
    };
    loadContent();
  }, []);

  const services = content.items || defaultContent.items;

  return (
    <section className="bg-[#EABF4E] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#053759] mb-4">
          {content.title}
        </h2>
        <div className="h-1 w-24 bg-[#053759] mx-auto rounded-full mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || FaStethoscope;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white/10 backdrop-blur rounded-2xl hover:bg-white/20 transition group"
              >
                <div className="w-16 h-16 rounded-full bg-[#053759] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="text-white text-2xl" />
                </div>
                <p className="text-[#053759] font-semibold text-sm text-center">
                  {service.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceSectionDynamic;
