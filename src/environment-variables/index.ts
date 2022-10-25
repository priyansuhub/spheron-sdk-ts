
import { Base } from '../base'
import { EnvVariable, PostEnvironmentRequest, PostEnvironmentResponse, PutEnvironmentResponse, ResponseDelete } from './types'

export class AddEnvironment extends Base {
  /**
   Post Data
   Add new environment variables for the project.
   @param {string}id: Project Id
   @param {string}Name: Name of environment Variable
   @param {string}Value: Value of environment Variable
   @param {string}DeploymentEnvironment: Array of deployment Environments
   @returns {PostEnvironmentResponse}:Added environment variables.
  */
  async addEnvironmentVariables (id: string, Name: string, Value: string, DeploymentEnvironment: string[]): Promise<PostEnvironmentResponse> {
    const obj2: EnvVariable = {
      name: Name,
      value: Value,
      deploymentEnvironments: DeploymentEnvironment
    }
    const obj3: EnvVariable[] = [
      obj2
    ]
    const obj: PostEnvironmentRequest = {
      environmentVariables: obj3
    }
    return await this.postData(`/v1/project/${id}/environment-variables`, obj)
  }

  /**
   Put Data
   Update environment variables for the project.
   @param {string}id: Project Id
   @param {string}Name: Name of environment Variable
   @param {string}Value: Value of environment Variable
   @param {string}DeploymentEnvironment: Array of deployment Environments
   @returns {PutEnvironmentResponse}: Updated environment variable.
  */
  async updateEnvironmentVariable (id: string, envId: string, Name: string, Value: string, DeploymentEnvironment: string[]): Promise<PutEnvironmentResponse> {
    const obj2: EnvVariable = {
      name: Name,
      value: Value,
      deploymentEnvironments: DeploymentEnvironment
    }
    const obj3: EnvVariable[] = [
      obj2
    ]
    const obj: PostEnvironmentRequest = {
      environmentVariables: obj3
    }

    return await this.putData(`/v1/project/${id}/environment-variables/${envId}`, obj)
  }

  /**
   Delete the environment variable of the project.
   @param {string}id: Project Id
   @param {string}envId: Environment Id
   @returns {ResponseDelete}: Result of the delete operation.
  */
  async deleteEnvironmentVariable (id: string, envId: string): Promise<ResponseDelete> {
    return await this.deleteData(`/v1/project/${id}/environment-variables/${envId}`)
  }
}
