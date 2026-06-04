import React from "react";

export default function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="flex flex-col justify-between p-6 bg-[#141416]/40 border border-zinc-900 rounded-2xl w-full transition-all duration-200 hover:border-zinc-800">
      {/* Icon Wrapper Square */}
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1d1d20] border border-zinc-800 text-zinc-400">
        {Icon && <Icon className="h-5 w-5" />}
      </div>

      {/* Text Details Area */}
      <div className="mt-6 flex flex-col gap-2">
        <p className="text-xs font-medium text-zinc-500 tracking-wide">
          {title}
        </p>
        <h3 className="text-2xl font-bold text-white tracking-tight">
          {value}
        </h3>
      </div>
    </div>
  );
}