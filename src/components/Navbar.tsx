
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Team', id: 'team' },
    { name: 'Contact', id: 'contact' },
  ];

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? 'py-3 bg-blackvector-black/80 backdrop-blur-lg shadow-lg'
      : 'py-6 bg-transparent'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-blackvector-red font-bold text-2xl mr-1">BLACK</span>
            <span className="text-blackvector-text font-bold text-2xl">VECTOR</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="hover-glow relative overflow-hidden group"
            >
              <span className="text-blackvector-text group-hover:text-blackvector-red transition-all duration-300">
                {link.name}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blackvector-red group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
          className="md:hidden p-1 text-blackvector-red"
        >
          <Menu size={24} />
        </Button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-blackvector-black/95 backdrop-blur-lg p-4 flex flex-col space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover-glow p-2"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
