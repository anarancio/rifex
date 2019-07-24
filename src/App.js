import React from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderComponent from './components/global/HeaderComponent.js';
import DashboardComponent from './components/dashboard/DashboardComponent.js';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <DashboardComponent />
    </div>
  );
}

export default App;
