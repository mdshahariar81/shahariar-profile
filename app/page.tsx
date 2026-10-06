"use client";

import { useEffect, useState, type CSSProperties } from "react";

import ElectricBorder from "@/components/ElectricBorder";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import GhostFibers from "@/components/GhostFibers";
import { ShimmerButton } from "@/components/ui/shimmer-button";


/* =========================================================
   DATA
   ========================================================= */

const HERO_NAME = "Md Shahariar Hossen";

const projects = [
  {
    number: "01",
    category: "Digital Agency",
    title: "GrowRiar Impact",
    description:
      "A digital marketing agency providing SEO, WordPress development, Meta Ads, and digital marketing solutions for clients.",
    tags: ["SEO", "WordPress", "Meta Ads", "Digital Marketing"],
  },
  {
    number: "02",
    category: "E-commerce",
    title: "Movezora",
    description:
      "An e-commerce venture focused on product sourcing, supplier communication, customer support, and online business operations.",
    tags: ["E-commerce", "Product Research", "Sourcing", "Operations"],
  },
  {
    number: "03",
    category: "SEO Projects",
    title: "Egypt Travel SEO",
    description:
      "SEO work for travel websites covering on-page optimization, technical SEO, keyword research, backlink building, and organic search visibility.",
    tags: ["Technical SEO", "Keyword Research", "On-page SEO", "Link Building"],
  },
  {
    number: "04",
    category: "Robotics & Embedded",
    title: "Arduino Robotics",
    description:
      "Hands-on robotics and embedded systems projects using Arduino, ESP32, sensors, motor drivers, and electronic circuit prototyping.",
    tags: ["Arduino", "ESP32", "Sensors", "Embedded Systems"],
  },
];

const skillGroups = [
  {
    number: "01",
    category: "Programming",
    title: "Programming",
    skills: ["Python", "HTML", "CSS"],
  },
  {
    number: "02",
    category: "Web",
    title: "Web Development",
    skills: ["WordPress", "Elementor", "WooCommerce"],
  },
  {
    number: "03",
    category: "AI",
    title: "Artificial Intelligence",
    skills: [
      "Prompt Engineering",
      "AI Productivity Tools",
      "AI Workflow Optimization",
    ],
  },
  {
    number: "04",
    category: "Marketing",
    title: "Digital Marketing",
    skills: [
      "SEO",
      "Meta Ads",
      "Google Ads",
      "Google Analytics",
      "GTM",
      "Meta Pixel",
      "Email Marketing",
    ],
  },
  {
    number: "05",
    category: "Hardware",
    title: "Robotics & Embedded",
    skills: [
      "Arduino IDE",
      "Arduino",
      "ESP32 / ESP8266",
      "HC-SR04",
      "IR Sensor",
      "HC-05",
      "L298N",
    ],
  },
  {
    number: "06",
    category: "Productivity",
    title: "Design & Office",
    skills: [
      "Microsoft Word",
      "Microsoft Excel",
      "PowerPoint",
      "Canva",
      "Photoshop",
      "Figma",
    ],
  },
];

const certifications = [
  "Industrial Internship — Unique Automation Ltd.",
  "Computer Training — MPS ICT",
  "NSDA Digital Marketing Level 3",
  "NSDA Digital Marketing Level 4",
];

const languages = ["Bangla", "Chinese", "English", "Hindi"];

