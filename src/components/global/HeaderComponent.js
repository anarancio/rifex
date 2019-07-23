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
                <h1 style={pStyle}>TEST______!!!</h1> 
            </div>
        );
    }

}

export default HeaderComponent;