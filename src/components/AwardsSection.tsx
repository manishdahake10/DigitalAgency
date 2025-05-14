
import React from 'react';
import { Award } from 'lucide-react';

const awards = [
  {
    year: "2023",
    title: "Best AI Implementation",
    organization: "Digital Innovation Awards",
    description: "Recognized for groundbreaking AI integration in web applications."
  },
  {
    year: "2022",
    title: "Agency of the Year",
    organization: "Creativetech Summit",
    description: "Awarded for outstanding client results and innovative digital solutions."
  },
  {
    year: "2021",
    title: "Best UX Design",
    organization: "Webby Awards",
    description: "Honored for exceptional user experience in the TechVision project."
  },
  {
    year: "2020",
    title: "Innovation Excellence",
    organization: "Tech Innovators",
    description: "Recognized for pioneering AI-driven design methodologies."
  }
];

const AwardsSection = () => {
  return (
    <section id="awards" className="section-padding bg-lovable-grey/10 clip-diagonal">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="section-title mx-auto">Our Awards</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Recognition of our commitment to excellence and innovation.
          </p>
        </div>
        
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-lovable-neon/30 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {awards.map((award, index) => (
              <div 
                key={index}
                className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              >
                {/* Year bubble */}
                <div className="md:w-1/2 flex md:justify-center mb-6 md:mb-0">
                  <div className="relative">
                    <div className="bg-lovable-black border-2 border-lovable-neon text-lovable-neon rounded-full h-20 w-20 flex items-center justify-center z-10 relative shadow-[0_0_15px_rgba(0,255,247,0.3)]">
                      <span className="text-xl font-bold">{award.year}</span>
                    </div>
                    {/* Connecting line to center */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-20 w-1/2 h-0.5 bg-lovable-neon/30 hidden md:block"></div>
                  </div>
                </div>
                
                {/* Award details */}
                <div className="md:w-1/2 glass-panel p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Award className="w-6 h-6 text-lovable-neon mr-3" />
                    <h3 className="text-xl font-bold">{award.title}</h3>
                  </div>
                  <p className="text-lovable-neon mb-2">{award.organization}</p>
                  <p className="opacity-80">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
