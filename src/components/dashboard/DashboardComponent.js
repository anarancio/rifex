import React from 'react';

import DashboardItemComponent from './DashboardItemComponent.js';

import './DashboardComponent.css';

class DashboardComponent extends React.Component {

    render() {
        return (
            <div className="DashboardComponent">
                <div class='row'>
                    <div class='column'>
                        <DashboardItemComponent title="My Wallet" icon="fas fa-wallet" />
                        <DashboardItemComponent title="Lumino" icon="fas fa-bolt" />
                    </div>
                    <div class='column'>
                        <DashboardItemComponent title="RNS" icon="fas fa-id-card" />                        
                        <DashboardItemComponent title="Storage" icon="fas fa-database" />
                    </div>
                </div>
            </div>
        );
    }

}

export default DashboardComponent;