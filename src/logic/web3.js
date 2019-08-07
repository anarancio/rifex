import { createLogic } from 'redux-logic';
import { LOAD_WEB3,  GET_BALANCE_TIMER, RNS_CHECK } from "../constants/action-types";
import Web3 from 'web3';
import {saveWeb3Provider, updateRbtcBalance} from "../actions/web3"
import rnsRegistryABI from "../abis/RNS";

const openWeb3 = createLogic({
  type: LOAD_WEB3,
  process({getState, action}, dispatch, done) {
      //TODO move the node url to a config file
    let web3 = new Web3(Web3.givenProvider || "http://localhost:9545");
    let rnsRegistryContract = new web3.eth.Contract(rnsRegistryABI, '0xb2687b0AABD310145424E6134561e8c08E3efC99');
    dispatch(saveWeb3Provider(web3, {
        rns: {
            registry: rnsRegistryContract
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
        console.log(action)
    }
});

export default [
    openWeb3,
    getBalance,
    checkRNS
];