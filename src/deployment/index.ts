
import { Configuration } from '../organization/types'
import { Base } from '../base'
import { Authorize, DeploymentIdResponse, CancelDeployment, Redeploy, DeploymentRequest, DeploymentResponse, SuggestedFramework, Upload } from './types'
import { v4 as uuidv4 } from 'uuid'

import FormData from 'form-data'
import fs from 'fs'

function fillFormData (dir: string, rootPath: string, formData: any): void {
  const files: string[] = fs.readdirSync(dir)
  for (const file of files) {
    const path: string = dir + '/' + file
    const filePath = rootPath + file
    if (fs.statSync(path).isDirectory()) {
      fillFormData(path, filePath + '/', formData)
    } else {
      formData.append('files', fs.createReadStream(path), {
        filepath: filePath
      })
    }
  }
}

export class Deployment extends Base {
  /**
    deploy project
   @param {DeploymentIdResponse}input
   @returns {DeploymentIdResponse}:Information about the deployment
  */
  async deploy (input: DeploymentRequest): Promise<DeploymentIdResponse> {
    return await this.postData('/v1/deployment/', input)
  }

  /**
    get deployment.
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
    return await this.postData(`/v1/deployment/${id}/authorize`, null)
  }

  /**
   * Post Request
   Cancel the deployment.
   @param {string}id: Organization Id
   @returns {Authorize}:Information about the cancelation of deployment.
  */
  async cancelDeployment (id: string): Promise<CancelDeployment> {
    return await this.postData(`/v1/deployment/${id}/cancel`, null)
  }

  /**
   * Post Request
   Redeploy the deployment.
   @param {string}id: Organization Id
   @returns {Redeploy}: Information about the redeployment.
  */
  async redeployDeployment (id: string): Promise<Redeploy> {
    return await this.postData(`/v1/deployment/${id}/redeploy`, null)
  }

  // async frameworkSuggestion (owner: string, branch: string, reqo: string, providerName: string, root: string): Promise<SuggestedFramework> {

  // }

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
  async defaultDeployment (orgId: string, gitUrl: string, repoName: string, protocol: string, provider: string, branch: string, buildCommand: string, installCommand: string, workspace: string, publishDir: string, framework: string, nodeVersion: string): Promise<DeploymentResponse> {
    const uuidvalue: string = uuidv4()
    const orgdetails: Configuration = {
      buildCommand,
      installCommand,
      workspace,
      publishDir,
      framework,
      nodeVersion
    }
    const obj: DeploymentRequest = {
      organizationId: orgId,
      gitUrl,
      repoName,
      uniqueTopicId: uuidvalue,
      configuration: orgdetails,
      env: {},
      protocol,
      createDefaultWebhook: true,
      provider,
      branch
    }
    return await this.postData('/v1/deployment/', obj)
  }

  async suggestionFramework (owner: string, branch: string, repo: string, providerName: string, root: string): Promise<SuggestedFramework> {
    const url: string = `/v1/deployment/framework/suggestion?owner=${owner}&branch=${branch}&repo=${repo}&providerName=${providerName}&root=${root}`
    return await this.getData(url)
  }

  async upload (organizationId: string, projectName: string, protocol: string, uploadDir: string): Promise<Upload> {
    const data = new FormData()
    fillFormData(uploadDir, './', data)
    const url: string = `/v1/deployment/upload?protocol=${protocol}&organization=${organizationId}&project=${projectName}`
    return await this.postDataUpload(url, data)
  }
}
