import React from "react";
import Link from "next/link";

const companies = [
  { name: "Google Inc.", industry: "Technology", location: "Mountain View", activeJobs: 24 },
  { name: "Meta Platforms", industry: "Social Media", location: "Menlo Park", activeJobs: 18 },
  { name: "Stripe", industry: "Fintech", location: "San Francisco", activeJobs: 12 },
  { name: "Tesla", industry: "Automotive", location: "Austin", activeJobs: 31 },
];

export default function TopCompanies() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Context Link */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold tracking-tight text-white">My Top Companies</h2>
        <Link href="/company" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">
          View all
        </Link>
      </div>

      {/* Main Block Box */}
      <div className="bg-[#141416]/40 border border-zinc-900 rounded-2xl p-5 flex flex-col justify-between h-87">
        <div className="flex flex-col gap-4">
          {companies.map((company, i) => (
            <div key={i} className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                {/* Simulated SVG/PNG Brand Node Background Placeholder */}
                <div className="w-9 h-9 rounded-xl bg-[#1d1d20] border border-zinc-800 shrink-0 flex items-center justify-center text-zinc-600 font-bold text-xs">
                  {company.name.charAt(0)}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-bold text-white group-hover:text-[#3b5bfd] transition-colors truncate">
                    {company.name}
                  </span>
                  <span className="text-[11px] text-zinc-500 mt-0.5 truncate">
                    {company.industry} • {company.location}
                  </span>
                </div>
              </div>
              
              {/* Metric Layout Panel */}
              <div className="text-right shrink-0">
                <div className="text-sm font-bold text-white">{company.activeJobs}</div>
                <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider mt-0.5">
                  Active Jobs
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System Action Control Link Footer */}
        <Link href="/company" className="w-full">
          <button className="w-full py-2.5 rounded-xl bg-[#1a1a1e]/40 hover:bg-[#1d1d22] border border-zinc-800/80 text-xs font-semibold text-zinc-300 hover:text-white transition-all duration-200">
            View All Companies
          </button>
        </Link>
      </div>
    </div>
  );
}