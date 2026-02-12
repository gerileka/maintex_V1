import React from 'react';
import { Button } from './Button';
import { Reveal } from './Reveal';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <Reveal width="100%">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to scale your <br />
            <span className="text-primary">engineering capacity?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Book a consultation today and get a personalized team proposal within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-lg px-12">
              Book a Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-dark">
              Calculate Savings
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};