import React from 'react';
import { connect } from "react-redux";

import './RnsDomainDetailComponent.css';

class RnsDomainDetailComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let ownedBy = <div></div>
        if (this.props.owner != '') {
            if (this.props.owner != '0x0000000000000000000000000000000000000000') {
                ownedBy = <div className="domainOwner">
                            <span className="bold">Owned by:</span> <span className="small-font">{this.props.owner}</span>
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
                    {this.props.domain}
                </div>
                {ownedBy}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return { 
        domain: state.rns.domain,
        owner: state.rns.owner,
     };
  };

function mapDispatchToProps(dispatch) {
    return {
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(RnsDomainDetailComponent);