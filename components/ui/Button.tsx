// components/ui/Button.tsx
'use client';

import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ label, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 tracking-tighter py-3 rounded-md bg-white text-black font-medium hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-white/50 ${className}`}
    >
      {label}
    </button>
  );
}
