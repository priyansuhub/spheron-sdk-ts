import { Base } from '../base';
import { DomainDelete, DomainsRequest, DomainsResponse, UpdateDomainsRequest, VerifyDomainType } from './types';
export declare class Domain extends Base {
    addDomainByProjectId(id: string, obj: DomainsRequest): Promise<DomainsResponse>;
    updateDomainByProjectId(id: string, domainId: string, obj: UpdateDomainsRequest): Promise<DomainsResponse>;
    deleteDomainByProjectId(id: string, domainId: string): Promise<DomainDelete>;
    verifyDomainByProjectId(id: string, domainId: string): Promise<VerifyDomainType>;
}
