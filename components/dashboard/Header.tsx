"use client";

import { Building, GiftIcon, PlusIcon, User } from "lucide-react";
import Link from "next/link";

const DashboardHeader = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between">
          <Link
            href="/businesses"
            title="Wire Aza"
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900"
          >
            Wire Aza
          </Link>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Link
              title="Create New Business"
              href="/create"
              className="p-2 sm:p-3 hover:bg-green-100 rounded-full transition-colors"
            >
              <PlusIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              title="My Businesses."
              href="/my-businesses"
              className="p-2 sm:p-3 hover:bg-green-100 rounded-full transition-colors"
            >
              <Building className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              title="Support wire aza"
              href="/support"
              className="p-2 sm:p-3 hover:bg-green-100 rounded-full transition-colors"
            >
              <GiftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              title="You"
              href="/profile"
              className="p-2 sm:p-3 hover:bg-green-100 rounded-full transition-colors"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
