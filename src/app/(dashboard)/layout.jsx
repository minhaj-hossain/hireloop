import Sidebar from '@/components/dashboard/Sidebar';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#0b0b0c] text-white flex">
            {/* Sidebar component handles its own fixed positioning context */}
            
            <Sidebar />

            {/* 
              MAIN CONTENT CONTAINER 
              - md:pl-64 pushes the content right to sit perfectly next to the 64-width desktop sidebar.
              - pt-16 creates room for the mobile top header, which is cleared on desktop (md:pt-0).
            */}
            <div className="flex-1">
                <main className="w-full min-h-screen p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;