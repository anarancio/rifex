
import { UPDATE_RBTC_BALANCE } from "../constants/action-types";

const initialState = {
    address: '0xEBb615A2191eAde8539890fE20495855a29883D6',
    rbtc: {
        balance: 0,
        lastUpdate: new Date().valueOf()
    }
}
const wallet = (state = initialState, action) => {
    //TODO we must make the state immutable
    switch (action.type) {
      case UPDATE_RBTC_BALANCE:
          return {
              address: state.address,
              rbtc: {
                balance: action.data.balance,
                lastUpdate: action.data.lastUpdate
              }
          };
      default:
        return state
    }
  }
  
  export default wallet