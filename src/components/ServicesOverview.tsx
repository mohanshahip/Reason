import { GraduationCap, FileText, Globe, ClipboardCheck, PhoneCall, HelpCircle, ArrowRight, Award, BookOpen, Users } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "B2B Collaboration",
    description: "Strategic partnerships with educational institutions and organizations to provide comprehensive study abroad solutions.",
    icon: Award,
    href: "/services",
    color: "bg-primary",
  },
  {
    title: "Study Abroad",
    description: "Expert guidance for students seeking education in UK, USA, Canada, Australia, New Zealand, Japan, and Europe.",
    icon: Globe,
    href: "/services",
    color: "bg-accent",
  },
  {
    title: "IELTS/PTE Preparation",
    description: "Result-oriented coaching for IELTS and PTE by our certified expert trainers with years of successful track record.",
    icon: GraduationCap,
    href: "/ielts",
    color: "bg-purple-500",
  },
  {
    title: "Documentation Support",
    description: "Professional help with gathering, verifying, and translating necessary documents to ensure a smooth application process.",
    icon: FileText,
    href: "/services",
    color: "bg-blue-500",
  },
  {
    title: "Consular Registration",
    description: "Assistance with registering with relevant consulates and embassies for your study abroad journey and visa processes.",
    icon: ClipboardCheck,
    href: "/services",
    color: "bg-green-500",
  },
  {
    title: "Free Counseling",
    description: "Expert guidance on choosing the right course and destination based on your unique academic profile and career aspirations.",
    icon: PhoneCall,
    href: "/contact",
    color: "bg-orange-500",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-gray-50/50 relative overflow-hidden" aria-labelledby="services-heading">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none hidden lg:block" aria-hidden="true"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 lg:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary/5 text-primary px-4 py-2 rounded-full text-xs font-bold mb-4 sm:mb-6 border border-primary/10">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" aria-hidden="true"></span>
              <span className="uppercase tracking-widest">Our Expertise</span>
            </div>
            <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4 sm:mb-6 leading-[1.1] tracking-tight">
              Comprehensive Services for Your <span className="text-accent">Global Journey</span>
            </h2>
            <p className="text-lg md:text-xl text-primary/60 leading-relaxed font-medium">
              From your first inquiry to landing in your dream country, we provide end-to-end support to ensure your success.
            </p>
          </div>
          <Link href="/services" className="btn-secondary whitespace-nowrap hidden lg:flex group shadow-xl">
            Explore All Services 
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="group bg-white p-8 sm:p-10 rounded-2xl sm:rounded-[2rem] border border-gray-100 card-hover relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-bl-[80px] sm:rounded-bl-[100px]`} aria-hidden="true"></div>
              
              <div className="relative z-10">
                <div 
                  className={`w-14 h-14 sm:w-16 sm:h-16 ${service.color} bg-opacity-10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  aria-hidden="true"
                >
                  <service.icon size={28} className={`${service.color.replace('bg-', 'text-')}`} />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4 group-hover:text-accent transition-colors leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-primary/70 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed font-medium">
                  {service.description}
                </p>
                
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-black uppercase tracking-widest text-primary hover:text-accent transition-colors group/link"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More 
                  <span className="ml-3 p-2 bg-gray-50 rounded-full group-hover/link:bg-accent group-hover/link:text-white transition-all duration-300">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 lg:hidden">
          <Link href="/services" className="btn-secondary w-full justify-center shadow-xl">
            Explore All Services 
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;