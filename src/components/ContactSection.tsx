
import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-lovable-neon" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <Mail className="w-5 h-5 text-lovable-neon" />,
      title: "Email",
      value: "hello@lovable.ai",
      action: "mailto:hello@lovable.ai"
    },
    {
      icon: <MapPin className="w-5 h-5 text-lovable-neon" />,
      title: "Office",
      value: "123 Tech Plaza, San Francisco, CA",
      action: "https://maps.google.com"
    },
  ];

  return (
    <section id="contact" className="section-padding bg-lovable-grey/10 clip-diagonal-reverse">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="section-title mx-auto">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Ready to transform your digital presence? Let's start a conversation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-panel p-8 rounded-lg" data-aos="fade-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="bg-lovable-black/50 border-lovable-grey/30 focus:border-lovable-neon"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="bg-lovable-black/50 border-lovable-grey/30 focus:border-lovable-neon"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="bg-lovable-black/50 border-lovable-grey/30 focus:border-lovable-neon"
                  placeholder="How can we help?"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-lovable-black/50 border-lovable-grey/30 focus:border-lovable-neon"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-lovable-neon text-lovable-black hover:bg-lovable-neon/80 hover:shadow-[0_0_20px_rgba(0,255,247,0.5)] transition-all duration-300"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-lovable-neon">Contact Information</h3>
              <p className="opacity-80">
                Reach out to us directly or fill out the form and we'll get back to you promptly.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.action}
                  className="flex items-start gap-4 p-4 rounded-lg bg-lovable-black/40 hover:bg-lovable-black/70 transition-colors duration-300"
                >
                  <div className="p-2 bg-lovable-grey/30 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-lovable-neon">{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Map Embed */}
            <div className="h-[200px] rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-lovable-grey/20 flex items-center justify-center">
                <p className="text-center">Interactive Map</p>
                <div className="absolute inset-0 border-2 border-dashed border-lovable-grey/30 m-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
