import { 
  Magnifier, 
  ChartLine, 
  ChartBar, 
  Bookmark, 
  LayoutHeaderCursor, 
  CardDiamond, 

  ArrowUpRight 
} from "@gravity-ui/icons";
import { MdOutlineHexagon } from "react-icons/md";


export default function FeaturesSection() {
  const features = [
    {
      title: "Smart Search",
      description: "Find your ideal job with advanced filters.",
      icon: Magnifier,
    },
    {
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently.",
      icon: ChartLine,
    },
    {
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
      icon: ChartBar,
    },
    {
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
      icon: Bookmark,
    },
    {
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!",
      icon: LayoutHeaderCursor,
    },
    {
      title: "Resume Builder",
      description: "Create professional resumes with modern templates.",
      icon: CardDiamond,
    },
    {
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience.",
      icon: MdOutlineHexagon, // Using Gear to replicate the sharp hexagon node feel
    },
    {
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips.",
      icon: ArrowUpRight,
    },
  ];

  return (
    <section className="w-full bg-[#0d0d0d] text-white py-20 px-4 sm:px-6 md:px-8 lg:px-12 selection:bg-indigo-500/30">
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        
        {/* Top Header Label Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1H h-1 w-1 bg-[#3b5bfd] rounded-sm" />
          <span className="text-xs uppercase font-semibold tracking-[0.25em] text-zinc-400">
            Features Job
          </span>
          <span className="w-1 h-1 bg-[#3b5bfd] rounded-sm" />
        </div>

        {/* Core Heading */}
        <h2 className="text-center font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-[1.15] mb-20">
          Everything you need <br /> to succeed
        </h2>

        {/* Highly Responsive Custom Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="flex flex-row items-start gap-4 group hover:translate-y-0.5 transition-transform duration-300"
              >
                {/* Visual Icon Container Box */}
                <div className="shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-[#050505] border border-zinc-900 shadow-inner shadow-black relative overflow-hidden before:absolute before:inset-0 before:bg-linear-to-b before:from-white/2 before:to-transparent">
                  <IconComponent className="w-5.5 h-5.5 text-[#f4b5f5] opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Text Block content */}
                <div className="flex flex-col gap-1 pt-1">
                  <h3 className="text-[15px] font-semibold text-zinc-100 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[13px] text-zinc-500 leading-relaxed max-w-52.5">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}