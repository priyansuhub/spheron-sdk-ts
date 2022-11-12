
import { Base } from '../base'
import { DomainDelete, DomainsGetResponse, DomainsRequest, DomainsResponse, UpdateDomainsRequest, VerifyDomainType } from './types'

export class Domain extends Base {
  /**
   * domain for the project.
   @param {string}id: Project Id
   @returns {DomainsResponse}:Get the domains of the project.
  */
  async getDomain (id: string): Promise<DomainsGetResponse> {
    return await this.getData(`/v1/project/${id}/domains`)
  }

  /**
   * domain for the project.
   @param {string}id: Project Id
   @param {string}domainId: domain Id
   @returns {DomainsResponse}:Get the domains of the project.
  */
  async getDomainByDomainId (id: string, domainId: string): Promise<DomainsResponse> {
    return await this.getData(`/v1/project/${id}/domains/${domainId}`)
  }

  /**
   * Add a new domain for the project.
   @param {string}id: Project Id
   @param {DomainsRequest}obj: Domain Request Data object input
   @returns {DomainsResponse}:Added domain.
  */
  async addDomainByProjectId (id: string, obj: DomainsRequest): Promise<DomainsResponse> {
    return await this.postData(`/v1/project/${id}/domains`, obj)
  }

  /**
   * Update the domain.
   @param {string}id: Project Id
   @param {string}domainId: Domain Id
   @param {UpdateDomainsRequest}obj: Domain Request Data object input
   @returns {DomainsResponse}:Updated domain.
  */
  async updateDomainByDomainId (id: string, domainId: string, obj: UpdateDomainsRequest): Promise<DomainsResponse> {
    return await this.patchData(`/v1/project/${id}/domains/${domainId}`, obj)
  }

  /**
   * Delete the domain.
   @param {string}id: Project Id
   @param {string}domainId: Domain Id
   @returns {DomainDelete}:Success of the deletion.
  */
  async deleteDomainByDomainId (id: string, domainId: string): Promise<DomainDelete> {
    return await this.deleteData(`/v1/project/${id}/domains/${domainId}`)
  }

  /**
   * Verify the domain.
   @param {string}id: Project Id
   @param {string}domainId: Domain Id
   @returns {VerifyDomainType}:Result of the operation.
  */
  async verifyDomainByProjectId (id: string, domainId: string): Promise<VerifyDomainType> {
    return await this.patchData(`/v1/project/${id}/domains/${domainId}/verify`, null)
  }
}
