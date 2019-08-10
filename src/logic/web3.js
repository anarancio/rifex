import { createLogic } from 'redux-logic';
import { LOAD_WEB3,  GET_BALANCE_TIMER, RNS_CHECK } from "../constants/action-types";
import Web3 from 'web3';
import namehash from 'eth-ens-namehash';

import {saveWeb3Provider, updateRbtcBalance, checkRnsOwnerResult} from "../actions/web3"
import rnsRegistryABI from "../abis/RNS";
import rnsPublicResolverABI from "../abis/PublicResolver";

const openWeb3 = createLogic({
  type: LOAD_WEB3,
  process({getState, action}, dispatch, done) {
      //TODO move the node url to a config file
    let web3 = new Web3(Web3.givenProvider || "http://localhost:9545");
    let rnsRegistryContract = new web3.eth.Contract(rnsRegistryABI, '0xb2687b0AABD310145424E6134561e8c08E3efC99');
    let rnsPublicResolverContract = new web3.eth.Contract(rnsPublicResolverABI, '0x0545aFD4b36E7b8dBF7Bbf0Afc72bD5a362100C4');
    dispatch(saveWeb3Provider(web3, {
        rns: {
            registry: rnsRegistryContract,
            publicResolver: rnsPublicResolverContract
        }
    }));
    done();
}
});

const getBalance = createLogic({
    type: GET_BALANCE_TIMER,
    process({getState, action}, dispatch, done) {
        (async () => {
            let web3 = getState().web3.provider;
            let theBalance = await web3.eth.getBalance('0xab0C430E89303ac6E0cfF41FAe778713086c8cF0'); 
            dispatch(updateRbtcBalance({
                balance: theBalance,
                lastUpdate: new Date().valueOf()
            }));
            done();
        })();
    }
});

const checkRNS = createLogic({
    type: RNS_CHECK,
    process({getState, action}, dispatch, done) {
        (async () => {
            let domainHash = namehash.hash(action.domain)
            let contract = getState().web3.contracts.rns.registry;
            let domainOwner = await contract.methods.owner(domainHash).call()
            dispatch(checkRnsOwnerResult({
                name: action.domain,
                owner: domainOwner,
                hash: domainHash,
            }))
            done()
        })();
    }
});

export default [
    openWeb3,
    getBalance,
    checkRNS
];