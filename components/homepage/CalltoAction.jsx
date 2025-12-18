import React from "react";
import { FiHeart, FiUsers, FiArrowRight } from "react-icons/fi";

function CalltoAction() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase">
            Make an impact today
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
            Your support changes lives
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Choose how you would like to get involved and help provide
            life-changing care for children and communities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="#support-child"
            className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
          >
            <div>
              <div className="inline-flex items-center justify-center rounded-full bg-sky-50 text-sky-600 p-2 mb-4">
                <FiHeart className="h-5 w-5" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                Support a child's surgery
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-600">
                Help fund critical surgeries so children can receive the
                life-saving care they deserve.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-sky-600">
              Learn more
              <FiArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>

          <a
            href="#kibuku-mission"
            className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:border-amber-500/70 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
          >
            <div>
              <div className="inline-flex items-center justify-center rounded-full bg-amber-50 text-amber-600 p-2 mb-4">
                <FiUsers className="h-5 w-5" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                Kibuku Medical Mission
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-600">
                Support our on-the-ground medical outreach bringing care to
                under-served communities in Kibuku.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-amber-600">
              Get involved
              <FiArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CalltoAction;
