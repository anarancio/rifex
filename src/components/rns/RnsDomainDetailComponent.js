import React from 'react';
import { connect } from "react-redux";

import {ADDRESS_EMPTY} from '../../constants/global'

import './RnsDomainDetailComponent.css';

class RnsDomainDetailComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {domain, owner, resolver} = this.props;

        let resolverText = 'Not assigned'

        let ownedBy = <div></div>
        if (owner != '') {
            if (owner != ADDRESS_EMPTY) {
                ownedBy = <div className="domainOwner">
                            <span className="bold">Owned by:</span> <span className="small-font">{owner}</span>
                        </div>
            } else {
                ownedBy = <div className="domainAvailable">
                    This domain is available!! Make it yours!!
                </div>
            }
        }

        return (
            <div className="RnsDomainDetailComponent">
                <div className="domainName">
                    {domain}
                </div>
                {ownedBy}
                <div className="domainResolver">{resolverText}</div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return { 
        domain: state.rns.domain,
        owner: state.rns.owner,
        resolver: state.rns.resolver,
     };
  };

function mapDispatchToProps(dispatch) {
    return {
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(RnsDomainDetailComponent);