/* =========================================================
   SMALL REUSABLE UI COMPONENTS
   ========================================================= */

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-violet-300/80 sm:text-[11px]">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function ProjectCard({
  number,
  category,
  title,
  description,
  tags,
}: (typeof projects)[number]) {
  return (
    <article
      className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 opacity-0 animate-project-reveal transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-white/[0.045] sm:p-7"
      style={
        {
          animationDelay: `${Number(number) * 120}ms`,
        } as CSSProperties
      }
    >
      {/* Subtle violet glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Top shine line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/0 to-transparent transition-all duration-500 group-hover:via-violet-400/50"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-violet-300/70">
            {category}
          </p>

          <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold leading-tight text-white transition-transform duration-300 group-hover:translate-x-0.5 sm:text-2xl">
            {title}
          </h3>
        </div>

        <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[9px] text-zinc-400 transition-colors duration-300 group-hover:border-violet-400/25 group-hover:text-violet-300">
          {number}
        </span>
      </div>

      <p className="relative mt-4 text-sm leading-6 text-zinc-400 sm:mt-5 sm:leading-7">
        {description}
      </p>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] text-zinc-400 transition-all duration-300 group-hover:border-violet-400/15 group-hover:bg-violet-400/[0.04] group-hover:text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Explore indicator */}
      <div className="relative mt-6 flex items-center justify-end gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-violet-300/50 transition-all duration-300 group-hover:gap-3 group-hover:text-violet-300">
        <span>Explore</span>
        <span className="h-px w-6 bg-violet-300/30 transition-all duration-300 group-hover:w-10 group-hover:bg-violet-300/60" />
      </div>
    </article>
  );
}

function SkillCard({
  number,
  category,
  title,
  skills,
}: (typeof skillGroups)[number]) {
  return (
    <article className="group min-w-0 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-white/[0.04] sm:p-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-violet-300/70">
        {number} / {category}
      </p>

      <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white sm:text-xl">
        {title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-zinc-400 transition-colors group-hover:border-violet-400/15 group-hover:text-zinc-300 sm:text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

/* =========================================================
   MAIN PAGE
   ========================================================= */

export default function Home() {
  const [displayedName, setDisplayedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* ---------------------------------------------------------
     Hero typing animation
     --------------------------------------------------------- */

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedName === HERO_NAME) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayedName === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 700);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayedName((current) =>
            isDeleting
              ? HERO_NAME.slice(0, current.length - 1)
              : HERO_NAME.slice(0, current.length + 1),
          );
        },
        isDeleting ? 55 : 95,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayedName, isDeleting]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#05050a] text-white">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section
          id="home"
          aria-labelledby="hero-title"
          className="relative flex min-h-screen items-center justify-center overflow-hidden"
        >
          {/* Animated background */}
          <div
            className="absolute inset-0 z-0"
            aria-hidden="true"
          >
            <GhostFibers
              lineColor="#140E35"
              glowColor="#3437A0"
              speed={0.2}
              scale={2}
              rotation={0}
              rotationSpeed={0.25}
              layers={4}
              waveAmplitude={0.015}
              waveFrequency={3}
              waveSpeed={0.15}
              layerSpeed={0.08}
              twist={0.1}
              twistFrequency={5}
              twistSpeed={1.2}
              lineFrequency={5}
              lineSpacing={2}
              lineSharpness={16}
              glowFalloff={10}
              glowIntensity={1.6}
              brightness={2}
              blueBoost={1.25}
              vignette={0.8}
              grain={0.05}
              dpr={1}
              lightMode={false}
              fps={60}
              paused={false}
            />
          </div>

          {/* Readability overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[1] bg-black/35"
          />

          {/* Hero content */}
          <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-28 text-center sm:px-8 sm:py-32 lg:px-10 lg:py-36">
            <p className="mb-5 max-w-[280px] font-mono text-[10px] uppercase leading-5 tracking-[0.2em] text-violet-300/80 sm:mb-6 sm:max-w-none sm:text-xs sm:tracking-[0.25em] md:text-sm">
              Artificial Intelligence · Technology · Entrepreneurship
            </p>

            <h1
                id="hero-title"
                className="max-w-6xl font-[family-name:var(--font-space-grotesk)] text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] 2xl:text-[6rem]"
            >
              <span aria-hidden="true">
                {displayedName}
                <span className="ml-1 inline-block h-[0.8em] w-[2px] translate-y-[0.08em] animate-pulse bg-violet-300 align-baseline" />
              </span>

              <span className="sr-only">{HERO_NAME}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[320px] text-sm leading-6 text-zinc-300 sm:mt-7 sm:max-w-2xl sm:text-base sm:leading-7 md:text-lg md:leading-8">
              Artificial Intelligence student, founder, developer, and digital
              marketing specialist focused on building practical technology
              and digital solutions.
            </p>

            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
              <ShimmerButton
                type="button"
                className="min-h-12 w-full min-w-0 rounded-full px-7 text-sm font-semibold sm:w-auto sm:min-w-40"
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View My Work
              </ShimmerButton>

              <a
                href="/shahariar/MD%20SHAHARIAR%20HOSSEN.pdf"
                download
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto sm:min-w-40"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            aria-hidden="true"
            className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
          >
            <a
              href="#about"
              tabIndex={-1}
              className="group flex flex-col items-center gap-3"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 transition-colors group-hover:text-zinc-300">
                Scroll
              </span>

              <span className="relative h-10 w-px overflow-hidden bg-white/15">
                <span className="absolute left-0 top-0 h-1/2 w-full animate-pulse bg-violet-300" />
              </span>
            </a>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}
        <section
  id="about"
  className="relative overflow-hidden border-t border-white/10 bg-[#05050a] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
