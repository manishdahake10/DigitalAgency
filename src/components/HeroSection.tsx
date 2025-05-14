
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blackvector-black via-blackvector-black/90 to-blackvector-black/70 z-10"></div>
        <video
          className="w-full h-full object-cover clip-diagonal"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
        >
          <source src="https://cdn.coverr.co/videos/coverr-data-visualization-3643/1080p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="overflow-hidden mb-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold animate-text-reveal">
              <span className="text-gradient">Code. </span> 
              <br className="md:hidden" />
              <span>Create. </span>
              <br className="hidden md:block" />
              <span>Conquer.</span>
            </h1>
          </div>
          
          <div className="overflow-hidden mb-8">
            <p className="text-xl md:text-2xl text-blackvector-text/80 animate-text-reveal animate-delay-300">
              Building Tomorrow's Digital Landscape Today
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-700">
            <Button 
              className="bg-blackvector-red text-blackvector-black hover:bg-blackvector-red/80 hover:shadow-[0_0_20px_rgba(234,56,76,0.5)] transition-all duration-300 text-lg px-8 py-6" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
              <ArrowRight className="ml-2 animate-bounce" />
            </Button>
            <Button 
              variant="outline" 
              className="border-blackvector-red text-blackvector-red hover:bg-blackvector-red/10 hover:text-blackvector-red transition-all duration-300 text-lg px-8 py-6"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-blackvector-red flex justify-center pt-2">
          <div className="w-1 h-3 bg-blackvector-red rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
