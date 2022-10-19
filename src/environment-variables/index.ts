
import { Base } from '../base'
import { EnvVariable, PostEnvironmentRequest, PostEnvironmentResponse, PutEnvironmentResponse, ResponseDelete } from './types'

export class AddEnvironment extends Base {
  async addEnvironmentVariables (id: string, Name: string, Value: string, DeploymentEnvironment: string[]): Promise<PostEnvironmentResponse> {
    let obj2: EnvVariable
    obj2.name = Name
    obj2.value = Value
    obj2.deploymentEnvironments = DeploymentEnvironment
    let obj3: EnvVariable[]
    obj3.push(obj2)
    let obj: PostEnvironmentRequest
    obj.environmentVariables = obj3
    return await this.postData(`/v1/project/${id}/environment-variables`, obj3)
  }

  async updateEnvironmentVariable (id: string, envId: string, Name: string, Value: string, DeploymentEnvironment: string[]): Promise<PutEnvironmentResponse> {
    let obj2: EnvVariable
    obj2.name = Name
    obj2.value = Value
    obj2.deploymentEnvironments = DeploymentEnvironment
    let obj3: EnvVariable[]
    obj3.push(obj2)
    let obj: PostEnvironmentRequest
    obj.environmentVariables = obj3

    return await this.putData(`/v1/project/${id}/environment-variables/${envId}`, obj3)
  }

  async deleteEnvironmentVariable (id: string, envId: string): Promise<ResponseDelete> {
    return await this.deleteData(`/v1/project/${id}/environment-variables/${envId}`)
  }
}
