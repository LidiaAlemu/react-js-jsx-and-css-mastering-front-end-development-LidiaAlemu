import React from 'react';

/**
 * Card component for displaying content in a boxed layout
 */
const Card = ({ 
  children, 
  className = '', 
  title,
  ...rest 
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow p-6 ${className}`}
      {...rest}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default Card;