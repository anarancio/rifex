import React from 'react';

import './DashboardItemComponent.css';

class DashboardComponent extends React.Component {

    constructor(props) {
        super(props);
        this.executeAction = this.executeAction.bind(this)
    }

    executeAction() {
        this.props.action();
    }

    render() {
        return (
            <div className="DashboardItemComponent" onClick={this.executeAction}>                
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