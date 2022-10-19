import { LatestDeployment, ProjectDeploymentCount, StateRequest, StateResponse, Configuration, DeploymentEnvironments, Domains, Projects } from '../organization/types'

import { Base } from '../base'

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

export class ConfigurationProject extends Base {
  async putConfiguration (id: string, value: Configuration): Promise<Configuration> {
    return await this.putData(`/v1/project/${id}/configuration`, value)
  }
}

export class DeploymentInfo extends Base {
  async getDeploymentInfoByProjectId (id: string): Promise<LatestDeployment[]> {
    return await this.invoke(`/v1/project/${id}/deployments`)
  }

  async getDeploymentInfoByProjectIdLimit (id: string, lim: number): Promise<LatestDeployment[]> {
    return await this.invoke(`/v1/project/${id}/deployments`)
      .then((p: LatestDeployment[]) => getLimitDeploymentInfo(p, lim))
  }

  async getDeploymentInfoByProjectStatus (id: string, statusQuery: string): Promise<LatestDeployment[]> {
    return await this.invoke(`/v1/project/${id}/deployments`)
      .then((p: LatestDeployment[]) => getDeploymentInfoByStatus(p, statusQuery))
  }

  async getDeploymentCount (id: string): Promise<ProjectDeploymentCount> {
    return await this.invoke(`/v1/project/${id}/deployments/count`)
  }
}
export class State extends Base {
  async updateState (id: string, uState: string): Promise<StateResponse> {
    const value: StateRequest = {
      state: uState
    }
    return await this.patchData(`/v1/project/${id}/state`, value)
  }
}

export class ProjectDetails extends Base {
  async getProjectDetailsById (id: string): Promise<Projects> {
    return await this.invoke(`/v1/project/${id}`)
  }

  async getProjectDeploymentEnvironments (id: string): Promise<DeploymentEnvironments[]> {
    return await this.invoke(`/v1/project/${id}`)
      .then((p: Projects) => p.deploymentEnvironments)
  }

  async getConfigurationDetailsById (id: string): Promise<Configuration> {
    return await this.invoke(`/v1/project/${id}`)
      .then((p: Projects) => p.configuration)
  }

  async getAllDomainDetailsOfProject (id: string): Promise<Domains[]> {
    return await this.invoke(`/v1/project/${id}`)
      .then((p: Projects) => p.domains)
  }

  async getDomainDetailsOfProjectByName (id: string, name: string): Promise<Domains> {
    return await this.invoke(`/v1/project/${id}`)
      .then((p: Projects) => getDomainByName(p, name))
  }
}
