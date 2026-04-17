import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Globe, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white/90 pt-16 pb-10 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center group">
              <div className="relative w-40 h-12 group-hover:scale-[1.02] transition-transform">
                 <Image 
                    src="/logo/NEW.png" 
                    alt="Reason Education Foundation Logo" 
                    fill 
                    className="object-contain brightness-0 invert" 
                  />
              </div>
            </Link>
            
            <p className="text-sm leading-relaxed text-white/60 font-medium max-w-sm">
              Empowering Nepalese students with world-class education opportunities. Your journey to global success starts with expert guidance.
            </p>
            
            <div className="flex space-x-3">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/ReasonEducationNepal", label: "Facebook" },
                { Icon: Twitter, href: "https://twitter.com/reasoneducation", label: "Twitter" },
                { Icon: Instagram, href: "https://www.instagram.com/reasoneducation", label: "Instagram" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/reason-education-consultancy", label: "Linkedin" }
              ].map(({ Icon, href, label }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-white/10"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-black text-white mb-6 uppercase tracking-widest text-xs">Quick Links</h3>
            <ul className="space-y-3 text-white/60 font-bold text-sm">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Latest Blogs", href: "/blog" },
                { name: "IELTS/PTE", href: "/ielts" },
                { name: "B2B Partnership", href: "/b2b" },
                { name: "FAQ", href: "/faq" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-accent transition-colors flex items-center group">
                    <ArrowRight size={12} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Destinations */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-black text-white mb-6 uppercase tracking-widest text-xs">Study Abroad</h3>
            <ul className="space-y-3 text-white/60 font-bold text-sm">
              {["USA", "Canada", "UK", "Australia", "New Zealand", "Europe", "Japan"].map((country) => (
                <li key={country}>
                  <Link href={`/countries/${country.toLowerCase().replace(' ', '-')}`} className="hover:text-accent transition-colors flex items-center group">
                    <ArrowRight size={12} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    Study in {country}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-black text-white mb-6 uppercase tracking-widest text-xs">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="text-white/60 font-bold text-sm">
                  <p className="text-[10px] text-white/30 uppercase tracking-tighter mb-0.5">Visit Us</p>
                  <p className="group-hover:text-white transition-colors">New Baneswor, (Indreni Complex)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div className="text-white/60 font-bold text-sm">
                  <p className="text-[10px] text-white/30 uppercase tracking-tighter mb-0.5">Call Us</p>
                  <p className="group-hover:text-white transition-colors">015316680, 9801085977</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div className="text-white/60 font-bold text-sm">
                  <p className="text-[10px] text-white/30 uppercase tracking-tighter mb-0.5">Email Us</p>
                  <p className="group-hover:text-white transition-colors">info@reasons.edu.np</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/40 font-bold">
            © 2026 Reason Education Consultancy. <span className="text-white/20 ml-2 hidden sm:inline">|</span> <span className="sm:ml-2">All Technical Rights Reserved <a href="https://darbartech.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Darbartech.com</a></span>
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-white/40">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
