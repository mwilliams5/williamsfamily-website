import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the Williams Family website.",
};

const highlights = [
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Our Family",
    description:
      "Meet the Williams family — our history, our members, and the stories that bring us together.",
    href: "/about",
    linkText: "Meet Us",
  },
  {
    icon: "📸",
    title: "Photo Gallery",
    description:
      "Browse photos from family gatherings, milestones, vacations, and everyday moments.",
    href: "/gallery",
    linkText: "View Photos",
  },
  {
    icon: "✉️",
    title: "Get in Touch",
    description:
      "Have a question or want to share something? Reach out and we'll get back to you.",
    href: "/contact",
    linkText: "Contact Us",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white py-24 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 tracking-tight">
          The Williams Family
        </h1>
        <p className="text-xl md:text-2xl text-primary-100 max-w-2xl mx-auto mb-8">
          Family is everything. Welcome to our corner of the internet — a place
          to share, remember, and stay connected.
        </p>
        <Link href="/about" className="btn-primary bg-warm-500 hover:bg-warm-600 text-gray-900 font-semibold">
          Meet Our Family
        </Link>
      </section>

      {/* Welcome message */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="section-heading">Welcome!</h2>
        <div className="section-divider mx-auto"></div>
        <p className="text-lg text-gray-600 leading-relaxed">
          This website is a place for the Williams family to stay connected,
          share memories, and keep up with each other&apos;s lives. Whether
          you&apos;re planning the next reunion or just catching up, you&apos;ll
          find everything here. We hope you feel right at home.
        </p>
      </section>

      {/* Highlights grid */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">Explore</h2>
          <div className="section-divider mx-auto mb-10"></div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div key={item.href} className="card p-8 text-center flex flex-col items-center">
                <span className="text-5xl mb-4">{item.icon}</span>
                <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-1">{item.description}</p>
                <Link href={item.href} className="btn-primary text-sm">
                  {item.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent news placeholder */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="section-heading">Latest News</h2>
        <div className="section-divider"></div>
        <div className="space-y-6">
          {[
            {
              date: "March 2026",
              title: "Website Relaunched!",
              body: "We&apos;ve moved to a new, faster website. More updates coming soon!",
            },
            {
              date: "Summer 2025",
              title: "Annual Family Reunion",
              body: "A wonderful time was had by all at this year&apos;s reunion. Photos are in the gallery.",
            },
          ].map((post) => (
            <div key={post.title} className="border-l-4 border-primary-500 pl-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-1">
                {post.date}
              </p>
              <h3 className="text-lg font-serif font-bold text-gray-800 mb-1">
                {post.title}
              </h3>
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
