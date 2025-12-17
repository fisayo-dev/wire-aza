"use client";

import { GiftIcon, User } from "lucide-react";
import Link from "next/link";

const DashboardHeader = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Wire Aza</h1>
          <div className="flex items-center space-x-2">
            <Link href="/support" className="p-2 hover:bg-green-100 rounded-full">
              <GiftIcon />
            </Link>
            <Link href="/profile" className="p-2 hover:bg-green-100 rounded-full">
              <User />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
