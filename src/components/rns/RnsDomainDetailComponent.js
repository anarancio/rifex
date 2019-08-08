import React from 'react';
import { connect } from "react-redux";
import Select from 'react-select'


import {ADDRESS_EMPTY, RNS_RESOLVER, RNS_MULTI_CRYPTO} from '../../constants/global'

import './RnsDomainDetailComponent.css';

const options = [
    { value: RNS_RESOLVER, label: 'Public Resolver' },
    { value: RNS_MULTI_CRYPTO, label: 'Multi Crypto Resolver' }
  ]

class RnsDomainDetailComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {domain, owner, resolver} = this.props;       

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

        let resolverText = 'Not assigned'
        if (resolver != '') {
            if (resolver != ADDRESS_EMPTY) {
                resolverText = resolver;
            }
        }

        return (
            <div className="RnsDomainDetailComponent">
                <div className="domainName">
                    {domain}
                </div>
                {ownedBy}
                <div className="domainResolver">
                    <Select 
                        label="No Resolver Asigned"
                        value={resolverText}
                        options={options}
                        className='resolver-select'
                        classNamePrefix="resolver-select"
                        placeholder="No Resolver Asigned" />
                </div>
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