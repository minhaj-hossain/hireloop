"use client";

import React, { useState } from "react";
import { Button, Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import {
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaBriefcase,
  FaUserGradient,
  FaCrown,
  FaBuilding,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("seekers"); // 'seekers' or 'recruiters'
  const [openFaq, setOpenFaq] = useState(null);

  // Data mapping matching requirement guidelines
  const seekerPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/forever",
      icon: <FaBriefcase className="text-slate-400 text-xl" />,
      features: [
        "Browse & save up to 10 jobs",
        "Apply to up to 3 jobs per month",
        "Basic profile visibility",
        "Email alerts",
      ],
      buttonText: "Get Started",
      premium: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      icon: <FaUserGradient className="text-[#71A1D9] text-xl" />,
      features: [
        "Apply to up to 30 jobs per month",
        "Unlimited saved jobs",
        "Full application tracking",
        "Salary insights & estimates",
      ],
      buttonText: "Upgrade to Pro",
      premium: false,
    },
    {
      name: "Premium",
      price: "$39",
      period: "/month",
      icon: <FaCrown className="text-[#FACC15] text-xl" />,
      features: [
        "Everything in Pro",
        "Unlimited applications",
        "Profile boost to recruiters",
        "Early access to new jobs",
        "Priority helpdesk support",
      ],
      buttonText: "Go Premium",
      premium: true, // Highlights card using active palette theme
    },
  ];

  const recruiterPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/forever",
      icon: <FaBuilding className="text-slate-400 text-xl" />,
      features: [
        "Up to 3 active job posts",
        "Basic applicant management",
        "Standard listing visibility",
        "Great for your first year",
      ],
      buttonText: "Start Hiring",
      premium: false,
    },
    {
      name: "Growth",
      price: "$49",
      period: "/month",
      icon: <FaRocket className="text-[#71A1D9] text-xl" />,
      features: [
        "Up to 10 active job posts",
        "Advanced applicant tracking",
        "Basic data analytics",
        "Email customer support",
      ],
      buttonText: "Choose Growth",
      premium: false,
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/month",
      icon: <FaShieldAlt className="text-[#FACC15] text-xl" />,
      features: [
        "Up to 50 active job posts",
        "Advanced analytics dashboard",
        "Featured job listings banner",
        "Team collaboration tools",
        "Custom branding & priority help",
      ],
      buttonText: "Contact Enterprise",
      premium: true,
    },
  ];

  const faqData = [
    {
      q: "Can I cancel my subscription at any time?",
      a: "Yes, you can cancel your subscription at any time directly from your account settings panel. You will retain premium features access until the end of your current billing window cycle.",
    },
    {
      q: "How do refunds work?",
      a: "We offer a 14-day money-back guarantee if you're unsatisfied with our platform features. Simply ping our priority support desk to file an automated refund claim logic loop.",
    },
    {
      q: "What payment methods are supported?",
      a: "All transactions are securely automated and fully processed over Stripe infrastructure using Credit/Debit Cards (Visa, MasterCard, Amex), Apple Pay, and Google Wallet tokens.",
    },
    {
      q: "Can I switch plans later?",
      a: "Absolutely. When upgrading or downgrading plans, your active monthly cycle balances are automatically calculated and pro-rated on your subsequent monthly checkout receipt statement.",
    },
  ];

  const currentPlans = activeTab === "seekers" ? seekerPlans : recruiterPlans;

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* TITLE HEADER */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Flexible Pricing Plans
          </h1>
          <p className="text-[#A3A2A0] text-sm max-w-md mx-auto">
            Choose the perfect plan tailored to optimize your production
            workflow and hiring execution.
          </p>
        </div>

        {/* REFACTORED WORKABLE LAYOUT SWITCH TOGGLE */}
        <div className="flex justify-center">
          <div className="bg-[#2A2927] border border-white/5 p-1.5 rounded-2xl flex items-center gap-1">
            <button
              onClick={() => setActiveTab("seekers")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all select-none cursor-pointer ${
                activeTab === "seekers"
                  ? "bg-[#25426B] text-[#71A1D9] shadow"
                  : "text-[#A3A2A0] hover:text-white"
              }`}
            >
              For Job Seekers
            </button>
            <button
              onClick={() => setActiveTab("recruiters")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all select-none cursor-pointer ${
                activeTab === "recruiters"
                  ? "bg-[#25426B] text-[#71A1D9] shadow"
                  : "text-[#A3A2A0] hover:text-white"
              }`}
            >
              For Recruiters
            </button>
          </div>
        </div>

        {/* PRICING TIERS CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {currentPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`border transition-all flex flex-col justify-between ${
                plan.premium
                  ? "border-[#25426B] bg-[#2A2927] shadow-xl shadow-blue-950/20 scale-[1.02] md:scale-105 z-10"
                  : "border-white/5 bg-[#2A2927]/60 hover:border-white/10"
              }`}
            >
              <div>
                <CardHeader className="p-6 border-b border-white/5 flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#71A1D9]">
                      {plan.name}
                    </p>
                    <div className="flex items-baseline gap-1 pt-1">
                      <span className="text-4xl font-extrabold text-white">
                        {plan.price}
                      </span>
                      <span className="text-xs text-[#A3A2A0] font-medium">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#1E1E1E] border border-white/5">
                    {plan.icon}
                  </div>
                </CardHeader>

                <CardBody className="p-6">
                  <ul className="space-y-3.5">
                    {plan.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-200"
                      >
                        <FaCheck className="text-emerald-400 mt-0.5 text-xs shrink-0" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </div>

              <CardFooter className="p-6 pt-0">
                <Button
                  className={`w-full font-bold h-11 text-xs tracking-wide rounded-xl transition ${
                    plan.premium
                      ? "bg-[#25426B] hover:bg-[#2c4d7d] text-[#71A1D9]"
                      : "bg-[#1E1E1E] hover:bg-white/5 border border-white/10 text-white"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FAQ ACCORDION SECTION */}
        <div className="pt-12 max-w-3xl mx-auto space-y-6">
          <h3 className="text-xl font-bold tracking-tight text-center border-b border-white/5 pb-4">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#2A2927] border border-white/5 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-sm text-white select-none cursor-pointer hover:bg-white/1"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#71A1D9]">
                      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-[#A3A2A0] leading-relaxed border-t border-white/5 pt-3 bg-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
