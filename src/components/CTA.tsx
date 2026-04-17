import Link from "next/link";
import { MessageCircle, Phone, CalendarCheck, ArrowRight, Sparkles, Clock, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] sm:blur-[120px]" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px] sm:blur-[120px]" aria-hidden="true"></div>
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} aria-hidden="true"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center px-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-5 py-2 rounded-full text-xs font-bold mb-6 sm:mb-8 backdrop-blur-md border border-white/10 uppercase tracking-[0.2em]">
            <Sparkles size={16} className="text-accent" aria-hidden="true" />
            <span>Your Future Starts Here</span>
          </div>
          
          <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-[1] tracking-tight">
            Ready to Start Your <span className="text-accent">Global</span> Journey Today?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-8 sm:mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Get expert counseling and start your application process now. We&apos;re here to guide you every step of the way to your dream university.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="btn-primary !bg-white !text-primary hover:!bg-accent hover:!text-white w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg shadow-[0_20px_50px_rgba(255,255,255,0.1)] group rounded-xl sm:rounded-2xl"
              aria-label="Book free counseling session"
            >
              Book Free Counseling 
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <a
              href="https://wa.me/9779801085977?text=Hello%20Reason%20Education%2C%20I%20have%20a%20question%20about%20studying%20abroad.%20Can%20you%20help%20me%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 sm:gap-4 text-white border-2 border-white/20 hover:border-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all hover:bg-white/5 group"
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle size={22} className="text-[#25D366] group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="mt-10 sm:mt-16 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16 pt-8 sm:pt-12 border-t border-white/10">
            <a href="tel:015316680" className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-xl" aria-hidden="true">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-[10px] sm:text-[10px] text-white/40 font-black uppercase tracking-[0.2em] mb-1">Call Us Now</p>
                <p className="text-lg sm:text-xl font-black text-white leading-none">01-5316680</p>
              </div>
            </a>
            <div className="flex items-center gap-3 sm:gap-4 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-xl" aria-hidden="true">
                <Clock size={24} />
              </div>
              <div className="text-left">
                <p className="text-[10px] sm:text-[10px] text-white/40 font-black uppercase tracking-[0.2em] mb-1">Office Hours</p>
                <p className="text-lg sm:text-xl font-black text-white leading-none">Sun - Fri, 7:00 AM - 5 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-xl" aria-hidden="true">
                <MapPin size={24} />
              </div>
              <div className="text-left">
                <p className="text-[10px] sm:text-[10px] text-white/40 font-black uppercase tracking-[0.2em] mb-1">Visit Us</p>
                <p className="text-lg sm:text-xl font-black text-white leading-none">New Baneswor, Kathmandu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;