
import { SAVE_WEB3 } from "../constants/action-types";

const initialState = {
    provider: null
}
const web3 = (state = initialState, action) => {
    //TODO we must make the state immutable
    switch (action.type) {
      case SAVE_WEB3:
          return {
              provider: action.web3
          };
      default:
        return state
    }
  }
  
  export default web3