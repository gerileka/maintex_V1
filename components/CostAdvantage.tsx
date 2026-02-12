import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Reveal } from './Reveal';

const data = [
  { name: 'Local Hire', cost: 100 },
  { name: 'MainteX', cost: 60 },
];

export const CostAdvantage: React.FC = () => {
  return (
    <section className="py-24 bg-[#F7F9FA]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
                Maximizing <span className="text-primary">ROI</span>
              </h2>
              <p className="text-secondary/80 text-lg mb-8 leading-relaxed">
                By partnering with MainteX, you eliminate the overhead of recruitment, benefits, office space, and hardware. 
                Focus your budget on what matters: <strong className="text-heading">Development Velocity.</strong>
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-4xl font-bold text-primary mb-1">40%</div>
                  <div className="text-sm text-secondary">Average Savings</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-4xl font-bold text-heading mb-1">2x</div>
                  <div className="text-sm text-secondary">Scaling Speed</div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="w-full md:w-1/2 h-[400px] bg-white p-8 rounded-2xl shadow-lg relative">
            <Reveal width="100%" direction="left">
                <h3 className="text-lg font-semibold text-heading mb-6">Annual Cost Comparison (Index)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip cursor={{fill: 'transparent'}} />
                    <Bar dataKey="cost" radius={[10, 10, 0, 0]} barSize={60}>
                      {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#E2E8F0' : '#4CC3D2'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                
                <div className="absolute top-1/2 right-12 md:right-24 bg-heading text-white px-4 py-2 rounded-lg shadow-xl -translate-y-12">
                  <span className="font-bold">Significant Savings</span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-heading rotate-45"></div>
                </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};