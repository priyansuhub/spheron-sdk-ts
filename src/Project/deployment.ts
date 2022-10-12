import { LatestDeployment, ProjectDeploymentCount } from "../organization/projectTypes";
import { Base } from "../base";
import axios from 'axios';

function getLimitDeploymentInfo(P:LatestDeployment[], lim: number): LatestDeployment[]{
    let value: LatestDeployment[];
    if(lim < P.length){
        for(let i: number;i<lim; i++){
            value.push(P[i]);
        } 
        return value;
    }else{
        return P;
    }
   
}

function getDeploymentInfoByStatus(P:LatestDeployment[], statusQuery: string): LatestDeployment[]{
    let value: LatestDeployment[];
    for(let i: number; i< value.length; i++){
        if(P[i].status === statusQuery){
            value.push(P[i])
        }
    }
    return value;
}


export class DeploymentInfo extends Base{

    getDeploymentInfoByProjectId(id: string): Promise<LatestDeployment[]>{
        return this.invoke(`/v1/project/${id}/deployments`)
    }
    getDeploymentInfoByProjectIdLimit(id: string, lim: number): Promise<LatestDeployment[]>{
        return this.invoke(`/v1/project/${id}/deployments`)
        .then((p: LatestDeployment[])=> getLimitDeploymentInfo(p, lim))
    }
    getDeploymentInfoByProjectStatus(id:string, statusQuery: string): Promise<LatestDeployment[]>{
        return this.invoke(`/v1/project/${id}/deployments`)
        .then((p: LatestDeployment[])=> getDeploymentInfoByStatus(p , statusQuery))
    }
    getDeploymentCount(id:string): Promise<ProjectDeploymentCount>{
        return  this.invoke(`/v1/project/${id}/deployments/count`)
    }
    
}