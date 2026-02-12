import React from 'react';
import { TrendingDown, Users, Zap, Globe, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

const features = [
  {
    icon: TrendingDown,
    title: "30–50% Cost Savings",
    desc: "Significant reduction in operational costs compared to local hiring without compromising quality."
  },
  {
    icon: Users,
    title: "Senior Engineers",
    desc: "Access to a pre-vetted pool of high-quality senior talent ready to impact your projects."
  },
  {
    icon: Zap,
    title: "Fast Onboarding",
    desc: "Scale your team in days, not months. We handle the sourcing and administrative overhead."
  },
  {
    icon: Globe,
    title: "European Alignment",
    desc: "Time zone compatibility ensures real-time collaboration and agile workflows."
  },
  {
    icon: ShieldCheck,
    title: "Scalable Teams",
    desc: "Flexible team structures that grow with your project needs and enterprise requirements."
  }
];

export const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-heading text-white relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <Reveal>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Why <br /><span className="text-primary">MainteX?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-gray-300 text-xl leading-relaxed mb-8">
                We bridge the gap between cost-efficiency and premium engineering. 
                Our nearshore model is designed for CTOs who demand excellence and speed.
              </p>
            </Reveal>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map((feature, idx) => (
              <Reveal key={idx} delay={idx * 0.1} direction="left">
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center shrink-0">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-400 text-base leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};