>
  <div className="section-ambient" aria-hidden="true" />

  <div className="relative z-10 mx-auto w-full max-w-6xl">
    <SectionHeader
      eyebrow="About Me"
      title="Building at the intersection of AI, technology & business."
      description="A practical journey combining academic learning, entrepreneurship, technology, digital marketing, and hands-on experimentation."
    />

    <div className="mx-auto mt-8 max-w-3xl text-center sm:mt-10">
      <p className="text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
        I&apos;m Md Shahariar Hossen, an Artificial Intelligence student at
        Tiangong University in China. My work combines technology,
        entrepreneurship, digital marketing, and hands-on experimentation.
      </p>

      <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
        Alongside my academic journey, I have founded GrowRiar Impact and
        Movezora, worked with international clients, and explored web
        development, SEO, robotics, Arduino, and AI-powered workflows.
      </p>
    </div>

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14">
      {[
        ["AI", "Artificial Intelligence & emerging technology"],
        ["2+", "Businesses founded & managed"],
        ["SEO", "International digital marketing experience"],
        ["Robotics", "Arduino & embedded systems projects"],
      ].map(([value, description], index) => {
        const cardContent = (
          <div className="h-full rounded-2xl bg-white/[0.03] p-5 sm:p-6">
            <p className="font-mono text-2xl font-semibold text-white">
              {value}
            </p>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {description}
            </p>
          </div>
        );

        // AI — ElectricBorder
        if (index === 0) {
          return (
            <ElectricBorder
              key={value}
              color="#7c3aed"
              speed={0.5}
              chaos={0.04}
              borderRadius={24}
              className="h-full"
            >
              {cardContent}
            </ElectricBorder>
          );
        }

        // 2+ Businesses — second effect
        if (index === 1) {
          return (
            <div
              key={value}
              className="business-card-glow h-full rounded-2xl"
            >
              {cardContent}
            </div>
          );
        }

          // SEO — soft breathing glow
      if (index === 2) {
        return (
          <div
            key={value}
            className="seo-card-glow h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-violet-300/20 hover:bg-white/[0.045] sm:p-6"
          >
            <p className="font-mono text-2xl font-semibold text-white">
              {value}
            </p>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {description}
            </p>
          </div>
        );
      }

      // Robotics — animated shine
      if (index === 3) {
        return (
          <div
            key={value}
            className="robotics-card-shine h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-violet-300/20 hover:bg-white/[0.045] sm:p-6"
          >
            <p className="font-mono text-2xl font-semibold text-white">
              {value}
            </p>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {description}
            </p>
          </div>
        );
      }
      })}
    </div>
  </div>
