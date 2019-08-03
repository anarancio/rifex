import React from 'react';
import { connect } from "react-redux";

import {RNS_DASHBOARD_PAGE} from '../../constants/pages';

import './HeaderComponent.css';

const pStyle = {
    fontSize: '15px',
    textAlign: 'center',
    color: 'blue'
};

class HeaderComponent extends React.Component {

    render() {
        const {selectedPage} = this.props;
        let logoSrc = <img className="logo" src="./rif.svg" />;
        if (selectedPage == RNS_DASHBOARD_PAGE) {
            logoSrc = <img className="logoRNS" src="./rns.png" />;
        }
        return (
            <div className="HeaderComponent">
                {logoSrc}<br />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return { 
      selectedPage: state.global.selectedPage
     };
  };

export default connect(mapStateToProps)(HeaderComponent);