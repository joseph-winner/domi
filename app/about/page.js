"use client";
import Banner from "@/layout/Banner";
import React from "react";
import Image from "next/image";
import {
  FaHeart,
  FaEye,
  FaStar,
  FaUsers,
  FaArrowRight,
  FaUserMd,
  FaGlobeAfrica,
  FaHandHoldingHeart,
  FaStethoscope,
} from "react-icons/fa";

function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <Banner
        title="About Us"
        subtitle="Bringing healing to communities while serving God"
      />

      {/* Impact Stats Section */}
      <section className="relative -mt-16 z-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  icon: FaUserMd,
                  value: "50+",
                  label: "Medical Volunteers",
                  color: "#0086bf",
                },
                {
                  icon: FaGlobeAfrica,
                  value: "10+",
                  label: "Communities Served",
                  color: "#ebbe4d",
                },
                {
                  icon: FaHandHoldingHeart,
                  value: "5000+",
                  label: "Lives Impacted",
                  color: "#0086bf",
                },
                {
                  icon: FaStethoscope,
                  value: "20+",
                  label: "Medical Camps",
                  color: "#ebbe4d",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <stat.icon
                      className="text-2xl"
                      style={{ color: stat.color }}
                    />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="inline-block px-4 py-2 bg-[#0086bf]/10 text-[#0086bf] text-sm font-semibold rounded-full mb-4">
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                  Who we{" "}
                  <span className="bg-gradient-to-r from-[#0086bf] to-[#00a5e0] bg-clip-text text-transparent">
                    are.
                  </span>
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-[#0086bf] to-[#ebbe4d] rounded-full mt-4"></div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                <span className="font-bold text-[#0086bf]">
                  Doctors on Mission International
                </span>{" "}
                is a volunteer-based non-profit organization uniting like-minded
                Christian medical teams with the aim of serving humanity with
                freely accessible, acceptable, and reliable medical and surgical
                care to reduce the burden of healthcare on communities while
                serving God and bringing healing to those in need.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Founded in{" "}
                <span className="font-semibold text-gray-800">2023</span>,
                Doctors on Mission International unites like-minded Christian
                medical teams to provide quality medical care to underserved
                communities while serving God and bringing healing to those in
                need.
              </p>

              {/* Mission Statement Banner */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0086bf] to-[#00a5e0] rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-r from-[#0086bf] to-[#00a5e0] p-8 md:p-10 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-500">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
                  <p className="text-white text-xl md:text-2xl font-medium leading-relaxed relative z-10">
                    "We aim to enable free access to universal healthcare to all
                    communities while bringing healing and bridging the gap to
                    healthcare needs."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0086bf]/20 to-[#ebbe4d]/20 rounded-[2rem] blur-2xl"></div>

                <div className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/img/who-we-are.jpg"
                    alt="Medical care for children"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating accent cards */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#ebbe4d]/20 rounded-xl flex items-center justify-center">
                      <FaHeart className="text-[#ebbe4d] text-xl" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Faith-Driven</p>
                      <p className="text-sm text-gray-500">Serving with love</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-[#0086bf] to-[#00a5e0] rounded-2xl p-5 shadow-xl text-white animate-float delay-1000">
                  <p className="text-3xl font-black">2023</p>
                  <p className="text-sm text-white/80">Est. Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Cards */}
      <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0086bf]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ebbe4d]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#ebbe4d]/10 text-[#ebbe4d] text-sm font-semibold rounded-full mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
              Our Foundation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Our Mission */}
            <div>
              <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-[#0086bf]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0086bf]/10 to-transparent rounded-bl-[100px] transition-all duration-500 group-hover:w-40 group-hover:h-40"></div>
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0086bf] to-[#00a5e0] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-[#0086bf]/25">
                    <FaHeart className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To enable free access to universal healthcare to all
                    communities while bringing healing to communities and
                    bridging the gap to healthcare needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Vision */}
            <div>
              <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-[#ebbe4d]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ebbe4d]/10 to-transparent rounded-bl-[100px] transition-all duration-500 group-hover:w-40 group-hover:h-40"></div>
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#ebbe4d] to-[#f5d76e] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-[#ebbe4d]/25">
                    <FaEye className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Uniting Christian medical teams with skills & training to
                    provide free quality, accessible and acceptable medical care
                    to low limited settings and conflict-stricken communities
                    with lifesaving healthcare.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-[#0086bf]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0086bf]/10 to-transparent rounded-bl-[100px] transition-all duration-500 group-hover:w-40 group-hover:h-40"></div>
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0086bf] to-[#00a5e0] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-[#0086bf]/25">
                    <FaStar className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Core Values
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      "Faith",
                      "Love",
                      "Volunteerism",
                      "Integrity",
                      "Teamwork",
                      "Results-Oriented",
                    ].map((value, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-[#0086bf] hover:text-white transition-colors duration-300 cursor-default"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Team Leader */}
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#ebbe4d] via-[#f5d76e] to-[#ebbe4d] relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-gray-800 text-sm font-semibold rounded-full mb-4">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Message from our Team Leader
            </h2>
            <div className="h-1.5 w-24 bg-white rounded-full mx-auto shadow-sm"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Message Content */}
            <div>
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/50 relative">
                {/* Quote decoration */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0086bf] rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl font-serif">"</span>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6 pt-4">
                  <span className="font-bold text-[#0086bf]">
                    Greetings from Doctors on Mission International
                  </span>
                  —a volunteer-based non-profit organization with an aim of
                  being a pillar of medical missions in resource-limited
                  settings. We champion community-based healthcare provision
                  through tailor-made community programs.
                </p>

                <div className="space-y-4 mb-6">
                  {[
                    {
                      title: "Limited access to healthcare services",
                      desc: "Uganda healthcare system is still struggling to provide access to basic healthcare services, especially in rural areas.",
                    },
                    {
                      title: "High disease burden",
                      desc: "Uganda has a high prevalence of infectious diseases such as malaria, HIV/AIDS, and tuberculosis.",
                    },
                    {
                      title: "Inadequate healthcare financing",
                      desc: "Uganda's healthcare system is underfunded with inadequate resources allocated to health.",
                    },
                    {
                      title: "Poor health infrastructure",
                      desc: "The country's health infrastructure is inadequate, with a shortage of hospitals and medical equipment.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#0086bf]/5 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-[#0086bf] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-gray-800">
                          {item.title}:
                        </span>{" "}
                        <span className="text-gray-600 text-sm">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Doctors on Mission International aims to bridge the healthcare
                  gap in rural settings through Christian-based medical
                  missions. I encourage you to partner with us in making this
                  vision a reality. May God richly bless you as you consider
                  donating to support this transformative work in Africa.
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0086bf] to-[#00a5e0] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    PM
                  </div>
                  <div>
                    <p className="text-[#0086bf] font-bold text-lg">
                      Dr Mulyamboga Paul
                    </p>
                    <p className="text-gray-500 text-sm">
                      Team Leader, Doctors on Mission International
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Leader Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-r from-white/30 to-white/10 rounded-[2rem] blur-xl"></div>
                <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/img/team-leader.jpg"
                    alt="Dr Mulyamboga Paul - Team Leader"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                {/* Decorative card */}
                <div className="absolute -bottom-4 -right-4 md:-right-8 bg-white rounded-2xl p-5 shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0086bf]/10 rounded-xl flex items-center justify-center">
                      <FaHandHoldingHeart className="text-[#0086bf]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Committed to</p>
                      <p className="text-sm font-bold text-gray-800">
                        Christian Medical Missions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work in the Community */}
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#0086bf]/10 text-[#0086bf] text-sm font-semibold rounded-full mb-4">
              Making An Impact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Our work in the{" "}
              <span className="bg-gradient-to-r from-[#0086bf] to-[#ebbe4d] bg-clip-text text-transparent">
                community
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#0086bf] to-[#ebbe4d] rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Our Partnerships */}
            <div className="group">
              <div className="h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/img/partnerships.jpg"
                    alt="Our Partnerships"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      Collaborations
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0086bf] transition-colors">
                    Our Partnerships
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    Partnering with Holy Innocents Children's Hospital and
                    Children's Surgery International, Doctors on Mission
                    International participated in a week-long children's
                    surgical camp aimed at providing life-saving surgical
                    procedures to over 200 children in southwestern Uganda.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#0086bf] font-semibold hover:gap-4 transition-all duration-300 group/link"
                  >
                    View Programs
                    <FaArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Volunteers */}
            <div className="group">
              <div className="h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/img/volunteers.jpg"
                    alt="Volunteers"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-[#ebbe4d]/80 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                      Join Our Team
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0086bf] transition-colors">
                    Volunteers
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    One of our volunteers building rapport with a patient
                    awaiting surgery at a recently concluded surgical camp at
                    Holy Innocents Children's Hospital, Mbarara, Uganda. Doctors
                    on Mission International champions medical outreach to
                    resource-limited settings to provide life-changing
                    healthcare.
                  </p>
                  <a
                    href="/volunteer"
                    className="inline-flex items-center gap-2 text-[#0086bf] font-semibold hover:gap-4 transition-all duration-300 group/link"
                  >
                    Join Team
                    <FaArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Trainings */}
            <div className="group">
              <div className="h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/img/trainings.jpg"
                    alt="Trainings"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      Education
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0086bf] transition-colors">
                    Trainings
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    Doctors on Mission International partnered with Hautement
                    Smile Uganda, a locally-based organization, to provide
                    training support for health workers in Mbarara District,
                    aimed at increasing awareness of new treatment guidelines
                    for childhood illnesses.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#0086bf] font-semibold hover:gap-4 transition-all duration-300 group/link"
                  >
                    View Programs
                    <FaArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#0a1628] via-[#122140] to-[#0a1628] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0086bf]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ebbe4d]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white/80 text-sm font-semibold rounded-full mb-4">
              Watch Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Gulu Medical Camp{" "}
              <span className="bg-gradient-to-r from-[#0086bf] to-[#ebbe4d] bg-clip-text text-transparent">
                Ogul Village
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Get insights and inspiration from this featured video showcasing
              our impact.
            </p>
          </div>

          {/* Video Embed */}
          <div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0086bf]/20 to-[#ebbe4d]/20 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/your-video-id"
                  title="Gulu Medical camp Ogul Village 2023"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Video Navigation Dots */}
          <div className="flex justify-center gap-3 mt-10">
            <span className="w-3 h-3 rounded-full bg-white cursor-pointer shadow-lg shadow-white/25"></span>
            <span className="w-3 h-3 rounded-full bg-white/30 cursor-pointer hover:bg-white/60 transition-all duration-300 hover:scale-125"></span>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#0086bf]/5 to-[#ebbe4d]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#0086bf]/10 text-[#0086bf] text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
              Doctors on Mission International
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Our Trusted{" "}
              <span className="bg-gradient-to-r from-[#0086bf] to-[#ebbe4d] bg-clip-text text-transparent">
                Partners
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#0086bf] to-[#ebbe4d] rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mempal Medical Services */}
            <div>
              <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-[#0086bf]/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0086bf] to-[#00a5e0] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="h-24 flex items-center justify-center mb-6">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                    <h4 className="text-3xl font-black bg-gradient-to-r from-[#0086bf] to-[#00a5e0] bg-clip-text text-transparent">
                      MEMPAL
                    </h4>
                    <p className="text-xs text-gray-500 font-medium">
                      Medical Services
                    </p>
                    <p className="text-xs text-[#ebbe4d] font-semibold mt-1">
                      Your Health, Our Priority
                    </p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                  Mempal Medical Services
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Founded in September 2020, Mempal Medical Services was
                  registered and launched as a community-based healthcare
                  facility with the primary aim of providing healthcare services
                  to communities in southwestern Uganda where Doctors on Mission
                  primarily operates.
                </p>
              </div>
            </div>

            {/* Hautement Smile Uganda */}
            <div>
              <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-[#ebbe4d]/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ebbe4d] to-[#f5d76e] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="h-24 flex items-center justify-center mb-6">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                    <h4 className="text-2xl font-black bg-gradient-to-r from-[#0086bf] to-[#00a5e0] bg-clip-text text-transparent">
                      HAUTEMENT
                    </h4>
                    <p className="text-xl font-bold text-[#ebbe4d]">
                      SMILE UGANDA
                    </p>
                    <p className="text-xs text-gray-500 font-medium mt-1">
                      Haven's health is Our Heart
                    </p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                  Hautement Smile Uganda
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  A volunteer-run, community-based organization operating in
                  southwestern Uganda, Mbarara District, with the aim of
                  increasing accessibility to women's healthcare services
                  through community-based interventions. They work through
                  outreach care and tailored community programs.
                </p>
              </div>
            </div>

            {/* Holy Innocents Children's Hospital */}
            <div>
              <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-[#0086bf]/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0086bf] to-[#00a5e0] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="h-24 flex items-center justify-center mb-6">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0086bf] to-[#00a5e0] rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                      <span className="text-white text-2xl">✚</span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-800">
                      Holy Innocents
                    </h4>
                    <p className="text-xs text-gray-500">Children's Hospital</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                  Holy Innocents Children's Hospital
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Holy Innocents Children's Hospital is a faith-based,
                  non-partisan, church-owned hospital with the aim of being a
                  center of excellence in pediatric care in Uganda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#0086bf] via-[#0086bf] to-[#00a5e0] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ebbe4d]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-semibold rounded-full mb-6">
            Make A Difference Today
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Join Us in{" "}
            <span className="text-[#ebbe4d]">Transforming Lives</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with Doctors on Mission International to bring hope and
            healing to communities in need. Your support can transform lives and
            create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/support"
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#ebbe4d] text-gray-900 font-bold rounded-full hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <FaHeart className="mr-2 group-hover:scale-110 transition-transform" />
              Donate Now
            </a>
            <a
              href="/volunteer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white/50 hover:bg-white hover:text-[#0086bf] hover:border-white transition-all duration-300 backdrop-blur-sm"
            >
              <FaUsers className="mr-2 group-hover:scale-110 transition-transform" />
              Become a Volunteer
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
