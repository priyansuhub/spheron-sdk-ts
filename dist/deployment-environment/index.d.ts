import { ResponseDelete } from '../environment-variables/types';
import { Base } from '../base';
import { DeploymentEnvGet, addDeploymentEnvResponse, updateDeploymentEnvResponse } from './types';
export declare class DeploymentEnvironment extends Base {
    getDeploymentEnvironment(id: string): Promise<DeploymentEnvGet>;
    addDeploymentEnvironment(id: string, Name: string, Branches: string[], Protocol: string): Promise<addDeploymentEnvResponse>;
    updateDeploymentEnvironment(id: string, envVarId: string, Name: string, Branches: string[], Protocol: string): Promise<updateDeploymentEnvResponse>;
    deleteDeploymentEnvironmnet(id: string, envVarId: string): Promise<ResponseDelete>;
    activateDeploymentEnvironment(id: string, envVarId: string): Promise<updateDeploymentEnvResponse>;
    deactivateDeploymentEnvironment(id: string, envVarId: string): Promise<updateDeploymentEnvResponse>;
}
