"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bars, Xmark } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const role = session?.user?.role;

  const navLinks = [
    { name: "Browse Jobs", href: "/browse-jobs" },
    { name: "Company", href: "/company" },
    { name: "Pricing", href: "/pricing" },
  ];

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          setIsDropdownOpen(false);
          setIsOpen(false);
          router.push("/sign-in");
        },
      },
    });
  };

  // console.log("Current user name:", session);

  return (
    <header className="w-full bg-black">
      <div className="relative mx-auto lg:mt-4 flex max-w-7xl items-center justify-between rounded-2xl bg-[#141414]/80 px-6 py-3 backdrop-blur-md border border-white/5 z-50">
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

          {/* DESKTOP AUTHENTICATION GRAPHIC NODE */}
          {isPending ? (
            <div className="h-8 w-24 bg-zinc-800/50 animate-pulse rounded-xl" />
          ) : session ? (
            /* DESKTOP SIGNED IN ACTIONS CONTROL */
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 group outline-none focus:outline-none"
              >
                {/* FIXED: Explicit responsive hidden state display properties applied */}
                <div className="hidden sm:flex flex-col text-right">
                  <span className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">
                    Hello,{" "}
                    <span className="text-white font-semibold">
                      {session?.user?.name}
                    </span>
                    !
                  </span>
                </div>

                {session.user.image ? (
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                    <Image
                      src={session.user.image}
                      alt={session.user.name}
                      fill
                      sizes="32px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white uppercase select-none group-hover:bg-indigo-500 transition-colors">
                    {session.user.name?.charAt(0)}
                  </div>
                )}
              </button>

              {/* OVERLAY ACTION PANEL DROPDOWN */}
              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-3 w-48 rounded-xl border border-zinc-800 bg-[#18181b] p-1.5 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left rounded-lg px-3 py-2 text-xs font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
                    >
                      Sign Out
                    </button>

                    <Link href={`/dashboard/${role}`}>Dashboard</Link>
                  </div>
                </>
              )}
            </div>
          ) : (
            /* DESKTOP SIGNED OUT ACTIONS */
            <>
              <Link
                href="/sign-in"
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === "/sign-in"
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Sign In
              </Link>

              <Link href="/sign-up">
                <button className="rounded-xl bg-[#4f46e5] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 hover:bg-[#4338ca] transition-all active:scale-95">
                  Get Started
                </button>
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Action Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white md:hidden"
        >
          {isOpen ? (
            <Xmark className="h-6 w-6" />
          ) : (
            <Bars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu Layout */}
      {isOpen && (
        <div className="absolute left-4 right-4 mt-2 rounded-2xl border border-white/5 bg-[#141414] p-6 shadow-2xl md:hidden z-50 animate-in fade-in slide-in-from-top-4 duration-200">
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

            {/* MOBILE AUTHENTICATION INTERFACE PANEL */}
            {!isPending &&
              (session ? (
                /* MOBILE SIGNED IN PANEL DRAWER */
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 py-2 bg-zinc-900/40 px-3 rounded-xl border border-zinc-800/40">
                    {session.user.image ? (
                      <div className="relative w-9 h-9 rounded-full overflow-hidden border border-zinc-700">
                        <Image
                          src={session.user.image}
                          alt={session.user.name}
                          fill
                          sizes="36px"
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold text-white uppercase">
                        {session.user.name?.charAt(0)}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-white leading-none">
                        Hello, {session.user.name}!
                      </span>
                      <span className="text-[11px] text-zinc-500 mt-1 leading-none">
                        {session.user.email}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleSignOut}
                    className="w-full rounded-xl border border-red-900/30 bg-red-500/5 hover:bg-red-500/10 py-3 text-center text-sm font-semibold text-red-400 transition-colors"
                  >
                    Sign Out Account
                  </button>
                </div>
              ) : (
                /* MOBILE SIGNED OUT ACTION DRAWER */
                <>
                  <Link
                    href="/sign-in"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-medium py-1 ${
                      pathname === "/sign-in" ? "text-white" : "text-zinc-400"
                    }`}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/sign-up"
                    onClick={() => setIsOpen(false)}
                    className="w-full"
                  >
                    <button className="w-full rounded-xl bg-[#4f46e5] py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-[#4338ca]">
                      Get Started
                    </button>
                  </Link>
                </>
              ))}
          </nav>
        </div>
      )}
    </header>
  );
}
