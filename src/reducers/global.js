import { DASHBOARD, WALLET } from "../constants/pages";
import { GO_TO_WALLET } from "../constants/action-types";

const initialState = {
    selectedPage: DASHBOARD
}
const global = (state = initialState, action) => {
    //TODO we must make the state immutable
    switch (action.type) {
      case GO_TO_WALLET:
          state.selectedPage = WALLET;
          return state;
      default:
        return state
    }
  }
  
  export default global