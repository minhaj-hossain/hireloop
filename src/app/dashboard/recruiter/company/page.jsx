"use client";

import React, { useState } from "react"; // Added useState
import { Plus } from "@gravity-ui/icons";
import CompanyCard from "@/components/dashboard/company/CompanyCard";
import RegisterCompanyModal from "@/components/dashboard/company/RegisterCompanyModal";

export default function MyCompaniesPage() {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Exact mock dataset extracted directly from image_3376f2.png
  const myCompanies = [
    {
      name: "Vercel",
      category: "Technology",
      description: "Vercel is the platform for frontend developers, providing speed and reliability. Experience the best... workflow for React, Next.js, and more.",
      location: "San Francisco",
      range: "201-500",
      website: "https://vercel.com",
      status: "Pending",
      logo: "https://assets.vercel.com/image/upload/v1588858931/repositories/vercel/logo.png" 
    },
    {
      name: "Figma",
      category: "Technology",
      description: "Figma is the collaborative interface design tool — design, prototype, and gather feedback all in one... place. Empowering teams to build better products",
      location: "San Francisco",
      range: "501-1000",
      website: "https://figma.com",
      status: "Approved",
      logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
    },
    {
      name: "Enosis Solutions",
      category: "Technology",
      description: "ENOSIS - Your trusted Software Development Partner. A top tier software development team assisting owners and decision makers to implement",
      location: "Dhaka, Bangladesh",
      range: "51-200",
      website: "https://enosis.com",
      status: "Pending",
      logo: "" 
    }
  ];

  return (
    <div className="space-y-8">
      {/* Title Context Header Bar Component */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">My Companies</h1>
          <p className="text-sm text-zinc-500 mt-1">
            Manage your registered companies and their verification states.
          </p>
        </div>

        {/* Action Trigger Node Button */}
        <button
          onClick={() => setIsModalOpen(true)} // Updated to open the modal
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-200 transition-all active:scale-95 shadow-md self-start sm:self-auto"
        >
          <Plus className="h-4 w-4 stroke-[2.5]" />
          <span>Register a company</span>
        </button>
      </div>

      {/* Symmetric Card Display Grid Viewport */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
        {myCompanies.map((company, idx) => (
          <CompanyCard key={idx} company={company} />
        ))}
      </div>

      {/* The Modal Component Instance */}
      <RegisterCompanyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}