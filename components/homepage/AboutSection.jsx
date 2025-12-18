import React from "react";
import Image from "next/image";

function AboutSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Text + Two Cards + CTA */}
          <div className="space-y-10 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053759] mb-4">
                Who We Are
              </h2>
              <p className="text-gray-700">
                Doctor’s on Mission International is a volunteer-based
                non-for-profit organization uniting like-minded Christian
                medical teams with the aim of serving humanity through freely
                accessible, acceptable, and reliable medical and surgical care.
                Our goal is to reduce the burden on medical care within
                communities while serving God and bringing healing to those in
                need.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md px-6 py-8 border-t-4 border-[#10C0DE] text-center md:text-left">
                <h3 className="text-5xl font-extrabold text-[#053759] mb-2">
                  2023
                </h3>
                <p className="text-sm font-medium text-[#045D42] uppercase">
                  Founded
                </p>
                <p className="mt-4 text-gray-600 text-sm">
                  Established in 2023 to unite Christian medical teams to
                  deliver hope and healing in underserved communities.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md px-6 py-8 border-t-4 border-[#A1CB4A] text-center md:text-left">
                <h3 className="text-5xl font-extrabold text-[#053759] mb-2">
                  +500
                </h3>
                <p className="text-sm font-medium text-[#045D42] uppercase">
                  Lives Touched
                </p>
                <p className="mt-4 text-gray-600 text-sm">
                  Through free surgeries, outreach clinics, and medical missions
                  across low-resource settings.
                </p>
              </div>
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
                src="/img/who-we-are.jpg"
                alt="Doctors on mission banner"
                width={800}
                height={533}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Full-width third card below the image */}
        {/* <div className="mt-10">
          <div className="bg-white rounded-xl shadow-md px-6 py-8 border-t-4 border-[#FF126B] text-center md:text-left max-w-4xl mx-auto">
            <h3 className="text-5xl font-extrabold text-[#053759] mb-2">
              1 MISSION
            </h3>
            <p className="text-sm font-medium text-[#045D42] uppercase">
              Healing & Hope
            </p>
            <p className="mt-4 text-gray-600 text-sm">
              To bridge the gap in healthcare access while glorifying God and
              empowering communities through compassion.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default AboutSection;
