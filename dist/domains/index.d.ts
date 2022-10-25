import { Base } from '../base';
import { DomainDelete, DomainsGetResponse, DomainsRequest, DomainsResponse, UpdateDomainsRequest, VerifyDomainType } from './types';
export declare class Domain extends Base {
    getDomain(id: string): Promise<DomainsGetResponse>;
    getDomainByDomainId(id: string, domainId: string): Promise<DomainsResponse>;
    addDomainByProjectId(id: string, obj: DomainsRequest): Promise<DomainsResponse>;
    updateDomainByDomainId(id: string, domainId: string, obj: UpdateDomainsRequest): Promise<DomainsResponse>;
    deleteDomainByDomainId(id: string, domainId: string): Promise<DomainDelete>;
    verifyDomainByProjectId(id: string, domainId: string): Promise<VerifyDomainType>;
}
