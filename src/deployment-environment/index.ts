import { ResponseDelete } from '../environment-variables/types'
import { Base } from '../base'
import { DepEnv, DeploymentEnvGet, addDeploymentEnvResponse, updateDeploymentEnvResponse } from './types'

export class DeploymentEnvironment extends Base {
  async getDeploymentEnvironment (id: string): Promise<DeploymentEnvGet> {
    return await this.getData(`/v1/project/${id}/deployment-environments`)
  }

  async addDeploymentEnvironment (id: string, Name: string, Branches: string[], Protocol: string): Promise<addDeploymentEnvResponse> {
    let obj1: DepEnv
    obj1.name = Name
    obj1.branches = Branches
    obj1.protocol = Protocol
    return await this.postData(`/v1/project/${id}/deployment-environments`, obj1)
  }

  async updateDeploymentEnvironmnet (id: string, envVarId: string, Name: string, Branches: string[], Protocol: string): Promise<updateDeploymentEnvResponse> {
    let obj1: DepEnv
    obj1.name = Name
    obj1.branches = Branches
    obj1.protocol = Protocol
    return await this.putData(`/v1/project/${id}/deployment-environments/${envVarId}`, obj1)
  }

  async deleteDeploymentEnvironmnet (id: string, envVarId: string): Promise<ResponseDelete> {
    return await this.deleteData(`/v1/project/${id}/deployment-environments/${envVarId}`)
  }

  async activateDeploymentEnvironment (id: string, envVarId: string): Promise<updateDeploymentEnvResponse> {
    return await this.patchDataEmpty(`/v1/project/${id}/deployment-environments/${envVarId}/activate`)
  }

  async deactivateDeploymentEnvironment (id: string, envVarId: string): Promise<updateDeploymentEnvResponse> {
    return await this.patchDataEmpty(`/v1/project/${id}/deployment-environments/${envVarId}/deactivate`)
  }
}
