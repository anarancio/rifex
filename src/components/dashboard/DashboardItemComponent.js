import React from 'react';

import './DashboardItemComponent.css';

class DashboardComponent extends React.Component {

    render() {
        return (
            <div className="DashboardItemComponent">                
                <div className="icon">
                    <i className={this.props.icon}></i>
                </div>
                <div className="title">
                    {this.props.title}
                </div>                
            </div>
        );
    }

}

export default DashboardComponent;