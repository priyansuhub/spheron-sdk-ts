
import { Base } from "../base";
import { DomainDelete, DomainsRequest, DomainsResponse, UpdateDomainsRequest, VerifyDomainType } from "./DomainType";

export class Domain extends Base{
    addDomainByProjectId(id: string, obj:DomainsRequest): Promise<DomainsResponse>{
        return this.postData(`/v1/project/${id}/domains`, obj);
    }
    updateDomainByProjectId(id: string, domainId: string,obj: UpdateDomainsRequest): Promise<DomainsResponse>{
        return this.patchData(`/v1/project/${id}/domains/${domainId}`, obj)
    }
    deleteDomainByProjectId(id: string, domainId: string): Promise<DomainDelete>{
        return this.deleteData(`/v1/project/${id}/domains/${domainId}`);
    }
    verifyDomainByProjectId(id: string, domainId: string): Promise<VerifyDomainType>{
        return this.activateDeactivate(`/v1/project/${id}/domains/${domainId}/verify`);
    }
}