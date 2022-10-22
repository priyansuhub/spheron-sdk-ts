import { Base } from '../base'
import { Authorize, DeploymentIdResponse, DeploymentRequest, DeploymentResponse, CancelDeployment, Redeploy } from './types'

export class Deployment extends Base {
  /**
   * Start a deployment.
   @param {string}orgId: Organization Id
   @param {string}gitUrl: git url
   @param {string}repoName: repo name
   @param {string}uniqueTopicId: provide a unique topic id
   @param {string}protocol: Protocol name arweave ipfs etc
   @param {string}provider: Provider Name
   @param {string}branch: Branch name
   @returns {DeploymentResponse}:Information about the start of deployment.
  */
  async defaultDeployment (orgId: string, gitUrl: string, repoName: string, uniqueTopicId: string, protocol: string, provider: string, branch: string): Promise<DeploymentResponse> {
    let obj: DeploymentRequest
    obj.organizationId = orgId
    obj.gitUrl = gitUrl
    obj.repoName = repoName
    obj.uniqueTopicId = uniqueTopicId
    obj.configuration.buildCommand = 'string'
    obj.configuration.installCommand = 'string'
    obj.configuration.workspace = 'string'
    obj.configuration.publishDir = 'string'
    obj.configuration.framework = 'static'
    obj.configuration.nodeVersion = 'V_12'
    obj.env = {}
    obj.protocol = protocol
    obj.createDefaultWebhook = true
    obj.provider = provider
    obj.branch = branch
    return await this.postData('/v1/deployment/', obj)
  }

  /**
   Authorize the deployment.
   @param {string}id: Organization Id
   @returns {DeploymentIdResponse}:Information about the deployment
  */
  async getDeployment (id: string): Promise<DeploymentIdResponse> {
    return await this.getData(`/v1/deployment/${id}`)
  }
  /**
   * Post Request
   Authorize the deployment.
   @param {string}id: Organization Id
   @returns {Authorize}:Information about the deployment
  */

  async authorizeDeployment (id: string): Promise<Authorize> {
    return await this.postDataEmpty(`/v1/deployment/${id}/authorize`)
  }

  /**
   * Post Request
   Cancel the deployment.
   @param {string}id: Organization Id
   @returns {Authorize}:Information about the cancelation of deployment.
  */
  async cancelDeployment (id: string): Promise<CancelDeployment> {
    return await this.postDataEmpty(`/v1/deployment/${id}/cancel`)
  }

  /**
   * Post Request
   Redeploy the deployment.
   @param {string}id: Organization Id
   @returns {Redeploy}: Information about the redeployment.
  */
  async redeployDeployment (id: string): Promise<Redeploy> {
    return await this.postDataEmpty(`/v1/deployment/${id}/redeploy`)
  }

  // async frameworkSuggestion (owner: string, branch: string, reqo: string, providerName: string, root: string): Promise<SuggestedFramework> {

  // }
}
