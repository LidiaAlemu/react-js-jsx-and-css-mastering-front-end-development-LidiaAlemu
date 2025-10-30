import React from 'react';
import TaskManager from './components/TaskManager';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar Component */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Card */}
          <Card title="Welcome to PLP Task Manager" className="mb-8">
            <p className="text-gray-600 mb-4">
              A modern task management application built with React and Tailwind CSS. 
              Manage your tasks efficiently with our intuitive interface.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Features:</strong> Add tasks, mark as completed, filter tasks, and persistent storage.
              </p>
            </div>
          </Card>

          {/* Task Manager Component */}
          <Card title="Your Tasks">
            <TaskManager />
          </Card>
          
          {/* API Section */}
          <Card title="API Integration" className="mt-8">
            <div className="text-center py-8">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                API Data Integration
              </h3>
              <p className="text-gray-500">
                External API integration will be implemented in the next phase.
                This will include fetching data from JSONPlaceholder and displaying
                it with search and pagination features.
              </p>
            </div>
          </Card>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;