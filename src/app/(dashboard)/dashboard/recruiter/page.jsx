'use client'

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { 
  FileText, 
  Persons, 
  Thunderbolt, 
  CircleCheck 
} from "@gravity-ui/icons";
import StatCard from '@/components/dashboard/StateCard';
import TopCompanies from '@/components/dashboard/TopCompanies';
import RecentApplications from '@/components/dashboard/RecentApplications';

const RecruiterPage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // Stats dataset mapping directly to image_33f6b4.png
  const statsData = [
    { title: "Total Job Posts", value: "48", icon: FileText },
    { title: "Total Applicants", value: "1,284", icon: Persons },
    { title: "Active Jobs", value: "18", icon: Thunderbolt },
    { title: "Jobs Closed", value: "32", icon: CircleCheck },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header Section */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Welcome, {!isPending && user ? user.name : "Recruiter"}
        </h1>
        <p className="text-sm text-zinc-500 mt-1">
          Here is what&apos;s happening with your job posts today.
        </p>
      </div>

      {/* Grid Layout Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* BOTTOM SECTIONS: Asymmetric Layout Row matching image_339141.png */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
        {/* Left Side 2/3 Width Space allocated to Table list */}
        <div className="lg:col-span-2">
          <RecentApplications />
        </div>
        
        {/* Right Side 1/3 Width Space allocated to Ranking elements */}
        <div className="lg:col-span-1">
          <TopCompanies />
        </div>
      </div>
    </div>
  );
};

export default RecruiterPage;