"use client";

/* =========================================================
   IMPORTS
   ========================================================= */

import { useEffect, useState } from "react";
import Image from "next/image";

import ElectricBorder from "@/components/ElectricBorder";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import GhostFibers from "@/components/GhostFibers";
import { ShimmerButton } from "@/components/ui/shimmer-button";

/* =========================================================
   DATA
   ---------------------------------------------------------
   Keep portfolio content here so the UI components below
   remain clean and easy to maintain.
   ========================================================= */

const HERO_NAME = "Md Shahariar Hossen";

/* ---------------------------------------------------------
   Projects
   --------------------------------------------------------- */

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

/* ---------------------------------------------------------
   Skills
   --------------------------------------------------------- */

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

/* ---------------------------------------------------------
   Certifications
   --------------------------------------------------------- */

const certifications = [
  "Industrial Internship — Unique Automation Ltd.",
  "Computer Training — MPS ICT",
  "NSDA Digital Marketing Level 3",
  "NSDA Digital Marketing Level 4",
];

/* ---------------------------------------------------------
   Languages
   --------------------------------------------------------- */

const languages = ["Bangla", "Chinese", "English", "Hindi"];

/* =========================================================
   REUSABLE SECTION HEADER
   ---------------------------------------------------------
   Keeps section headings consistent throughout the website.
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
      {/* Small section label */}
      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-violet-300/80 sm:text-[11px]">
        {eyebrow}
      </p>

      {/* Main section title */}
      <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
        {title}
      </h2>

      {/* Supporting description */}
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
        {description}
      </p>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
   ========================================================= */

