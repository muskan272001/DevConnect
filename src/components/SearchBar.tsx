import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search developers, projects, or technologies..."
          className="w-full pl-12 pr-16 py-4 text-lg border border-gray-200 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm shadow-lg"
        />
        <button className="absolute inset-y-0 right-0 pr-4 flex items-center">
          <Filter className="h-5 w-5 text-gray-400 hover:text-teal-500 transition-colors" />
        </button>
      </div>
      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden opacity-0 invisible transform translate-y-2 transition-all duration-200">
        <div className="p-4">
          <p className="text-sm text-gray-500">Popular searches:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {['React Developer', 'UI/UX Designer', 'Full Stack', 'Mobile App'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full hover:bg-teal-100 hover:text-teal-700 cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;