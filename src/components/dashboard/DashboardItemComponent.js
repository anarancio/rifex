import React from 'react';

import './DashboardItemComponent.css';

class DashboardComponent extends React.Component {

    render() {
        return (
            <div className="DashboardItemComponent">
                {this.props.title}
                <i className={this.props.icon}></i>
            </div>
        );
    }

}

export default DashboardComponent;