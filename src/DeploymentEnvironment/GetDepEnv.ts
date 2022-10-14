import { ResponseDelete } from "../EnvironmentVariable/EnvType";
import { Base } from "../base";
import { DepEnv, DeploymentEnvGet, addDeploymentEnvResponse, updateDeploymentEnvResponse } from "./DepEnvTypes";

export class DeploymentEnvironment extends Base{
    getDeploymentEnvironment(id: string): Promise<DeploymentEnvGet>{
        return this.getData(`/v1/project/${id}/deployment-environments`)
    }
    addDeploymentEnvironment(id: string, Name: string, Branches: string[],Protocol: string): Promise<addDeploymentEnvResponse>{
        let obj1:DepEnv;
        obj1.name = Name;
        obj1.branches =Branches;
        obj1.protocol = Protocol;
        return this.postData(`/v1/project/${id}/deployment-environments`,obj1);
    }
    updateDeploymentEnvironmnet(id: string, envVarId: string,Name: string, Branches: string[],Protocol: string): Promise<updateDeploymentEnvResponse>{
        let obj1:DepEnv;
        obj1.name = Name;
        obj1.branches =Branches;
        obj1.protocol = Protocol;
        return this.putData(`/v1/project/${id}/deployment-environments/${envVarId}`, obj1);
    }
    deleteDeploymentEnvironmnet(id: string, envVarId: string): Promise<ResponseDelete>{
        return this.deleteData(`/v1/project/${id}/deployment-environments/${envVarId}`)
    }
    activateDeploymentEnvironment(id: string, envVarId:string): Promise<updateDeploymentEnvResponse>{
        return this.activateDeactivate(`/v1/project/${id}/deployment-environments/${envVarId}/activate`)
    }
    deactivateDeploymentEnvironment(id: string, envVarId:string): Promise<updateDeploymentEnvResponse>{
        return this.activateDeactivate(`/v1/project/${id}/deployment-environments/${envVarId}/deactivate`)
    }
} 