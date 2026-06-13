"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiLock, FiHome, FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 text-slate-100">
      <div className="w-full max-w-md text-center space-y-6">
        {/* Animated Lock Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, -10, 10, 0] }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            rotate: { duration: 0.5, delay: 0.3 },
          }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500"
        >
          <FiLock size={36} />
        </motion.div>

        {/* Heading & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Access Restricted
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            You do not have the necessary permissions to view this page. Please
            verify your credentials or return to safety.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={() => router.back()}
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-slate-800/80 px-5 py-3.5 font-medium text-slate-200 transition-all hover:bg-slate-700 border border-slate-700/60 shadow-sm"
          >
            <FiArrowLeft size={20} />
            Go Back
          </button>

          <button
            onClick={() => router.push("/")}
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-3.5 font-medium text-white transition-all hover:bg-rose-500 shadow-lg shadow-rose-600/20"
          >
            <FiHome size={20} />
            Home Page
          </button>
        </motion.div>
      </div>
    </div>
  );
}
