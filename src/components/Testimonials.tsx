import Image from "next/image";
import { Star, Quote, MessageSquare, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Aryan Dev Acchami",
    destination: "Study in Canada",
    content: "The best decision I ever made was choosing Reason Education. Their team guided me through every step of my Canadian visa process, and I'm now studying at a top institution in Canada!",
    image: "/students/aryan.jpg",
    rating: 5,
  },
  {
    name: "Sristi Thapa",
    destination: "Study in UK",
    content: "Transparent, professional, and highly efficient. They handled my UK visa application with such care. I highly recommend Reason Education to any student from Nepal.",
    image: "/students/sristi.jpg",
    rating: 5,
  },
  {
    name: "Barsa",
    destination: "Study in Australia",
    content: "Reason Education's IELTS classes are top-notch. I achieved an excellent band score, and their counselor helped me secure my admission in Australia with ease.",
    image: "/students/barsa.jpg",
    rating: 5,
  },
  {
    name: "Sarana Pradhan",
    destination: "Study in Japan",
    content: "I'm so grateful for the support I received for my Japan study visa. The team was incredibly helpful and made the entire complex process seem very simple.",
    image: "/students/sarana.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-10 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-bold mb-4 sm:mb-6 border border-accent/20 uppercase tracking-widest">
            <Sparkles size={16} aria-hidden="true" />
            <span>Success Stories</span>
          </div>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4 sm:mb-6 tracking-tight">
            Hear From Our <span className="text-accent">Successful Students</span>
          </h2>
          <p className="text-lg md:text-xl text-primary/60 font-medium leading-relaxed max-w-2xl mx-auto px-4">
            Join thousands of successful students who achieved their dreams with Reason Education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <article 
              key={index} 
              className="group bg-gray-50/50 p-8 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-gray-100 relative card-hover"
            >
              <Quote className="absolute top-6 sm:top-8 right-6 sm:right-8 text-accent/10 w-16 h-16 sm:w-20 sm:h-20 group-hover:text-accent/20 transition-colors pointer-events-none" aria-hidden="true" />
              
              <div className="flex items-center space-x-1 mb-6 sm:mb-8" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              
              <blockquote className="text-primary/70 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed relative z-10 font-medium italic">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              
              <footer className="flex items-center space-x-4 sm:space-x-5 pt-6 sm:pt-8 border-t border-gray-100">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group-hover:rotate-3 transition-transform flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} - ${testimonial.destination}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <cite className="font-black text-primary text-base sm:text-lg leading-tight not-italic block">{testimonial.name}</cite>
                  <p className="text-[11px] sm:text-xs text-accent font-bold uppercase tracking-widest mt-1">{testimonial.destination}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;