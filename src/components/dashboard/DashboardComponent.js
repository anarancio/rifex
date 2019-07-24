import React from 'react';

import './DashboardComponent.css';

class DashboardComponent extends React.Component {

    render() {
        return (
            <div className="DashboardComponent">
                <div class='row'>
                    <div class='column'>
                        Column 1
                    </div>
                    <div class='column'>
                        Column 2
                    </div>
                </div>
            </div>
        );
    }

}

export default DashboardComponent;