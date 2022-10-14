import { ResponseDelete } from "../EnvironmentVariable/EnvType";

export declare type DomainsResponse={
    domain: Domains;
}

export declare type DomainsRequest={
    link:string;
    type:string;
    deploymentEnvironments: string[];
    isLatest: boolean;
    name:string;
}
export declare type UpdateDomainsRequest={
    link:string;
    deploymentEnvironments: string[];
    isLatest: boolean;
    name:string;
}
export declare type VerifyDomainType={
    success: boolean;
    domain: Domains[];
}
export declare type Domains={
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
export declare type DomainDelete={
    domain:ResponseDelete;
}