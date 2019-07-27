import React from 'react';
import { connect } from "react-redux";

import './App.css';

import HeaderComponent from './components/global/HeaderComponent.js';
import DashboardComponent from './components/dashboard/DashboardComponent.js';

import {openWeb3Provider, getWalletBalance} from './actions/web3';

class App extends React.Component {

  componentDidMount() {
    this.props.openWeb3();
    this.rbtcLastUpdate = 0;
    setTimeout(() => {
      this.props.walletBalance()
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.lastRbtcBalanceUpdate != this.rbtcLastUpdate) {
      setTimeout(() => {
        this.props.walletBalance()
      }, 5000);
      this.rbtcLastUpdate = prevProps.lastRbtcBalanceUpdate;
    }
  }

  render() {
    const {selectedPage, web3provider} = this.props;
    let component = <DashboardComponent />;  

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
    web3provider: state.web3.provider,
    lastRbtcBalanceUpdate: state.wallet.rbtc.lastUpdate
   };
};

function mapDispatchToProps(dispatch) {
  return {
    openWeb3: () => dispatch(openWeb3Provider()),
    walletBalance: () => dispatch(getWalletBalance())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
