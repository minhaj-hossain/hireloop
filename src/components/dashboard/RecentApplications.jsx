import React from "react";
import Link from "next/link";

const applications = [
  { name: "Julianne Moore", role: "Senior Product Designer", date: "Oct 24, 2023", exp: "6 years", status: "Interviewing" },
  { name: "Robert Downey", role: "Backend Engineer", date: "Oct 23, 2023", exp: "4 years", status: "New" },
  { name: "Emma Stone", role: "Marketing Lead", date: "Oct 22, 2023", exp: "8 years", status: "Reviewing" },
  { name: "Chris Pratt", role: "Product Manager", date: "Oct 21, 2023", exp: "5 years", status: "Rejected" },
];

// Helper to color code statuses based on image_339141.png design tokens
const getStatusStyles = (status) => {
  switch (status) {
    case "Interviewing":
      return "bg-[#062f19]/60 text-[#4ade80] border border-[#14532d]/50";
    case "New":
      return "bg-[#27272a] text-[#e4e4e7] border border-zinc-700/50";
    case "Reviewing":
      return "bg-[#3a2209]/60 text-[#fb923c] border border-[#7c2d12]/40";
    case "Rejected":
      return "bg-[#3f1616]/60 text-[#f87171] border border-[#7f1d1d]/40";
    default:
      return "bg-zinc-800 text-zinc-300";
  }
};

export default function RecentApplications() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Context Action Bar */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold tracking-tight text-white">Recent Applications</h2>
        <Link href="/applications" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">
          View all
        </Link>
      </div>

      {/* Structured Container Element */}
      <div className="bg-[#141416]/40 border border-zinc-900 rounded-2xl overflow-hidden p-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-xs font-semibold text-zinc-500 border-b border-zinc-900/80">
                <th className="p-4 font-medium">Candidate Name</th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Date Applied</th>
                <th className="p-4 font-medium">Experience</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium text-zinc-300 divide-y divide-zinc-900/40">
              {applications.map((app, i) => (
                <tr key={i} className="hover:bg-[#18181b]/20 transition-colors">
                  {/* Candidate Profile Element */}
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700/40 shrink-0" />
                    <span className="text-white font-semibold">{app.name}</span>
                  </td>
                  <td className="p-4 text-zinc-400 font-normal">{app.role}</td>
                  <td className="p-4 text-zinc-400 font-normal">{app.date}</td>
                  <td className="p-4 text-zinc-400 font-normal">{app.exp}</td>
                  {/* Dynamic Status Badging */}
                  <td className="p-4">
                    <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[11px] font-medium min-w-21.15 text-center ${getStatusStyles(app.status)}`}>
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}