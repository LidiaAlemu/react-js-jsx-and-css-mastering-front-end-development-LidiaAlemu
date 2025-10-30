import React from 'react';

/**
 * Footer component with links and copyright information
 */
const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      color: 'var(--text-primary)',
      marginTop: 'auto',
      borderTop: '1px solid var(--border-color)',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
              PLP Task Manager
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              A modern task management application built with React.
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div style={{ 
          borderTop: '1px solid var(--border-color)',
          paddingTop: '1.5rem',
          textAlign: 'center'
        }}>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;