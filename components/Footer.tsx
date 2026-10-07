export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05050a] px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold tracking-[-0.02em] text-white transition-colors hover:text-violet-300"
            >
              Md Shahariar Hossen
            </a>

            <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
              AI student, founder, developer, and digital marketing specialist.
            </p>
          </div>

          {/* Social Links */}
          <nav
            aria-label="Social media links"
            className="flex flex-wrap items-center gap-2"
          >
            <a
              href="https://github.com/mdshahariar81"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-[11px] text-zinc-400 transition-all duration-300 hover:border-violet-400/25 hover:bg-violet-400/[0.06] hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/mdshahariar81"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-[11px] text-zinc-400 transition-all duration-300 hover:border-violet-400/25 hover:bg-violet-400/[0.06] hover:text-white"
            >
              LinkedIn
            </a>
            
             <a
              href="https://facebook.com/mdshahariar81"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-[11px] text-zinc-400 transition-all duration-300 hover:border-violet-400/25 hover:bg-violet-400/[0.06] hover:text-white"
            >
              Facebook
            </a>

            <a
              href="https://instagram.com/md.shahariar81"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-[11px] text-zinc-400 transition-all duration-300 hover:border-violet-400/25 hover:bg-violet-400/[0.06] hover:text-white"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/+8801737027588"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-[11px] text-zinc-400 transition-all duration-300 hover:border-violet-400/25 hover:bg-violet-400/[0.06] hover:text-white"
            >
              WhatsApp
            </a>
          </nav>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Md Shahariar Hossen. All rights
            reserved.
          </p>

          <div className="flex items-center gap-2 font-mono">
            <span>Built with</span>
            <span className="text-violet-300">Next.js</span>
            <span className="text-zinc-700">·</span>
            <span className="text-violet-300">React</span>
            <span className="text-zinc-700">·</span>
            <span className="text-violet-300">Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}