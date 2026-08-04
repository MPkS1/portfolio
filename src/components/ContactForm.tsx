"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function isValidEmail(email: string): boolean {
  const atIndex = email.indexOf("@");
  if (atIndex <= 0 || atIndex === email.length - 1) return false;
  const domain = email.slice(atIndex + 1);
  const dotIndex = domain.lastIndexOf(".");
  return dotIndex > 0 && dotIndex < domain.length - 1 && !domain.includes("@");
}

function validateForm(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!isValidEmail(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.subject.trim()) errors.subject = "Subject is required.";
  if (form.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [apiError, setApiError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change — only for known form field keys
    if (name === "name" || name === "email" || name === "subject" || name === "message") {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setApiError("");
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data: unknown = await res.json();
      const isSuccess = res.ok &&
        typeof data === "object" && data !== null &&
        "success" in data && (data as { success: unknown }).success === true;
      if (isSuccess) {
        setStatus("sent");
      } else {
        const errMsg =
          typeof data === "object" && data !== null && "error" in data &&
          typeof (data as { error: unknown }).error === "string"
            ? (data as { error: string }).error
            : "Failed to send email. Please try again.";
        setApiError(errMsg);
        setStatus("error");
      }
    } catch {
      setApiError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="premium-glass rounded-[2rem] p-8 text-center">
        <div className="mb-4 text-4xl">✓</div>
        <h3 className="mb-2 text-xl font-bold text-white">
          Email Sent Successfully!
        </h3>
        <p className="text-white/68">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => {
            setForm({ name: "", email: "", subject: "", message: "" });
            setStatus("idle");
          }}
          className="mt-4 text-sm text-[#5eead4] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="premium-glass space-y-5 rounded-[2rem] p-6 sm:p-8" noValidate>
      {status === "error" && apiError && (
        <div className="rounded-2xl border border-[#ff7c7c]/25 bg-[#ff7c7c]/10 px-4 py-3 text-sm text-[#ffd0d0]">
          {apiError}
        </div>
      )}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/80">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="premium-focus w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition aria-[invalid=true]:border-[#ff7c7c]/60"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-[#ff7c7c]">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/80">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="premium-focus w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition aria-[invalid=true]:border-[#ff7c7c]/60"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-[#ff7c7c]">{errors.email}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-white/80">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={form.subject}
          onChange={handleChange}
          placeholder="What is it about?"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className="premium-focus w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition aria-[invalid=true]:border-[#ff7c7c]/60"
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-xs text-[#ff7c7c]">{errors.subject}</p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/80">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me more..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="premium-focus w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition aria-[invalid=true]:border-[#ff7c7c]/60"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-[#ff7c7c]">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="premium-focus inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white px-6 py-3.5 font-semibold text-[#050816] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send className="w-4 h-4" />
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

