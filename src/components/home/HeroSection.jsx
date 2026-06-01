import Image from "next/image";
import { Magnifier, Geo, Briefcase, ChartBar, Person, Star } from "@gravity-ui/icons";

export default function HeroSection() {
  const trendingPositions = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

  const metrics = [
    { value: "50K", label: "Active Jobs", icon: Briefcase },
    { value: "12K", label: "Companies", icon: ChartBar },
    { value: "2M", label: "Job Seekers", icon: Person },
    { value: "97%", label: "Satisfaction Rate", icon: Star },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#030303] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden selection:bg-indigo-500/30">
      
      {/* BACKGROUND GRAPHIC LAYER CONTAINER */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        
        {/* Top radial ambient glow layer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl aspect-square bg-linear-to-b from-[#3b1d54]/25 via-transparent to-transparent blur-[140px]" />
        
        {/* Globe image frame bounded cleanly via screen height parameters */}
        <div className="absolute top-[20%] left-0 w-full h-[55vh] min-h-112.5 max-h-170 lg:h-[65vh]">
          <Image
            src="/images/globe.png" 
            alt="Globe Background"
            fill
            priority
            className="object-cover object-center opacity-55 scale-100 md:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Ambient surrounding dark masks */}
        <div className="absolute inset-0 bg-[#030303]/10" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-[#030303] via-[#030303]/60 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-1/3 bg-linear-to-b from-[#030303] via-transparent to-transparent" />
      
      </div> {/* <-- Fixed: Properly closing the background wrapper div here */}

      {/* FOREGROUND CONTENT LAYER */}
      <div className="relative mx-auto max-w-5xl flex flex-col items-center z-10">
        
        {/* Animated Job Tracker pill banner */}
        <div className="inline-flex items-center gap-2.5 rounded-full bg-[#121212]/80 border border-white/4 px-4 py-2 backdrop-blur-md shadow-inner shadow-white/2 mb-8 mt-4">
          <span className="text-base">💼</span>
          <p className="text-xs font-semibold tracking-wider text-zinc-400">
            <span className="text-white font-bold">50,000+</span> NEW JOBS THIS MONTH
          </p>
        </div>

        {/* Hero Copywriting Header block */}
        <h1 className="text-center font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] max-w-4xl mb-6 bg-linear-to-b from-white via-white to-zinc-400 bg-clip-text text-transparent">
          Find Your Dream Job Today
        </h1>
        
        <p className="text-center text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed mb-10 px-2">
          HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
        </p>

        {/* COMPACT FLOATING SEARCH BAR SYSTEM */}
        <div className="w-full max-w-3xl bg-[#111111]/90 border border-zinc-800/80 rounded-2xl p-2 md:p-2.5 backdrop-blur-lg shadow-2xl shadow-black/80 mb-6 flex flex-col sm:flex-row items-stretch gap-2">
          {/* Query String Input field block */}
          <div className="flex-1 flex items-center gap-3 px-3 py-2 border-b border-zinc-800/60 sm:border-b-0 sm:border-r">
            <Magnifier className="w-4 h-4 text-zinc-500 shrink-0" />
            <input 
              type="text" 
              placeholder="Job title, skill or company"
              className="w-full bg-transparent border-0 outline-none text-sm text-white placeholder-zinc-500"
            />
          </div>

          {/* Regional Area / Geo Location filtering block */}
          <div className="flex-1 flex items-center gap-3 px-3 py-2">
            <Geo className="w-4 h-4 text-zinc-500 shrink-0" />
            <input 
              type="text" 
              placeholder="Location or Remote"
              className="w-full bg-transparent border-0 outline-none text-sm text-white placeholder-zinc-500"
            />
          </div>

          {/* Execution Submit Action Button */}
          <button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white p-3.5 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl transition-colors active:scale-95 shadow-md hrink-0">
            <Magnifier className="w-4 h-4" />
          </button>
        </div>

        {/* Trending Categories labels list */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-24 text-xs px-4">
          <span className="text-zinc-500 font-medium">Trending Position</span>
          {trendingPositions.map((pos) => (
            <button 
              key={pos} 
              className="bg-zinc-900/60 border border-zinc-800/60 text-zinc-400 hover:text-white hover:border-zinc-700 rounded-lg px-3 py-1.5 transition-all"
            >
              {pos}
            </button>
          ))}
        </div>

        {/* Middling Pitch Heading block placement inside the layout sphere */}
        <div className="text-center max-w-xl mb-14 px-4">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-300 leading-normal">
            Assisting over <span className="text-white font-bold underline decoration-indigo-500 decoration-2 underline-offset-4">15,000 job seekers</span> find their dream positions.
          </h2>
        </div>

        {/* METRICS SUMMARY GRID SYSTEM */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col justify-between items-start bg-[#0b0b0b]/80 border border-zinc-900/80 rounded-2xl p-5 sm:p-6 backdrop-blur-md hover:border-zinc-800 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-zinc-900/50 border border-zinc-800/40 flex items-center justify-center mb-6 group-hover:bg-zinc-800/40 transition-colors">
                  <IconComponent className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    {metric.value}
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-500 font-medium tracking-wide">
                    {metric.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}