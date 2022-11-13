import { ResponseDelete } from '../environment-variables/types'
import { Base } from '../base'
import { DepEnv, DeploymentEnvGet, addDeploymentEnvResponse, updateDeploymentEnvResponse } from './types'

export class DeploymentEnvironment extends Base {
  /**
   @param {string}id: Project Id
   @returns {DeploymentEnvGet}:List of deployment environments.
  */
  async getDeploymentEnvironment (id: string): Promise<DeploymentEnvGet> {
    return await this.getData(`/v1/project/${id}/deployment-environments`)
  }

  /**
   Add new deployment environment for the project.
   @param {string}id: Project Id
   @param {string}Name: Project Id
   @param {string[]}Branches: Project Id
   @param {string}Protocol: Project Id
   @returns {addDeploymentEnvResponse}:Added deployment environment
  */
  async addDeploymentEnvironment (id: string, Name: string, Branches: string[], Protocol: string): Promise<addDeploymentEnvResponse> {
    const obj1: DepEnv = {
      name: Name,
      branches: Branches,
      protocol: Protocol
    }
    // obj1.name = Name
    // obj1.branches = Branches
    // obj1.protocol = Protocol
    return await this.postData(`/v1/project/${id}/deployment-environments`, obj1)
  }

  /**
   * Update deployment environment.
   @param {string}id: Project Id
   @param {string}Name: Project Id
   @param {string[]}Branches: Project Id
   @param {string}Protocol: Project Id
   @returns {updateDeploymentEnvResponse}:Updated deployment environment
  */
  async updateDeploymentEnvironment (id: string, envVarId: string, Name: string, Branches: string[], Protocol: string): Promise<updateDeploymentEnvResponse> {
    const obj1: DepEnv = {
      name: Name,
      branches: Branches,
      protocol: Protocol
    }
    return await this.putData(`/v1/project/${id}/deployment-environments/${envVarId}`, obj1)
  }

  /**
   * Delete deployment environment.
   @param {string}id: Project Id
   @param {string}envVarId: Environment Variable Id
   @returns {ResponseDelete}:Deleted deployment environment
  */
  async deleteDeploymentEnvironmnet (id: string, envVarId: string): Promise<ResponseDelete> {
    return await this.deleteData(`/v1/project/${id}/deployment-environments/${envVarId}`)
  }

  /**
   * activate deployment environment.
   @param {string}id: Project Id
   @param {string}envVarId: Environment Variable Id
   @returns {updateDeploymentEnvResponse}: activated deployment environment
  */
  async activateDeploymentEnvironment (id: string, envVarId: string): Promise<updateDeploymentEnvResponse> {
    return await this.patchData(`/v1/project/${id}/deployment-environments/${envVarId}/activate`, null)
  }
  /**
   * Deactivate deployment environment.
   @param {string}id: Project Id
   @param {string}envVarId: Environment Variable Id
   @returns {updateDeploymentEnvResponse}: Deactivated deployment environment
  */

  async deactivateDeploymentEnvironment (id: string, envVarId: string): Promise<updateDeploymentEnvResponse> {
    return await this.patchData(`/v1/project/${id}/deployment-environments/${envVarId}/deactivate`, null)
  }
}
