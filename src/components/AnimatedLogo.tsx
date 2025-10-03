import React from 'react';
import { Code2 } from 'lucide-react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative bg-gradient-to-r from-teal-500 to-blue-600 p-3 rounded-xl transform group-hover:scale-110 transition-transform duration-300">
          <Code2 className="w-8 h-8 text-white animate-pulse" />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
          DevConnect
        </h1>
        <p className="text-sm text-gray-500 -mt-1">Connect & Build</p>
      </div>
    </div>
  );
};

export default AnimatedLogo;