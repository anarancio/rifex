import React from 'react';
import { connect } from "react-redux";

import './RbtcBalanceComponent.css';

class RbtcBalanceComponent extends React.Component {

    componentDidMount() {
        
    }

    render() {
        const {balance, web3} = this.props;
        let balanceInRBTC = 0;
        if(web3) {
            balanceInRBTC = web3.utils.fromWei(balance.toString(), 'ether');
        }

        return (
            <div className="RbtcBalanceComponent">
                <div className="balance-rbtc">
                    {balanceInRBTC} RBTC
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
        web3: state.web3.provider,
     };
  };

export default connect(mapStateToProps)(RbtcBalanceComponent);