import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative w-full bg-[#030303] text-white py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden selection:bg-indigo-500/30">
      
      {/* PERFECTED BACKGROUND ENGINE */}
      <div className="absolute inset-x-0 top-0 mx-auto max-w-5xl w-full h-full pointer-events-none select-none性能 z-0">
        
        {/* Core Blue Radial Highlight behind the text matching image_f15b63.png */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-video rounded-full bg-blue-600/20 blur-[100px] sm:blur-[140px]" />
        
        {/* The Grid Dome Asset (cta-bg.jpg) */}
        <div className="absolute inset-0 w-full h-full mix-blend-screen opacity-90">
          <Image
            src="/images/cta-bg.png"
            alt="Perspective Grid Dome"
            fill
            priority
            className="object-cover object-top scale-100"
          />
        </div>

        {/* Precise Linear Masking to smoothly dissolve outer grid lines into pure black */}
        <div className="absolute top-0 left-0 w-full h-1/4 bg-linear-to-b from-[#030303] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-[#030303] via-[#030303]/40 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#030303] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#030303] to-transparent" />
      </div>

      {/* FOREGROUND CONTENT LAYER */}
      <div className="relative mx-auto max-w-3xl flex flex-col items-center text-center z-10">
        
        {/* Primary Typography Header */}
        <h2 className="font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] max-w-2xl mb-5 bg-linear-to-b from-white via-white to-zinc-300 bg-clip-text text-transparent">
          Your next role is <br /> already looking for you
        </h2>
        
        {/* Subtitle Line Layout */}
        <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-xl font-normal opacity-90 leading-relaxed mb-10 px-4">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        {/* ACTION ACTION BUTTON PAIR */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto px-6 sm:px-0">
          
          <button className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 text-sm font-semibold rounded-xl px-6 py-3.5 shadow-xl shadow-black/50 transition-all active:scale-[0.98]">
            Create a free account
          </button>
          
          <button className="w-full sm:w-auto bg-[#121214]/40 hover:bg-[#121214]/90 text-zinc-300 hover:text-white border border-zinc-800/60 text-sm font-semibold rounded-xl px-6 py-3.5 backdrop-blur-md transition-all active:scale-[0.98]">
            View pricing
          </button>
          
        </div>

      </div>
    </section>
  );
}