"use client";

import { useState } from "react";
import { Plus, ArrowRight,ChartLine, Thunderbolt } from "@gravity-ui/icons";

import { FaCrown } from "react-icons/fa";

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState("monthly"); // "monthly" or "yearly"

  const plans = [
    {
      name: "Starter",
      price: billingPeriod === "monthly" ? 0 : 0,
      icon: FaCrown,
      iconColor: "text-pink-400",
      iconBg: "bg-pink-950/30 border-pink-900/40",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      isPopular: false,
    },
    {
      name: "Growth",
      price: billingPeriod === "monthly" ? 17 : 12, // Reduced price example for yearly
      icon: ChartLine,
      iconColor: "text-purple-400",
      iconBg: "bg-purple-950/30 border-purple-900/40",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      isPopular: true, // The highlighted center card
    },
    {
      name: "Premium",
      price: billingPeriod === "monthly" ? 99 : 79,
      icon: Thunderbolt,
      iconColor: "text-indigo-400",
      iconBg: "bg-indigo-950/30 border-indigo-900/40",
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="w-full bg-[#000000] text-white py-20 px-4 sm:px-6 md:px-8 lg:px-12 selection:bg-indigo-500/30">
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        
        {/* Top Header Label Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-1 bg-[#3b5bfd] rounded-sm" />
          <span className="text-xs uppercase font-semibold tracking-[0.25em] text-zinc-400">
            Pricing
          </span>
          <span className="w-1 h-1 bg-[#3b5bfd] rounded-sm" />
        </div>

        {/* Core Heading */}
        <h2 className="text-center font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-[1.15] mb-12">
          Pay for the leverage, <br /> not the listings
        </h2>

        {/* Custom Toggle Switch Container */}
        <div className="flex items-center bg-[#141414] border border-zinc-800/60 p-1.5 rounded-full mb-16 relative">
          <button
            onClick={() => setBillingPeriod("monthly")}
            className={`px-5 py-2 text-xs font-semibold rounded-full transition-all ${
              billingPeriod === "monthly"
                ? "bg-white text-black shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod("yearly")}
            className={`flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-full transition-all ${
              billingPeriod === "yearly"
                ? "bg-white text-black shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <span>Yearly</span>
            <span className="bg-[#e6007e] text-white font-bold text-[10px] px-2 py-0.5 rounded-full">
              25%
            </span>
          </button>
        </div>

        {/* Cards Responsive Layout Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-[#141414] border-2 border-zinc-800 shadow-2xl shadow-black/50 lg:scale-[1.02]"
                    : "bg-[#080808] border border-zinc-900"
                }`}
              >
                <div>
                  {/* Top Header Card Block */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 flex items-center justify-center rounded-xl border ${plan.iconBg}`}>
                        <IconComponent className={`w-4.5 h-4.5 ${plan.iconColor}`} />
                      </div>
                      <h3 className="text-lg font-medium text-zinc-200 tracking-tight">
                        {plan.name}
                      </h3>
                    </div>
                    {/* Dynamic Pricing String Text */}
                    <div className="flex items-baseline text-white">
                      <span className="text-3xl font-bold tracking-tight">${plan.price}</span>
                      <span className="text-xs text-zinc-500 ml-1">/month</span>
                    </div>
                  </div>

                  {/* Bullet Subtitle Pitch Header */}
                  <p className="text-sm font-semibold text-zinc-100 mb-5">
                    Start building your insights hub:
                  </p>

                  {/* Features List Group */}
                  <ul className="flex flex-col gap-4 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-400">
                        <div className="hrink-0 w-5 h-5 flex items-center justify-center rounded bg-zinc-900/80 border border-zinc-800/60 mt-0.5">
                          <Plus className="w-3 h-3 text-zinc-500" />
                        </div>
                        <span className="leading-tight pt-0.5">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit Action Callout CTA Button */}
                <button
                  className={`w-full flex items-center justify-between rounded-xl px-5 py-3.5 text-sm font-medium transition-all group active:scale-[0.99] ${
                    plan.isPopular
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-[#1f1f1f] text-zinc-200 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  <span>Choose This Plan</span>
                  <ArrowRight className="w-4 h-4 text-current group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}