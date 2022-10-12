import { Configuration, DeploymentEnvironments, Domains, Projects } from "../organization/projectTypes";
import { Base } from "../base";
export declare class ProjectDetails extends Base {
    getProjectDetailsById(id: string): Promise<Projects>;
    getProjectDeploymentEnvironments(id: string): Promise<DeploymentEnvironments[]>;
    getConfigurationDetailsById(id: string): Promise<Configuration>;
    getAllDomainDetailsOfProject(id: string): Promise<Domains[]>;
    getDomainDetailsOfProjectByName(id: string, name: string): Promise<Domains>;
}
