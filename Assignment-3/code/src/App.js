import React from 'react';
import './App.css';
import Employee from "./Employee";



function App({employee}) {
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <Employee employee={employee} />
    
    </div>
  );
}

export default App;
