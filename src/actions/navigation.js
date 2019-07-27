import { GO_TO_WALLET, GO_TO_RNS_DASHBOARD } from "../constants/action-types";

export function goToWalet() {
    return {
        type: GO_TO_WALLET,
        payload: {}
    };
}

export function goToRnsDashboard() {
    return {
        type: GO_TO_RNS_DASHBOARD,
        payload: {}
    }
}