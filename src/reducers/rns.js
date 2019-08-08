
import { RNS_CHECK_OWNER_RESULT, RNS_DOMAIN_RESOLVER_CHECKED } from "../constants/action-types";

const initialState = {
    domain: '',
    owner: '',
    hash: '',
    resolver: '',
}

const rns = (state = initialState, action) => {
    //TODO we must make the state immutable
    switch (action.type) {
      case RNS_CHECK_OWNER_RESULT:
          return {
              domain: action.domain.name,
              owner: action.domain.owner,
              hash: action.domain.hash,
              resolver: state.resolver,
          };
      case RNS_DOMAIN_RESOLVER_CHECKED:
          return {
                domain: state.domain,
                owner: state.owner,
                hash: state.hash,
                resolver: action.resolver,
          }
      default:
        return state
    }
  }
  
  export default rns