import Link from "next/link";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-gray-900">
                Wire<span className="text-green-600">Aza</span>
              </h2>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Professionalizing how you share your account details. Secure,
              branded, and elegant.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-500 hover:text-green-600 text-sm">Features</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-green-600 text-sm">Pricing</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-green-600 text-sm">Security</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/support" className="text-gray-500 hover:text-green-600 text-sm">About Us</Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-500 hover:text-green-600 text-sm">Careers</Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-500 hover:text-green-600 text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-500 hover:text-green-600 text-sm">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-green-600 text-sm">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Wire Aza. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
             <p className="text-gray-400 text-sm">Developed with ❤️ for Africa</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
