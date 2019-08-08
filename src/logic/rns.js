import { createLogic } from 'redux-logic';
import { RNS_CHECK_OWNER_RESULT } from "../constants/action-types";
import {rnsDomainResolverChecked} from "../actions/rns"

const getRnsResolver = createLogic({
    type: RNS_CHECK_OWNER_RESULT,
    process({getState, action}, dispatch, done) {
        (async () => {
            let domainHash = getState().rns.hash
            let contract = getState().web3.contracts.rns.registry;
            let resolver = await contract.methods.resolver(domainHash).call()
            
            dispatch(rnsDomainResolverChecked(resolver))
            
            done()
        })();
    }
});

export default [
    getRnsResolver
];