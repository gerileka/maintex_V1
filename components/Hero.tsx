import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from './Button';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#E8F4F6] to-transparent -z-10 opacity-60" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Reveal width="100%">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-heading leading-[1.05] mb-8">
              Premium Nearshore <br />
              <span className="text-primary">Engineering Teams</span>
            </h1>
          </Reveal>

          <Reveal width="100%" delay={0.2}>
            <p className="text-2xl md:text-3xl text-secondary/80 max-w-3xl mb-12 leading-relaxed font-medium">
              Scale your development capacity with MainteX. 
              <span className="font-bold text-heading block mt-2">
                30–50% cost savings. European time zone. Enterprise quality.
              </span>
            </p>
          </Reveal>

          <Reveal width="100%" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" className="group text-xl px-12 py-5">
                Start Scaling Now 
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="text-xl px-10 py-5">
                View Service Models
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-10 h-10 text-primary/50" />
      </motion.div>
    </section>
  );
};