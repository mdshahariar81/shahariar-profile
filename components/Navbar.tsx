"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Detect which section is currently visible
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#05050a]/75 px-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5"
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-violet-300 transition-colors duration-300 group-hover:bg-violet-400/15">
              SH
            </span>

            <span className="hidden font-[family-name:var(--font-space-grotesk)] text-sm font-semibold tracking-[-0.01em] text-white sm:block">
              Md Shahariar Hossen
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-violet-400/10 text-violet-200"
                      : "text-zinc-400 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Desktop CV */}
          <a
            href="/shahariar/MD%20SHAHARIAR%20HOSSEN.pdf"
            download
            className="hidden rounded-full border border-violet-400/25 bg-violet-400/10 px-4 py-2 text-xs font-semibold text-violet-200 transition-all duration-300 hover:border-violet-300/40 hover:bg-violet-400/15 lg:inline-flex"
          >
            Download CV
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition-colors hover:bg-white/[0.07] hover:text-white lg:hidden"
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`h-px w-full bg-current transition-transform duration-200 ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />

              <span
                className={`h-px w-full bg-current transition-opacity duration-200 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-px w-full bg-current transition-transform duration-200 ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#08080e]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
            isOpen
              ? "max-h-[500px] translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          <div className="p-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-sm transition-colors ${
                    isActive
                      ? "bg-violet-400/10 text-violet-200"
                      : "text-zinc-400 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <a
              href="/shahariar/MD%20SHAHARIAR%20HOSSEN.pdf"
              download
              onClick={closeMenu}
              className="mt-1 flex items-center justify-center rounded-xl bg-violet-500/10 px-4 py-3 text-sm font-semibold text-violet-200 transition-colors hover:bg-violet-500/15"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}