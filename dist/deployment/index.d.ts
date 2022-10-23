import { Base } from '../base';
import { Authorize, DeploymentIdResponse, DeploymentResponse, CancelDeployment, Redeploy } from './types';
export declare class Deployment extends Base {
    defaultDeployment(orgId: string, gitUrl: string, repoName: string, uniqueTopicId: string, protocol: string, provider: string, branch: string): Promise<DeploymentResponse>;
    getDeployment(id: string): Promise<DeploymentIdResponse>;
    authorizeDeployment(id: string): Promise<Authorize>;
    cancelDeployment(id: string): Promise<CancelDeployment>;
    redeployDeployment(id: string): Promise<Redeploy>;
}
