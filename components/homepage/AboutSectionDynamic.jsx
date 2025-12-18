"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getAboutContent } from "@/lib/firestore";

const defaultContent = {
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
};

const borderColors = [
  "border-[#10C0DE]",
  "border-[#A1CB4A]",
  "border-[#FF126B]",
];

function AboutSection() {
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    const loadContent = async () => {
      const data = await getAboutContent();
      if (data) {
        setContent({ ...defaultContent, ...data });
      }
    };
    loadContent();
  }, []);

  return (
    <section className="bg-[#F8FAFC] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Text + Two Cards + CTA */}
          <div className="space-y-10 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053759] mb-4">
                {content.title}
              </h2>
              <p className="text-gray-700">{content.description}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {content.stats?.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-md px-6 py-8 border-t-4 ${
                    borderColors[index % borderColors.length]
                  } text-center md:text-left`}
                >
                  <h3 className="text-5xl font-extrabold text-[#053759] mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-sm font-medium text-[#045D42] uppercase">
                    {stat.label}
                  </p>
                  <p className="mt-4 text-gray-600 text-sm">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#read-more"
                className="inline-block px-6 py-3 rounded-md border border-[#10C0DE] text-[#10C0DE] font-semibold hover:bg-[#10C0DE] hover:text-white transition"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="max-w-xl mx-auto md:mx-0">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={content.image || "/img/who-we-are.jpg"}
                alt="Doctors on mission banner"
                width={800}
                height={533}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
