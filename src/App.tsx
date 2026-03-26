/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowUpRight, 
  Code, 
  Globe, 
  Cpu, 
  Layers 
} from "lucide-react";

const NAV_LINKS = ["Home", "About", "Work", "Stack", "Contact"];

const STATS = [
  { label: "Full-stack builds delivered", value: "+40" },
  { label: "Lines of clean code written", value: "+1.2M" },
];

const PROJECTS = [
  {
    id: "01",
    title: "Neural Nexus Dashboard",
    type: "React / Three.js",
    image: "https://picsum.photos/seed/neural/600/800",
    link: "#",
  },
  {
    id: "02",
    title: "Vibe Commerce Engine",
    type: "Next.js / Stripe",
    image: "https://picsum.photos/seed/vibe/600/800",
    link: "#",
  },
  {
    id: "03",
    title: "Atmospheric Audio Lab",
    type: "Web Audio API",
    image: "https://picsum.photos/seed/audio/600/800",
    link: "#",
  },
  {
    id: "04",
    title: "Brutalist Design System",
    type: "Tailwind / Storybook",
    image: "https://picsum.photos/seed/brutal/600/800",
    link: "#",
  },
];

const EXPERIENCE = [
  {
    id: "01",
    role: "Senior Frontend Architect",
    company: "Vibe Studio, Berlin",
    date: "2024 - Present",
  },
  {
    id: "02",
    role: "Lead Web Developer",
    company: "Nexus Digital, NYC",
    date: "2022 - 2024",
  },
  {
    id: "03",
    role: "Full Stack Engineer",
    company: "Pulse Tech, London",
    date: "2020 - 2022",
  },
  {
    id: "04",
    role: "Creative Developer",
    company: "Freelance, Global",
    date: "2018 - 2020",
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-50 px-8 py-4 flex justify-between items-center glass-light rounded-full">
        <div className="flex items-center gap-2 min-w-[150px]">
          <AnimatePresence>
            {scrolled && (
              <motion.div 
                initial={{ opacity: 0, x: -20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.8 }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-ink rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://i.ibb.co.com/4QxDn1X/image.png" 
                    alt="Logo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="hidden md:flex gap-4">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-bold opacity-60 hover:opacity-100 hover:text-vibe hover:bg-ink/5 rounded-full transition-all duration-300"
            >
              {link}
            </motion.a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest font-bold text-vibe animate-pulse hidden sm:inline">
            Available for Work
          </span>
          <div className="w-8 h-8 rounded-full border border-ink/20 flex items-center justify-center">
            <Globe size={14} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-6 max-w-[1600px] mx-auto">
        <div className="glass-light p-8 lg:p-24 rounded-[40px] lg:rounded-[60px] border border-white/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.h1 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="font-display text-[18vw] lg:text-[12vw] leading-[0.85] uppercase tracking-tighter"
              >
                Mahin <br />
                <span className="text-vibe">Ahmad</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-8 max-w-md text-lg leading-relaxed opacity-70"
              >
                Welcome to a technical journey that transcends syntax and logic. 
                Discover the artistry of digital experiences captured in motion.
              </motion.p>

              <div className="mt-12 flex gap-4">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, backgroundColor: "#F27D26", color: "#FFFFFF" }}
                    className="w-12 h-12 rounded-full border border-ink/20 flex items-center justify-center transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>

              <div className="mt-16 grid grid-cols-2 gap-8">
                {STATS.map((stat, i) => (
                  <div key={i}>
                    <div className="font-display text-5xl lg:text-7xl">{stat.value}</div>
                    <div className="text-[11px] uppercase tracking-widest opacity-50 mt-2 max-w-[120px]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 relative flex justify-end">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="aspect-[4/5] w-full max-w-[420px] bg-[#FFB800] rounded-[40px] lg:rounded-[60px] overflow-hidden relative group shadow-2xl"
              >
                <img 
                  src="https://i.ibb.co.com/4QxDn1X/image.png" 
                  alt="Mahin Ahmad - Visual Artist"
                  loading="eager"
                  className="w-full h-full object-cover mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-700 [image-rendering:auto]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Marquee Section */}
      <section className="py-12 lg:py-20 bg-ink text-paper overflow-hidden border-y border-vibe/30">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span className="font-display text-[10vw] uppercase leading-none">About.</span>
              <span className="font-display text-[10vw] uppercase leading-none text-stroke">About.</span>
              <span className="font-display text-[10vw] uppercase leading-none">About.</span>
              <span className="font-display text-[10vw] uppercase leading-none text-stroke">About.</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 px-6 max-w-[1600px] mx-auto">
        <div className="glass-light p-8 lg:p-24 rounded-[40px] lg:rounded-[60px] border border-white/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-square bg-ink rounded-[40px] overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/abstract/800/800" 
                  alt="Abstract Code"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-8">
                    {[Layers, Cpu, Globe, Code].map((Icon, i) => (
                      <div key={i} className="w-20 h-20 lg:w-24 lg:h-24 bg-paper/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-paper/20">
                        <Icon size={32} className="text-paper lg:hidden" />
                        <Icon size={40} className="text-paper hidden lg:block" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-vibe p-6 lg:p-8 rounded-3xl shadow-2xl max-w-xs text-paper">
                <p className="text-sm font-medium leading-relaxed">
                  "I build digital ecosystems that are as robust as they are beautiful. 
                  My philosophy: Code is the poetry of the machine."
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="font-display text-6xl lg:text-7xl uppercase tracking-tighter leading-none mb-12">
                The <span className="text-vibe">Architect</span> <br /> behind the screen.
              </h2>
              <div className="space-y-6 text-lg opacity-80 leading-relaxed">
                <p>
                  With over 6 years of experience in the digital trenches, I've evolved from a 
                  curious tinkerer to a full-stack architect. I specialize in React ecosystems, 
                  Node.js backends, and high-performance design systems.
                </p>
                <p>
                  My approach is brutalist yet refined—prioritizing performance and structure 
                  without sacrificing the emotional impact of the user interface.
                </p>
              </div>
              <div className="mt-12 pt-12 border-t border-ink/10 flex flex-wrap gap-4">
                {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "PostgreSQL", "AWS"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-ink/5 rounded-full text-xs font-bold uppercase tracking-widest">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="py-20 lg:py-32 px-6 max-w-[1600px] mx-auto">
        <div className="glass-dark p-8 lg:p-24 rounded-[40px] lg:rounded-[60px] border border-white/10 shadow-2xl text-paper">
          <div className="flex justify-between items-end mb-20">
            <h2 className="font-display text-7xl lg:text-[10vw] uppercase leading-none tracking-tighter">
              Selected <br /> <span className="text-vibe">Works</span>
            </h2>
            <div className="hidden md:block text-right">
              <div className="text-[11px] uppercase tracking-[0.3em] font-bold opacity-50 mb-4">Scroll to Explore</div>
              <div className="w-px h-20 bg-vibe mx-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={project.id}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className={`aspect-[4/3] overflow-hidden relative ${i % 2 === 0 ? 'pill-mask' : 'rounded-[40px] lg:rounded-[60px]'}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-vibe rounded-full flex items-center justify-center text-paper">
                      <ArrowUpRight size={24} className="lg:hidden" />
                      <ArrowUpRight size={32} className="hidden lg:block" />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-between items-start">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-vibe font-bold mb-2">{project.type}</div>
                    <h3 className="font-display text-3xl lg:text-4xl uppercase tracking-tight">{project.title}</h3>
                  </div>
                  <div className="font-display text-2xl opacity-30">{project.id}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience List */}
      <section id="stack" className="py-20 lg:py-32 px-6 max-w-[1600px] mx-auto">
        <div className="glass-light p-8 lg:p-24 rounded-[40px] lg:rounded-[60px] border border-white/40 shadow-2xl">
          <div className="mb-20">
            <h2 className="font-display text-6xl lg:text-7xl uppercase tracking-tighter leading-none">
              Career <br /> <span className="text-vibe">Deployments</span>
            </h2>
          </div>

          <div className="border-t border-ink/10">
            {EXPERIENCE.map((exp) => (
              <div 
                key={exp.id}
                className="group py-8 lg:py-12 border-b border-ink/10 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8 items-center hover:bg-ink hover:text-paper transition-all duration-500 px-4 -mx-4 cursor-default"
              >
                <div className="md:col-span-1 font-display text-2xl opacity-30 group-hover:opacity-100">{exp.id}</div>
                <div className="md:col-span-5">
                  <h3 className="font-display text-3xl lg:text-4xl uppercase tracking-tight group-hover:text-vibe transition-colors">{exp.role}</h3>
                </div>
                <div className="md:col-span-3 text-lg opacity-60 group-hover:opacity-100">{exp.company}</div>
                <div className="md:col-span-2 text-sm font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100">{exp.date}</div>
                <div className="md:col-span-1 flex justify-end">
                  <button className="px-6 py-2 border border-ink/20 rounded-full text-[10px] uppercase font-bold tracking-widest group-hover:border-paper group-hover:bg-paper group-hover:text-ink transition-all">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 lg:py-32 px-6 max-w-[1600px] mx-auto relative">
        <div className="glass-dark p-8 lg:p-24 rounded-[40px] lg:rounded-[60px] border border-white/10 shadow-2xl text-paper relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
            <div>
              <h2 className="font-display text-7xl lg:text-[12vw] uppercase leading-[0.85] tracking-tighter mb-12">
                Let's <br /> <span className="text-vibe">Build.</span>
              </h2>
              <p className="text-xl lg:text-2xl opacity-60 max-w-md leading-relaxed">
                Have a vision that needs a technical foundation? Let's collaborate and create something poetic.
              </p>
            </div>
            <div className="flex flex-col justify-end items-start lg:items-end gap-12">
              <a 
                href="mailto:hello@mahinahmad.com" 
                className="font-display text-4xl lg:text-6xl uppercase tracking-tighter border-b-4 border-vibe hover:text-vibe transition-colors"
              >
                hello@mahinahmad.com
              </a>
              <div className="flex gap-8">
                {["GitHub", "LinkedIn", "Twitter", "Instagram"].map((social) => (
                  <a key={social} href="#" className="text-[11px] uppercase tracking-[0.3em] font-bold opacity-50 hover:opacity-100 hover:text-vibe transition-all">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-paper/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-paper rounded-full flex items-center justify-center text-ink font-display text-sm">
                M
              </div>
              <span className="font-display text-lg tracking-tighter uppercase">Portfolio</span>
            </div>
            <div className="text-[10px] uppercase tracking-widest opacity-40">
              &copy; 2026 Mahin Ahmad Portfolio. All Rights Reserved.
            </div>
            <div className="flex gap-8">
              {NAV_LINKS.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Background Text */}
        <div className="absolute -bottom-20 left-0 w-full opacity-[0.03] pointer-events-none select-none">
          <div className="font-display text-[30vw] uppercase leading-none whitespace-nowrap">
            DEVELOPER.DEVELOPER.
          </div>
        </div>
      </footer>
    </div>
  );
}
