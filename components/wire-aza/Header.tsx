import { Headphones, LockIcon, Search, UserPlus } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const headerLinks = [
    {
      title: "Support",
      icon: <Headphones className="w-5 h-5" />,
      to: "/support",
    },
    {
      title: "Find Aza",
      icon: <Search className="w-5 h-5" />,
      to: "/find-aza",
    },
    { title: "Signup", icon: <UserPlus className="w-5 h-5" />, to: "/signup" },
    { title: "Login", icon: <LockIcon className="w-5 h-5" />, to: "/login" },
  ];
  return (
    <div className="bg-background fixed w-full top-0 left-0 z-50">
      <div className="app-container flex justify-between items-center h-20">
        <Link
          href="/businesses"
          title="Wire Aza"
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900"
        >
          Wire Aza
        </Link>
        <div className="flex items-center gap-4 md:gap-6">
          {headerLinks.map((link, index) => (
            <Link
              href={link.to}
              key={index}
              className="flex rounded-2xl transition-all cursor-pointer   hover:text-gray-600 items-center space-x-2 "
            >
              {link.icon}
              <span className="hidden md:block">{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
