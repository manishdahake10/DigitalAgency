
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

type PlanFeature = {
  name: string;
  included: boolean;
};

type PricingPlan = {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
};

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: {
      monthly: 49,
      yearly: 490,
    },
    description: 'Perfect for small businesses and startups',
    features: [
      { name: 'Single Website', included: true },
      { name: 'Basic Analytics', included: true },
      { name: 'Mobile Responsive', included: true },
      { name: '3 Pages', included: true },
      { name: 'SEO Optimization', included: false },
      { name: 'E-Commerce Support', included: false },
      { name: 'Custom Domain', included: false },
      { name: 'Priority Support', included: false },
    ],
  },
  {
    name: 'Professional',
    price: {
      monthly: 99,
      yearly: 990,
    },
    description: 'Ideal for growing businesses',
    isPopular: true,
    features: [
      { name: 'Multiple Websites', included: true },
      { name: 'Advanced Analytics', included: true },
      { name: 'Mobile Responsive', included: true },
      { name: 'Unlimited Pages', included: true },
      { name: 'SEO Optimization', included: true },
      { name: 'E-Commerce Support', included: true },
      { name: 'Custom Domain', included: false },
      { name: 'Priority Support', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: {
      monthly: 199,
      yearly: 1990,
    },
    description: 'For large-scale and corporate needs',
    features: [
      { name: 'Multiple Websites', included: true },
      { name: 'Advanced Analytics', included: true },
      { name: 'Mobile Responsive', included: true },
      { name: 'Unlimited Pages', included: true },
      { name: 'SEO Optimization', included: true },
      { name: 'E-Commerce Support', included: true },
      { name: 'Custom Domain', included: true },
      { name: 'Priority Support', included: true },
    ],
  },
];

const PricingSection = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="section-padding bg-blackvector-black" style={{backgroundImage: "url('https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?auto=format&fit=crop&w=1950&q=80')", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundBlendMode: "overlay"}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Pricing Plans</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Choose the perfect plan to bring your digital vision to life
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center mb-12">
          <span className={`mr-3 ${!yearly ? 'text-blackvector-red font-bold' : 'opacity-70'}`}>Monthly</span>
          <button
            onClick={() => setYearly(!yearly)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
              yearly ? 'bg-blackvector-red' : 'bg-blackvector-grey'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                yearly ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`ml-3 ${yearly ? 'text-blackvector-red font-bold' : 'opacity-70'}`}>
            Yearly <span className="text-xs font-normal">(Save 20%)</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`glass-panel p-6 rounded-lg transition-all duration-500 relative ${
                plan.isPopular ? 'neon-border transform scale-105 md:scale-110' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-0 right-0 mx-auto w-32 text-center">
                  <span className="bg-blackvector-red text-blackvector-black text-xs font-bold py-1 px-3 rounded-full uppercase shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="opacity-80 mb-4 h-10">{plan.description}</p>
                <div className="flex justify-center items-end">
                  <span className="text-4xl font-extrabold text-blackvector-red">
                    ${yearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-sm ml-1 mb-1 opacity-70">
                    {yearly ? '/year' : '/month'}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-blackvector-red mr-3 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 opacity-50 mr-3 flex-shrink-0" />
                    )}
                    <span className={feature.included ? '' : 'opacity-50'}>{feature.name}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${
                  plan.isPopular 
                    ? 'bg-blackvector-red text-blackvector-black hover:bg-blackvector-red/80' 
                    : 'bg-blackvector-grey hover:bg-blackvector-grey/70'
                } transition-all duration-300`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
        
        {/* Feature Comparison */}
        <div className="mt-20 glass-panel p-8 rounded-lg max-w-4xl mx-auto" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-6 text-center">Feature Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 opacity-80">Feature</th>
                  <th className="text-center py-3 px-4">Starter</th>
                  <th className="text-center py-3 px-4 text-blackvector-red">Professional</th>
                  <th className="text-center py-3 px-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-blackvector-grey/20">
                  <td className="py-3 px-4 opacity-80">Number of Pages</td>
                  <td className="text-center py-3 px-4">3</td>
                  <td className="text-center py-3 px-4">Unlimited</td>
                  <td className="text-center py-3 px-4">Unlimited</td>
                </tr>
                <tr className="border-t border-blackvector-grey/20">
                  <td className="py-3 px-4 opacity-80">Revision Rounds</td>
                  <td className="text-center py-3 px-4">2</td>
                  <td className="text-center py-3 px-4">5</td>
                  <td className="text-center py-3 px-4">Unlimited</td>
                </tr>
                <tr className="border-t border-blackvector-grey/20">
                  <td className="py-3 px-4 opacity-80">Delivery Time</td>
                  <td className="text-center py-3 px-4">7 days</td>
                  <td className="text-center py-3 px-4">5 days</td>
                  <td className="text-center py-3 px-4">3 days</td>
                </tr>
                <tr className="border-t border-blackvector-grey/20">
                  <td className="py-3 px-4 opacity-80">24/7 Support</td>
                  <td className="text-center py-3 px-4"><X className="w-5 h-5 opacity-50 inline-block" /></td>
                  <td className="text-center py-3 px-4"><X className="w-5 h-5 opacity-50 inline-block" /></td>
                  <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-blackvector-red inline-block" /></td>
                </tr>
                <tr className="border-t border-blackvector-grey/20">
                  <td className="py-3 px-4 opacity-80">Custom Development</td>
                  <td className="text-center py-3 px-4"><X className="w-5 h-5 opacity-50 inline-block" /></td>
                  <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-blackvector-red inline-block" /></td>
                  <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-blackvector-red inline-block" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
