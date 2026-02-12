import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      width="160" 
      height="45" 
      viewBox="0 0 160 45" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="MainteX Logo"
    >
      <text x="0" y="32" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="36" fill="#2E2E2E">
        Mainte
      </text>
      <text x="118" y="32" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="36" fill="#4CC3D2">
        X
      </text>
      <path d="M125 10 L155 35" stroke="#4CC3D2" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
      <path d="M155 10 L125 35" stroke="#4CC3D2" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
};