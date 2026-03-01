"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ─── Floating orb helper ─── */
function Orb({
  color,
  size,
  style,
  delay = 0,
  duration = 6,
}: {
  color: string;
  size: number;
  style: React.CSSProperties;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        boxShadow: `0 0 ${size * 2}px ${color}`,
        ...style,
      }}
      animate={{ y: [-10, 10, -10], opacity: [0.4, 0.85, 0.4] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#05050F]"
      aria-label="Hero"
    >
      {/* ── Full-section background image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-robots.jpg"
          alt="Two AI robots holding a glowing infinity symbol"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-bottom"
        />
        {/* Gradient: dark at top (for text legibility) → transparent at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050F] via-[#05050F]/75 from-0% via-40% to-transparent" />
        {/* Subtle side vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05050F]/60 via-transparent to-[#05050F]/60" />
      </div>

      {/* ── Atmosphere blobs ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#7B2FBE] opacity-[0.12] blur-[130px]" />
        <div className="absolute top-10 left-0 w-[380px] h-[380px] rounded-full bg-[#FF2D8A] opacity-[0.06] blur-[90px]" />
        <div className="absolute top-10 right-0 w-[380px] h-[380px] rounded-full bg-[#3B82F6] opacity-[0.06] blur-[90px]" />
      </div>

      {/* ── Floating orbs ── */}
      <Orb
        color="#FF2D8A"
        size={14}
        style={{ top: "28%", left: "14%", zIndex: 2 }}
        delay={0}
        duration={5}
      />
      <Orb
        color="#00B4FF"
        size={10}
        style={{ top: "38%", right: "16%", zIndex: 2 }}
        delay={1}
        duration={7}
      />
      <Orb
        color="#A855F7"
        size={18}
        style={{ top: "22%", right: "9%", zIndex: 2 }}
        delay={0.5}
        duration={6}
      />
      <Orb
        color="#7B2FBE"
        size={8}
        style={{ top: "52%", left: "7%", zIndex: 2 }}
        delay={2}
        duration={5.5}
      />

      {/* ── Text content ── */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-36 pb-6">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-bold leading-[1.1] tracking-tight mb-5"
        >
          <span className="text-white">A Fast </span>
          <span
            className="text-[#FF2D8A]"
            style={{ textShadow: "0 0 50px rgba(255,45,138,0.55)" }}
          >
            Blockchain.
          </span>
          <br />
          <span className="text-white">Scalable AI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: "easeOut" }}
          className="text-gray-400 text-base sm:text-lg max-w-[520px] mx-auto mb-10 leading-relaxed"
        >
          Our technology performing fast blockchain (120K TPS) and it has
          guaranteed AI-based data security. Proof of Stake, its consensus
          algorithm enables unlimited speeds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.55, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#benefits"
            className="px-8 py-3 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/10 hover:border-white/60 transition-all duration-200"
          >
            Get started
          </a>
          <a
            href="#solutions"
            className="px-8 py-3 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/10 hover:border-white/60 transition-all duration-200"
          >
            Ecosystems
          </a>
        </motion.div>
      </div>
    </section>
  );
}
