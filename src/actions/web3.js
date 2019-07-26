import { SAVE_WEB3, LOAD_WEB3 } from "../constants/action-types";

export const openWeb3Provider = () => ({
    type: LOAD_WEB3
});

export const saveWeb3Provider = (web3) => ({
    type: SAVE_WEB3,
    web3
});