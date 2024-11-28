import React from 'react';

export function Footer() {
  return (
    <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
      <div className="space-x-4">
        <a 
          href="https://www.army.mil/privacy" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:underline hover:text-[#4B5320] transition-colors"
        >
          Privacy Policy
        </a>
        <span>•</span>
        <a 
          href="https://www.hrc.army.mil/contact" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:underline hover:text-[#4B5320] transition-colors"
        >
          Contact Us
        </a>
      </div>
      <div>
        Powered by HRC AI Assistant
      </div>
    </div>
  );
}