import { 
    RNS_DOMAIN_RESOLVER_CHECKED, 
    RNS_DOMAIN_SET_RESOLVER, 
    RNS_DOMAIN_SET_RESOLVER_DONE, 
    RNS_DOMAIN_ADDR_RECEIVED, 
    RNS_DOMAIN_SET_ADDR,
    RNS_DOMAIN_SET_ADDR_DONE 
} from "../constants/action-types";

export const rnsDomainResolverChecked = (resolver) => ({
    type: RNS_DOMAIN_RESOLVER_CHECKED,
    resolver
});

export const rnsDomainAddrReceived = (addr) => ({
    type: RNS_DOMAIN_ADDR_RECEIVED,
    addr
});

export const rnsSetDomainResolver = (data) => ({
    type: RNS_DOMAIN_SET_RESOLVER,
    data
});

export const rnsSetAddr = (data) => ({
    type: RNS_DOMAIN_SET_ADDR,
    data
});

export const rnsSetRnsAddrDone = (addr) => ({
    type: RNS_DOMAIN_SET_ADDR_DONE,
    addr
});

export const rnsSetDomainResolverDone = (resolver) => ({
    type: RNS_DOMAIN_SET_RESOLVER_DONE,
    resolver
})