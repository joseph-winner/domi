"use client";
import React, { useState, useEffect } from "react";
import {
  FaBullseye,
  FaEye,
  FaHeart,
  FaStar,
  FaHandHoldingHeart,
  FaPray,
} from "react-icons/fa";
import { getMissionsContent } from "@/lib/firestore";

const iconMap = {
  FaBullseye,
  FaEye,
  FaHeart,
  FaStar,
  FaHandHoldingHeart,
  FaPray,
};

const defaultContent = {
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
      text: "Uniting Christian medical teams with skills and training to provide free, quality and compassionate care in low-resource and conflict-stricken communities.",
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
};

function MissionsSectionDynamic() {
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    const loadContent = async () => {
      const data = await getMissionsContent();
      if (data && data.cards) {
        setContent({ ...defaultContent, ...data });
      }
    };
    loadContent();
  }, []);

  const cards = content.cards || defaultContent.cards;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#053759]">
            Our Mission, Vision & Values
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = iconMap[card.icon] || FaHeart;
            return (
              <div
                key={index}
                className="bg-[color:var(--paper)] rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#10C0DE]/10 flex items-center justify-center">
                    <IconComponent className="text-[#10C0DE] text-xl" />
                  </div>
                  <span className="px-3 py-1 bg-[#A1CB4A]/10 text-[#045D42] text-xs font-semibold rounded-full">
                    {card.pill}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#053759] mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.text}
                </p>
                {card.list && card.list.length > 0 && (
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {card.list.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A1CB4A]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MissionsSectionDynamic;
