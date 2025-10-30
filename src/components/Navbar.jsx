import React from 'react';

/**
 * Navbar component for site navigation
 */
const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              PLP Task Manager
            </h1>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Tasks
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;