"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe, Code2, Users, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  glowRgb: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Process up to 120,000 transactions per second with near-instant finality — leaving every traditional blockchain behind.",
    color: "#FF2D8A",
    glowRgb: "255, 45, 138",
  },
  {
    icon: Shield,
    title: "AI-Powered Security",
    description:
      "Our AI models continuously monitor the network, detecting and neutralising threats in real time before they affect your assets.",
    color: "#7B2FBE",
    glowRgb: "123, 47, 190",
  },
  {
    icon: Globe,
    title: "Global Ecosystem",
    description:
      "Connect with a worldwide network of validators, developers, and creators building the next generation of dApps.",
    color: "#00B4FF",
    glowRgb: "0, 180, 255",
  },
  {
    icon: Code2,
    title: "Smart Contracts",
    description:
      "Deploy on our EVM-compatible environment with AI-driven optimisation, automated auditing, and gas-fee analytics.",
    color: "#A855F7",
    glowRgb: "168, 85, 247",
  },
  {
    icon: Users,
    title: "Community Governed",
    description:
      "Participate in on-chain governance and shape the protocol roadmap. Every token holder gets a direct vote on key decisions.",
    color: "#FF2D8A",
    glowRgb: "255, 45, 138",
  },
  {
    icon: BarChart3,
    title: "Proof of Stake",
    description:
      "Our PoS consensus mechanism delivers energy efficiency without compromising security, rewarding validators fairly.",
    color: "#3B82F6",
    glowRgb: "59, 130, 246",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-24 bg-[#05050F] relative overflow-hidden"
      aria-labelledby="benefits-heading"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-[#7B2FBE] opacity-[0.06] blur-[100px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#FF2D8A] opacity-[0.05] blur-[80px]" />
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
            Why Serendale
          </p>
          <h2
            id="benefits-heading"
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
          >
            Built for the{" "}
            <span
              className="text-[#FF2D8A]"
              style={{ textShadow: "0 0 30px rgba(255,45,138,0.45)" }}
            >
              Future
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Serendale combines cutting-edge blockchain infrastructure with
            artificial intelligence to deliver an unparalleled decentralised
            experience.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <motion.article
                key={b.title}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="rounded-2xl p-7 border border-white/[0.06] bg-[#0D0D1A]/60 backdrop-blur-sm cursor-default"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                  style={{
                    background: `rgba(${b.glowRgb}, 0.12)`,
                    boxShadow: `0 0 22px rgba(${b.glowRgb}, 0.25)`,
                  }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: b.color }}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-white font-semibold text-lg mb-3">
                  {b.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {b.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
