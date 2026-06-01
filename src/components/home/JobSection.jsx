import { ArrowRight, Pin, Layers,  } from "@gravity-ui/icons";

export default function JobBoardSection() {
  // Array structured to map exactly 6 duplicate items as seen in image_fcaca9.png
  const jobs = Array(6).fill({
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  });

  return (
    <section className="w-full bg-[#000000] text-white py-20 px-4 sm:px-6 md:px-8 lg:px-12 selection:bg-indigo-500/30">
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        
        {/* Top Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-1 bg-[#3b5bfd] rounded-sm animate-pulse" />
          <span className="text-xs uppercase font-semibold tracking-[0.2em] text-zinc-400">
            Smart Job Discovery
          </span>
          <span className="w-1 h-1 bg-[#3b5bfd] rounded-sm animate-pulse" />
        </div>

        {/* Section Heading */}
        <h2 className="text-center font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-[1.15] mb-16">
          The roles you&amp;d never find by searching
        </h2>

        {/* Fluid Responsive Grid Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {jobs.map((job, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-between bg-[#111111] border border-zinc-900/80 rounded-2xl p-6 sm:p-7 hover:border-zinc-800 transition-all duration-300"
            >
              <div>
                {/* Job Title */}
                <h3 className="text-xl font-semibold tracking-tight text-zinc-100 mb-3">
                  {job.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                  {job.description}
                </p>

                {/* Badge Details Container */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {/* Location Badge */}
                  <div className="inline-flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800/40 rounded-full px-3 py-1 text-xs text-zinc-400">
                    <Pin className="w-3.5 h-3.5 text-purple-400" />
                    <span>{job.location}</span>
                  </div>

                  {/* Workplace Type Badge */}
                  <div className="inline-flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800/40 rounded-full px-3 py-1 text-xs text-zinc-400">
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    <span>{job.type}</span>
                  </div>

                  {/* Salary Badge */}
                  <div className="inline-flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800/40 rounded-full px-3 py-1 text-xs text-zinc-400 w-full sm:w-auto">
                    <div className="text-purple-400 font-bold text-sm" >$</div>
                    <span>{job.salary}</span>
                  </div>
                </div>
              </div>

              {/* Action Callout Button */}
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-200 hover:text-white transition-colors duration-200 group self-start"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Core CTA Button */}
        <button className="bg-white text-black font-medium text-sm px-6 py-3 rounded-xl hover:bg-zinc-200 transition-colors shadow-xl active:scale-[0.98]">
          View all job open
        </button>

      </div>
    </section>
  );
}