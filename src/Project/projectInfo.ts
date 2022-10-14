import { Configuration, DeploymentEnvironments, Domains, Projects } from "../Organization/projectTypes";
import { Base } from "../base";

//https://www.youtube.com/watch?v=b73vzZzsJo4
function getDomainByName(P:Projects, nameP: string): Domains{
    let value: Domains[] = P.domains;
    for(let i:number = 0;i<value.length;i++){  
        if(value[i].name === nameP){
            return value[i];
        }
    }
}
// function getDomainById(P:Projects, id: string): Domains{
//     let value: Domains[] = P.domains;
//     for(let i:number = 0;i<value.length;i++){  
//         if(value[i].name === nameP){
//             return value[i];
//         }
//     }
// }

export class ProjectDetails extends Base{
    getProjectDetailsById(id: string): Promise<Projects>{
        return this.invoke(`/v1/project/${id}`)
    }
    getProjectDeploymentEnvironments(id: string): Promise<DeploymentEnvironments[]>{
        return this.invoke(`/v1/project/${id}`)
        .then((p:Projects)=> p.deploymentEnvironments)
    }  
    getConfigurationDetailsById(id: string): Promise<Configuration>{
        return this.invoke(`/v1/project/${id}`)
        .then((p:Projects)=>p.configuration)
    }
    getAllDomainDetailsOfProject(id: string): Promise<Domains[]>{
        return this.invoke(`/v1/project/${id}`)
        .then((p:Projects)=>p.domains)
    }
    getDomainDetailsOfProjectByName(id: string, name: string): Promise<Domains>{
        return this.invoke(`/v1/project/${id}`)
        .then((p:Projects)=>getDomainByName(p, name))
    }
}