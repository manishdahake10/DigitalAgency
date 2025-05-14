
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-lovable-grey/20 clip-diagonal">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="section-title mx-auto">About Us</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="overflow-hidden" data-aos="fade-right">
              <p className="text-lg opacity-90">
                LOVABLE AI is a forward-thinking digital agency at the intersection of creativity and artificial intelligence. 
                We blend cutting-edge technology with strategic design to create digital experiences that captivate, engage, 
                and convert.
              </p>
            </div>
            
            <div className="glass-panel p-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-3 text-lovable-neon">Our Mission</h3>
              <p>
                To leverage AI-powered solutions to help businesses transform their digital presence and 
                achieve remarkable growth in an increasingly tech-driven world.
              </p>
            </div>
            
            <div className="glass-panel p-6" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-bold mb-3 text-lovable-neon">Our Vision</h3>
              <p>
                To become the global leader in AI-enhanced digital services, setting new industry standards 
                for innovation, quality, and client satisfaction.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative h-[400px] md:h-[500px]" data-aos="fade-left">
            <div className="absolute inset-0 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-lovable-neon/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="LOVABLE AI Team at Work" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-5 -right-5 w-40 h-40 border-2 border-lovable-neon rounded-lg opacity-70"></div>
            <div className="absolute -top-5 -left-5 w-24 h-24 border-2 border-lovable-neon rounded-lg opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
