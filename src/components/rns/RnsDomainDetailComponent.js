import React from 'react';
import { connect } from "react-redux";
import Select from 'react-select'


import {ADDRESS_EMPTY, RNS_RESOLVER, RNS_MULTI_CRYPTO} from '../../constants/global'
import {rnsSetDomainResolver} from '../../actions/rns'

import './RnsDomainDetailComponent.css';
import { throwStatement } from '@babel/types';

const defaultOption = {
    value: ADDRESS_EMPTY,
    label: 'Resolver not assigned'
}

const options = [
    { value: RNS_RESOLVER, label: 'Public Resolver' },
    { value: RNS_MULTI_CRYPTO, label: 'Multi Crypto Resolver' }
  ]

class RnsDomainDetailComponent extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
        this.getResolverOption = this.getResolverOption.bind(this)
    }

    onChange(evt) {
        console.log("onchange!!!")
        console.log(evt)
        this.props.setDomainResolver({
            domain: this.props.domain,
            hash: this.props.hash,
            address: evt.value
        })
    }

    getResolverOption(resolver) {
        if ((resolver !== '') && (resolver !== ADDRESS_EMPTY)) {
            let optionsList = options
            for (let i = 0; i < optionsList.length ; i++) {
                let opt = optionsList[i]
                if (opt.value == resolver) {
                    return opt
                }
            }
        }
        return defaultOption
    }

    render() {
        const {domain, owner, resolver} = this.props;     
        console.log("RENDER RNS")  
        console.log(resolver)

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

        let resolverCmp = <div></div>
        if (resolver !== '') {
            resolverCmp = <div className="domainResolver">
                                <Select 
                                    value={this.getResolverOption(resolver)}
                                    options={options}
                                    className='resolver-select'
                                    classNamePrefix="resolver-select"
                                    placeholder="No Resolver Asigned"
                                    onChange={(val) => {this.onChange(val)}} />
                            </div>
        }

        return (
            <div className="RnsDomainDetailComponent">
                <div className="domainName">
                    {domain}
                </div>
                {ownedBy}
                {resolverCmp}
            </div>
        );
    }

}

const mapStateToProps = state => {
    console.log("NEW STATE IN RNS RESOLVER!")
    console.log(state.rns.address)
    return { 
        domain: state.rns.domain,
        hash: state.rns.hash,
        owner: state.rns.owner,
        resolver: state.rns.resolver,
     };
  };

function mapDispatchToProps(dispatch) {
    return {
        setDomainResolver: (data) => dispatch(rnsSetDomainResolver(data)),
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(RnsDomainDetailComponent);