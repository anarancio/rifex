
import { 
    RNS_CHECK_OWNER_RESULT, 
    RNS_DOMAIN_RESOLVER_CHECKED, 
    RNS_DOMAIN_SET_RESOLVER_DONE,
    RNS_DASHBOARD,
    RNS_DOMAIN_DETAIL,
    RNS_DOMAIN_ADDR_RECEIVED } from "../constants/action-types";

const initialState = {
    pageDisplayed: RNS_DASHBOARD,
    domain: '',
    owner: '',
    hash: '',
    resolver: '',
    addr: '',
}

const rns = (state = initialState, action) => {
    //TODO we must make the state immutable
    switch (action.type) {
      case RNS_CHECK_OWNER_RESULT:
          return {
              pageDisplayed: RNS_DOMAIN_DETAIL,
              domain: action.domain.name,
              owner: action.domain.owner,
              hash: action.domain.hash,
              resolver: state.resolver,
              addr: state.addr,
          };
      case RNS_DOMAIN_RESOLVER_CHECKED:
          return {
              pageDisplayed: state.pageDisplayed,
                domain: state.domain,
                owner: state.owner,
                hash: state.hash,
                resolver: action.resolver,
                addr: state.addr,
          }
      case RNS_DOMAIN_SET_RESOLVER_DONE:
          return {
            pageDisplayed: state.pageDisplayed,
            domain: state.domain,
            owner: state.owner,
            hash: state.hash,
            resolver: action.resolver,
            addr: state.addr,
          }
      case RNS_DOMAIN_ADDR_RECEIVED:
        return {
            pageDisplayed: state.pageDisplayed,
            domain: state.domain,
            owner: state.owner,
            hash: state.hash,
            resolver: state.resolver,
            addr: action.addr,
            }
      default:
        return state
    }
  }
  
  export default rns