export default function Home() {
  /* -------------------------------------------------------
     Hero typing animation state
     ------------------------------------------------------- */

  const [displayedName, setDisplayedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* -------------------------------------------------------
     Typing / deleting loop
     ------------------------------------------------------- */

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    /*
      When the complete name is displayed, wait for a moment
      before starting the delete animation.
    */
    if (!isDeleting && displayedName === HERO_NAME) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    }

    /*
      When the name has been completely deleted, pause and
      start typing again.
    */
    else if (isDeleting && displayedName === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 700);
    }

    /*
      Normal typing / deleting behavior.
    */
    else {
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
      {/* =====================================================
          GLOBAL NAVIGATION
      ===================================================== */}

      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#05050a] text-white">

        {/* ===================================================
            HOME / HERO
        =================================================== */}

        <section
          id="home"
          className="relative min-h-screen overflow-hidden bg-[#05050a] px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:px-10"
        >
          {/* -------------------------------------------------
              Animated background
              ------------------------------------------------- */}

            <div className="absolute inset-0">
              <GhostFibers
                lineColor="#7c3aed"
                glowColor="#a78bfa"
                speed={0.2}
                scale={1}
                rotation={0}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-[#05050a]/80 via-[#05050a]/55 to-[#05050a]/70" />

          {/* Dark readability layer */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#05050a]/55"
          />

          {/* -------------------------------------------------
              Hero content
              ------------------------------------------------- */}

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-7xl items-center">
            <div className="grid w-full items-center gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14 xl:gap-20">

              {/* =============================================
                  PROFILE PHOTO
              ============================================= */}

              <div className="flex justify-center lg:justify-start">
                <div className="relative">

                  {/* Animated aurora behind the portrait */}
                  <div
                    aria-hidden="true"
                    className="portrait-aurora absolute -inset-12 rounded-[3rem]"
                  >
                    <span className="portrait-aurora-blob portrait-aurora-blob-one" />
                    <span className="portrait-aurora-blob portrait-aurora-blob-two" />
                    <span className="portrait-aurora-blob portrait-aurora-blob-three" />
                  </div>

                  {/* Portrait frame */}
                  <div
                    className="
                      relative
                      h-[310px]
                      w-[250px]
                      overflow-hidden
                      rounded-[1.75rem]
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-2
                      shadow-2xl
                      shadow-violet-950/30

                      sm:h-[370px]
                      sm:w-[295px]

                      md:h-[390px]
                      md:w-[315px]
                    "
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-[1.35rem] bg-zinc-950">
                      <Image
                        src="/shahariar/shahariar.png"
                        alt="Md Shahariar Hossen"
                        fill
                        priority
                        sizes="(max-width: 640px) 250px, (max-width: 768px) 295px, 315px"
                        className="object-cover object-top transition-transform duration-700 hover:scale-[1.025]"
                      />

                      {/* Subtle image overlay */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-[#05050a]/30 via-transparent to-transparent"
                      />
                    </div>
                  </div>

                  {/* AI & Technology badge */}
                  <div
                    className="
                      absolute
                      -bottom-4
                      left-1/2
                      flex
                      -translate-x-1/2
                      items-center
                      gap-2
                      whitespace-nowrap
                      rounded-full
                      border
                      border-white/10
                      bg-[#0a0a10]/90
                      px-4
                      py-2.5
                      shadow-xl
                      backdrop-blur-xl
                    "
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />

                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-300">
                      AI & Technology
                    </span>
                  </div>
                </div>
              </div>

              {/* =============================================
                  HERO TEXT
              ============================================= */}

              <div className="min-w-0 text-center lg:text-left">

                {/* Small introduction label */}
                 {/* <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-violet-300/80 sm:text-[10px] sm:tracking-[0.28em] md:text-[11px]">
                  Artificial Intelligence · Technology · Entrepreneurship
                </p> */}

                {/* Main name */}
                <h1
                  className="
                    mt-10
                    font-[family-name:var(--font-space-grotesk)]
                    text-[2.45rem]
                    font-semibold
                    leading-[0.98]
                    tracking-[-0.055em]
                    text-white

                    sm:text-6xl
                    md:text-7xl

                    lg:text-[3.75rem]
                    xl:text-[5rem]
                    2xl:text-[5.4rem]

                    lg:whitespace-nowrap
                  "
                >
                  {displayedName}

                  {/* Typing cursor */}
                  <span
                    aria-hidden="true"
                    className="ml-1 inline-block h-[0.8em] w-[2px] translate-y-[0.08em] animate-pulse bg-violet-400"
                  />
                </h1>

                {/* Description */}
                <p
                  className="
                    mx-auto
                    mt-10
                    max-w-[20rem]
                    text-sm
                    leading-7
                    text-zinc-400

                    sm:max-w-xl
                    sm:text-base
                    sm:leading-8

                    lg:mx-0
                    lg:max-w-xl
                  "
                >
                  Artificial Intelligence student at Tiangong University with
                  practical experience across web development, digital
                  marketing, robotics, automation, and AI-powered workflows.
                </p>

                {/* CTA buttons */}
                <div
                  className="
                    mt-9
                    flex
                    w-full
                    flex-col
                    gap-3

                    sm:w-auto
                    sm:flex-row

                    lg:justify-start
                  "
                >
                  {/* Primary CTA */}
                  <ShimmerButton
                    type="button"
                    className="min-h-12 w-full rounded-full px-7 text-sm font-semibold sm:w-auto"
                    shimmerColor="#c4b5fd"
                    background="rgba(124, 58, 237, 0.9)"
                    onClick={() => {
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    View My Work
                  </ShimmerButton>

                  {/* CV download */}
                  <a
                    href="/shahariar/MD%20SHAHARIAR%20HOSSEN.pdf"
                    download
                    className="
                      inline-flex
                      min-h-12
                      w-full
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-7
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-violet-300/30
                      hover:bg-violet-400/[0.06]

                      sm:w-auto
                    "
                  >
                    Download CV
                  </a>
                </div>

                {/* Location / availability */}
                <div
                  className="
                    mt-7
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-x-5
                    gap-y-2
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-zinc-600

                    lg:justify-start
                  "
                >
                  <span>Based in Tianjin, China</span>

                  <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />

                  <span>Open to Opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------
              Scroll indicator
              ------------------------------------------------- */}

          <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 sm:block">
            <a
              href="#about"
              aria-label="Scroll to About section"
              className="group flex flex-col items-center gap-3 text-zinc-600 transition-colors hover:text-violet-300"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.25em]">
                Scroll
              </span>

              <span className="relative h-10 w-px overflow-hidden bg-white/10">
                <span className="absolute left-0 top-0 h-4 w-px animate-scroll-line bg-violet-400/70" />
              </span>
            </a>
          </div>
        </section>

        {/* ===================================================
            ABOUT
            ---------------------------------------------------
            This section was missing from the current version.
            It is restored here as the main personal overview.
        =================================================== */}

        <section
          id="about"
          className="relative overflow-hidden border-t border-white/10 bg-[#05050a] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
        >
          {/* Soft background ambience */}
          <div className="section-ambient" aria-hidden="true" />

          <div className="relative z-10 mx-auto w-full max-w-6xl">

            {/* Section heading */}
            <SectionHeader
              eyebrow="About Me"
              title="Building at the intersection of AI, technology & business."
              description="A practical journey combining academic learning, entrepreneurship, technology, digital marketing, and hands-on experimentation."
            />

            {/* -------------------------------------------------
                Personal introduction
            ------------------------------------------------- */}

            <div className="mx-auto mt-9 max-w-3xl text-center sm:mt-10">
              <p className="text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                I&apos;m Md Shahariar Hossen, an Artificial Intelligence
                student at Tiangong University in China. My work combines
                technology, entrepreneurship, digital marketing, and
                hands-on experimentation.
              </p>

              <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                Alongside my academic journey, I have founded GrowRiar Impact
                and Movezora, worked with international clients, and explored
                web development, SEO, robotics, Arduino, and AI-powered
                workflows.
              </p>
            </div>

            {/* -------------------------------------------------
                Key highlights
                -------------------------------------------------
                Four cards use different subtle effects so the
                section has visual movement without becoming
                an animation showcase.
            ------------------------------------------------- */}

            <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">

              {/* -----------------------------------------------
                  AI
              ----------------------------------------------- */}

              <ElectricBorder
                color="#7c3aed"
                speed={0.5}
                chaos={0.04}
                borderRadius={24}
                className="h-full"
              >
                <div className="h-full rounded-2xl bg-white/[0.03] p-5 sm:p-6">
                  <p className="font-mono text-2xl font-semibold text-white">
                    AI
                  </p>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Artificial Intelligence & emerging technology
                  </p>
                </div>
              </ElectricBorder>

              {/* -----------------------------------------------
                  Business
              ----------------------------------------------- */}

              <div className="business-card-glow h-full rounded-2xl">
                <div className="h-full rounded-2xl bg-white/[0.03] p-5 sm:p-6">
                  <p className="font-mono text-2xl font-semibold text-white">
                    2+
                  </p>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Businesses founded & managed
                  </p>
                </div>
              </div>

              {/* -----------------------------------------------
                  SEO
              ----------------------------------------------- */}

              <div className="seo-card-glow h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-violet-300/20 hover:bg-white/[0.045] sm:p-6">
                <p className="font-mono text-2xl font-semibold text-white">
                  SEO
                </p>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  International digital marketing experience
                </p>
              </div>

              {/* -----------------------------------------------
                  Robotics
              ----------------------------------------------- */}

              <div className="robotics-card-shine h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-violet-300/20 hover:bg-white/[0.045] sm:p-6">
                <p className="font-mono text-2xl font-semibold text-white">
                  Robotics
                </p>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Arduino & embedded systems projects
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            EXPERIENCE + EDUCATION
        =================================================== */}

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

            {/* =================================================
                PROFESSIONAL EXPERIENCE
            ================================================= */}

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
                      index !== jobs.length - 1
                        ? "pb-10 sm:pb-12"
                        : ""
                    }`}
                  >
                    {/* Timeline dot */}
                    <span
                      className={`absolute -left-[34px] top-1.5 h-3 w-3 rounded-full border-2 bg-[#05050a] transition-all duration-300 group-hover:scale-125 sm:-left-[39px] ${
                        job.current
                          ? "border-violet-300 group-hover:bg-violet-300"
                          : "border-white/30 group-hover:border-violet-300 group-hover:bg-violet-300"
                      }`}
                    />

                    {/* Date */}
                    <p
                      className={`font-mono text-[10px] uppercase tracking-[0.16em] sm:text-xs ${
                        job.current
                          ? "text-violet-300/70"
                          : "text-zinc-500"
                      }`}
                    >
                      {job.date}
                    </p>

                    {/* Role */}
                    <h4 className="mt-2.5 text-lg font-semibold text-white sm:text-xl">
                      {job.role}
                    </h4>

                    {/* Company */}
                    <p className="mt-1 text-sm text-zinc-500">
                      {job.company}
                    </p>

                    {/* Responsibilities */}
                    <ul className="mt-4 space-y-1.5 text-sm leading-6 text-zinc-400 sm:mt-5 sm:space-y-2 sm:leading-7">
                      {job.points.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            {/* =================================================
                EDUCATION
            ================================================= */}

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

        {/* ===================================================
            PROJECTS
        =================================================== */}

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
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
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

                    {/* Tags */}
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

                  {/* Project footer */}
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

        {/* ===================================================
            SKILLS
        =================================================== */}

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
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative">

                    {/* Number and category */}
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

                  {/* Bottom hover line */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-px w-0 bg-violet-400/60 transition-all duration-500 group-hover:w-full"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            CERTIFICATIONS + LANGUAGES
        =================================================== */}

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

              {/* =================================================
                  CERTIFICATIONS
              ================================================= */}

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

              {/* =================================================
                  LANGUAGES
              ================================================= */}

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

        {/* ===================================================
            CONTACT
        =================================================== */}

        <section
          id="contact"
          className="relative overflow-hidden border-t border-white/10 bg-[#05050a] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32"
        >
          <div className="section-ambient" aria-hidden="true" />

          <div className="relative z-10 mx-auto w-full max-w-5xl">

            {/* Main contact message */}
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-300/80 sm:text-[11px]">
                Let&apos;s Connect
              </p>

              <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-[4.25rem]">
                Let&apos;s build something meaningful.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                Have a project, idea, or opportunity in mind? I&apos;d love
                to hear about it and explore how we can create something
                valuable together.
              </p>

              {/* Contact buttons */}
              <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">

                {/* Email CTA */}
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

                {/* LinkedIn */}
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

            {/* =================================================
                CONTACT LINKS
            ================================================= */}

            <div className="mx-auto mt-14 grid w-full max-w-4xl gap-3 sm:mt-16 sm:grid-cols-3">

              {/* Email */}
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

              {/* GitHub */}
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

              {/* LinkedIn */}
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

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </>
  );
}