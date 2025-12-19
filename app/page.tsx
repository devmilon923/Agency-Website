"use client";
import React from "react";
import {
  ArrowRight,
  Code,
  Palette,
  Zap,
  MessageSquare,
  Search,
  Terminal,
  Send,
} from "lucide-react";

// Service Data
const services = [
  {
    title: "Software Development",
    description:
      "Building scalable web and mobile applications with modern frameworks like Next.js and Node.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Graphic Design",
    description:
      "Crafting unique brand identities, UI/UX designs, and visual assets that resonate with your audience.",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    title: "Digital Strategy",
    description:
      "Helping local and European businesses scale through data-driven technical solutions.",
    icon: <Zap className="w-6 h-6" />,
  },
];

// Workflow Data
const workflow = [
  {
    step: "01",
    title: "Discovery Meeting",
    desc: "We start by listening. We discuss your goals and define the core problem your project needs to solve.",
  },
  {
    step: "02",
    title: "Research & Strategy",
    desc: "Our team analyzes the market and technical requirements to ensure the solution is future-proof.",
  },
  {
    step: "03",
    title: "Execution",
    desc: "With a clear roadmap, our developers and designers work in sync to bring the vision to life.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-lime-200">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
        <div className="w-full max-w-[1000px] backdrop-blur-md bg-white/70 border border-zinc-100 px-6 py-3 rounded-full flex justify-between items-center transition-all hover:border-lime-200 shadow-sm">
          <div className="font-bold text-xl tracking-tighter">
            AGENCY<span className="text-lime-500">.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
            <a href="#about" className="hover:text-lime-600 transition-colors">
              About
            </a>
            <a
              href="#services"
              className="hover:text-lime-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#workflow"
              className="hover:text-lime-600 transition-colors"
            >
              Workflow
            </a>
            <a
              href="#contact"
              className="hover:text-lime-600 transition-colors"
            >
              Contact
            </a>
          </div>
          <button className="bg-zinc-900 text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-lime-500 hover:text-zinc-900 transition-all active:scale-95">
            Start a Project
          </button>
        </div>
      </nav>

      <main className="max-w-[1000px] mx-auto px-6 pt-32">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-[700px]">
            <span className="inline-block px-3 py-1 rounded-full bg-lime-100 text-lime-700 text-[10px] font-bold uppercase tracking-widest mb-6">
              Based in Bangladesh · Serving Globally
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
              We build digital products that{" "}
              <span className="text-zinc-400 italic">matter.</span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-10">
              A boutique software development and design agency helping local
              entrepreneurs and European brands bridge the gap between complex
              ideas and elegant solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="group flex items-center gap-2 bg-lime-400 text-zinc-900 px-6 py-3 rounded-xl font-bold transition-all hover:bg-lime-300"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="py-24 border-t border-zinc-100">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why our team is your best asset.
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Our strength isn't just in the code we write or the pixels we
                move; it's in our collective brainpower. We are a tight-knit
                team of engineers and creatives who believe in transparency.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Whether you're a startup in Dhaka or a business in Berlin, we
                treat your project as our own. We don't just build features; we
                solve business problems.
              </p>
            </div>
            <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 aspect-square flex flex-col justify-center text-center">
              <div className="text-5xl font-bold text-lime-500 mb-2">100%</div>
              <p className="font-medium text-zinc-900">In-House Expertise</p>
              <div className="mt-8 pt-8 border-t border-zinc-200 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xl font-bold">24+</div>
                  <p className="text-xs text-zinc-400 uppercase">Projects</p>
                </div>
                <div>
                  <div className="text-xl font-bold">03</div>
                  <p className="text-xs text-zinc-400 uppercase">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 border-t border-zinc-100">
          <div className="mb-16">
            <h2 className="text-3xl font-bold">Expertise</h2>
            <p className="text-zinc-500 mt-2">
              Specialized services for modern brands.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl border border-zinc-100 transition-all hover:border-lime-200 hover:shadow-sm hover:-translate-y-1"
              >
                <div className="mb-6 p-3 bg-zinc-50 rounded-2xl w-fit group-hover:bg-lime-100 group-hover:text-lime-600 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow Section */}
        <section id="workflow" className="py-24 border-t border-zinc-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">How we work</h2>
            <p className="text-zinc-500 mt-2">A simple, effective process.</p>
          </div>
          <div className="space-y-12">
            {workflow.map((item, index) => (
              <div
                key={index}
                className="flex gap-8 items-start max-w-[700px] mx-auto group"
              >
                <div className="text-4xl font-bold text-zinc-200 transition-colors group-hover:text-lime-300">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-24 border-t border-zinc-100 mb-20">
          <div className="bg-zinc-900 rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden">
            {/* Background micro-pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Let's build something <br />
                  great together.
                </h2>
                <p className="text-zinc-400 mb-8">
                  Currently accepting new projects for Q1 2024. Reach out and
                  we'll get back to you within 24 hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zinc-300">
                    <MessageSquare className="w-5 h-5 text-lime-400" />
                    <span>hello@youragency.com</span>
                  </div>
                </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-zinc-800 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-lime-400 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-zinc-800 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-lime-400 outline-none"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project"
                  className="w-full bg-zinc-800 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-lime-400 outline-none"
                ></textarea>
                <button className="w-full bg-lime-400 text-zinc-900 font-bold py-4 rounded-2xl hover:bg-lime-300 transition-all flex items-center justify-center gap-2">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-zinc-100 text-center">
        <p className="text-xs text-zinc-400 font-medium tracking-widest uppercase">
          © 2024 Your Agency Dhaka. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
