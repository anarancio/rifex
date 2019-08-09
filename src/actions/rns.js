import { RNS_DOMAIN_RESOLVER_CHECKED, RNS_DOMAIN_SET_RESOLVER, RNS_DOMAIN_SET_RESOLVER_DONE } from "../constants/action-types";

export const rnsDomainResolverChecked = (resolver) => ({
    type: RNS_DOMAIN_RESOLVER_CHECKED,
    resolver
});

export const rnsSetDomainResolver = (data) => ({
    type: RNS_DOMAIN_SET_RESOLVER,
    data
});

export const rnsSetDomainResolverDone = (resolver) => ({
    type: RNS_DOMAIN_SET_RESOLVER_DONE,
    resolver
})