import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Williams family.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-10">
        <h1 className="section-heading">Get in Touch</h1>
        <div className="section-divider"></div>
        <p className="text-lg text-gray-600">
          Have a question, want to share a photo, or just want to say hello?
          We&apos;d love to hear from you. Fill out the form below and
          we&apos;ll get back to you as soon as we can.
        </p>
      </div>

      {/* Contact form */}
      {/* NOTE: This form requires a backend or form service to actually send emails.
          Popular options for Next.js:
            - Resend (resend.com) — email API, easy Next.js integration
            - Formspree (formspree.io) — just change the action URL
            - EmailJS — client-side email sending
          For Formspree: replace action="" with your Formspree endpoint URL */}
      <form
        className="bg-white rounded-2xl shadow-md p-8 space-y-6"
        action="#"
        method="POST"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
          />
        </div>

        <button type="submit" className="btn-primary w-full text-center">
          Send Message
        </button>
      </form>

      {/* Direct contact info */}
      <div className="mt-10 grid sm:grid-cols-2 gap-6 text-center">
        <div className="bg-primary-50 rounded-xl p-6">
          <span className="text-3xl">📧</span>
          <h3 className="font-serif font-bold text-primary-800 mt-3 mb-1">
            Email
          </h3>
          {/* TODO: Replace with your actual email */}
          <a
            href="mailto:family@williamsfamily.org"
            className="text-sm text-primary-600 hover:underline"
          >
            family@williamsfamily.org
          </a>
        </div>
        <div className="bg-primary-50 rounded-xl p-6">
          <span className="text-3xl">📍</span>
          <h3 className="font-serif font-bold text-primary-800 mt-3 mb-1">
            Location
          </h3>
          {/* TODO: Replace with your location */}
          <p className="text-sm text-gray-600">[City, State]</p>
        </div>
      </div>
    </div>
  );
}
