
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI Learning Platform",
    category: "web",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    description: "Interactive educational platform with AI-powered personalization."
  },
  {
    title: "Financial Analytics Dashboard",
    category: "ai",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Real-time financial data visualization with predictive analytics."
  },
  {
    title: "E-commerce Mobile App",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
    description: "Feature-rich shopping app with AR try-on functionality."
  },
  {
    title: "Tech Startup Rebrand",
    category: "branding",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    description: "Complete identity redesign for an AI startup."
  },
  {
    title: "Healthcare Management System",
    category: "web",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "Comprehensive patient management platform with AI diagnostics."
  },
  {
    title: "Smart Home Controller",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "IoT mobile app for integrated smart home management."
  },
];

const categories = [
  { id: "all", name: "All" },
  { id: "web", name: "Web" },
  { id: "mobile", name: "Mobile" },
  { id: "branding", name: "Branding" },
  { id: "ai", name: "AI" },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-lovable-grey/10 clip-diagonal-reverse">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="section-title mx-auto">Our Portfolio</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Explore our recent projects and successful client collaborations.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-lovable-neon text-lovable-black' 
                  : 'bg-lovable-grey/20 text-lovable-text hover:bg-lovable-grey/40'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[250px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-lovable-black/90 via-lovable-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
                <p className="mb-4 opacity-80 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{project.description}</p>
                <button 
                  onClick={() => setSelectedProject(index)} 
                  className="inline-flex items-center text-lovable-neon border border-lovable-neon px-4 py-2 rounded transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 hover:bg-lovable-neon/10"
                >
                  View Project
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
