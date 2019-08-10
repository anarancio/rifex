import React from 'react';
import { connect } from "react-redux";
import Select from 'react-select'


import {ADDRESS_EMPTY, RNS_RESOLVER, RNS_MULTI_CRYPTO} from '../../constants/global'
import {rnsSetDomainResolver, rnsSetAddr} from '../../actions/rns'

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
            editingAddr: false,
            addrValue: ''
        };

        this.onChange = this.onChange.bind(this)
        this.getResolverOption = this.getResolverOption.bind(this)
        this.onAddrClick = this.onAddrClick.bind(this)
        this.cancelEdit = this.cancelEdit.bind(this)
        this.saveAddr = this.saveAddr.bind(this)
        this.handleAddrInputChange = this.handleAddrInputChange.bind(this)
    }

    handleAddrInputChange(event) {
        this.setState({addrValue: event.target.value});
    }

    onAddrClick() {
        this.setState({editingAddr: true})
    }

    cancelEdit() {
        this.setState({
            editingAddr: false,
            addrValue: ''
        })
    }

    saveAddr() {
        this.setState({
            editingAddr: false, 
            addrValue: ''
        })
        
        this.props.setAddr({
            domain: this.props.domain,
            hash: this.props.hash,
            address: this.state.addrValue
        })
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

        if (owner != ADDRESS_EMPTY && resolver != '') {
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
                    addrText = addr.substring(0, 18) + '...'
                } else {
                    addrText = "No address assigned in resolver"
                }
            }
        }

        let addrCmp = <div></div>
        let actionsCmps = <div></div>
        if(owner != ADDRESS_EMPTY) {
            if(this.state.editingAddr) {
                addrCmp = <div className="domainAddr">
                                <span className="bold">Addr:</span> <input 
                                            type="text"
                                            className="txAddr" 
                                            onChange={this.handleAddrInputChange} /><i class="fas fa-check-circle" onClick={this.saveAddr}></i><i class="fas fa-window-close" onClick={this.cancelEdit}></i>
                            </div>
            } else {
                let txtMsg = ''
                if ((resolver == '') || (resolver == ADDRESS_EMPTY)) {
                    txtMsg = <span>{'No resolver assigned'}</span>
                    addrCmp = <div className="domainAddr">
                                    <span className="bold">Addr:</span> {txtMsg}
                                </div>
                } else {
                    txtMsg = addr.substring(0, 18) + '...'
                    addrCmp = <div className="domainAddr">
                                    <span className="bold">Addr:</span> {txtMsg} <i class="fas fa-pen-square" onClick={this.onAddrClick}></i>
                                </div>
                }
                
            }

            actionsCmps = <div>
                            <div className="button-group">
                                <span>
                                    <button className="btn">
                                        <i class="fas fa-bacon"></i> 
                                        Create Lumino Channel
                                    </button>
                                </span>
                                <span>
                                    <button className="btn">
                                        <i class="fas fa-handshake"></i> 
                                        Transfer Domain
                                    </button>
                                </span>
                            </div>
                            <button className="pay-btn">
                                <i class="fas fa-bolt"></i> 
                                Make Lumino Payment
                            </button>
                        </div>
        }

        return (
            <div className="RnsDomainDetailComponent">
                <div className="domainName">
                    {domain} <i class="far fa-heart"></i> <i class="fas fa-bolt"></i>
                </div>
                {ownedBy}
                {resolverCmp}
                {addrCmp}

                {actionsCmps}
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
        setAddr: (data) => dispatch(rnsSetAddr(data)),
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(RnsDomainDetailComponent);