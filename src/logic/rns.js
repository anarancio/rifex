import { createLogic } from 'redux-logic';
import { 
    RNS_CHECK_OWNER_RESULT, 
    RNS_DOMAIN_SET_RESOLVER, 
    RNS_DOMAIN_SET_ADDR 
} from "../constants/action-types";
import {
    rnsDomainResolverChecked, 
    rnsSetDomainResolverDone, 
    rnsDomainAddrReceived, 
    rnsSetRnsAddrDone
} from "../actions/rns"

const getRnsResolver = createLogic({
    type: RNS_CHECK_OWNER_RESULT,
    process({getState, action}, dispatch, done) {
        (async () => {
            let domainHash = getState().rns.hash
            let contract = getState().web3.contracts.rns.registry;
            let resolver = await contract.methods.resolver(domainHash).call()
            
            dispatch(rnsDomainResolverChecked(resolver))

            contract = getState().web3.contracts.rns.publicResolver
            let addr = await contract.methods.addr(domainHash).call()
            
            dispatch(rnsDomainAddrReceived(addr))

            done()
        })();
    }
});

const setRnsResolver = createLogic({
    type: RNS_DOMAIN_SET_RESOLVER,
    process({getState, action}, dispatch, done) {
        (async () => {
            let contract = getState().web3.contracts.rns.registry;

            //TODO move the send transaction to a common function/module who manage the wallet
            let result = await contract.methods.setResolver(action.data.hash, action.data.address).send({from: '0xEBb615A2191eAde8539890fE20495855a29883D6'})

            dispatch(rnsSetDomainResolverDone(action.data.address))
            done()
        })();
    }
});

const setRnsAddr = createLogic({
    type: RNS_DOMAIN_SET_ADDR,
    process({getState, action}, dispatch, done) {
        (async () => {
            console.log("setRNS Addr")
            console.log(action.data.address)
            console.log(action.data.hash)
            let contract = getState().web3.contracts.rns.publicResolver;

            //TODO move the send transaction to a common function/module who manage the wallet
            let result = await contract.methods.setAddr(action.data.hash, action.data.address).send({from: '0xEBb615A2191eAde8539890fE20495855a29883D6'})

            dispatch(rnsSetRnsAddrDone(action.data.address))
            done()
        })();
    }
});

export default [
    getRnsResolver,
    setRnsResolver,
    setRnsAddr
];