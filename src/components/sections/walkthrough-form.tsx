"use client";

import { useState } from "react";
import { submitForm } from "@/lib/forms";
import { site } from "@/lib/site";

export function WalkthroughForm({ propertyTitle = "The Bel-Air Glass Pavilion" }: { propertyTitle?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [timeSlot, setTimeSlot] = useState("Morning");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const fields: Record<string, string> = {
      property: propertyTitle,
      fullName: (formData.get("fullName") as string) || "",
      phone: (formData.get("phone") as string) || "",
      email: (formData.get("email") as string) || "",
      visitDate: (formData.get("visitDate") as string) || "",
      timeSlot,
      message: (formData.get("message") as string) || "",
    };

    const res = await submitForm({
      form: "walkthrough-inquiry",
      fields,
    }).catch(() => ({ ok: false }));

    setStatus(res.ok ? "success" : "error");
  }

  if (status === "success") {
    return (
      <div className="bg-surface p-6 rounded-lg border border-outline-variant/60 text-center space-y-3">
        <span className="material-symbols-outlined text-3xl text-secondary">
          check_circle
        </span>
        <h3 className="text-headline-sm font-headline-sm text-primary">
          Walkthrough Requested
        </h3>
        <p className="text-body-sm font-body-sm text-on-surface-variant">
          Thank you. Alexandra Sterling’s office has received your inquiry for{" "}
          <strong>{propertyTitle}</strong> and will confirm your confidential viewing slot.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "error" && (
        <div className="p-3 bg-red-50 border border-red-200 rounded text-body-sm text-error">
          Something went wrong. Please reach our advisory directly at{" "}
          <a href={`mailto:${site.email}`} className="underline font-medium">
            {site.email}
          </a>{" "}
          or {site.phone}.
        </div>
      )}

      <div>
        <label
          htmlFor="fullName"
          className="block text-label-caps font-label-caps uppercase text-outline mb-1.5"
        >
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          placeholder="e.g. Julian Montgomery"
          className="w-full h-12 px-3.5 bg-surface-container-lowest border border-outline-variant rounded text-on-surface text-body-md font-body-md focus:border-primary focus:outline-none placeholder:text-outline/70 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label
            htmlFor="phone"
            className="block text-label-caps font-label-caps uppercase text-outline mb-1.5"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="w-full h-12 px-3.5 bg-surface-container-lowest border border-outline-variant rounded text-on-surface text-body-md font-body-md focus:border-primary focus:outline-none placeholder:text-outline/70 transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-label-caps font-label-caps uppercase text-outline mb-1.5"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="julian@domain.com"
            className="w-full h-12 px-3.5 bg-surface-container-lowest border border-outline-variant rounded text-on-surface text-body-md font-body-md focus:border-primary focus:outline-none placeholder:text-outline/70 transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="visitDate"
          className="block text-label-caps font-label-caps uppercase text-outline mb-1.5"
        >
          Preferred Visit Date
        </label>
        <input
          id="visitDate"
          name="visitDate"
          type="date"
          className="w-full h-12 px-3.5 bg-surface-container-lowest border border-outline-variant rounded text-on-surface text-body-md font-body-md focus:border-primary focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-label-caps font-label-caps uppercase text-outline mb-1.5">
          Walkthrough Time Slot
        </label>
        <div className="grid grid-cols-3 gap-2">
          {["Morning", "Afternoon", "Evening"].map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => setTimeSlot(slot)}
              className={`text-center py-2 px-1 text-xs font-label-caps uppercase rounded border transition-all cursor-pointer ${
                timeSlot === slot
                  ? "bg-[#202522] text-[#FAF9F5] border-[#202522] dark:bg-[#F2F1EC] dark:text-[#111412] dark:border-[#F2F1EC] font-semibold"
                  : "border-outline-variant text-on-surface hover:border-outline"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block text-label-caps font-label-caps uppercase text-outline mb-1.5"
        >
          Special Requests / Representation Notes
        </label>
        <textarea
          id="notes"
          name="message"
          rows={3}
          placeholder="Client representation details or specific structural interests..."
          className="w-full p-3 bg-surface-container-lowest border border-outline-variant rounded text-on-surface text-body-sm font-body-sm focus:border-primary focus:outline-none placeholder:text-outline/70 transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-3.5 rounded-lg bg-[#202522] text-[#FAF9F5] hover:bg-[#323A35] dark:bg-[#F2F1EC] dark:text-[#111412] dark:hover:bg-[#FFFFFF] font-label-lg text-label-lg transition-colors cursor-pointer disabled:opacity-50 shadow-sm"
      >
        {status === "submitting" ? "Submitting Inquiry..." : "Request Private Walkthrough"}
      </button>

      <p className="text-center text-[0.7rem] text-outline font-label-caps uppercase tracking-wider">
        Fiduciary Discretion Guaranteed · Strict Non-Disclosure
      </p>
    </form>
  );
}
