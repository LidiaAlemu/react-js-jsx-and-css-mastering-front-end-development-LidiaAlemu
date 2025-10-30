import { useState } from 'react';
// import './App.css';

function App() {
  const [count, setCount] = useState(0);

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
        <div className="card">
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
              Edit <code style={{ fontFamily: 'monospace', backgroundColor: '#e5e7eb', padding: '0.25rem', borderRadius: '0.25rem' }}>src/App.jsx</code> and save to test HMR
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', margin: '1rem 0' }}>
              <button
                onClick={() => setCount(count - 1)}
                style={{ padding: '0.5rem 1rem', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}
              >
                -
              </button>
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                style={{ padding: '0.5rem 1rem', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}
              >
                +
              </button>
            </div>

            <p style={{ color: '#6b7280', marginTop: '1rem' }}>
              Basic React app is working! We'll add components next.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;