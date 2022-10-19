import { Base } from '../base';
import { Authorize, DeploymentIdResponse, DeploymentResponse } from './types';
export declare class Deployment extends Base {
    deployProject(orgId: string, gitUrl: string, repoName: string, uniqueTopicId: string, protocol: string, provider: string, branch: string): Promise<DeploymentResponse>;
    getDeployment(id: string): Promise<DeploymentIdResponse>;
    authorizeDeployment(id: string): Promise<Authorize>;
    cancelDeployment(id: string): Promise<Authorize>;
}
