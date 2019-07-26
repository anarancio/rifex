import React from 'react';
import { connect } from "react-redux";

import { DASHBOARD, WALLET } from "./constants/pages";

import './App.css';

import HeaderComponent from './components/global/HeaderComponent.js';
import DashboardComponent from './components/dashboard/DashboardComponent.js';

import {openWeb3Provider} from './actions/web3';

class App extends React.Component {

  componentDidMount() {
    this.props.openWeb3();
  }

  render() {
    const {selectedPage, web3provider} = this.props;
    let component = <DashboardComponent />;  
    console.log("app.js");
    console.log(web3provider);

    return (
      <div className="App">
        <HeaderComponent />
        {component}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    selectedPage: state.global.selectedPage,
    web3provider: state.web3.provider
   };
};

function mapDispatchToProps(dispatch) {
  return {
    openWeb3: () => dispatch(openWeb3Provider())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
