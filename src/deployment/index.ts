import { Base } from '../base'
import { Authorize, DeploymentIdResponse, DeploymentRequest, DeploymentResponse } from './types'

export class Deployment extends Base {
  async deployProject (orgId: string, gitUrl: string, repoName: string, uniqueTopicId: string, protocol: string, provider: string, branch: string): Promise<DeploymentResponse> {
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

  async getDeployment (id: string): Promise<DeploymentIdResponse> {
    return await this.getData(`/v1/deployment/${id}`)
  }

  async authorizeDeployment (id: string): Promise<Authorize> {
    return await this.postDataEmpty(`/v1/deployment/${id}/authorize`)
  }

  async cancelDeployment (id: string): Promise<Authorize> {
    return await this.postDataEmpty(`/v1/deployment/${id}/authorize`)
  }
}
