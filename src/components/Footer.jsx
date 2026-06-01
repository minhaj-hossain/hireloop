import Link from 'next/link';

export default function Footer() {
  // Navigation links structured for clean rendering
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Job discovery", href: "/job-discovery" },
        { name: "Worker AI", href: "/worker-ai" },
        { name: "Companies", href: "/companies" },
        { name: "Salary data", href: "/salary-data" }
      ]
    },
    {
      title: "Navigations",
      links: [
        { name: "Help center", href: "/help-center" },
        { name: "Career library", href: "/career-library" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Brand Guideline", href: "/brand-guideline" },
        { name: "Newsroom", href: "/newsroom" }
      ]
    }
  ];

  return (
    <footer className="w-full bg-[#030303] text-[#666666] text-sm selection:bg-indigo-500/30">
      {/* Container with responsive padding for mobile, tablet, and desktop */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16 lg:py-16">
        
        {/* Top Section: Flex-col on mobile, elegant grid on large screens */}
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-8 pb-12 lg:pb-16 border-b border-zinc-900/60">
          
          {/* Logo & Brand Pitch (Spans 5/12 columns on large screens) */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:col-span-5">
            <Link href="/" className="inline-block select-none self-start">
              <span className="text-2xl font-bold tracking-tight text-[#2b7fff]">
                hire<span className="text-[#f25e22]">loop</span>
              </span>
            </Link>
            <p className="max-w-sm text-zinc-500 leading-relaxed text-[14px] sm:text-[15px]">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* Links Columns (Spans 7/12 columns. Responsive grid handles 2 to 3 columns beautifully) */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-8 lg:col-span-7">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-3 sm:gap-4">
                <h3 className="text-[#3b5bfd] font-medium text-[14px] sm:text-[15px] tracking-wide">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-2.5 sm:gap-3 text-[13px] sm:text-[14px]">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="hover:text-zinc-300 transition-colors duration-200 block py-0.5">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar Section */}
        <div className="pt-8 flex flex-col gap-6 sm:flex-col md:flex-row md:items-center md:justify-between text-xs text-zinc-600">
          
          {/* Social Icons Stack */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-900/60 border border-zinc-800/40 hover:bg-zinc-800 hover:text-zinc-300 transition-all duration-200" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current text-zinc-500" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            {/* Pinterest / Styled App Badge */}
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#2e2b77] border border-[#3e3a96]/30 hover:bg-[#36328a] transition-all duration-200" aria-label="Pinterest">
              <svg className="w-4 h-4 fill-current text-zinc-300" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.23 2.63 7.85 6.33 9.32-.1-.79-.19-2 .04-2.86.21-.78 1.35-5.74 1.35-5.74s-.34-.69-.34-1.71c0-1.6 1-2.8 2.1-2.8.99 0 1.46.74 1.46 1.63 0 .99-.63 2.47-.96 3.84-.27 1.15.58 2.09 1.71 2.09 2.05 0 3.63-2.16 3.63-5.28 0-2.76-1.98-4.69-4.81-4.69-3.28 0-5.21 2.46-5.21 5 0 .99.38 2.05.86 2.63a.31.31 0 0 1 .07.29c-.08.33-.26 1.06-.3 1.22-.05.21-.17.26-.39.16-1.46-.68-2.37-2.82-2.37-4.54 0-3.69 2.69-7.09 7.74-7.09 4.06 0 7.22 2.89 7.22 6.77 0 4.04-2.54 7.29-6.07 7.29-1.19 0-2.31-.62-2.69-1.35l-.73 2.79c-.26 1.02-.98 2.3-1.46 3.08A10 10 0 1 0 12 2z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-900/60 border border-zinc-800/40 hover:bg-zinc-800 hover:text-zinc-300 transition-all duration-200" aria-label="LinkedIn">
              <svg className="w-3.5 h-3.5 fill-current text-zinc-500" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* Legal / Copyright Info */}
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap md:items-center gap-y-2 gap-x-4 lg:gap-x-6 tracking-wide">
            <span className="text-zinc-600">Copyright 2024 —Programming Hero</span>
            <div className="hidden md:block w-px h-3 bg-zinc-800/80" />
            <Link href="/terms-privacy" className="text-zinc-500 hover:text-zinc-300 transition-colors duration-200">
              Terms & Policy - Privacy Guideline
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}