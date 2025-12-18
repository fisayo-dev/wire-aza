import DashboardHeader from "@/components/dashboard/Header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8 xl:px-12">
        {children}
      </main>
    </div>
  );
};

export default layout;
