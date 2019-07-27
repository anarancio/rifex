import { SAVE_WEB3, LOAD_WEB3, GET_BALANCE_TIMER, UPDATE_RBTC_BALANCE } from "../constants/action-types";

export const openWeb3Provider = () => ({
    type: LOAD_WEB3
});

export const saveWeb3Provider = (web3) => ({
    type: SAVE_WEB3,
    web3
});

export const getWalletBalance = () => ({
    type: GET_BALANCE_TIMER
});

export const updateRbtcBalance = (data) => ({
    type: UPDATE_RBTC_BALANCE,
    data
});