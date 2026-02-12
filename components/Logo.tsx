import React from 'react';
import { Terminal } from 'lucide-react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className || ''}`}>
      <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-[#3bb0bf] rounded-xl text-white shadow-lg shadow-primary/30">
        <Terminal size={22} strokeWidth={3} />
      </div>
      <span className="font-bold text-3xl tracking-tight text-heading leading-none">
        Mainte<span className="text-primary">X</span>
      </span>
    </div>
  );
};