import { LatestDeployment, ProjectDeploymentCount } from "../organization/projectTypes";
import { Base } from "../base";
export declare class DeploymentInfo extends Base {
    getDeploymentInfoByProjectId(id: string): Promise<LatestDeployment[]>;
    getDeploymentInfoByProjectIdLimit(id: string, lim: number): Promise<LatestDeployment[]>;
    getDeploymentInfoByProjectStatus(id: string, statusQuery: string): Promise<LatestDeployment[]>;
    getDeploymentCount(id: string): Promise<ProjectDeploymentCount>;
}
