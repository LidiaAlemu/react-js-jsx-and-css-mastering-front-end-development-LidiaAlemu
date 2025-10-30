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
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '1.5rem',
        border: '1px solid var(--border-color)',
        transition: 'all 0.3s ease'
      }}
      {...rest}
    >
      {title && (
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: '600', 
          marginBottom: '1rem',
          color: 'var(--text-primary)'
        }}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default Card;