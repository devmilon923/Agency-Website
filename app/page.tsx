"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Code,
  Palette,
  Zap,
  MoveRight,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Terminal,
  Layers,
  MousePointer2,
  X,
  Check,
  Loader2,
} from "lucide-react";

// --- 1. ENHANCED DATA CONSTANTS ---

const SERVICES = [
  {
    title: "Web Solutions",
    desc: "Complete digital solutions for current and new businesses. From landing pages to complex web applications, we deliver scalable platforms that grow with your business.",
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    title: "Visual Identity",
    desc: "Beyond logos. We craft comprehensive brand systems and design languages that work across all digital touchpoints.",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    title: "Experience Design",
    desc: "Data-informed UI/UX. We map user journeys to solve friction points and maximize conversion through clean interface logic.",
    icon: <Layers className="w-6 h-6" />,
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Technical Discovery",
    desc: "We dive into your logic. We define the tech stack, API requirements, and scalability hurdles before a single line is written.",
  },
  {
    step: "02",
    title: "The Prototype",
    desc: "Rapid high-fidelity prototyping. You interact with the design and flow in Figma/React before we move to full production.",
  },
  {
    step: "03",
    title: "Iterative Shipping",
    desc: "We push to staging every 48 hours. You have a constant pulse on the build with transparent access to the codebase.",
  },
];

