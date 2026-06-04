"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { 
  LayoutCellsLarge, 
  Briefcase, 
  Gear,
  Envelope,
  FolderOpen,
  LayoutSideContentLeft, 
  Xmark 
} from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";

const menuItems = [
  { name: "Dashboard", href: "/dashboard/recruiter", icon: LayoutCellsLarge },
  { name: "My Company", href: "/dashboard/recruiter/company", icon: FolderOpen },
  { name: "Manage Jobs", href: "/manage-jobs", icon: Briefcase },
  { name: "Applications", href: "/applications", icon: Envelope },
  { name: "Settings", href: "/settings", icon: Gear },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();

  return (
    <>
      {/* 1. FIXED TOP STICKY BAR FOR MOBILE REVENUE FRAMEWORK */}
      <div className="md:hidden flex items-center justify-between w-full bg-[#0a0a0c] border-b border-zinc-900 px-6  h-16 z-50">
        <span className="text-xl font-bold tracking-tight text-white select-none">
          Hire<span className="text-[#3b5bfd]">Loop</span>
        </span>
        
        {/* HAMBURGER TRIGGER TOGGLE COMPONENT */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="p-2 rounded-xl bg-[#141416] border border-zinc-800 text-zinc-400 hover:text-white transition-all active:scale-95 z-50"
        >
          {isOpen ? (
            <Xmark className="h-5 w-5 text-white animate-in spin-in-12 duration-200" />
          ) : (
            <LayoutSideContentLeft className="h-5 w-5 transition-transform duration-200" />
          )}
        </button>
      </div>

      {/* 2. DOCKED PERMANENT SIDEBAR DESKTOP MATRIX PANELS */}
      <aside className="hidden md:flex flex-col w-64  bg-[#0a0a0c] border-r border-zinc-900 h-screen pt-8 pb-6 z-30">
        <div className="px-7 select-none">
          <span className="text-2xl font-bold tracking-tight text-white">
            Hire<span className="text-[#3b5bfd]">Loop</span>
          </span>
        </div>

        {/* Desktop Profile Status Card */}
        <div className="mt-8 px-6">
          {!isPending && session?.user && (
            <div className="flex items-center gap-3 p-2 rounded-2xl bg-[#141416]/30 border border-zinc-900/60">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-zinc-800 bg-zinc-900">
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm font-bold text-white bg-indigo-600 uppercase">
                    {session.user.name?.charAt(0)}
                  </div>
                )}
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-semibold text-zinc-200 truncate leading-none">
                  {session.user.name}
                </span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mt-1.5 leading-none">
                  Premium Account
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <nav className="flex flex-col gap-1 mt-6 px-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "bg-[#1d1d20] text-white"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-[#141416]/50"
                }`}
              >
                {isActive && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-l-md" />
                )}
                <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-400"}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* 3. RESPONSIVE MOBILE SLIDE-OUT OVERLAY DRAWER */}
      {/* Dimmed backdrop backdrop click controller shield */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar Frame Panel Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-[#0a0a0c] border-r border-zinc-900 h-screen pt-20 pb-6 z-45 md:hidden flex flex-col transition-transform duration-300 ease-in-out shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile View Profile Details */}
        <div className="px-6 mb-4">
          {!isPending && session?.user && (
            <div className="flex items-center gap-3 p-2 rounded-2xl bg-[#141416]/50 border border-zinc-900">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-zinc-800 bg-zinc-900">
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm font-bold text-white bg-indigo-600 uppercase">
                    {session.user.name?.charAt(0)}
                  </div>
                )}
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-semibold text-zinc-200 truncate leading-none">
                  {session.user.name}
                </span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mt-1.5 leading-none">
                  Premium Account
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Internal Navigation Actions */}
        <nav className="flex flex-col gap-1 px-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`relative flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "bg-[#1d1d20] text-white"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-[#141416]/50"
                }`}
              >
                {isActive && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-l-md" />
                )}
                <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-400"}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}