import { Base } from '../base';
import { PostEnvironmentResponse, PutEnvironmentResponse, ResponseDelete } from './types';
export declare class AddEnvironment extends Base {
    addEnvironmentVariables(id: string, Name: string, Value: string, DeploymentEnvironment: string[]): Promise<PostEnvironmentResponse>;
    updateEnvironmentVariable(id: string, envId: string, Name: string, Value: string, DeploymentEnvironment: string[]): Promise<PutEnvironmentResponse>;
    deleteEnvironmentVariable(id: string, envId: string): Promise<ResponseDelete>;
}
