import React from 'react';
import { Reveal } from './Reveal';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We analyze your tech stack, team culture, and project requirements to create a tailored hiring profile."
  },
  {
    number: "02",
    title: "Selection",
    description: "We source candidates from our pre-vetted senior talent pool. You interview the top matches."
  },
  {
    number: "03",
    title: "Onboarding",
    description: "We handle contracts, equipment, and compliance. Engineers integrate into your workflow immediately."
  },
  {
    number: "04",
    title: "Scaling",
    description: "Easily scale your team up or down based on project demands with full flexibility."
  }
];

export const Process: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <Reveal className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-heading">
            How It <span className="text-primary">Works</span>
          </h2>
        </Reveal>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.2}>
                <div className="relative bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors relative z-10">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-heading mb-3">{step.title}</h3>
                  <p className="text-secondary/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};