import { LatestDeployment, ProjectDeploymentCount, StateRequest, StateResponse, Configuration, DeploymentEnvironments, Domains, Projects } from '../organization/types'

import { Base } from '../base'
import { ConfigurationResponse } from './types'

function getLimitDeploymentInfo (P: LatestDeployment[], lim: number): LatestDeployment[] {
  let value: LatestDeployment[]
  if (lim < P.length) {
    for (let i: number; i < lim; i++) {
      value.push(P[i])
    }
    return value
  } else {
    return P
  }
}

function getDeploymentInfoByStatus (P: LatestDeployment[], statusQuery: string): LatestDeployment[] {
  let value: LatestDeployment[]
  for (let i: number; i < value.length; i++) {
    if (P[i].status === statusQuery) {
      value.push(P[i])
    }
  }
  return value
}

function getDomainByName (P: Projects, nameP: string): Domains {
  const value: Domains[] = P.domains
  for (let i: number = 0; i < value.length; i++) {
    if (value[i].name === nameP) {
      return value[i]
    }
  }
}
// // function getDomainById(P:Projects, id: string): Domains{
// //     let value: Domains[] = P.domains;
// //     for(let i:number = 0;i<value.length;i++){
// //         if(value[i].name === nameP){
// //             return value[i];
// //         }
// //     }
// // }

export class ProjectDetails extends Base {
  /**
   @param {string}id: Project Id
   @returns {Projects}: Returns the information about the project.
  */

  async getProjectDetailsById (id: string): Promise<Projects> {
    return await this.getData(`/v1/project/${id}`)
  }

  /**
   Feature function
   @param {string}id: Project Id
   @returns {DeploymentEnvironments[]}: Returns the array of information about the Deployment Environment of the Project.
  */

  async getProjectDeploymentEnvironments (id: string): Promise<DeploymentEnvironments[]> {
    return await this.getData(`/v1/project/${id}`)
      .then((p: Projects) => p.deploymentEnvironments)
  }

  /**
   Feature function
   @param {string}id: Project Id
   @returns {Configuration}: Project Configuration Information
  */

  async getConfigurationDetailsById (id: string): Promise<Configuration> {
    return await this.getData(`/v1/project/${id}`)
      .then((p: Projects) => p.configuration)
  }
  /**
   Feature function
   @param {string}id: Project Id
   @returns {Domains[]}: Array of domain details of the project
  */

  async getAllDomainDetailsOfProject (id: string): Promise<Domains[]> {
    return await this.getData(`/v1/project/${id}`)
      .then((p: Projects) => p.domains)
  }
  /**
   Feature function
   @param {string}id: Project Id
   @param {string}name: Name of the Project
   @returns {Domains}: domain details of the project
  */

  async getDomainDetailsOfProjectByName (id: string, name: string): Promise<Domains> {
    return await this.getData(`/v1/project/${id}`)
      .then((p: Projects) => getDomainByName(p, name))
  }
}

export class DeploymentInfo extends Base {
  /**
   @Note : Interface LatestDeployment of Organization is Same as DeploymentInformation
   @param {string}id: Project Id
   @returns {LatestDeployment[]}: Returns an array of deployments for the project. Supports pagination and filtering by deployment status
  */

  async getDeploymentInfoByProjectId (id: string): Promise<LatestDeployment[]> {
    return await this.getData(`/v1/project/${id}/deployments`)
  }
  /**
   @Note : Interface LatestDeployment of Organization is Same as DeploymentInformation
   @param {string}id: Project Id
   @param {string}lim: Limit for returned Deployment information
   @returns {LatestDeployment[]}: Returns an array of deployments for the project with a limit. Supports pagination and filtering by deployment status
  */

  async getDeploymentInfoByProjectIdLimit (id: string, lim: number): Promise<LatestDeployment[]> {
    return await this.getData(`/v1/project/${id}/deployments`)
      .then((p: LatestDeployment[]) => getLimitDeploymentInfo(p, lim))
  }
  /**
   @Note : Interface LatestDeployment of Organization is Same as DeploymentInformation
   @param {string}id: Project Id
   @param {string}statusQuery: PreQueue, Queued, Pending, Canceled, Deployed, Failed, AuthorizationNeeded, Killing
   @returns {LatestDeployment[]}: Returns an array of deployments for the project with filter. Supports pagination and filtering by deployment status

  */

  async getDeploymentInfoByProjectStatus (id: string, statusQuery: string): Promise<LatestDeployment[]> {
    return await this.getData(`/v1/project/${id}/deployments`)
      .then((p: LatestDeployment[]) => getDeploymentInfoByStatus(p, statusQuery))
  }

  /**
   @param {string}id: Project Id
   @returns {ProjectDeploymentCount}: Information about the number of deployments.
  */
  async getDeploymentCount (id: string): Promise<ProjectDeploymentCount> {
    return await this.getData(`/v1/project/${id}/deployments/count`)
  }
}

export class State extends Base {
  /**
   Patch Data
   Archives or activates a projects.
   @param {string}id: Project Id
   @param {string}uState: Available States ARCHIVED
   @returns {StateResponse}: Message about the changed state.
  */
  async updateState (id: string, uState: string): Promise<StateResponse> {
    const value: StateRequest = {
      state: uState
    }
    return await this.patchData(`/v1/project/${id}/state`, value)
  }
}

export class ConfigurationProject extends Base {
  /**
   Put Data
   Updates the configuration of the project.
   @param {string}id: Project Id
   @param {Configuration}value: Object Input for changing configuration
   @returns {ConfigurationResponse}: Updated configuration.
  */
  async putConfiguration (id: string, value: Configuration): Promise<ConfigurationResponse> {
    return await this.putData(`/v1/project/${id}/configuration`, value)
  }
}
