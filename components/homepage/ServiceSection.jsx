import React from "react";
import {
  FaStethoscope,
  FaClinicMedical,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaAmbulance,
  FaBookMedical,
} from "react-icons/fa";

function ServiceSection() {
  const services = [
    {
      icon: <FaStethoscope className="text-white text-2xl" />,
      title: "Medical Missions",
    },
    {
      icon: <FaClinicMedical className="text-white text-2xl" />,
      title: "Satellite Health Facilities (Resource-Limited Settings)",
    },
    {
      icon: <FaChalkboardTeacher className="text-white text-2xl" />,
      title: "Training",
    },
    {
      icon: <FaHandsHelping className="text-white text-2xl" />,
      title: "Christian Outreach Missions",
    },
    {
      icon: <FaAmbulance className="text-white text-2xl" />,
      title: "Emergency Humanitarian Relief",
    },
    {
      icon: <FaBookMedical className="text-white text-2xl" />,
      title: "Research studies and assessments",
    },
  ];

  return (
    <section className="bg-[#EABF4E] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#045D42] rounded-lg p-5 shadow-md hover:shadow-lg transition"
            >
              <div className="p-3 bg-[#10C0DE] rounded-full">
                {service.icon}
              </div>
              <p className="text-white text-sm md:text-base font-medium">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
