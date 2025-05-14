
import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const team = [
  {
    name: "Alex Morgan",
    title: "CEO & AI Strategist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800",
    bio: "Former AI research lead with 15+ years experience in tech innovation and digital strategy.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Sarah Chen",
    title: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800",
    bio: "Award-winning designer with a passion for creating memorable digital experiences.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Marcus Johnson",
    title: "Technical Lead",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?fit=crop&w=800",
    bio: "Full-stack developer specializing in AI implementation and system architecture.",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Elena Rodriguez",
    title: "UX/UI Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=800",
    bio: "Human-centered design advocate with expertise in creating intuitive user experiences.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-lovable-black">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="section-title mx-auto">Our Team</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Meet the talented minds behind LOVABLE AI's innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="group relative"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              {/* Card Front */}
              <div className="relative overflow-hidden rounded-lg bg-lovable-grey/20 h-full transition-all duration-500 transform group-hover:scale-95">
                <div className="p-4">
                  <div className="relative mb-5 overflow-hidden rounded-full w-40 h-40 mx-auto border-2 border-lovable-neon/30">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-lovable-neon">{member.title}</p>
                  </div>
                </div>
              </div>
              
              {/* Card Back (Bio) */}
              <div className="absolute inset-0 bg-lovable-grey/90 rounded-lg p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-y-180 backface-hidden">
                <div>
                  <h3 className="text-xl font-bold mb-3">{member.name}</h3>
                  <p className="text-lovable-neon mb-3">{member.title}</p>
                  <p className="opacity-80">{member.bio}</p>
                </div>
                
                <div className="flex justify-center gap-4 mt-4">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="hover-glow p-2">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="hover-glow p-2">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="hover-glow p-2">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
