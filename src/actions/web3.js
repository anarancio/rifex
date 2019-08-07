import { SAVE_WEB3, LOAD_WEB3, GET_BALANCE_TIMER, UPDATE_RBTC_BALANCE, RNS_CHECK } from "../constants/action-types";

export const openWeb3Provider = () => ({
    type: LOAD_WEB3
});

export const saveWeb3Provider = (web3, contracts) => ({
    type: SAVE_WEB3,
    web3,
    contracts
});

export const getWalletBalance = () => ({
    type: GET_BALANCE_TIMER
});

export const updateRbtcBalance = (data) => ({
    type: UPDATE_RBTC_BALANCE,
    data
});

export const checkRns = (domain) => ({
    type: RNS_CHECK,
    domain
});