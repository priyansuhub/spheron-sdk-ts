
import { Base } from '../base'
import { DomainDelete, DomainsRequest, DomainsResponse, UpdateDomainsRequest, VerifyDomainType } from './types'

export class Domain extends Base {
  /**
   * Add a new domain for the project.
   @param {string}id: Project Id
   @param {DomainsRequest}obj: Domain Request Data object input
   @returns {DomainsResponse}:Added domain.
  */
  async addDomainByProjectId (id: string, obj: DomainsRequest): Promise<DomainsResponse> {
    return await this.postData(`/v1/project/${id}/domains`, obj)
  }

  async updateDomainByProjectId (id: string, domainId: string, obj: UpdateDomainsRequest): Promise<DomainsResponse> {
    return await this.patchData(`/v1/project/${id}/domains/${domainId}`, obj)
  }

  async deleteDomainByProjectId (id: string, domainId: string): Promise<DomainDelete> {
    return await this.deleteData(`/v1/project/${id}/domains/${domainId}`)
  }

  async verifyDomainByProjectId (id: string, domainId: string): Promise<VerifyDomainType> {
    return await this.patchDataEmpty(`/v1/project/${id}/domains/${domainId}/verify`)
  }
}
