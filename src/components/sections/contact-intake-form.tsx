"use client";

import { useState } from "react";
import { submitForm } from "@/lib/forms";
import { site } from "@/lib/site";

export function ContactIntakeForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [inquiryType, setInquiryType] = useState("acquisition");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const fields: Record<string, string> = {
      fullName: (formData.get("full_name") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      inquiryType,
      propertyRef: (formData.get("property_ref") as string) || "",
      message: (formData.get("message") as string) || "",
    };

    const res = await submitForm({
      form: "contact-intake",
      fields,
    }).catch(() => ({ ok: false }));

    setStatus(res.ok ? "success" : "error");
  }

  if (status === "success") {
    return (
      <div className="bg-surface p-8 sm:p-12 rounded-xl border border-outline-variant/60 text-center space-y-4">
        <span className="material-symbols-outlined text-4xl text-secondary">
          verified
        </span>
        <h3 className="text-headline-sm font-headline-sm text-primary">
          Inquiry Successfully Transmitted
        </h3>
        <p className="text-body-md font-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
          Thank you. Your confidential advisory intake has been routed directly to a senior partner. You will receive private liaison within four business hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="inline-flex items-center px-6 py-2.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-surface text-label-lg font-label-lg transition-colors cursor-pointer"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-body-sm text-error">
          Something went wrong transmitting your inquiry. Please reach our senior partners directly at{" "}
          <a href={`mailto:${site.email}`} className="underline font-medium">
            {site.email}
          </a>{" "}
          or {site.phone}.
        </div>
      )}

      {/* Full Name */}
      <div>
        <label className="block text-label-lg font-label-lg text-primary mb-2" htmlFor="full_name">
          Full Name
        </label>
        <input
          id="full_name"
          name="full_name"
          type="text"
          required
          placeholder="Julian Montgomery"
          className="w-full h-12 bg-surface-container-lowest border border-outline-variant/60 rounded-lg px-4 text-on-surface text-body-md font-body-md placeholder:text-outline focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Email & Phone Dual Column */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-label-lg font-label-lg text-primary mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="julian@domain.com"
            className="w-full h-12 bg-surface-container-lowest border border-outline-variant/60 rounded-lg px-4 text-on-surface text-body-md font-body-md placeholder:text-outline focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-label-lg font-label-lg text-primary mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="w-full h-12 bg-surface-container-lowest border border-outline-variant/60 rounded-lg px-4 text-on-surface text-body-md font-body-md placeholder:text-outline focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Inquiry Type Dropdown & Property Ref */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-label-lg font-label-lg text-primary mb-2" htmlFor="inquiry_type">
            Inquiry Type
          </label>
          <div className="relative">
            <select
              id="inquiry_type"
              name="inquiry_type"
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
              className="w-full h-12 bg-surface-container-lowest border border-outline-variant/60 rounded-lg px-4 text-on-surface text-body-md font-body-md focus:outline-none focus:border-primary transition-colors appearance-none pr-10 cursor-pointer"
            >
              <option value="acquisition">Acquisition &amp; Buying</option>
              <option value="divestment">Private Divestment &amp; Listing</option>
              <option value="walkthrough">Confidential Walkthrough</option>
              <option value="consultation">Architectural Consultation</option>
              <option value="general">General Inquiry</option>
            </select>
            <span className="material-symbols-outlined pointer-events-none absolute right-3 top-3 text-outline">
              expand_more
            </span>
          </div>
        </div>
        <div>
          <label className="block text-label-lg font-label-lg text-primary mb-2" htmlFor="property_ref">
            Property Reference ID <span className="text-outline font-normal">(Optional)</span>
          </label>
          <input
            id="property_ref"
            name="property_ref"
            type="text"
            placeholder="EST-94021"
            className="w-full h-12 bg-surface-container-lowest border border-outline-variant/60 rounded-lg px-4 text-on-surface text-body-md font-body-md placeholder:text-outline focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Message Area */}
      <div>
        <label className="block text-label-lg font-label-lg text-primary mb-2" htmlFor="message">
          Your Message or Property Preferences
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Detail your geographic focus, architectural specifications, or specific viewing timeline..."
          className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-lg p-4 text-on-surface text-body-md font-body-md placeholder:text-outline focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Checkbox Terms */}
      <div className="flex items-start space-x-3 pt-2">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 rounded text-primary-container border-outline-variant focus:ring-0 focus:ring-offset-0 cursor-pointer"
        />
        <label className="text-body-sm font-body-sm text-on-surface-variant cursor-pointer" htmlFor="terms">
          I agree to the confidential advisory terms and privacy policy.
        </label>
      </div>

      {/* Submit CTA */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto inline-flex items-center justify-center bg-primary-container hover:bg-[#323A35] text-surface text-label-lg font-label-lg rounded-lg px-8 py-3.5 transition-all duration-200 ease-out active:scale-95 shadow-sm cursor-pointer disabled:opacity-50"
        >
          <span>{status === "submitting" ? "Transmitting..." : "Send Inquiry"}</span>
          <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
        </button>
      </div>

      {/* Trust Badge */}
      <div className="pt-4 border-t border-outline-variant/40 flex items-center space-x-2 text-label-caps font-label-caps text-outline">
        <span className="material-symbols-outlined text-sm text-secondary">lock</span>
        <span>Encrypted &amp; Confidential • Strict Non-Disclosure Standards</span>
      </div>
    </form>
  );
}
