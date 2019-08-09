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

        this.state = {
            editingAddr: false
        };

        this.onChange = this.onChange.bind(this)
        this.getResolverOption = this.getResolverOption.bind(this)
    }

    onChange(evt) {
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
        const {domain, owner, resolver, addr} = this.props;  

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
        let addrText = "No resolver assigned";

        if (resolver != '') {
            resolverCmp = <div className="domainResolver">
                                <Select 
                                    value={this.getResolverOption(resolver)}
                                    options={options}
                                    className='resolver-select'
                                    classNamePrefix="resolver-select"
                                    placeholder="No Resolver Asigned"
                                    onChange={(val) => {this.onChange(val)}} />
                            </div>
            if (resolver != ADDRESS_EMPTY) {
                if(addr != '') {
                    addrText = addr
                } else {
                    addrText = "No address assigned in resolver"
                }
            }
        }

        let addrCmp = <div></div>
        if(this.state.editingAddr) {
            addrCmp = <div className="domainAddr">
                            Addr: <input 
                                        type="text"
                                        className="txAddr"
                                        placeholder="addr" />
                        </div>
        } else {
            let txtMsg = ''
            if ((resolver == '') || (resolver == ADDRESS_EMPTY)) {
                txtMsg = 'No resolver assigned'
            } else {
                txtMsg = addr
            }
            addrCmp = <div className="domainAddr">
                Addr: {txtMsg}
            </div>
        }

        return (
            <div className="RnsDomainDetailComponent">
                <div className="domainName">
                    {domain}
                </div>
                {ownedBy}
                {resolverCmp}
                {addrCmp}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return { 
        domain: state.rns.domain,
        hash: state.rns.hash,
        owner: state.rns.owner,
        resolver: state.rns.resolver,
        addr: state.rns.addr,
     };
  };

function mapDispatchToProps(dispatch) {
    return {
        setDomainResolver: (data) => dispatch(rnsSetDomainResolver(data)),
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(RnsDomainDetailComponent);