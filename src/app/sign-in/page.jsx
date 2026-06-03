"use client";

import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
  
  const handleLogin = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const rememberMe = formData.get("rememberMe");

    // Process credentials here
    console.log({ email, password, rememberMe });

    const { data, error } = await authClient.signIn.email({
        email,
        password,

        callbackURL: "/",
        /**
         * remember the user session after the browser is closed. 
        //  * @default true
        //  */
        // rememberMe: false
}, {
    onSuccess: ()=> {
        // alert('it worked successfully')
    }
})


  };

  return (
    <main className="relative min-h-screen w-full bg-[#030303] text-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden selection:bg-indigo-500/30">
      
      {/* INTEGRATED BACKGROUND GRAPHIC FRAME (Reusing cta-bg mesh dome style) */}
      <div className="absolute inset-x-0 top-0 mx-auto max-w-5xl w-full h-full pointer-events-none select-none z-0">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-video rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute inset-0 w-full h-full mix-blend-screen opacity-40">
          <Image
            src="/images/cta-bg.png"
            alt="Mesh Background Layout"
            fill
            priority
            className="object-cover object-top"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-linear-to-t from-[#030303] via-[#030303]/80 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-1/4 bg-linear-to-b from-[#030303] to-transparent" />
      </div>

      {/* RE-CENTERED SIGN IN CARD */}
      <div className="relative w-full max-w-110 bg-[#0b0b0c]/90 border border-zinc-900 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/80 z-10 flex flex-col">
        
        {/* Brand Header Identity */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-1.5 mb-3 font-bold text-xl tracking-tight">
            <span className="text-white">hire</span>
            <span className="text-indigo-500">loop</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">
            Welcome Back
          </h1>
          <p className="text-xs text-zinc-500 mt-1.5">
            Enter your details to access your account dashboard
          </p>
        </div>

        {/* AUTHENTICATION DATA FORM */}
        <form onSubmit={handleLogin} className="space-y-5 flex-1">
          
          {/* Email Address Block */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-medium text-zinc-400 tracking-wide">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="name@company.com"
              className="w-full bg-[#121214]/60 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-zinc-700 focus:bg-[#121214] transition-all"
            />
          </div>

          {/* User Password Block */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-xs font-medium text-zinc-400 tracking-wide">
                Password
              </label>
              <Link 
                href="/forgot-password" 
                className="text-[11px] font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Forgot Password?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="w-full bg-[#121214]/60 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-zinc-700 focus:bg-[#121214] transition-all"
            />
          </div>

          {/* Remember Me Session Flag Switch */}
          <div className="flex items-center gap-2.5 pt-0.5">
            <input
              id="rememberMe"
              type="checkbox"
              name="rememberMe"
              className="w-4 h-4 rounded-md bg-[#121214] border-zinc-800 text-indigo-600 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-indigo-500"
            />
            <label htmlFor="rememberMe" className="text-xs font-medium text-zinc-400 select-none cursor-pointer">
              Remember me for 30 days
            </label>
          </div>

          {/* Primary Submit Button Action */}
          <button
            type="submit"
            className="w-full bg-white text-black hover:bg-zinc-200 text-sm font-semibold rounded-xl py-3.5 mt-2 transition-all active:scale-[0.99] shadow-lg shadow-black/30"
          >
            Sign In with Email
          </button>
        </form>

        {/* Separator UI Label Line */}
        <div className="relative flex py-5 items-center">
          <div className="grow border-t border-zinc-900"></div>
          <span className="shrink mx-4 text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
            Or continue with
          </span>
          <div className="grow border-t border-zinc-900"></div>
        </div>

        {/* GOOGLE INTEGRATION BUTTON AT THE BOTTOM */}
        <button
          type="button"
          onClick={() => console.log("Google authentication triggered")}
          className="w-full flex items-center justify-center gap-3 bg-[#121214]/50 hover:bg-[#121214] border border-zinc-800/80 hover:border-zinc-700 text-sm font-medium text-zinc-200 rounded-xl py-3.5 transition-all active:scale-[0.99]"
        >
          {/* Custom inline-rendered flat vector SVG for the Google emblem */}
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.107C18.29 1.714 15.5 0 12.24 0 5.58 0 0 5.37 0 12s5.58 12 12.24 12c6.96 0 11.57-4.854 11.57-11.77 0-.795-.085-1.4-.195-1.945H12.24z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* Register Account Route Footnote */}
        <p className="text-center text-xs text-zinc-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-zinc-300 hover:text-white font-medium hover:underline">
            Create one free
          </Link>
        </p>

      </div>
    </main>
  );
}