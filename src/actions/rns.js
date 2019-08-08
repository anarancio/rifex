import { RNS_DOMAIN_RESOLVER_CHECKED } from "../constants/action-types";

export const rnsDomainResolverChecked = (resolver) => ({
    type: RNS_DOMAIN_RESOLVER_CHECKED,
    resolver
});