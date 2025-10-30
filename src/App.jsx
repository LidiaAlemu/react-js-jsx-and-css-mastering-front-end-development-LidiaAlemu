import { useState } from 'react';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="main-content">
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>
            PLP Task Manager
          </h1>
        </div>
      </header>

      <main className="main-content">
        {/* Task Manager Component */}
        <div className="card">
          <TaskManager />
        </div>
        
        {/* API Section - Coming Next */}
        <div className="card">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            API Data
          </h2>
          <p style={{ color: '#6b7280' }}>
            API integration will be implemented in the next step
          </p>
        </div>
      </main>

      <footer style={{ backgroundColor: 'white', padding: '1.5rem 0', marginTop: 'auto', boxShadow: '0 -1px 3px rgba(0,0,0,0.1)' }}>
        <div className="main-content">
          <p style={{ textAlign: 'center', color: '#6b7280', margin: 0 }}>
            © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;