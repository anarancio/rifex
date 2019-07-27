
import { UPDATE_RBTC_BALANCE } from "../constants/action-types";

const initialState = {
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