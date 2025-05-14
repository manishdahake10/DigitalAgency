
import React, { useState } from 'react';
import { Code, PenTool, Lightbulb, Database, LayoutGrid, Smartphone, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button'; 
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    icon: <Code className="w-10 h-10 text-blackvector-red" />,
    title: "Web Development",
    description: "Custom websites built with modern frameworks, optimized for performance and conversions.",
    categories: [
      { 
        name: "Cafe", 
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        templates: [
          { name: "Coffee House", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
          { name: "Beanery", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
          { name: "Espresso Bar", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" }
        ]
      },
      { 
        name: "Interior",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        templates: [
          { name: "Modern Home", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
          { name: "Minimalist", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
          { name: "Luxury Design", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" }
        ]
      },
      { 
        name: "Real Estate", 
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        templates: [
          { name: "Property Listings", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
          { name: "Agent Showcase", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
          { name: "Luxury Homes", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" }
        ]
      },
      { 
        name: "Digital Agency", 
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        templates: [
          { name: "Creative Studio", image: "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
          { name: "Design Agency", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
          { name: "Marketing Hub", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" }
        ]
      },
      { 
        name: "Spy", 
        image: "https://images.unsplash.com/photo-1551703599-3d98d4284e23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        templates: [
          { name: "Surveillance", image: "https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
          { name: "Tech Security", image: "https://images.unsplash.com/photo-1530981279185-9f0960715694?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
          { name: "Privacy Tools", image: "https://images.unsplash.com/photo-1545167496-8343d9232a96?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" }
        ]
      },
      { 
        name: "E-commerce", 
        image: "https://images.unsplash.com/photo-1556741533-974f8e62a782?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        templates: [
          { name: "Fashion Store", image: "https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
          { name: "Electronics", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
          { name: "Home Goods", image: "https://images.unsplash.com/photo-1556217256-6c7ed4403ebc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" }
        ]
      },
      { 
        name: "Gym", 
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        templates: [
          { name: "Fitness Center", image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
          { name: "Yoga Studio", image: "https://images.unsplash.com/photo-1588286840104-8457c3904df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
          { name: "CrossFit Box", image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" }
        ]
      }
    ]
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-blackvector-red" />,
    title: "AI Consulting",
    description: "Strategic AI integration to automate processes and enhance business intelligence."
  },
  {
    icon: <PenTool className="w-10 h-10 text-blackvector-red" />,
    title: "Branding",
    description: "Identity design that communicates your values and resonates with your target audience."
  },
  {
    icon: <LayoutGrid className="w-10 h-10 text-blackvector-red" />,
    title: "UX Design",
    description: "User-centered design that creates intuitive, engaging digital experiences."
  },
  {
    icon: <Smartphone className="w-10 h-10 text-blackvector-red" />,
    title: "Mobile Development",
    description: "Native and cross-platform apps designed for seamless user experience across devices."
  },
  {
    icon: <Database className="w-10 h-10 text-blackvector-red" />,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights to drive strategic business decisions."
  }
];

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const handleServiceClick = (title: string) => {
    if (expandedService === title) {
      setExpandedService(null);
      setSelectedCategory(null);
    } else {
      setExpandedService(title);
      setSelectedCategory(null);
    }
  };
  
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <section id="services" className="section-padding bg-blackvector-black" style={{backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1950&q=80')", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundBlendMode: "overlay"}}>
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="section-title mx-auto">Our Services</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Comprehensive digital solutions powered by cutting-edge technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 rounded-lg hover:neon-border transition-all duration-500 group cursor-pointer"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              onClick={() => handleServiceClick(service.title)}
            >
              <div className="mb-5 w-16 h-16 rounded-full flex items-center justify-center bg-blackvector-grey/30 group-hover:bg-blackvector-red/20 transition-colors duration-300">
                {service.icon}
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                {service.categories && (
                  <div className="text-blackvector-red">
                    {expandedService === service.title ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </div>
                )}
              </div>
              <p className="opacity-80">{service.description}</p>
              
              {/* Categories for Web Development */}
              {service.categories && expandedService === service.title && (
                <AnimatePresence>
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-blackvector-grey/30"
                  >
                    <h4 className="font-semibold mb-3">Categories:</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {service.categories.map((category, catIndex) => (
                        <div 
                          key={catIndex} 
                          className={`relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 ${selectedCategory === category.name ? 'ring-2 ring-blackvector-red' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCategoryClick(category.name);
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                          <img 
                            src={category.image} 
                            alt={category.name} 
                            className="w-full h-20 object-cover"
                          />
                          <div className="absolute bottom-1 left-0 right-0 text-center text-sm font-medium">
                            {category.name}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Templates Display */}
                    {selectedCategory && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                        className="mt-6"
                      >
                        <h4 className="font-semibold mb-3">
                          {selectedCategory} Templates:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {service.categories
                            .find(cat => cat.name === selectedCategory)?.templates
                            .map((template, tempIndex) => (
                              <motion.div 
                                key={tempIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: tempIndex * 0.1 }}
                                className="overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300 group"
                              >
                                <div className="relative h-40 overflow-hidden">
                                  <img 
                                    src={template.image} 
                                    alt={template.name} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-3 w-full">
                                      <p className="text-sm font-medium text-white">{template.name}</p>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ))
                          }
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
