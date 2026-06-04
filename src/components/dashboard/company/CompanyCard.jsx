import React from "react";
import Link from "next/link";
import { Pin, Persons, Globe } from "@gravity-ui/icons";
import Image from "next/image";

// Helper for status badge branding
const getStatusStyles = (status) => {
  switch (status?.toLowerCase()) {
    case "approved":
      return "bg-[#062f19]/60 text-[#4ade80] border border-[#14532d]/50";
    case "pending":
    default:
      return "bg-[#3a2209]/60 text-[#fb923c] border border-[#7c2d12]/40";
  }
};

export default function CompanyCard({ company }) {
  const { name, category, description, location, range, website, status, logo } = company;

  return (
    <div className="bg-[#141416]/40 border border-zinc-900 rounded-2xl p-6 flex flex-col justify-between h-90 hover:border-zinc-800/80 transition-all duration-200">
      <div>
        {/* Top Header Row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Logo Wrapper */}
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden shrink-0 border border-zinc-800">
              {logo ? (
                <Image src={logo} alt={`${name} logo`} className="w-8 h-8 object-contain" width={32} height={32} />
              ) : (
                <span className="text-zinc-900 font-bold text-lg">{name.charAt(0)}</span>
              )}
            </div>
            
            <div className="flex flex-col min-w-0">
              <h3 className="text-base font-bold text-white truncate leading-snug">{name}</h3>
              <p className="text-xs text-zinc-500 font-medium tracking-wide mt-0.5">{category}</p>
            </div>
          </div>

          {/* Verification Badge */}
          <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${getStatusStyles(status)}`}>
            {status}
          </span>
        </div>

        {/* Company Pitch Description Text */}
        <p className="text-sm text-zinc-400 font-normal leading-relaxed mt-5 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Meta Footer Properties Block */}
      <div className="space-y-4 pt-4 border-t border-zinc-900/60">
        <div className="flex items-center gap-6 text-xs text-zinc-400 font-medium">
          <div className="flex items-center gap-1.5 truncate">
            <Pin className="h-3.5 w-3.5 text-zinc-500" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <Persons className="h-3.5 w-3.5 text-zinc-500" />
            <span>{range} range</span>
          </div>
        </div>

        {/* Website Action Launcher Link */}
        <Link 
          href={website || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white transition-colors group pt-1"
        >
          <Globe className="h-4 w-4 text-zinc-500 group-hover:text-zinc-400" />
          <span>Visit Website</span>
        </Link>
      </div>
    </div>
  );
}