</section>

        {/* =====================================================
            EXPERIENCE + EDUCATION
        ===================================================== */}
        <section
          id="experience"
          className="relative overflow-hidden border-t border-white/10 bg-[#05050a] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
        >
          <div className="section-ambient" aria-hidden="true" />

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <SectionHeader
              eyebrow="Journey"
              title="Education & Experience"
              description="A timeline of my academic journey, professional experience, and entrepreneurial work."
            />

            {/* Experience */}
            <div className="mt-14 sm:mt-16">
              <div className="mb-7 flex items-center gap-4">
                <h3 className="shrink-0 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
                  Professional Experience
                </h3>
                <span className="h-px flex-1 bg-white/10" />
              </div>

              <div className="relative ml-2 border-l border-white/10 pl-7 sm:ml-3 sm:pl-9">
                {[
                  {
                    current: true,
                    date: "2026 — Present",
                    role: "Founder",
                    company: "Movezora",
                    points: [
                      "Manage e-commerce operations.",
                      "Conduct product research and sourcing.",
                      "Communicate with suppliers.",
                      "Support customer service and business development.",
                    ],
                  },
                  {
                    current: true,
                    date: "2023 — Present",
                    role: "Founder",
                    company: "GrowRiar Impact",
                    points: [
                      "Founded and manage a digital marketing agency.",
                      "Deliver SEO, WordPress development, and digital marketing solutions.",
                      "Manage client communication and project execution.",
                      "Work with local and international clients.",
                    ],
                  },
                  {
                    current: false,
                    date: "03/2024 — 09/2025 · Egypt",
                    role: "Social Media Marketer",
                    company: "Nile River Travel",
                    points: [
                      "Social Media Marketing",
                      "Content Planning",
                      "Audience Engagement",
                      "Brand Promotion",
                    ],
                  },
                  {
                    current: false,
                    date: "02/2024 — 03/2024 · Egypt",
                    role: "SEO Executive",
                    company: "Great Egypt Travel",
                    points: [
                      "On-page SEO",
                      "Off-page SEO",
                      "Technical SEO",
                      "Keyword Research",
                      "Backlink Building",
                      "Organic Traffic Growth",
                    ],
                  },
                  {
                    current: false,
                    date: "09/2023 — 01/2024 · Egypt",
                    role: "SEO Specialist",
                    company: "Travel Trend",
                    points: [
                      "Complete Website SEO",
                      "Technical SEO",
                      "Website Optimization",
                      "Search Engine Visibility Improvement",
                    ],
                  },
                ].map((job, index, jobs) => (
                  <article
                    key={`${job.company}-${job.role}`}
                    className={`group relative ${
                      index !== jobs.length - 1 ? "pb-10 sm:pb-12" : ""
                    }`}
                  >
                    <span
                      className={`absolute -left-[34px] top-1.5 h-3 w-3 rounded-full border-2 bg-[#05050a] transition-all duration-300 group-hover:scale-125 sm:-left-[39px] ${
                        job.current
                          ? "border-violet-300 group-hover:bg-violet-300"
                          : "border-white/30 group-hover:border-violet-300 group-hover:bg-violet-300"
                      }`}
                    />

                    <p
                      className={`font-mono text-[10px] uppercase tracking-[0.16em] sm:text-xs ${
                        job.current
                          ? "text-violet-300/70"
                          : "text-zinc-500"
                      }`}
                    >
                      {job.date}
                    </p>

                    <h4 className="mt-2.5 text-lg font-semibold text-white sm:text-xl">
                      {job.role}
                    </h4>

                    <p className="mt-1 text-sm text-zinc-500">
                      {job.company}
                    </p>

                    <ul className="mt-4 space-y-1.5 text-sm leading-6 text-zinc-400 sm:mt-5 sm:space-y-2 sm:leading-7">
                      {job.points.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mt-20 sm:mt-24">
              <div className="mb-7 flex items-center gap-4">
                <h3 className="shrink-0 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
                  Education
                </h3>
                <span className="h-px flex-1 bg-white/10" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
                {[
                  {
                    date: "2025 — Present",
                    title: "Bachelor of Science (B.Sc.)",
                    field: "Artificial Intelligence",
                    place: "Tiangong University",
                    location: "Tianjin, China",
                    accent: true,
                  },
                  {
                    date: "2019 — 2023",
                    title: "Diploma in Engineering",
                    field: "Electrical",
                    place: "Chapainawabganj Polytechnic Institute",
                    location: "GPA: 3.10",
                    accent: false,
                  },
                  {
                    date: "2018 — 2019",
                    title: "Secondary School Certificate",
                    field: "General Mechanics",
                    place: "Puthia P.N Government High School",
                    location: "GPA: 4.64",
                    accent: false,
                  },
                ].map((education) => (
                  <article
                    key={education.title}
                    className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-violet-400/20 hover:bg-white/[0.04] sm:p-6"
                  >
                    <p
                      className={`font-mono text-[10px] uppercase tracking-[0.15em] sm:text-xs ${
                        education.accent
                          ? "text-violet-300/70"
                          : "text-zinc-500"
                      }`}
                    >
                      {education.date}
                    </p>

                    <h4 className="mt-4 text-lg font-semibold leading-snug text-white">
                      {education.title}
                    </h4>

                    <p className="mt-2 text-sm text-zinc-400">
                      {education.field}
                    </p>

                    <p className="mt-5 text-sm leading-6 text-zinc-500">
                      {education.place}
                      <br />
                      {education.location}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}
       <section
  id="projects"
  className="relative overflow-hidden border-t border-white/10 bg-[#05050a] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
>
  <div className="section-ambient" aria-hidden="true" />

  <div className="relative z-10 mx-auto w-full max-w-6xl">
    <SectionHeader
      eyebrow="Selected Work"
      title="Projects & Ventures"
      description="A selection of businesses, digital projects, and technical work I have built or contributed to."
    />

    <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5">
      {projects.map((project) => (
        <article
          key={project.title}
          className="group relative flex min-h-[300px] min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-white/[0.045] sm:p-7"
        >
          {/* Subtle ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Project header */}
          <div className="relative flex items-start justify-between gap-3">
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300/60">
              {project.number}
            </span>

            <span className="max-w-[65%] rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-right font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-500 transition-colors duration-300 group-hover:border-violet-400/20 group-hover:text-violet-300/80">
              {project.category}
            </span>
          </div>

          {/* Project content */}
          <div className="relative mt-8 flex-1">
            <h3 className="max-w-md font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.03em] text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
              {project.title}
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
              {project.description}
            </p>

            {/* Technology tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[10px] text-zinc-500 transition-all duration-300 group-hover:border-violet-400/15 group-hover:text-zinc-300 sm:text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project footer — stays below tags */}
          <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.06] pt-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-600">
              Project
            </span>

            <div className="flex items-center gap-2 opacity-50 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
              <span className="h-px w-7 bg-violet-300/50" />

              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-violet-300">
                Explore
              </span>
            </div>
          </div>

          {/* Animated bottom line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-px w-0 bg-violet-400/60 transition-all duration-500 group-hover:w-full"
          />
        </article>
      ))}
    </div>
  </div>
</section>

        {/* =====================================================
            SKILLS
        ===================================================== */}
        <section
  id="skills"
  className="relative overflow-hidden border-t border-white/10 bg-[#05050a] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
>
  <div className="section-ambient" aria-hidden="true" />

  <div className="relative z-10 mx-auto w-full max-w-6xl">
    <SectionHeader
      eyebrow="Technical Skills"
      title="Tools & Technologies"
      description="A practical skill set built across artificial intelligence, development, digital marketing, and embedded systems."
    />

    <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
      {skillGroups.map((group) => (
        <article
          key={group.title}
          className="group relative min-h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-white/[0.045] sm:p-6"
        >
          {/* Subtle ambient glow on hover */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          <div className="relative">
            {/* Number + category */}
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[10px] tracking-[0.2em] text-violet-300/60">
                {group.number}
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600 transition-colors duration-300 group-hover:text-violet-300/60">
                {group.category}
              </span>
            </div>

            {/* Skill title */}
            <h3 className="mt-7 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold tracking-[-0.02em] text-white transition-transform duration-300 group-hover:translate-x-1">
              {group.title}
            </h3>

            {/* Skill badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[10px] text-zinc-400 transition-all duration-300 group-hover:border-violet-400/15 group-hover:bg-violet-400/[0.04] group-hover:text-zinc-300 sm:text-[11px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Animated bottom line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-px w-0 bg-violet-400/60 transition-all duration-500 group-hover:w-full"
          />
        </article>
      ))}
    </div>
  </div>
</section>

        {/* =====================================================
            CERTIFICATIONS + LANGUAGES
        ===================================================== */}
        <section
          id="certifications"
          className="relative overflow-hidden border-t border-white/10 bg-[#05050a] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
        >
          <div className="section-ambient" aria-hidden="true" />

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <SectionHeader
              eyebrow="Credentials"
              title="Certifications & Languages"
              description="Professional training, certifications, and languages that support my academic and professional work."
            />

            <div className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-[1.4fr_0.6fr] lg:gap-5">
              {/* Certifications */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300/70 sm:text-[11px]">
                  Professional Training
                </p>

                <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-white">
                  Certifications
                </h3>

                <div className="mt-7 space-y-3">
                  {certifications.map((certificate, index) => (
                    <div
                      key={certificate}
                      className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-violet-400/20 hover:bg-white/[0.04]"
                    >
                      <span className="mt-0.5 font-mono text-[10px] text-violet-300/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-sm leading-6 text-zinc-300">
                        {certificate}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300/70 sm:text-[11px]">
                  Communication
                </p>

                <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-white">
                  Languages
                </h3>

                <div className="mt-7 space-y-3">
                  {languages.map((language, index) => (
                    <div
                      key={language}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:border-violet-400/20 hover:bg-white/[0.04]"
                    >
                      <span className="text-sm text-zinc-300">
                        {language}
                      </span>

                      <span className="font-mono text-[10px] text-zinc-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}
        <section
          id="contact"
          className="relative overflow-hidden border-t border-white/10 bg-[#05050a] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32"
        >
          <div className="section-ambient" aria-hidden="true" />

          <div className="relative z-10 mx-auto w-full max-w-5xl">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-300/80 sm:text-[11px]">
                Let&apos;s Connect
              </p>

              <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-[4.25rem]">
                Let&apos;s build something meaningful.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                Have a project, idea, or opportunity in mind? I&apos;d love to
                hear about it and explore how we can create something valuable
                together.
              </p>

              <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
                <ShimmerButton
                  type="button"
                  className="min-h-12 w-full min-w-48 rounded-full px-7 text-sm font-semibold sm:w-auto"
                  shimmerColor="#a78bfa"
                  background="rgba(124, 58, 237, 0.9)"
                  onClick={() => {
                    window.location.href =
                      "mailto:mdshahariarhossen81@gmail.com";
                  }}
                >
                  Get In Touch
                </ShimmerButton>

                <a
                  href="https://linkedin.com/in/mdshahariar81"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full min-w-48 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/30 hover:bg-violet-400/[0.06] sm:w-auto"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Contact links */}
            <div className="mx-auto mt-14 grid w-full max-w-4xl gap-3 sm:grid-cols-3 sm:mt-16">
              <a
                href="mailto:mdshahariarhossen81@gmail.com"
                className="group flex min-h-[96px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/25 hover:bg-white/[0.045]"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                    Email
                  </p>

                  <p className="mt-3 break-all text-xs text-zinc-300 transition-colors group-hover:text-white sm:text-sm">
                    mdshahariarhossen81@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/mdshahariar81"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[96px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/25 hover:bg-white/[0.045]"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                    GitHub
                  </p>

                  <p className="mt-3 text-sm text-zinc-300 transition-colors group-hover:text-white">
                    @mdshahariar81
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/mdshahariar81"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[96px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/25 hover:bg-white/[0.045]"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                    LinkedIn
                  </p>

                  <p className="mt-3 text-sm text-zinc-300 transition-colors group-hover:text-white">
                    /in/mdshahariar81
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}