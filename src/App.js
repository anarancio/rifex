import React from 'react';
import { connect } from "react-redux";

import './App.css';

import HeaderComponent from './components/global/HeaderComponent.js';
import DashboardComponent from './components/dashboard/DashboardComponent.js';

const App = (props) => {
  const {selectedPage} = props;
  return (
    <div className="App">
      <HeaderComponent />
      <div>aaa{selectedPage}</div>
      <DashboardComponent />
    </div>
  );
}

const mapStateToProps = state => {
  return { selectedPage: state.global.selectedPage };
};

export default connect(mapStateToProps)(App);
