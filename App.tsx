import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { CostAdvantage } from './components/CostAdvantage';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-heading antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <CostAdvantage />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;