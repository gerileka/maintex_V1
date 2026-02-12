import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, BarChart3, Cloud, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Software Engineering",
    icon: Code2,
    items: [
      "Custom Software Development",
      "Full-Stack Development",
      "Mobile Applications",
      "SaaS Platforms",
      "UI/UX Design",
      "System Architecture",
      "API & Integrations"
    ]
  },
  {
    title: "Data, AI & Analytics",
    icon: Database,
    items: [
      "Data Engineering",
      "Business Intelligence",
      "Machine Learning Solutions",
      "AI Development",
      "Data Warehousing",
      "Predictive Analytics"
    ]
  },
  {
    title: "Enterprise & SAP",
    icon: BarChart3,
    items: [
      "SAP Implementation",
      "SAP S/4HANA Migration",
      "ERP Integration",
      "Business Process Automation",
      "Enterprise Consulting"
    ]
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    items: [
      "Cloud Architecture (AWS, Azure, GCP)",
      "DevOps & CI/CD",
      "Cloud Migration",
      "Cybersecurity",
      "Managed IT Services"
    ]
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-heading">
              Our <span className="text-primary">Expertise</span>
            </h2>
            <div className="hidden md:block w-32 h-1 bg-gray-100 rounded-full mb-2">
              <div className="w-1/3 h-full bg-primary rounded-full"></div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <motion.div 
                className="h-full bg-[#F7F9FA] rounded-2xl p-8 cursor-pointer group hover:shadow-xl transition-all duration-500 border border-transparent hover:border-primary/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-heading mb-5 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <ul className="space-y-4">
                    {service.items.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-center text-base font-medium text-secondary/80">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shrink-0" />
                        {item}
                      </li>
                    ))}
                    {service.items.length > 4 && (
                      <li className="text-primary text-base font-bold pt-2 flex items-center">
                        And {service.items.length - 4} more
                        <ChevronRight className="w-5 h-5 ml-1" />
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};