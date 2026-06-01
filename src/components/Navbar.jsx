"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars, Xmark } from "@gravity-ui/icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Navigation routes array
  const navLinks = [
    { name: "Browse Jobs", href: "/browse-jobs" },
    { name: "Company", href: "/company" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <header className="w-full bg-black">
      <div className="relative mx-auto lg:mt-4 flex max-w-7xl items-center justify-between rounded-2xl bg-[#141414]/80 px-6 py-3 backdrop-blur-md border border-white/5">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 select-none">
          <span className="text-xl font-bold tracking-tight text-[#3b5bfd]">
            hire<span className="text-orange-500">loop</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="h-4 w-px bg-zinc-800" />
          
          <Link 
            href="/sign-in" 
            className={`text-sm font-medium transition-colors duration-200 ${
              pathname === "/sign-in" ? "text-white" : "text-zinc-400 hover:text-white"
            }`}
          >
            Sign In
          </Link>
          
          <Link href={`sign-up`}>
          <button className="rounded-xl bg-[#4f46e5] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 hover:bg-[#4338ca] transition-all active:scale-95">
            Get Started
          </button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="flex items-center justify-center rounded-lg p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white md:hidden"
        >
          {isOpen ? <Xmark className="h-6 w-6" /> : <Bars className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute left-4 right-4 mt-2 rounded-2xl border border-white/5 bg-[#141414] p-6 shadow-2xl md:hidden z-50">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-1 ${
                    isActive ? "text-white" : "text-zinc-400"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <hr className="border-zinc-800 my-2" />
            <Link 
              href="/sign-in"
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-1 ${
                pathname === "/sign-in" ? "text-white" : "text-zinc-400"
              }`}
            >
              Sign In
            </Link>
            <button className="w-full rounded-xl bg-[#4f46e5] py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-[#4338ca]">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}