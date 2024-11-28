import React from 'react';
import { Shield } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-[#4B5320] text-white p-4 shadow-lg">
      <div className="max-w-4xl mx-auto flex items-center gap-3">
        <Shield className="h-8 w-8" />
        <div>
          <h1 className="text-2xl font-bold">MILPER Message Assistant</h1>
          <p className="text-sm opacity-90">Human Resources Command (HRC) Guidance</p>
        </div>
      </div>
    </header>
  );
}