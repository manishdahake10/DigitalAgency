
import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const stats = [
  { value: 100, label: "Clients", prefix: "", suffix: "+" },
  { value: 250, label: "Projects", prefix: "", suffix: "+" },
  { value: 15, label: "Team Members", prefix: "", suffix: "" },
  { value: 8, label: "Years Experience", prefix: "", suffix: "" },
];

const benefits = [
  "AI-Powered Solutions",
  "Award-Winning Design",
  "Industry Expertise",
  "Cutting-Edge Technology",
  "Dedicated Support",
  "Results-Driven Approach",
];

const WhyChooseUsSection = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('why-choose-us');
      if (!section || hasAnimated) return;
      
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (isVisible) {
        animateCounters();
        setHasAnimated(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);
  
  const animateCounters = () => {
    stats.forEach((stat, index) => {
      const duration = 2000; // ms
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;
      
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(stat.value * progress);
        
        setCounters(prevCounters => {
          const newCounters = [...prevCounters];
          newCounters[index] = currentCount;
          return newCounters;
        });
        
        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    });
  };

  return (
    <section id="why-choose-us" className="section-padding bg-lovable-black">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="section-title mx-auto">Why Choose Us?</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Discover what sets LOVABLE AI apart from other digital agencies.
          </p>
        </div>
        
        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 text-center rounded-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 text-lovable-neon">
                {stat.prefix}{counters[index]}{stat.suffix}
              </div>
              <p className="opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-lovable-neon">Our Advantages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 bg-lovable-grey/10 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-lovable-neon flex-shrink-0" />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image/Visual */}
          <div className="relative h-[300px] md:h-[400px]" data-aos="fade-left">
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Digital Innovation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-lovable-black via-lovable-black/50 to-transparent"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-panel p-6 max-w-xs text-center">
                <h4 className="text-xl font-bold mb-3">The Future is AI</h4>
                <p className="opacity-80">
                  We're not just keeping up with technology — we're defining it.
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-lovable-neon rounded-lg opacity-70"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-lovable-neon rounded-lg opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
