import React from 'react';

export const NummusLogo = ({ className = "w-16 h-16" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Nummus Logo"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#68ACA8" />
          <stop offset="100%" stopColor="#00A79D" />
        </linearGradient>
      </defs>
      
      {/* Outer C Shape */}
      {/* Starting from top right, going around to bottom right, leaving gap on right */}
      <path 
        d="M 82 28 A 42 42 0 1 0 82 72" 
        stroke="url(#logoGradient)" 
        strokeWidth="8" 
        strokeLinecap="round"
      />
      
      {/* Inner N - Circuit Style */}
      <g stroke="#68ACA8" strokeWidth="2" strokeLinecap="round">
        {/* Left Vertical Bar */}
        <line x1="38" y1="70" x2="38" y2="30" strokeWidth="4" />
        <circle cx="38" cy="28" r="2" fill="#68ACA8" stroke="none" />
        <circle cx="38" cy="72" r="2" fill="#68ACA8" stroke="none" />
        
        {/* Right Vertical Bar */}
        <line x1="68" y1="70" x2="68" y2="30" strokeWidth="4" />
        <circle cx="68" cy="28" r="2" fill="#68ACA8" stroke="none" />
        <circle cx="68" cy="72" r="2" fill="#68ACA8" stroke="none" />
        
        {/* Diagonal */}
        <line x1="38" y1="32" x2="68" y2="68" strokeWidth="4" />
        
        {/* Decorative Circuit Lines (Thin) */}
        <line x1="32" y1="35" x2="32" y2="65" strokeWidth="1" opacity="0.6" />
        <line x1="74" y1="35" x2="74" y2="65" strokeWidth="1" opacity="0.6" />
      </g>
    </svg>
  );
};
