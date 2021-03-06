import React from 'react';
import { connect } from "react-redux";

import {checkRns} from '../../actions/web3';
import { RNS_DOMAIN_DETAIL } from "../../constants/action-types";

import RnsDomainDetailComponent from './RnsDomainDetailComponent'

import './RnsDashboardComponent.css';

class RnsDashboardComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchValue: ''};

        this.handleChange = this.handleChange.bind(this);
        this.searchDomain = this.searchDomain.bind(this);
    }

    handleChange(event) {
        this.setState({searchValue: event.target.value});
    }

    searchDomain () {
        console.log("searchDomain click");
        this.props.checkRnsDomain(this.state.searchValue);
    }

    render() {
        let page = <div></div>
        if (this.props.pageDisplayed == RNS_DOMAIN_DETAIL) {
            page = <div>
                        <RnsDomainDetailComponent />
                    </div>
        }
        return (
            <div className="RnsDashboardComponent">
                <div>
                    <input 
                        type="text"
                        className="searchBox"
                        placeholder="search domain" 
                        onChange={this.handleChange} />
                    <button
                        className="btnSearch" onClick={this.searchDomain}>Search</button>
                </div>
                {page}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return { 
        pageDisplayed: state.rns.pageDisplayed
     };
  };

function mapDispatchToProps(dispatch) {
    return {
        checkRnsDomain: (data) => dispatch(checkRns(data))
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(RnsDashboardComponent);