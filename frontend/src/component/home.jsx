import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  MessageCircle,
  Globe,
  Shield,
  Zap,
  ArrowRight,
  LogIn,
  Menu,
  X,
} from "lucide-react";

const NAV_LINKS = ["Features", "World Chat", "About"];

const FEATURES = [
  {
    icon: Globe,
    title: "World Chat",
    desc: "One global room, always open. Jump in, talk to strangers, then vanish — no history follows you.",
  },
  {
    icon: Shield,
    title: "Zero Identity",
    desc: "No email. No password. No profile. You get a random ghost handle the moment you arrive.",
  },
  {
    icon: Zap,
    title: "Real-time",
    desc: "Messages appear instantly across the world. Blink and you might miss something interesting.",
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className="min-h-screen text-[#e2e0f0] font-sans overflow-x-hidden"
      style={{ backgroundColor: "#0a0a0f" }}
    >
      {/* ── Wallbooks-style ambient glow ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* bottom-right deep blue — exactly like the screenshot */}
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle at 80% 90%, rgba(49,46,120,0.45) 0%, transparent 65%)",
          }}
        />
        {/* faint top-left violet */}
        <div
          className="absolute top-0 left-0 w-[400px] h-[400px]"
          style={{
            background:
              "radial-gradient(circle at 20% 10%, rgba(80,50,160,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ══════════ NAVBAR ══════════ */}
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(120,90,200,0.15)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: "rgba(124,58,237,0.18)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            >
              <MessageCircle className="w-4 h-4 text-violet-400" />
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-white">
              Async Chat
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href="#"
                className="text-[13px] transition-colors duration-200"
                style={{ color: "#666" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c4b5fd")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
              >
                {l}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium text-white rounded-lg transition-all duration-200"
              style={{ background: "rgba(124,58,237,0.85)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(124,58,237,1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(124,58,237,0.85)")
              }
              onClick={() => {
                navigate("/chat");
              }}
            >
              <LogIn className="w-3.5 h-3.5" />
              Enter anonymously
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            style={{ color: "#666" }}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div
            className="md:hidden px-6 pb-6"
            style={{
              background: "#0d0c1a",
              borderTop: "1px solid rgba(120,90,200,0.15)",
            }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href="#"
                className="block py-3 text-[14px]"
                style={{
                  color: "#666",
                  borderBottom: "1px solid rgba(120,90,200,0.1)",
                }}
              >
                {l}
              </a>
            ))}
            <button
              className="mt-5 w-full py-3 text-white text-[14px] font-medium rounded-xl"
              style={{ background: "rgba(124,58,237,0.85)" }}
              onClick={() => {
                navigate("/chat");
              }}
            >
              Enter anonymously
            </button>
          </div>
        )}
      </header>

      {/* ══════════ HERO ══════════ */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-44 pb-36">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-7 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase"
          style={{
            background: "rgba(124,58,237,0.1)",
            border: "1px solid rgba(124,58,237,0.22)",
            color: "#c4b5fd",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Live now · no sign-up required
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-[72px] font-semibold tracking-tight text-white leading-[1.1] max-w-3xl"
        >
          Talk to the world.
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            As nobody.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-[17px] leading-[1.8] max-w-md"
          style={{ color: "#5a5a72" }}
        >
          Async Chat is an anonymous real-time chat space. No account, no
          identity — just you and the world chat room.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            className="group flex items-center gap-2 px-8 py-3.5 text-white font-medium text-[15px] rounded-xl transition-all duration-200"
            style={{
              background: "rgba(124,58,237,0.9)",
              boxShadow: "0 8px 32px rgba(109,40,217,0.35)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(124,58,237,1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(124,58,237,0.9)")
            }
            onClick={() => {
                navigate("/chat");
              }}
          >
            Join World Chat
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            className="px-8 py-3.5 text-[15px] rounded-xl transition-all duration-200"
            style={{
              color: "#666",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ccc";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#666";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
            }}
          >
            Learn more
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="mt-8 text-[11px] uppercase tracking-[0.14em]"
          style={{ color: "#2e2e3a" }}
        >
          No sign-up &nbsp;·&nbsp; No tracking &nbsp;·&nbsp; No identity
        </motion.p>
      </section>

      {/* ══════════ WHAT IS ASYNC CHAT ══════════ */}
      <section
        className="relative z-10 px-6 py-28"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] uppercase tracking-[0.15em] mb-4"
              style={{ color: "#7c5cbf" }}
            >
              What is Async Chat
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-semibold text-white leading-[1.2] mb-6"
            >
              A room that forgets you
              <br />
              the moment you leave.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[16px] leading-[1.85] mb-4"
              style={{ color: "#4e4e62" }}
            >
              Most chat apps want to know who you are. Async Chat doesn't. You
              arrive as a ghost — a random handle, no account, no trace. The
              world chat room is always open. Say something, listen, reply, or
              just lurk.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-[16px] leading-[1.85]"
              style={{ color: "#3e3e50" }}
            >
              When you leave, it's as if you were never there. No grudges
              against a ghost. No reputation to protect. Just honest
              conversation between strangers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ══════════ FEATURES ══════════ */}
      <section
        className="relative z-10 px-6 py-28"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] uppercase tracking-[0.15em] mb-14 text-center"
            style={{ color: "#7c5cbf" }}
          >
            Features
          </motion.p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col md:flex-row gap-5"
          >
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="flex-1 p-7 rounded-2xl transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.055)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(124,58,237,0.28)";
                  e.currentTarget.style.background = "rgba(124,58,237,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.055)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(124,58,237,0.12)",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2">
                  {title}
                </h3>
                <p
                  className="text-[13px] leading-[1.75]"
                  style={{ color: "#4e4e62" }}
                >
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section
        className="relative z-10 px-6 py-36 text-center"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-semibold text-white leading-[1.2] mb-5"
          >
            Ready to disappear
            <br />
            into the crowd?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[16px] mb-10"
            style={{ color: "#4e4e62" }}
          >
            One click. No forms. You're in.
          </motion.p>
          <motion.div variants={fadeUp}>
            <button
              className="group inline-flex items-center gap-2 px-9 py-4 text-white font-medium text-[15px] rounded-xl transition-all duration-200"
              style={{
                background: "rgba(124,58,237,0.9)",
                boxShadow: "0 8px 40px rgba(109,40,217,0.3)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(124,58,237,1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(124,58,237,0.9)")
              }
            >
              Join World Chat
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-[11px] uppercase tracking-[0.12em]"
            style={{ color: "#25252f" }}
          >
            No sign-up &nbsp;·&nbsp; No tracking &nbsp;·&nbsp; No identity
          </motion.p>
        </motion.div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer
        className="relative z-10 px-6 py-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center"
              style={{
                background: "rgba(124,58,237,0.18)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <MessageCircle className="w-3 h-3 text-violet-400" />
            </div>
            <span className="text-[13px]" style={{ color: "#2e2e3a" }}>
              Async Chat
            </span>
          </div>
          <p className="text-[12px]" style={{ color: "#252530" }}>
            Built for ghosts everywhere.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[12px] transition-colors"
                style={{ color: "#2e2e3a" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#666")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#2e2e3a")}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
