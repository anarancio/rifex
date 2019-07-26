import React from 'react';
import { connect } from "react-redux";

import { DASHBOARD, WALLET } from "./constants/pages";

import './App.css';

import HeaderComponent from './components/global/HeaderComponent.js';
import DashboardComponent from './components/dashboard/DashboardComponent.js';

const App = (props) => {
  const {selectedPage} = props;

  let component = <DashboardComponent />;  

  return (
    <div className="App">
      <HeaderComponent />
      {component}
    </div>
  );
}

const mapStateToProps = state => {
  return { selectedPage: state.global.selectedPage };
};

export default connect(mapStateToProps)(App);
