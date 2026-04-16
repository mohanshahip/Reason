"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Globe, ChevronDown, MessageCircle } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Study Abroad", href: "/study-abroad" },
    { name: "Countries", href: "/countries" },
    { name: "IELTS/PTE", href: "/ielts" },
    { name: "Services", href: "/services" },
    { name: "B2B", href: "/b2b" },
    { name: "Blog", href: "/blog" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? "bg-white py-3 shadow-lg border-b border-gray-100" 
          : "bg-white lg:bg-white/80 backdrop-blur-none lg:backdrop-blur-sm py-4 lg:py-5 border-b border-gray-100 lg:border-transparent shadow-md lg:shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative w-40 h-12 sm:w-48 sm:h-14 group-hover:scale-[1.02] transition-transform">
               <Image 
                 src="/logo/NEW.png" 
                 alt="Reason Education Foundation Logo" 
                 fill 
                 className="object-contain"
                 priority
               />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  isActive(link.href)
                    ? "text-accent bg-accent/5"
                    : "text-primary/70 hover:text-accent hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-6 w-[1px] bg-gray-200 mx-4"></div>
            <Link
              href="/contact"
              className="btn-primary py-2.5 !px-6 text-sm"
            >
              Free Counseling
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
             <a 
               href="tel:9801085977" 
               className="p-2.5 text-white bg-accent hover:bg-accent/90 transition-all rounded-xl shadow-md shadow-accent/20 active:scale-95"
               aria-label="Call Us"
             >
                <Phone size={18} />
             </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-primary focus:outline-none bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-all rounded-xl active:scale-95"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-primary/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Content */}
      <div 
        className={`fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white shadow-2xl z-[60] transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <div className="relative w-32 h-10">
                 <Image 
                 src="/logo/NEW.png" 
                 alt="Reason Education Foundation Logo" 
                 fill 
                 className="object-contain"
               />
              </div>
            </Link>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-primary bg-gray-50 rounded-full"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold px-5 py-4 rounded-2xl transition-all flex items-center justify-between group ${
                  isActive(link.href)
                    ? "bg-accent/10 text-accent"
                    : "text-primary/70 hover:bg-gray-50 active:bg-gray-100"
                }`}
              >
                {link.name}
                <ChevronDown className={`-rotate-90 opacity-40 group-hover:opacity-100 transition-opacity ${isActive(link.href) ? "opacity-100" : ""}`} size={16} />
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-gray-100 space-y-6">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full py-4 text-lg shadow-xl"
            >
              Free Counseling
            </Link>
            <div className="grid grid-cols-2 gap-4">
               <a href="tel:9801085977" className="flex items-center justify-center space-x-3 py-4 rounded-2xl bg-gray-50 text-primary font-bold hover:bg-accent hover:text-white transition-all border border-gray-100" aria-label="Call Us">
                  <Phone size={20} />
                  <span>Call</span>
               </a>
               <a href="https://wa.me/9779801085977" className="flex items-center justify-center space-x-3 py-4 rounded-2xl bg-gray-50 text-primary font-bold hover:bg-green-500 hover:text-white transition-all border border-gray-100" aria-label="WhatsApp Us">
                  <MessageCircle size={20} />
                  <span>Chat</span>
               </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
