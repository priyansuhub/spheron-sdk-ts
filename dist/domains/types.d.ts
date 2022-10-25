import { ResponseDelete } from '../environment-variables/types';
export declare interface DomainsGetResponse {
    domain: Domains[];
}
export declare interface DomainsResponse {
    domain: Domains;
}
export declare interface DomainsRequest {
    link: string;
    type: string;
    deploymentEnvironments: string[];
    isLatest: boolean;
    name: string;
}
export declare interface UpdateDomainsRequest {
    link: string;
    deploymentEnvironments: string[];
    isLatest: boolean;
    name: string;
}
export declare interface VerifyDomainType {
    success: boolean;
    domain: Domains[];
}
export declare interface Domains {
    _id: string;
    name: string;
    link: string;
    isLatest: boolean;
    type: string;
    verified: boolean;
    projectId: string;
    deploymentEnvironmentIds: string[];
    version: string;
}
export declare interface DomainDelete {
    domain: ResponseDelete;
}
