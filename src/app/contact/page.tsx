"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mnnpopjj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 md:py-24 min-h-screen">
      <div className="container max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <p className="text-emerald-400 font-medium text-sm mb-2">
            Contact
          </p>
          <h1 className="font-serif text-3xl md:text-4xl">
            Let&apos;s Work Together
          </h1>
          <p className="mt-3 text-white/50 max-w-md">
            Have a project in mind? Fill out the form and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* Success State */}
        {submitted ? (
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="size-12 mb-5 rounded-full bg-emerald-400/10 flex items-center justify-center">
              <svg
                className="size-6 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="font-semibold text-xl text-white mb-2">Message Sent</h2>
            <p className="text-white/50 mb-6">
              Thank you for reaching out. I&apos;ll review your message and respond as soon as possible.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
            >
              <svg
                className="size-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left side - Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-3">
                  Email
                </h3>
                <a
                  href="mailto:azizmeltzer@gmail.com"
                  className="text-sm text-white hover:text-emerald-400 transition-colors"
                >
                  azizmeltzer@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-3">
                  Location
                </h3>
                <p className="text-sm text-white">Kumasi, Ghana</p>
                <p className="text-xs text-white/40 mt-1">GMT+0</p>
              </div>

              <div>
                <h3 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-3">
                  Socials
                </h3>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="https://github.com/aaziblim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-emerald-400 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="http://www.linkedin.com/in/azizjibril"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-emerald-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2">
                      Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white text-sm border border-transparent focus:outline-none focus:border-white/10 transition-colors placeholder:text-white/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2">
                      Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white text-sm border border-transparent focus:outline-none focus:border-white/10 transition-colors placeholder:text-white/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/50 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white text-sm border border-transparent focus:outline-none focus:border-white/10 transition-colors placeholder:text-white/30"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2">
                      Budget
                    </label>
                    <div className="relative">
                      <select
                        name="budget"
                        className="appearance-none w-full px-4 py-3 rounded-xl bg-gray-800 text-white text-sm border border-transparent focus:outline-none focus:border-white/10 transition-colors pr-10"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select range
                        </option>
                        <option value="under-1000">Under $1,000</option>
                        <option value="1000-5000">$1,000 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="10000-plus">$10,000+</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white/30">
                        <svg
                          className="size-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2">
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        name="type"
                        className="appearance-none w-full px-4 py-3 rounded-xl bg-gray-800 text-white text-sm border border-transparent focus:outline-none focus:border-white/10 transition-colors pr-10"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select type
                        </option>
                        <option value="website">Website</option>
                        <option value="web-app">Web Application</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white/30">
                        <svg
                          className="size-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/50 mb-2">
                    Message <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white text-sm border border-transparent focus:outline-none focus:border-white/10 transition-colors resize-none placeholder:text-white/30"
                  />
                </div>

                <div className="flex items-center justify-between pt-3">
                  <Link
                    href="/"
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    ← Back to home
                  </Link>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-white text-gray-900 font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-white/90 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin size-4"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;