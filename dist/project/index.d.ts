import { LatestDeployment, ProjectDeploymentCount, StateResponse, Configuration, DeploymentEnvironments, Domains, Projects } from '../organization/types';
import { Base } from '../base';
import { ConfigurationResponse } from './types';
export declare class ProjectDetails extends Base {
    getProjectDetailsById(id: string): Promise<Projects>;
    getProjectDeploymentEnvironments(id: string): Promise<DeploymentEnvironments[]>;
    getConfigurationDetailsById(id: string): Promise<Configuration>;
    getAllDomainDetailsOfProject(id: string): Promise<Domains[]>;
    getDomainDetailsOfProjectByName(id: string, name: string): Promise<Domains>;
}
export declare class DeploymentInfo extends Base {
    getDeploymentInfoByProjectId(id: string): Promise<LatestDeployment[]>;
    getDeploymentInfoByProjectIdLimit(id: string, lim: number): Promise<LatestDeployment[]>;
    getDeploymentInfoByProjectStatus(id: string, statusQuery: string): Promise<LatestDeployment[]>;
    getDeploymentCount(id: string): Promise<ProjectDeploymentCount>;
}
export declare class State extends Base {
    updateState(id: string, uState: string): Promise<StateResponse>;
}
export declare class ConfigurationProject extends Base {
    putConfiguration(id: string, value: Configuration): Promise<ConfigurationResponse>;
}
