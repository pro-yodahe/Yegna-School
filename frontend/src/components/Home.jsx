import React from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';

const Home = () => {
  return (
    <div className="flex">
      {/* Dashboard */}
      <Dashboard />

      {/* Main Content */}
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          
        </div>
      </div>
    </div>
  );
};

export default Home;
