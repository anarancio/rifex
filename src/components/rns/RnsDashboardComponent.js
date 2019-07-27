import React from 'react';

import './RnsDashboardComponent.css';

class RnsDashboardComponent extends React.Component {

    render() {
        return (
            <div className="RnsDashboardComponent">
                <input 
                    type="text"
                    className="searchBox"
                    placeholder="search domain" />
                <button
                    className="btnSearch">Search</button>
            </div>
        );
    }

}

export default RnsDashboardComponent;