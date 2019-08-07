
import { RNS_CHECK_OWNER_RESULT } from "../constants/action-types";

const initialState = {
    domain: '',
    owner: ''
}

const rns = (state = initialState, action) => {
    //TODO we must make the state immutable
    switch (action.type) {
      case RNS_CHECK_OWNER_RESULT:
          console.log("CATCH!!!!!!")
          console.log(action)
          return {
              domain: action.domain.name,
              owner: action.domain.owner
          };
      default:
        return state
    }
  }
  
  export default rns