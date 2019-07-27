import React from 'react';
import { connect } from "react-redux";

import DashboardItemComponent from './DashboardItemComponent.js';
import RbtcBalanceComponent from './RbtcBalanceComponent.js';

import { goToRnsDashboard } from '../../actions/navigation';

import './DashboardComponent.css';

class DashboardComponent extends React.Component {

    render() {
        return (
            <div className="DashboardComponent">
                <div class='row'>
                    <div class='column left'>
                        <RbtcBalanceComponent />
                    </div>
                    <div class='column right'>
                        <div className="balance-rif">
                            0.00 RIF
                        </div>
                        <div className="balance-usd">
                            (0.00 USD)
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div class='column'>
                        <DashboardItemComponent title="My Wallet" icon="fas fa-wallet" />
                        <DashboardItemComponent title="Lumino" icon="fas fa-bolt" />
                    </div>
                    <div class='column'>
                        <DashboardItemComponent title="RNS" icon="fas fa-id-card" action={this.props.goToRnsDashboard} />                        
                        <DashboardItemComponent title="Storage" icon="fas fa-database" />
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return { 
     };
  };
  
  function mapDispatchToProps(dispatch) {
    return {
        goToRnsDashboard: () => dispatch(goToRnsDashboard())
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);