"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {

  const router = useRouter()
  
  const handleSignUp = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");
    const termsAccepted = formData.get("termsAccepted");
    const role = formData.get("role");


    // Process structured registration data here
    // console.log({ firstName, lastName, email, password, termsAccepted });
    const displayName = [firstName, lastName].filter(Boolean).join(" ");

    const { data, error } = await authClient.signUp.email({
        email, // user email address
        password, // user password -> min 8 characters by default
        name: displayName,
        role, // optional display name constructed from first and last name// user display name
        // callbackURL: "/dashboard" // A URL to redirect to after the user verifies their email (optional)
    }, {
        onRequest: (ctx) => {
            //show loading
        },
        onSuccess: (ctx) => {
            //redirect to the dashboard or sign in page
            alert('working')
            router.push("/sign-in");
        },
        onError: (ctx) => {
            // display the error message
            alert(ctx.error.message);
        },
});
  };

  return (
    <main className="relative min-h-screen w-full bg-[#030303] text-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden selection:bg-indigo-500/30">
      
      {/* BACKGROUND GRAPHIC CANVAS (Consistent mesh grid dome theme) */}
      <div className="absolute inset-x-0 top-0 mx-auto max-w-5xl w-full h-full pointer-events-none select-none z-0">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-video rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute inset-0 w-full h-full mix-blend-screen opacity-45">
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

      {/* SIGN UP DATA CARD BOX */}
      <div className="relative w-full max-w-120 bg-[#0b0b0c]/90 border border-zinc-900 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/80 z-10 flex flex-col my-8">
        
        {/* Brand Header Identity */}
        <div className="flex flex-col items-center text-center mb-7">
          <div className="flex items-center gap-1.5 mb-2.5 font-bold text-xl tracking-tight">
            <span className="text-white">hire</span>
            <span className="text-indigo-500">loop</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">
            Create Your Account
          </h1>
          <p className="text-xs text-zinc-500 mt-1.5">
            Join HireLoop to discover thousands of curated job opportunities
          </p>
        </div>

        {/* REGISTRATION SUBMIT FORM */}
        <form onSubmit={handleSignUp} className="space-y-4 flex-1">
          
          {/* Two-Column Layout for Full Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="firstName" className="text-xs font-medium text-zinc-400 tracking-wide">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                required
                placeholder="Minhaj"
                className="w-full bg-[#121214]/60 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-zinc-700 focus:bg-[#121214] transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="lastName" className="text-xs font-medium text-zinc-400 tracking-wide">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                required
                placeholder="Hossain"
                className="w-full bg-[#121214]/60 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-zinc-700 focus:bg-[#121214] transition-all"
              />
            </div>
          </div>

         <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-zinc-400">I want to join as a:</label>
            <div className="grid grid-cols-2 gap-3">
              
              {/* Job Seeker Option */}
              <label className="relative flex items-center justify-between p-3 rounded-xl bg-[#121214]/60 border border-zinc-800 has-checked:border-indigo-500 has-checked:bg-indigo-500/5 cursor-pointer transition-all group">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-zinc-200 group-hover:text-white">Job Seeker</span>
                  <span className="text-[10px] text-zinc-500[">Find work</span>
                </div>
                <input type="radio" name="role" value="seeker" defaultChecked className="w-4 h-4 accent-indigo-500 cursor-pointer" />
              </label>

              {/* Recruiter Option */}
              <label className="relative flex items-center justify-between p-3 rounded-xl bg-[#121214]/60 border border-zinc-800 has-checked:border-indigo-500 has-checked:bg-indigo-500/5 cursor-pointer transition-all group">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-zinc-200 group-hover:text-white">Recruiter</span>
                  <span className="text-[10px] text-zinc-500">Post jobs</span>
                </div>
                <input type="radio" name="role" value="recruiter" className="w-4 h-4 accent-indigo-500 cursor-pointer" />
              </label>

            </div>
          </div>

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
              placeholder="name@example.com"
              className="w-full bg-[#121214]/60 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-zinc-700 focus:bg-[#121214] transition-all"
            />
          </div>

          {/* Password Security Block */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-xs font-medium text-zinc-400 tracking-wide">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              placeholder="Create a strong password"
              className="w-full bg-[#121214]/60 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-zinc-700 focus:bg-[#121214] transition-all"
            />
            <p className="text-[10px] text-zinc-500 tracking-wide mt-0.5">
              Must contain at least 8 characters with a mix of letters & numbers.
            </p>
          </div>

          {/* Legal Compliance Checkbox */}
          <div className="flex items-start gap-2.5 pt-1.5">
            <input
              id="termsAccepted"
              type="checkbox"
              name="termsAccepted"
              required
              className="w-4 h-4 mt-0.5 rounded-md bg-[#121214] border-zinc-800 text-indigo-600 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-indigo-500"
            />
            <label htmlFor="termsAccepted" className="text-xs text-zinc-400 font-normal leading-normal select-none cursor-pointer">
              I agree to the{" "}
              <Link href="/terms" className="text-zinc-300 underline hover:text-white transition-colors">Terms of Service</Link>
              {" "}and{" "}
              <Link href="/privacy" className="text-zinc-300 underline hover:text-white transition-colors">Privacy Policy</Link>.
            </label>
          </div>

          {/* Primary Registration Trigger Action */}
          <button
            type="submit"
            className="w-full bg-white text-black hover:bg-zinc-200 text-sm font-semibold rounded-xl py-3.5 mt-4 transition-all active:scale-[0.99] shadow-lg shadow-black/30"
          >
            Create Free Account
          </button>
        </form>

        {/* Modular Divider Markup */}
        <div className="relative flex py-5 items-center">
          <div className="grow border-t border-zinc-900"></div>
          <span className="shrink mx-4 text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
            Or register with
          </span>
          <div className="grow border-t border-zinc-900"></div>
        </div>

        {/* BOTTOM GOOGLE AUTHENTICATION PORTAL */}
        <button
          type="button"
          onClick={() => console.log("Google registration interface triggered")}
          className="w-full flex items-center justify-center gap-3 bg-[#121214]/50 hover:bg-[#121214] border border-zinc-800/80 hover:border-zinc-700 text-sm font-medium text-zinc-200 rounded-xl py-3.5 transition-all active:scale-[0.99]"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.107C18.29 1.714 15.5 0 12.24 0 5.58 0 0 5.37 0 12s5.58 12 12.24 12c6.96 0 11.57-4.854 11.57-11.77 0-.795-.085-1.4-.195-1.945H12.24z"
            />
          </svg>
          <span>Sign Up with Google</span>
        </button>

        {/* Existing Route Sign In Redirection Footnote */}
        <p className="text-center text-xs text-zinc-500 mt-6">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-zinc-300 hover:text-white font-medium hover:underline">
            Sign in instead
          </Link>
        </p>

      </div>
    </main>
  );
}