import React from 'react';

import './HeaderComponent.css';

const pStyle = {
    fontSize: '15px',
    textAlign: 'center',
    color: 'blue'
};

class HeaderComponent extends React.Component {

    render() {
        return (
            <div className="HeaderComponent">
                <img className="logo" src="./rif.svg" /><br />
            </div>
        );
    }

}

export default HeaderComponent;