const TEAM = [
  {
    name: "Tanvir Hasan",
    role: "Founding Engineer",
    location: "Dhaka, BD",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Full-stack specialist focusing on high-concurrency Node.js systems and modern React patterns.",
    links: { web: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Ariful Islam",
    role: "UI/UX Architect",
    location: "Dhaka, BD",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Obsessed with design systems and accessibility. Transforming complex user flows into intuitive interfaces.",
    links: { web: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Sajid Rahman",
    role: "Graphic Lead",
    location: "Sylhet, BD",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Visual storyteller creating brand identities that stand out in the European and Global markets.",
    links: { web: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Farhan Ali",
    role: "Product Strategist",
    location: "Dhaka, BD",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    bio: "Bridges the gap between business goals and technical execution. Specialist in Q1 market launches.",
    links: { web: "#", linkedin: "#", github: "#" },
  },
];

// --- 2. MICRO-COMPONENTS ---

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-lime-500 z-[9999] pointer-events-none hidden md:block mix-blend-difference"
      style={{ x: cursorXSpring, y: cursorYSpring }}
    />
  );
};

function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`relative border border-zinc-200 bg-white overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(132, 204, 22, 0.15), transparent 80%)
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

const ContactModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [formState, setFormState] = useState<"idle" | "loading" | "success">(
    "idle"
  );

  useEffect(() => {
    if (isOpen) setFormState("idle");
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[10000] bg-zinc-900/20 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[10001] flex items-center justify-center pointer-events-none p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="w-full max-w-lg bg-[#FDFDFD] border border-zinc-200 rounded-[2rem] shadow-2xl overflow-hidden pointer-events-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {formState === "success" ? (
                    /* SUCCESS STATE */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-10"
                    >
                      <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mb-6 text-lime-600">
                        <Check className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        Message Received
                      </h3>
                      <p className="text-zinc-500 max-w-xs mx-auto mb-8">
                        We've received your inquiry. One of our founders will
                        email you within 24 hours.
                      </p>
                      <button
                        onClick={onClose}
                        className="bg-zinc-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-lime-500 hover:text-zinc-900 transition-all cursor-pointer"
                      >
                        Back to Site
                      </button>
                    </motion.div>
                  ) : (
                    /* FORM STATE */
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-5"
                    >
                      <div>
                        <h3 className="text-2xl font-bold mb-1 tracking-tight">
                          Start your project
                        </h3>
                        <p className="text-zinc-400 text-sm">
                          Tell us a bit about what you want to build.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="flex-1 space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 ml-1">
                              Name
                            </label>
                            <input
                              required
                              type="text"
                              placeholder="John Doe"
                              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all placeholder:text-zinc-300"
                            />
                          </div>
                          <div className="flex-1 space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 ml-1">
                              Email
                            </label>
                            <input
                              required
                              type="email"
                              placeholder="john@company.com"
                              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all placeholder:text-zinc-300"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 ml-1">
                            Project Details
                          </label>
                          <textarea
                            required
                            rows={3}
                            placeholder="I need a SaaS platform for..."
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all resize-none placeholder:text-zinc-300"
                          />
                        </div>
                      </div>

                      <button
                        disabled={formState === "loading"}
                        className="mt-2 cursor-pointer bg-zinc-900 text-white w-full py-4 rounded-xl font-bold text-sm hover:bg-lime-500 hover:text-zinc-900 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {formState === "loading" ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            Send Request <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

// --- 3. SECTIONS ---

const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 md:p-6">
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full max-w-[1100px] backdrop-blur-lg bg-white/70 border border-zinc-200/50 shadow-sm px-4 md:px-8 py-3 md:py-4 rounded-full flex justify-between items-center"
    >
      <div className="font-bold text-lg md:text-2xl tracking-tighter flex items-center gap-1">
        AGENCY<span className="text-lime-500">.</span>
      </div>
      <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
        <a
          href="#workflow"
          className="hover:text-zinc-900 transition-colors cursor-pointer"
        >
          Process
        </a>
        <a
          href="#about"
          className="hover:text-zinc-900 transition-colors cursor-pointer"
        >
          The Team
        </a>
        <a
          href="#services"
          className="hover:text-zinc-900 transition-colors cursor-pointer"
        >
          Stack
        </a>
      </div>
      <button
        onClick={onOpenModal}
        className="bg-zinc-900 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold hover:bg-lime-500 hover:text-zinc-900 transition-all shadow-lg shadow-zinc-200 cursor-pointer"
      >
        Start Project
      </button>
    </motion.div>
  </nav>
);

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative pt-32 md:pt-64 pb-16 md:pb-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6 md:mb-10">
            <div className="px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-lime-100 border border-lime-200 text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-lime-700">
              Never Compromise Quality
            </div>
          </div>

          <h1 className="text-5xl md:text-9xl font-bold leading-[0.9] md:leading-[0.85] tracking-tight mb-6 md:mb-10">
            Design <br />
            <span className="font-serif italic text-zinc-300">meets</span> Code.
          </h1>

          <p className="text-base md:text-2xl text-zinc-400 max-w-[700px] leading-relaxed mb-8 md:mb-12 font-light px-2 md:px-0">
            We are a boutique collective of specialized builders. We help
            founders eliminate technical debt and ship pixel-perfect products
            that scale.
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-center md:justify-start px-2 md:px-0">
            <button
              onClick={onOpenModal}
              className="group bg-zinc-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-sm md:text-base transition-all hover:bg-lime-500 hover:text-zinc-900 flex items-center justify-center gap-3 cursor-pointer"
            >
              Consult with our Team{" "}
              <MoveRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center justify-center gap-3 px-4 md:px-6 py-3 md:py-5 rounded-xl md:rounded-2xl border border-zinc-200 text-xs md:text-sm font-bold text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
              Direct access to Founders
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 right-0 -z-10 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-lime-200/20 rounded-full blur-[150px]"
      />
    </section>
  );
};

// --- 4. MAIN PAGE ---

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-zinc-900 font-sans selection:bg-lime-200 relative">
      <CustomCursor />

      {/* Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Film Grain Effect */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] z-[9998]"
        style={{
          backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
        }}
      ></div>

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />

        {/* PROCESS SECTION */}
        <section
          id="workflow"
          className="py-16 md:py-32 bg-zinc-50 border-y border-zinc-200 relative"
        >
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(#000 0.5px, transparent 0.5px)",
              backgroundSize: "30px 30px",
            }}
          />

          <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-4 md:gap-8">
              <div className="max-w-xl">
                <h2 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-lime-600 mb-3 md:mb-6">
                  Our Blueprint
                </h2>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">
                  Engineered for Transparency.
                </h3>
              </div>
              <p className="text-zinc-500 text-sm md:text-base max-w-sm font-light italic">
                "We favor hard-coding and honest timelines over sales-pitches."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
              {PROCESS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="relative group bg-white/50 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none border border-zinc-100 md:border-0"
                >
                  <div className="text-5xl md:text-7xl font-black text-zinc-100 group-hover:text-lime-200 transition-colors absolute -top-2 md:-top-12 -left-2 md:-left-4 -z-10">
                    {item.step}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-3">
                    {item.title}{" "}
                    <ArrowRight className="w-4 h-4 text-lime-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </h4>
                  <p className="text-zinc-500 leading-relaxed text-sm font-light">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section id="about" className="py-16 md:py-32 bg-zinc-900 text-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-24">
              <h2 className="text-3xl md:text-6xl font-bold mb-3 md:mb-6 tracking-tighter">
                The Founding Experts.
              </h2>
              <p className="text-zinc-500 text-base md:text-xl font-light">
                Direct partnerships with specialized builders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {TEAM.map((member, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-zinc-800/30 border border-zinc-700/50 rounded-2xl md:rounded-3xl p-5 md:p-8 hover:border-lime-500/50 transition-all duration-500 group"
                >
                  <div className="flex gap-4 md:gap-6 items-start">
                    <div className="relative w-16 h-16 md:w-24 md:h-24 flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-zinc-900/40" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-base md:text-xl font-bold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-lime-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-2 md:mb-3">
                        {member.role}
                      </p>
                      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                        {member.bio}
                      </p>

                      <div className="flex justify-between items-center pt-3 md:pt-4 border-t border-zinc-700/30">
                        <span className="flex items-center gap-1.5 md:gap-2 text-[9px] md:text-[10px] text-zinc-500">
                          <MapPin className="w-3 h-3 text-lime-500" />{" "}
                          {member.location}
                        </span>
                        <div className="flex gap-2 md:gap-3">
                          <a
                            href={member.links.github}
                            className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
                          >
                            <Github className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          </a>
                          <a
                            href={member.links.linkedin}
                            className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
                          >
                            <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STACK / SERVICES SECTION */}
        <section id="services" className="py-16 md:py-32">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {SERVICES.map((service, i) => (
                <SpotlightCard
                  key={i}
                  className="rounded-2xl md:rounded-[3rem] p-8 md:p-12 group hover:shadow-2xl transition-all duration-700"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-zinc-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-10 group-hover:bg-lime-400 group-hover:text-zinc-900 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 tracking-tighter">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
                    {service.desc}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-32 px-4 md:px-6">
          <div className="max-w-[1000px] mx-auto bg-lime-400 rounded-3xl md:rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform duration-700 hidden md:block">
              <MousePointer2 size={200} />
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-zinc-900 tracking-tighter mb-4 md:mb-8 relative z-10">
              Ready to build?
            </h2>
            <p className="text-zinc-800 text-base md:text-xl font-medium mb-8 md:mb-12 max-w-lg mx-auto relative z-10">
              We are currently accepting 1 more major project for Q1. Let's see
              if we're a fit.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-zinc-900 text-white px-10 md:px-12 py-5 md:py-6 rounded-2xl md:rounded-3xl font-bold text-base md:text-lg hover:scale-105 transition-transform relative z-10 shadow-2xl cursor-pointer"
            >
              Book a Strategy Call
            </button>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center border-t border-zinc-100">
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-300 font-black">
          Dhaka • Global Standards • 2025
        </p>
      </footer>
    </div>
  );
}
