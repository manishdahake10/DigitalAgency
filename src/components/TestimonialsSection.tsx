
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Working with LOVABLE AI transformed our online presence. Their AI-driven approach helped us increase engagement by 300% in just three months.",
    author: "Jessica T.",
    company: "TechVision Corp",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "The team at LOVABLE AI delivered beyond our expectations. Their understanding of both design and AI technology created an exceptional user experience for our customers.",
    author: "Michael R.",
    company: "InnovateLabs",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "We've worked with many agencies before, but none have shown the level of expertise and innovation that LOVABLE AI brings to the table. Truly impressive results!",
    author: "Sarah L.",
    company: "FutureBrand",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
];

// Company logos data
const companyLogos = [
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-lovable-black">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="section-title mx-auto">What Clients Say</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Don't just take our word for it — hear from our satisfied clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative glass-panel p-8 rounded-lg"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Quote mark decoration */}
              <div className="absolute top-6 right-6 text-6xl opacity-10 font-serif">"</div>
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? 'text-lovable-neon fill-lovable-neon' : 'text-lovable-grey'
                    }`}
                  />
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="mb-8 opacity-90">{testimonial.text}</p>
              
              {/* Author info */}
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border border-lovable-neon/30">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-lovable-neon">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Client logos */}
        <div className="mt-16">
          <p className="text-center text-sm text-lovable-text/60 mb-8">TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            {companyLogos.map((company, index) => (
              <div 
                key={index} 
                className="h-12 transition-transform duration-300 hover:scale-110"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="h-full w-auto object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
