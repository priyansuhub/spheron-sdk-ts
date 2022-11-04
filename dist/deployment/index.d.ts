import { Base } from '../base';
import { Authorize, DeploymentIdResponse, CancelDeployment, Redeploy, DeploymentRequest, DeploymentResponse } from './types';
export declare class Deployment extends Base {
    deploy(input: DeploymentRequest): Promise<DeploymentIdResponse>;
    getDeployment(id: string): Promise<DeploymentIdResponse>;
    authorizeDeployment(id: string): Promise<Authorize>;
    cancelDeployment(id: string): Promise<CancelDeployment>;
    redeployDeployment(id: string): Promise<Redeploy>;
    defaultDeployment(orgId: string, gitUrl: string, repoName: string, protocol: string, provider: string, branch: string, buildCommand: string, installCommand: string, workspace: string, publishDir: string, framework: string, nodeVersion: string): Promise<DeploymentResponse>;
}
