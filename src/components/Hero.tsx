import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, Users, Award, GraduationCap, Globe2, Briefcase } from "lucide-react";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center pt-20 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50"
      role="banner"
      aria-label="Hero section"
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[70%] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-secondary/5 rounded-full blur-[100px]" />
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: 'radial-gradient(#0A2540 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 lg:space-y-8 animate-slide-up">
            <div className="space-y-2 lg:space-y-3">
              <div className="flex flex-col items-center lg:items-start animate-fade-in">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl font-black text-accent leading-none tracking-tight uppercase lg:whitespace-nowrap">
                  Abroad Study
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-primary leading-[1.02] tracking-tight">
                Your Future <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500 relative inline-block">
                  Beyond Borders
                  <svg className="absolute -bottom-2 left-0 w-full h-4 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="6" />
                  </svg>
                </span>
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Bridge the gap between your potential and global excellence. Join Nepal&apos;s most trusted education consultancy for a seamless study abroad experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link 
                href="/contact" 
                className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-primary text-white rounded-xl lg:rounded-2xl font-bold overflow-hidden shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
                aria-label="Start your study abroad journey"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="flex items-center justify-center gap-3 text-base sm:text-lg">
                  Start Your Journey <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/ielts" 
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-primary border-2 border-slate-200 rounded-xl lg:rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-md flex items-center justify-center gap-3 text-base sm:text-lg"
                aria-label="Explore IELTS and PTE courses"
              >
                <GraduationCap size={22} />
                <span>Explore Courses</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-4 lg:gap-x-8 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-500" aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-600">98% Visa Success</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-500" aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-600">Approved by Ministry of Social Development Bagamati</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-500" aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-600">Free Counseling</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative lg:mt-0 animate-fade-in order-first lg:order-last">
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 group">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1470"
                alt="Happy international students achieving their dreams with Reason Education Consultancy"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-50 transition-opacity group-hover:opacity-60" />
            </div>

            <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent/10 rounded-full -z-10 blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/10 rounded-full -z-10 blur-3xl" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;