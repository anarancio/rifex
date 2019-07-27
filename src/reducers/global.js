import { DASHBOARD, WALLET, RNS_DASHBOARD_PAGE } from "../constants/pages";
import { GO_TO_WALLET, GO_TO_RNS_DASHBOARD } from "../constants/action-types";

const initialState = {
    selectedPage: DASHBOARD
}
const global = (state = initialState, action) => {
    //TODO we must make the state immutable
    switch (action.type) {
      case GO_TO_WALLET:
          state.selectedPage = WALLET;
          return state;
      case GO_TO_RNS_DASHBOARD:
          return {
            selectedPage: RNS_DASHBOARD_PAGE,
          }
      default:
        return state
    }
  }
  
  export default global