"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Alex R.",
    role: "DeFi Developer",
    avatar: "AR",
    rating: 5,
    text: "Serendale's 120K TPS is no joke. I've deployed smart contracts on a dozen chains and none come close to this throughput. The AI security layer alone is worth the switch.",
  },
  {
    id: 2,
    name: "Mia Chen",
    role: "Blockchain Investor",
    avatar: "MC",
    rating: 5,
    text: "The Proof-of-Stake mechanism is energy-efficient and the governance model is the most community-driven I've seen. Serendale is genuinely built differently.",
  },
  {
    id: 3,
    name: "James K.",
    role: "Startup Founder",
    avatar: "JK",
    rating: 5,
    text: "We migrated our entire platform to Serendale in under a week thanks to EVM compatibility. Transaction costs dropped 95% and speeds are insane.",
  },
  {
    id: 4,
    name: "Sofia M.",
    role: "Security Researcher",
    avatar: "SM",
    rating: 5,
    text: "As someone who has audited dozens of chains, Serendale's AI threat detection is impressive. It caught edge cases our manual review missed completely.",
  },
  {
    id: 5,
    name: "Daniel W.",
    role: "NFT Artist",
    avatar: "DW",
    rating: 4,
    text: "Minting on Serendale is blazing fast and the fees are negligible. The community is super active and the roadmap is ambitious but very achievable.",
  },
  {
    id: 6,
    name: "Yuki T.",
    role: "DAO Contributor",
    avatar: "YT",
    rating: 5,
    text: "On-chain governance actually works here. Proposals pass quickly, voting is intuitive, and the team genuinely listens to the community. Rare in this space.",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Serendale",
  description: "AI-powered blockchain platform with 120K TPS",
  url: "https://serendale.ai",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    reviewCount: String(TESTIMONIALS.length),
  },
  review: TESTIMONIALS.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.rating),
      bestRating: "5",
    },
    reviewBody: t.text,
  })),
};

const AVATAR_GRADIENTS = [
  "linear-gradient(135deg,#7B2FBE,#FF2D8A)",
  "linear-gradient(135deg,#3B82F6,#7B2FBE)",
  "linear-gradient(135deg,#FF2D8A,#A855F7)",
  "linear-gradient(135deg,#00B4FF,#3B82F6)",
  "linear-gradient(135deg,#A855F7,#FF2D8A)",
  "linear-gradient(135deg,#7B2FBE,#3B82F6)",
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          style={{
            color: i < rating ? "#FFB800" : "#2D3748",
            fill: i < rating ? "#FFB800" : "none",
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[#070710] relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* JSON-LD schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* Background blob */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-[#7B2FBE] opacity-[0.06] blur-[90px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-[#FF2D8A] opacity-[0.04] blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#FF2D8A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
          >
            Loved by the{" "}
            <span
              className="text-[#FF2D8A]"
              style={{ textShadow: "0 0 30px rgba(255,45,138,0.45)" }}
            >
              Community
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Join thousands of developers, investors, and creators who trust
            Serendale to power their decentralised future.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={t.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-2xl p-7 border border-white/[0.06] bg-[#0D0D1A]/60 backdrop-blur-sm flex flex-col gap-5"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
              itemScope
              itemType="https://schema.org/Review"
            >
              <StarRating rating={t.rating} />

              <blockquote
                itemProp="reviewBody"
                className="text-gray-300 text-sm leading-relaxed flex-1"
              >
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 select-none"
                  style={{
                    background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length],
                    boxShadow: "0 0 14px rgba(123, 47, 190, 0.3)",
                  }}
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    className="text-white text-sm font-semibold"
                    itemProp="author"
                  >
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
