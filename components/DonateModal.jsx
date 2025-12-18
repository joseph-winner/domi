"use client";
import React, { useEffect } from "react";
import { FaUniversity, FaPaypal, FaMobileAlt, FaHeart } from "react-icons/fa";
import { X } from "lucide-react";

function DonateModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-slate-200 bg-white p-1 text-slate-500 shadow-sm hover:bg-slate-50 hover:text-slate-700"
          aria-label="Close donation details"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Account Information
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Every gift helps us extend compassionate, life-giving healthcare.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 border border-blue-100">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-semibold">
              <FaHeart size={12} />
            </span>
            <span>Your generosity heals</span>
          </div>
        </div>

        <div className="space-y-6 text-sm text-slate-700">
          {/* Bank Transfer */}
          <section className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 sm:p-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                <FaUniversity size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Bank Transfer
                </h3>
                <p className="text-xs text-slate-500">
                  Prefer direct giving? Use the account details below.
                </p>
              </div>
            </div>
            <dl className="grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-medium text-slate-800">Account Name</dt>
                <dd>Doctors on Mission International LTD</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-800">Account Number</dt>
                <dd>3100107255</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-800">Bank Name</dt>
                <dd>Centenary Rural Development Bank</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-800">Branch</dt>
                <dd>Mbarara Branch</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-medium text-slate-800">BIC / Swift Code</dt>
                <dd>CERBUGKA XXX</dd>
              </div>
            </dl>
          </section>

          {/* PayPal */}
          <section className="rounded-2xl border border-slate-100 bg-white p-4 sm:p-5 shadow-[0_6px_18px_rgba(15,23,42,0.06)]">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500 text-white shadow-sm">
                <FaPaypal size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">PayPal</h3>
                <p className="text-xs text-slate-500">
                  Give securely from anywhere in the world.
                </p>
              </div>
            </div>
            <p className="select-all break-all font-medium text-slate-800">
              doctorsonmissioninternational@gmail.com
            </p>
          </section>

          {/* Mobile Money */}
          <section className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-4 sm:p-5 shadow-[0_6px_18px_rgba(15,23,42,0.04)]">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-slate-900 shadow-sm">
                  <FaMobileAlt size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    MTN Mobile Money
                  </h3>
                  <p className="text-xs text-slate-500">Uganda</p>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-800">
                +256 782 524 317
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-4 sm:p-5 shadow-[0_6px_18px_rgba(15,23,42,0.04)]">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500 text-white shadow-sm">
                  <FaMobileAlt size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Airtel Money
                  </h3>
                  <p className="text-xs text-slate-500">Uganda</p>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-800">
                +256 750 067 749
              </p>
            </div>
          </section>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-slate-100 pt-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            For large gifts or institutional giving, please contact our office
            for additional details.
          </p>
          <p className="font-medium text-slate-700">
            Thank you for standing with Doctors on Mission International.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DonateModal;
