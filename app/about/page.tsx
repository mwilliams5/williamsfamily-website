import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the Williams family — our members and our story.",
};

// TODO: Replace with your actual family members
const familyMembers = [
  {
    name: "John Williams",
    role: "Father",
    bio: "John grew up in [City] and has been the heart of the Williams family for over 30 years. He loves [hobbies].",
    emoji: "👨",
  },
  {
    name: "Mary Williams",
    role: "Mother",
    bio: "Mary is the creative force of the family. She enjoys [hobbies] and has a passion for [interests].",
    emoji: "👩",
  },
  {
    name: "James Williams",
    role: "Son",
    bio: "James is currently studying [field] and loves [hobbies]. He's always up for an adventure.",
    emoji: "👦",
  },
  {
    name: "Sarah Williams",
    role: "Daughter",
    bio: "Sarah is passionate about [interests] and brings joy wherever she goes. She loves [hobbies].",
    emoji: "👧",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="section-heading">About Our Family</h1>
        <div className="section-divider"></div>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          The Williams family has been rooted in [Location] for generations. We
          believe in the power of family, community, and making lasting memories
          together. Here&apos;s a little about each of us.
        </p>
      </div>

      {/* Family members grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-serif font-bold text-primary-700 mb-8">
          Meet the Family
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {familyMembers.map((member) => (
            <div key={member.name} className="card p-6 text-center">
              <div className="text-6xl mb-4">{member.emoji}</div>
              <h3 className="text-lg font-serif font-bold text-primary-800">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-warm-600 mb-3">
                {member.role}
              </p>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Family history */}
      <section className="bg-primary-50 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-serif font-bold text-primary-800 mb-4">
          Our History
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            {/* TODO: Replace with your actual family history */}
            The Williams family story begins in [Year] when [Founder/Ancestor]
            settled in [Location]. Over the decades, our family has grown,
            spread across the country, and built a legacy of [values/traits].
          </p>
          <p>
            From humble beginnings to where we are today, the Williams name has
            always stood for [values]. We gather every year at our annual
            reunion to celebrate, reconnect, and carry on the traditions that
            make us who we are.
          </p>
          <p>
            This website is our way of keeping the family connected, no matter
            how far apart we may be.
          </p>
        </div>
      </section>
    </div>
  );
}
