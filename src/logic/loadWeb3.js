import { createLogic } from 'redux-logic';
import { LOAD_WEB3 } from "../constants/action-types";
import Web3 from 'web3';
import {saveWeb3Provider} from "../actions/web3"

const openWeb3 = createLogic({
  type: LOAD_WEB3,
  process({getState, action}, dispatch, done) {
      //TODO move the node url to a config file
    let web3 = new Web3(Web3.givenProvider || "http://localhost:9545");
    dispatch(saveWeb3Provider(web3));
    done();

    /*
    console.log("balance!!!!");
    console.log(web3);
    let balance = -1;
    (async () => {
        balance = await web3.eth.getBalance('0xab0C430E89303ac6E0cfF41FAe778713086c8cF0'); 
        console.log(balance);
        done();
    })();
    */
    //dispatch(disconnectedFromEth());
    
}
});

export default [
    openWeb3
];