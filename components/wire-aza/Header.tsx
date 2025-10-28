import { GiftIcon, LockIcon, Search } from "lucide-react";

const Header = () => {
  const headerLinks = [
    { title: "Support", icon: <GiftIcon className="w-5 h-5" /> },
    { title: "Find Aza", icon: <Search className="w-5 h-5" /> },
    { title: "Login", icon: <LockIcon className="w-5 h-5" /> },
  ];
  return (
    <div className="bg-background border-b border-gray-300/50 fixed w-full top-0 left-0 z-50">
      <div className="app-container flex justify-between items-center h-20">
        <h2 className="text-2xl font-bold">Wire Aza</h2>
        <div className="flex items-center gap-4 md:gap-6">
          {headerLinks.map((link, index) => (
            <div
              key={index}
              className="flex rounded-2xl transition-all cursor-pointer   hover:text-gray-600 items-center space-x-2 "
            >
              {link.icon}
              <span>{link.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
