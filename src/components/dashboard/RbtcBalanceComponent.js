import React from 'react';
import { connect } from "react-redux";

import './RbtcBalanceComponent.css';

class RbtcBalanceComponent extends React.Component {

    componentDidMount() {
        
    }

    render() {
        const {balance} = this.props;
        return (
            <div className="RbtcBalanceComponent">
                <div className="balance-rbtc">
                    {balance} RBTC
                </div>
                <div className="balance-usd">
                    (0.00 USD)
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return { 
        balance: state.wallet.rbtc.balance,
     };
  };

export default connect(mapStateToProps)(RbtcBalanceComponent);