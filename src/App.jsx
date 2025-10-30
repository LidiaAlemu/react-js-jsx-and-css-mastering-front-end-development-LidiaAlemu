import React from 'react';
import TaskManager from './components/TaskManager';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import ApiData from './components/ApiData';

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
              A modern task management application built with React. 
              Manage your tasks efficiently with our intuitive interface.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Features:</strong> Add tasks, mark as completed, filter tasks, 
                persistent storage, dark mode, and API integration.
              </p>
            </div>
          </Card>

          {/* Task Manager Component */}
          <Card title="Your Tasks">
            <TaskManager />
          </Card>
          
          {/* API Data Component */}
          <ApiData />
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;